import { StaticImageData } from "next/image";
import Html from "../public/img/logo/html.webp";
import Css from "../public/img/logo/css.png";
import Javascript from "../public/img/logo/javascript.png";
import Typescript from "../public/img/logo/typescript.webp";
import ReactLogo from "../public/img/logo/react.png";
import Nextjs from "../public/img/logo/nextjs.webp";
import ReduxLogo from "../public/img/logo/redux.webp";
import RecoilLogo from "../public/img/logo/recoil.webp";
import Tailwindcss from "../public/img/logo/tailwindcss.webp";
import Styledcomponent from "../public/img/logo/styledcomponent.webp";
// import Nodejs from "../public/img/logo/nodejs.png";
// import Firebase from "../public/img/logo/firebase.png";
// import Mysql from "../public/img/logo/mysql.webp";
// import Mongodb from "../public/img/logo/mongodb.webp";
import Figma from "../public/img/logo/figma.webp";
import Postman from "../public/img/logo/postman.png";

interface SkillInfo {
  name: string;
  logo: StaticImageData;
  description: string[];
}

export const skillsData: { [key: string]: SkillInfo[] } = {
  Language: [
    {
      name: "HTML",
      logo: Html,
      description: [
        "웹 표준과 접근성을 고려한 마크업을 작성할 수 있습니다.",
        "검색 엔진 최적화(SEO)를 위한 적절한 시멘틱 태그와 구조를 설계할 수 있습니다.",
        "Canvas 및 SVG를 사용하여 간단한 그래픽과 애니메이션을 구현한 경험이 있습니다.",
      ],
    },
    {
      name: "CSS",
      logo: Css,
      description: [
        "스타일 관련 라이브러리 없이 CSS만으로 원하는 스타일을 구현할 수 있습니다.",
        "레이아웃을 커스텀 디자인하고 반응형 웹을 구현할 수 있습니다.",
        "CSS 변수와 SCSS를 사용하여 재사용 가능한 스타일을 작성할 수 있습니다.",
        "Keyframes와 Transition을 활용하여 CSS 애니메이션을 적용할 수 있습니다.",
      ],
    },
    {
      name: "JavaScript",
      logo: Javascript,
      description: [
        "Vanilla JS로만 작동되는 웹을 구현할 수 있습니다.",
        "ES6+ 이상의 JavaScript를 사용할 수 있습니다.",
        "비동기 프로그래밍을 활용하여 효율적인 데이터 처리를 구현할 수 있습니다.",
        "모듈 패턴을 사용하여 코드의 재사용성과 유지보수성을 높였습니다.",
      ],
    },
    {
      name: "TypeScript",
      logo: Typescript,
      description: [
        "타입 안정성을 보장하며 유지보수가 쉬운 코드를 작성할 수 있으며 버그를 사전에 방지할 수 있습니다.",
        "인터페이스와 제네릭을 활용한 유연한 코드 구조 설계 경험이 있습니다.",
      ],
    },
  ],
  Frontend: [
    {
      name: "React",
      logo: ReactLogo,
      description: [
        "재사용 가능한 컴포넌트 기반 설계 및 개발을 할 수 있습니다.",
        "React Hooks를 활용한 상태 관리 경험이 있습니다.",
        "컴포넌트 라이프사이클과 상태 관리를 깊이 이해하고 활용할 수 있습니다.",
        "Suspense를 활용하여 동적 컴포넌트를 로드하며 성능을 최적화한 경험이 있습니다.",
      ],
    },
    {
      name: "Next.js",
      logo: Nextjs,
      description: [
        "SSR 및 정적 사이트 생성을 구현할 수 있습니다.",
        "예약된 파일 이름과 동적 라우팅을 활용할 수 있습니다.",
        "이미지에 대해 Lazy Loading로 성능 최적화를 구현한 경험이 있습니다.",
      ],
    },
    {
      name: "Redux",
      logo: ReduxLogo,
      description: [
        "애플리케이션 상태를 중앙에서 관리하고 디버깅을 용이하게 할 수 있습니다.",
        "Redux Toolkit을 사용하여 복잡한 상태 관리를 간소화한 경험이 있습니다.",
      ],
    },
    {
      name: "Recoil",
      logo: RecoilLogo,
      description: [
        "Recoil을 활용하여 간편하게 글로벌 상태 관리를 구현할 수 있습니다.",
        "Atom과 Selector를 사용하여 상태의 의존성을 효과적으로 관리할 수 있습니다.",
      ],
    },
    {
      name: "Tailwind CSS",
      logo: Tailwindcss,
      description: [
        "유틸리티 클래스 기반으로 효율적이고 반응형 스타일을 작성할 수 있습니다.",
        "프로젝트 디자인 시스템을 config 파일을 통해 효과적으로 관리한 경험이 있습니다.",
      ],
    },
    {
      name: "Styled Components",
      logo: Styledcomponent,
      description: [
        "컴포넌트 기반으로 스타일을 작성하고 유지할 수 있습니다.",
        "CSS-in-JS 접근 방식을 사용하여 컴포넌트 기반 스타일링을 구현했습니다.",
      ],
    },
  ],
  // Backend: [
  //   {
  //     name: "Node.js",
  //     logo: Nodejs,
  //     description: [
  //       "RESTful API를 설계할 수 있습니다.",
  //     ],
  //   },
  //   {
  //     name: "Firebase",
  //     logo: Firebase,
  //     description: [
  //       "인증, 실시간 데이터베이스, 서버리스 기능 등을 빠르게 구현할 수 있습니다.",
  //     ],
  //   },
  //   {
  //     name: "SpringBoot",
  //     logo: Mysql,
  //     description: [
  //       "Spring Boot를 활용해 RESTful API를 설계 및 구현한 경험이 있습니다.",
  //       "Spring Data JPA를 사용하여 데이터베이스와의 효율적인 연동을 구현했습니다.",
  //     ]
  //   }
  // ],
  // DBMS: [
  //   {
  //     name: "MySQL",
  //     logo: Mysql,
  //     description: [
  //       "백엔드와의 API 통합을 통해 데이터를 처리하고 시각화한 경험이 있습니다.",
  //       "간단한 관계형 데이터베이스 설계와 쿼리 작성 경험이 있습니다.",
  //     ],
  //   },
  //   {
  //     name: "MongoDB",
  //     logo: Mongodb,
  //     description: [
  //       "비정형 데이터를 처리하는 REST API와의 통합 작업 경험이 있습니다.",
  //       "실시간 데이터를 활용한 프론트엔드 애플리케이션 개발 경험이 있습니다.",
  //     ],
  //   },
  // ],
  Tool: [
    {
      name: "Figma",
      logo: Figma,
      description: [
        "UI/UX 디자인 제작 및 프로토타입 설계가 가능합니다.",
      ],
    },
    {
      name: "Postman",
      logo: Postman,
      description: [
        "API 테스트 및 디버깅을 통해 효율적인 개발 환경을 구축할 수 있습니다.",
      ],
    },
  ],
};