export type Highlight = { text: string; color: string };
export type LinkData = { text: string; href: string };

export interface StaticHighlightProps {
  text: string;
  highlights?: Highlight[];
  links?: LinkData[];
}

export interface TypingEffectProps {
  text: string;
  highlights?: Highlight[];
  links?: LinkData[];
  onComplete?: () => void;
  typingSpeed?: number;
}

export interface ParagraphsTypingEffectProps {
  paragraphs: string[];
  highlights?: Highlight[];
  links?: LinkData[];
  onComplete?: () => void;
}

export interface ContentInfo {
  id: number;
  paragraphs: string[];
  highlights?: { text: string; color: string }[];
  links?: { text: string; href: string }[];
}

export const contentsData: ContentInfo[] = [
  {
    id: 0,
    paragraphs: [
      "사용자의 경험과 피드백을 중요하게 생각하며",
      "이를 반영해 모두가 만족하는 웹을 개발하고 싶습니다.",
    ],
    highlights: [{ text: "사용자의 경험과 피드백", color: "#ffdf00" }],
  },
  {
    id: 1,
    paragraphs: [
      "학생회부터 팀 프로젝트, 인턴까지 다양한 상황에서",
      "여러 사람들과 일을 수행하며 성공적인 결과를 도출한 경험이 있어",
      "협업에 자신 있습니다.",
    ],
    highlights: [
      { text: "여러 사람들과 일을 수행하며 성공적인 결과를 도출한 경험", color: "#ffdf00" },
    ],
  },
  {
    id: 2,
    paragraphs: [
      "인턴 당시, 사용자 편의성을 해결하여",
      "작업 효율 40% 증가와 약 150만 원을 절감한 경험이 있습니다.",
    ],
    highlights: [{ text: "작업 효율 40% 증가와 약 150만 원을 절감", color: "#ffdf00" }],
  },
  {
    id: 3,
    paragraphs: [
      "지식을 습득하고 이해하는 과정을 기록으로 남겨",
      "성장하기 위해 꾸준히 블로그에 기록하고 있습니다.",
      "현재 다양한 주제에 대해 200+개 작성하였습니다.",
    ],
    highlights: [{ text: "200+", color: "#ffdf00" }],
    links: [{ text: "블로그", href: "https://mi-dairy.tistory.com/" }],
  },
];