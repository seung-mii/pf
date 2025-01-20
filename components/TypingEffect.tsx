import React, { useEffect, useRef, useState } from 'react';
import { toKorChars } from '@/utils/toKorChars'; 

const TypingEffect: React.FC = () => {
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');

  const line1 = '저는 이런 개발자입니다.';
  const line2 = '#필요ﾠ #삶의변화ﾠ #UXﾠ #성능ﾠ #반응형ﾠ #다양한협업ﾠ #수상';
 
  const typingArr1 = useRef<string[][]>([]);
  const typingArr2 = useRef<string[][]>([]);
 
  const i1 = useRef(0);
  const j1 = useRef(0);
  const tempText1 = useRef('');
  const i2 = useRef(0);
  const j2 = useRef(0);
  const tempText2 = useRef('');

  useEffect(() => {
    const splitted1 = line1.split('').map(char => toKorChars(char));
    const splitted2 = line2.split('').map(char => toKorChars(char));
    typingArr1.current = splitted1;
    typingArr2.current = splitted2;
   
    const timer1 = setInterval(() => {
      if (i1.current < typingArr1.current.length) {
        const currentArray = typingArr1.current[i1.current];
        setTypedText1(tempText1.current + currentArray[j1.current]);

        j1.current += 1;
       
        if (j1.current === currentArray.length) {
          tempText1.current += currentArray[j1.current - 1];
          i1.current += 1;
          j1.current = 0;
        }
      } else {
        clearInterval(timer1);

        setTimeout(() => {
          const timer2 = setInterval(() => {
            if (i2.current < typingArr2.current.length) {
              const currentArray = typingArr2.current[i2.current];
              setTypedText2(tempText2.current + currentArray[j2.current]);

              j2.current += 1;
              if (j2.current === currentArray.length) {
                tempText2.current += currentArray[j2.current - 1];
                i2.current += 1;
                j2.current = 0;
              }
            } else {
              clearInterval(timer2);
            }
          }, 50);
        }, 200);
      }
    }, 50);
   
    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <div className="h-[10vh] mx-1 mt-12 mb-8 sm:mt-12 sm:mb-10 flex flex-col items-center justify-center text-center font-myung">
      <p className="pb-3 text-xl sm:text-3xl text-fontColor">
        {typedText1}
      </p>
      <p className="text-md sm:text-xl text-point italic">
        {typedText2}
      </p>
    </div>
  );
};

export default TypingEffect;