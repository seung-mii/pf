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
  id: number;
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
      "교통약자를 위한 저상버스 정보 시스템과 코로나로 인해 증가한 배달비 부담을 줄이기 위한 어플을",
      "개발하여 수상한 경험이 있습니다.",
    ],
    highlights: [{ text: "교통약자", color: "#FFD700" }, { text: "배달비 부담", color: "#FFD700" }],
  },
  {
    id: 1,
    paragraphs: [
      "인턴 근무 당시, 사용자와 직접 소통하며 UX와 편의성을 개선한 신규 툴을 개발하여",
      "작업 효율을 40% 향상시키고 월 150만 원의 비용을 절감한 경험이 있습니다.",
    ],
    highlights: [{ text: "작업 효율을 40% 향상시키고 월 150만 원의 비용을 절감", color: "#FFD700" }],
  },
  {
    id: 2,
    paragraphs: [
      "성능 최적화에 관심이 있으며 Lazy Loading과 React.memo 등을 활용하여 성능을 개선한 경험이 있습니다.",
      "모바일, 태블릿, 데스크톱 등 다양한 디바이스에서 최적화된 반응형 웹을 개발한 경험이 있습니다.",
    ],
    highlights: [{ text: "성능 최적화", color: "#FFD700" }, { text: "반응형 웹", color: "#FFD700" }],
  },
  {
    id: 3,
    paragraphs: [
      "C-P 패턴을 적용하여 구조를 설계하고",
      "data와 hooks를 분리하여 재사용성과 유지보수를 고려한 코드를 작성해왔습니다.",
    ],
    highlights: [{ text: "재사용성과 유지보수", color: "#FFD700" }],
  },
];