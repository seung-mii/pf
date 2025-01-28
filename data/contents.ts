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
  subject: string[];
  paragraphs: string[];
  highlights?: Highlight[];
  links?: LinkData[];
  onComplete?: () => void;
}

export interface ContentInfo {
  id: number;
  subject: string[];
  paragraphs: string[];
  highlights?: { text: string; color: string }[];
  links?: { text: string; href: string }[];
}

export const contentsData: ContentInfo[] = [
  {
    id: 0,
    subject: ["Why?", "왜 개발자가 되고 싶은가"],
    paragraphs: [
      "개발이란, 새로운 것을 만들어 사람들이 더 편리하게 생활할 수 있도록 돕는 일이라고 생각합니다.",
      "이런 면에서 개발자는 필요로 하는 사람들에게 도움을 주는 직업이라 생각하며, 저 또한 사람들이 진정으로 필요로 하는 서비스를 만들고 싶어 개발자를 꿈꾸게 되었습니다.",
      "단순한 편리함을 넘어, 사용자에게 의미 있는 가치를 제공하고 삶의 변화를 주는 서비스를 개발하고 싶습니다.",
    ],
    highlights: [{ text: "진정으로 필요로 하는 서비스", color: "#FFD700" }, { text: "사용자에게 의미 있는 가치를 제공하고 삶의 변화를 주는 서비스", color: "#FFD700" }],
  },
  {
    id: 1,
    subject: ["What kind of?", "어떤 걸 추구하는 개발자인가"],
    paragraphs: [
      "아이폰이 성공한 가장 큰 이유는 홈 버튼의 직관적인 조작과 멀티터치 디스플레이를 통한 UX, 즉 사용자 경험의 혁신이었습니다.",
      "이처럼 사용자 경험은 서비스 이용의 핵심이라 생각하며, 저는 기능 구현 외에도 성능과 접근성 등을 고려해 더 나은 사용자 경험을 제공하는 것이 목표입니다.",
      "좋은 UX는 오류 없는 사용 흐름과 빠른 반응 속도처럼 개발자가 직접적으로 관여하는 부분에서도 결정된다고 생각합니다.",
      "이러한 부분을 고민하고, 해결책을 찾아가며 성장하는 개발자가 되고 싶습니다.",
    ],
    highlights: [{ text: "UX, 즉 사용자 경험", color: "#FFD700" }, { text: "기능 구현 외에도 성능과 접근성 등을 고려", color: "#FFD700" }, { text: "고민하고, 해결책을 찾아가며 성장하는 개발자", color: "#FFD700" }],
  },
  {
    id: 2,
    subject: ["How?", "어떻게 노력했나"],
    paragraphs: [
      "Lazy Loading과 React Hooks를 활용하여 성능을 개선하고, 모바일부터 데스크톱까지 최적화된 반응형 웹을 개발한 경험이 있습니다.",
      "C-P 패턴을 적용하여 구조를 설계하고, data와 hook을 분리하여 재사용성과 유지보수를 고려한 코드를 작성해왔습니다.",
      "지식을 습득하는 과정을 블로그에 기록하고 있으며 다양한 주제에 대해 이전 블로그와 합치면 400+개 정도 작성하였습니다.",
    ],
    highlights: [{ text: "성능을 개선", color: "#FFD700" }, { text: "반응형", color: "#FFD700" }, { text: "재사용성과 유지보수", color: "#FFD700" }, { text: "400+", color: "#FFD700" }],
    links: [{ text: "블로그에", href: "https://mi-dairy.tistory.com/"}, { text: "이전 블로그", href: "https://velog.io/@ro_sie/posts"}],
  },
  {
    id: 3,
    subject: ["How well?", "얼마나 협업을 잘하나"],
    paragraphs: [
      "과학생회 홍보국장으로서 학생들과 협력하여 다양한 활동을 기획/진행한 결과, 학생회 지원율을 1.5배 향상시켰습니다.",
      "위클리 미팅을 통해 진행 상황을 계획 및 점검하며, 발생한 이슈를 함께 공유하면서 팀 프로젝트를 진행했습니다.",
      "인턴을 하면서 라벨러, 백엔드 개발자 등 다양한 직군과 협업하며 성공적인 결과를 도출한 경험이 있습니다.",
    ],
    highlights: [{ text: "학생회 지원율을 1.5배 향상", color: "#FFD700" }, { text: "위클리 미팅", color: "#FFD700" }, { text: "다양한 직군과 협업", color: "#FFD700" }],
  },
  {
    id: 4,
    subject: ["What?", "그 결과는"],
    paragraphs: [
      "교통약자를 위한 저상버스 정보 시스템과 증가하는 배달비 부담을 줄이기 위한 애플리케이션을 개발하여 수상한 경험이 있습니다.",
      "인턴 근무 당시, UX와 편의성을 개선한 신규 툴을 개발하여 작업 효율을 40% 향상시키고 월 150만 원의 비용을 절감한 경험이 있습니다."
    ],
    highlights: [{ text: "교통약자", color: "#FFD700" }, { text: "배달비 부담", color: "#FFD700" }, { text: "작업 효율을 40% 향상", color: "#FFD700" }, { text: "월 150만 원의 비용을 절감", color: "#FFD700" }],
  },
  {
    id: 5,
    subject: ["Which?", "어떤 기술 스택을 사용할 줄 아나"],
    paragraphs: [
      "HTML, CSS, JavaScript, TypeScript",
      "React, Next.js, Redux, Recoil, Tailwind CSS, styled-components",
      "Figma",
    ],
  },
];