export function toKorChars(input: string): string[] {
  const cCho = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
    'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
    'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
  ];
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