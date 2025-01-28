import React, { useEffect, useRef, useState } from 'react';
import { toKorChars } from '@/utils/toKorChars'; 

const TypingEffect: React.FC = () => {
  const [typedText1, setTypedText1] = useState('');

  const line1 = '변화를 만드는 개발자 신승미입니다.';
  const typingArr1 = useRef<string[][]>([]);
  const i1 = useRef(0);
  const j1 = useRef(0);
  const tempText1 = useRef('');

  useEffect(() => {
    const splitted1 = line1.split('').map(char => toKorChars(char));
    typingArr1.current = splitted1;
   
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
      }
    }, 75);
   
    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <div className="my-8 sm:mt-5 sm:mb-11 flex flex-col items-center justify-center text-center font-light font-myung">
      <p className="text-xl sm:text-3xl text-fontColor">
        {typedText1}
      </p>
    </div>
  );
};

export default TypingEffect;