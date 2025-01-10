import React, { useEffect, useRef, useState } from 'react';

function toKorChars(input: string): string[] {
  const cCho = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
    'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
    'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
  ];
  // const cJung = [
  //   'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
  //   'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
  //   'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ',
  // ];
  const cJong = [
    '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
    'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
    'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
    'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
  ];

  const chars: string[] = [];
  for (let i = 0; i < input.length; i++) {
    const cCode = input.charCodeAt(i);

    if (cCode === 32) {
      chars.push(' ');
      continue;
    }
   
    if (cCode < 0xac00 || cCode > 0xd7a3) {
      chars.push(input.charAt(i));
      continue;
    }

    const code = cCode - 0xac00;
    const jong = code % 28;
    const jung = ((code - jong) / 28) % 21;
    const cho = (((code - jong) / 28) - jung) / 21;
   
    chars.push(cCho[cho]);
    chars.push(String.fromCharCode(0xac00 + (cho * 588) + (jung * 28)));
   
    if (cJong[jong] !== '') {
      chars.push(String.fromCharCode(0xac00 + (cho * 588) + (jung * 28) + jong));
    }
  }
  return chars;
}

const TypingEffect: React.FC = () => {
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');

  const line1 = '사용자가 진정으로 필요로 하는 서비스';
  const line2 = '를 개발하고 싶은 프론트엔드 개발자 신승미입니다.';
 
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
          }, 100);
        }, 400);
      }
    }, 100);
   
    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <div className="h-[10vh] mx-1 mt-10 mb-5 sm:mt-16 sm:mb-14 flex flex-col items-center justify-center text-center font-serif">
      <p className="pb-3 text-xl sm:text-3xl" style={{ color: "#FFD700", margin: 0 }}>
        {typedText1}
      </p>
      <p className="text-l sm:text-2xl" style={{ margin: 0 }}>
        {typedText2}
      </p>
    </div>
  );
};

export default TypingEffect;