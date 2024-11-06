export interface CareerInfo {
  category: string;
  title: string;
  details: string[];   
  date: string;
}

export const careersData: CareerInfo[] = [
  {
    category: "CAREER",
    title: "스누아이랩 SW 개발팀 [인턴]",
    details: [
      "• 자사 웹앱의 이슈 약 56% 해결",
      "• 자사 웹앱 불편점을 개선하여 설계한 UI/UX가 실제 제품 수정 방향으로 채택",
      "• Labeling Tool UI/UX 설계 & 개발",
      "• i18n을 통한 다국어 지원",
    ],
    date: "2023.09 ~ 2023.12",
  },
  {
    category: "EDUCATION",
    title: `국립금오공과대학교\n컴퓨터공학과 졸업`,
    details: [
      "학생회 홍보국 3년 연임",
      "• 학교 행사/소식을 대자보로 꾸준히 게시",
      "• 소통 창구 운영으로 의견을 반영해 학생회실 개방",
      "• 학생회 지원율 전년 대비 1.5배 증가",
    ],
    date: "2020.03 ~ 2024.02",
  },
  {
    category: "EDUCATION",
    title: "Webkit 640",
    details: [
      "웹 개발 실무인재 양성과정 (640시간)",
      "• 프론트 & 백엔드 이론 교육",
      "• 개인 & 팀 프로젝트 진행 (멘토링 포함)",
      "• JavaScript, React, SpringBoot, MongoDB 등",
    ],
    date: "2023.01 ~ 2023.05",
  },
  {
    category: "CERTIFICATE",
    title: "정보처리기사",
    details: ["한국산업인력공단"],
    date: "2023.09.01",
  },
];