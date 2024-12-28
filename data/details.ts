export interface InfoSectionProps {
  information: {
    videos?: VideoInfo[];
    title: string;
    description: string;
    github?: string;
    link?: string;
    period: string;
    personnel: string[];
    skills: string[];
    challenge?: string[];
    approach?: string[];
    result?: string[];
    award?: string[];
  };
}

export interface TroubleSectionProps {
  details: TroubleInfo[];
}

export interface DetailsProps {
  details: DetailsInfo[];
}

export interface ToggleProps {
  id: number;
  title: string;
  cause?: string;
  solution?: string[];
  contents?: string[];
}

interface DetailsInfo {
  title: string;
  details: string[];
}

interface TroubleInfo {
  title: string;
  cause: string;
  solution: string[];
}

interface VideoInfo {
  title: string;        
  url: string;          
}

interface DetailTotalInfo {
  information: {
    videos?: VideoInfo[];
    title: string;
    description: string;
    github?: string;
    link?: string;
    period: string;
    personnel: string[];
    skills: string[];
    challenge?: string[];
    approach?: string[];
    result?: string[];
    award?: string[];
  };
  function?: DetailsInfo[];
  troubleshooting?: TroubleInfo[];
  icandoit?: DetailsInfo[];
}

export const detailsData: { key: string; value: DetailTotalInfo }[] = [
  {
    key: "movie",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/movie_video.mp4",
        }],
        title: "Movie Web",
        description: "간단한 영화 웹사이트",
        github: "https://github.com/seung-mii/nextjs-study",
        period: "2024.11.13 ~ 2024.11.20",
        personnel: ["FE: 1"],
        skills: ["Next.js", "React", "Typescript", "Vercel"],
      },
      function: [
      {
        title: "영화별 상세 정보",
        details: [
          "영화마다 동적 라우팅을 하여 해당 영화에 대한 정보만 볼 수 있습니다.",
          "영화 예고편 및 비디오를 렌더링하여 사용자에게 제공합니다.",
        ],
      }],
      icandoit:[{
        title: "CSS 모듈을 활용한 스타일링을 할 수 있습니다.",
        details: [
          "컴포넌트 별로 CSS 모듈을 적용하여 스타일 충돌을 방지하고 유지보수를 용이하게 설계할 수 잇습니다.",
          "글로벌 스타일(global.css)과 개별 스타일 파일을 조합하여 전체적인 스타일 통일성을 유지할 수 있습니다.",
        ],
      },
      {
        title: "Suspense를 활용하여 동영상 로딩을 최적화를 할 수 있습니다.",
        details: [
          "fetch를 사용하여 동영상 데이터를 API로부터 비동기적으로 가져올 수 있습니다.",
          "Suspense를 활용하여 동영상 정보와 동영상 콘텐츠를 각각 비동기적으로 로딩하며 로딩 중에는 fallback UI를 표시하여 사용자 경험을 개선한 경험이 있습니다.",
          "동영상 로딩 시 YouTube의 iframe을 활용하여 외부 리소스를 효율적으로 임베드할 수 있습니다.",
        ],
      }],
    },
  },
  {
    key: "portfolio",
    value: {
      information: {
        videos: [{
          title: "Mobile ver.",
          url: "/video/pf_video.mp4",
        }],
        title: "Portfolio",
        description: "포토폴리오 사이트",
        github: "https://github.com/seung-mii/pf",
        link: "https://seung-mi-pf.vercel.app/",
        period: "2024.10.03 ~ 2024.12.28",
        personnel: ["FE: 1"],
        skills: ["Next.js", "Three.js", "React", "Typescript", "Tailwind CSS", "Vercel"],
      },
      function: [{
        title: "반응형 디자인을 구현하였습니다.",
        details: [
          "Tailwind CSS의 반응형 접두사를 활용하여 다양한 뷰포트 크기에 맞는 디자인을 조정했습니다.",
          "커스텀 브레이크포인트를 `tailwind.config.js` 파일에 정의하여 프로젝트에 맞는 유연한 레이아웃을 설계했습니다.",
          "모바일, 태블릿, 데스크톱 환경에서도 일관된 사용자 경험을 제공하는 디자인을 구현했습니다.",
        ],
      },
      {
        title: "성능 개선 및 최적화(리팩토링)하였습니다.",
        details: [
          "이미지를 Lazy loading 처리하여 불필요한 리소스 로드를 줄여 페이지 로딩 속도를 최적화하였습니다.",
          "Lodash 라이브러리의 throttle를 활용하여 이벤트 핸들러 호출 빈도를 제한하여 성능을 개선하였습니다.",
          "Intersection Observer API를 활용하여 스크롤 이벤트를 효율적으로 처리하고 필요한 콘텐츠만 로드하여 성능을 최적화하였습니다.",
        ],
      },
      {
        title: "Three.js 라이브러리를 사용하여 웹페이지에 3D 환경을 구현했습니다.",
        details: [
          "카메라, 조명, 렌더링을 설정하여 몰입감 있는 배경을 제작했습니다.",
          "3D 배경이 사용자 인터랙션에 따라 동적으로 반응하도록 구현했습니다.",
        ],
      },
      {
        title: "SVG 요소를 사용해 텍스트에 애니메이션 효과를 추가했습니다.",
        details: [
          "clip-path를 활용하여 텍스트 디자인을 구현했습니다.",
          "애니메이션을 넣어 텍스트가 부드럽게 나타나거나 사라지는 효과를 구현했습니다.",
        ],
      },
      {
        title: "React와 CSS를 활용하여 스크롤 시 카드를 3D로 뒤집는 애니메이션을 구현했습니다.",
        details: [
          "Intersection Observer를 사용하여 카드가 뷰포트에 들어왔을 때 애니메이션이 실행되도록 설정했습니다.",
          "CSS의 transform과 perspective를 조합하여 부드럽고 자연스러운 3D 효과를 만들었습니다.",
        ],
      },
      {
        title: "폴더 모양의 UI를 만들어 스크롤과 함께 열리고 닫히는 애니메이션을 구현했습니다.",
        details: [
          "스크롤 위치에 따라 CSS 클래스가 동적으로 변경되도록 설정했습니다.",
          "폴더의 열림과 닫힘 애니메이션을 keyframes를 활용해 매끄럽게 처리했습니다.",
        ],
      },
      {
        title: "카드 요소에 perspective를 적용하여 3D 입체감을 부여했습니다.",
        details: [
          "마우스 움직임에 따라 카드의 각도가 실시간으로 변경되도록 구현했습니다.",
          "React 상태 관리와 CSS 애니메이션을 결합해 인터랙션이 부드럽게 동작하도록 설계했습니다.",
        ],
      }],
      icandoit: [
        {
          title: "Three.js의 기본 요소에 대해 배웠습니다.",
          details: [
            "Scene, Camera, Renderer를 설정할 수 있습니다.",
            "카메라와 조명을 조정하여 3D 오브젝트와 배경이 자연스럽게 보이도록 구성하는 방법을 배웠습니다.",
            "사용자 인터랙션과 3D 그래픽을 연동하여 동적이고 몰입감 있는 사용자 경험을 제공하는 기술을 익혔습니다.",
          ],
        },
        {
          title: "반응형 디자인을 효과적으로 구현할 수 있습니다.",
          details: [
            "Tailwind CSS의 브레이크포인트 시스템을 활용하여 다양한 디바이스 크기에 맞는 스타일을 설정할 수 있습니다.",
            "뷰포트 크기별로 레이아웃과 타이포그래피를 조정하여 일관된 UI를 설계할 수 있습니다.",
            "프로젝트 요구사항에 맞는 커스텀 브레이크포인트를 구성하고, 이를 통해 화면 크기별 사용자 경험을 최적화할 수 있습니다.",
          ],
        }
      ],
    },
  },
  {
    key: "zomato",
    value: {
      information: {
        videos: [
          {
            title: "Home",
            url: "/video/zomato_video.mp4",
          },
          {
            title: "Order Online",
            url: "/video/zomato_video3.mp4",
          },
          {
            title: "Dining & Nightlife and Clubs",
            url: "/video/zomato_video2.mp4",
          },
        ],
        title: "Zomato Clone",
        description: "라이브러리나 프레임워크를 사용하지 않고\nVanilla JS로 구현한 Zomato 클론코딩 웹사이트",
        github: "https://github.com/seung-mii/zomato-clone",
        link: "https://zomato-clone-by-sm.vercel.app/index.html",
        period: "2023.02.07 ~ 2023.05.15, 2024.09.02 ~ 2024.09.29",
        personnel: ["FE: 1"],
        skills: ["HTML", "SCSS", "JavaScript", "Vercel"],
        result: ["Lighthouse 기준 SEO와 접근성이 76점 → 91점으로 약 20% 증가"],
      },
      function: [
        {
          title: "슬라이더를 사용해 평점 값 선택",
          details: [
            "스크롤을 통해 선택된 평점 값이 실시간으로 표시되어 직관적인 사용자 경험을 제공했습니다.",
          ],
        },
      ],
      icandoit: [{
        title: "시멘틱 태그를 활용하여 페이지 구조 정의할 수 있습니다.",
        details: [
          "페이지 구조를 명확히 하여 검색 엔진과 사용자 모두에게 쉽게 파악되도록 설계한 경험이 있습니다.",
        ],
      },
      {
        title: "ARIA 속성을 통해 키보드 접근성을 향상할 수 있습니다.",
        details: [
          "링크와 버튼에 ARIA 속성을 적용해 키보드로도 웹 페이지를 쉽게 탐색할 수 있도록 웹 접근성을 강화한 경험이 있습니다.",
        ],
      },
      {
        title: "스타일 관련 라이브러리 없이 SCSS로 원하는 스타일을 구현할 수 있습니다.",
        details: [
          "CSS의 전처리기인 SCSS를 활용할 수 있습니다.",
          "오로지 SCSS로만 커스텀 스타일을 구현할 수 있습니다.",
        ],
      }],
    },
  },
  {
    key: "labeling",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/labeling_video.mp4",
        }],
        title: "Labeling Tool",
        description: "Labeling Tool",
        period: "2023.11.01 ~ 2023.12.21",
        personnel: ["FE: 1"],
        skills: ["React", "Redux", "Fabric.js", "Typescript", "Tailwind CSS"],
        challenge: [
          "기존 타사 라벨링툴은 하나의 이미지를 라벨링하는 데 시간이 많이 소요되었습니다."
        ],
        approach: [
          "회사의 라벨러 5명과 소통하며 파악한 결과, 단축키와 필터 기능의 부족으로 인한 작업 효율 저하가 주요 문제라는 것을 알게 되었습니다.",
          "Canvas 기반의 라이브러리 4개를 비교분석 후 Fabric.js를 채택하여 사용자의 요구에 맞춘 라벨링툴을 개발하였습니다."
        ],
        result: [
          "작업 과정에서 클릭 수가 약 40% 하였습니다.",
          "타사 라벨링툴을 사용하는 비용인 매월 약 150만 원의 비용 절감하였습니다.",
        ],
      },
      function: [
        {
          title: "어노테이션 생성",
          details: [
            "어노테이션 생성 시 이미지 영역을 넘지 않도록 제한했습니다."
          ],
        },
        {
          title: "어노테이션 이동 및 크기 조정",
          details: [
            "어노테이션 이동 및 크기 조정 시 이미지 영역을 넘지 않도록 제한했습니다.",
            "키보드 방향키를 사용해 어노테이션이 자유롭게 이동하도록 구현했습니다.",
            "fabricRect의 scaleX와 scaleY 속성을 사용해 상하좌우 및 각 꼭짓점에서 어노테이션의 크기 조정 가능합니다.",
          ],
        },
        {
          title: "이미지 확대/축소",
          details: [
            "zoomToPoint 메서드를 사용해 현재 마우스가 위치한 좌표를 중심으로 이미지 확대/축소가 되도록 구현했습니다.",
            "마우스 휠을 통해 빠르게 이미지 확대/축소가 가능합니다.",
          ],
        },
        {
          title: "필터 적용",
          details: [
            "fabric.Imagefilters로 이미지에 밝기 및 대조 필터를 실시간으로 적용 가능합니다.",
            "사용자가 input에 -100부터 100까지 사이 값을 직접 입력하여 밝기 및 대조 값을 빠르게 수정 가능합니다.",
          ],
        },
        {
          title: "단축키로 패닝과 스냅 기능을 통한 사용자 편의성 향상",
          details: [
            "useRef와 fabric.js의 viewportTransform으로 이미지 상하좌우 이동하는 패닝 기능을 제공했습니다.",
            "스냅 기능을 통해 단축키 한 번으로 이미지를 초기 크기와 위치로 빠르게 복구 가능합니다.",
          ],
        },
        {
          title: "단축키로도 클래스 변경 관리",
          details: [
            "useCallback과 단축키 이벤트 리스너를 사용해 사용자가 특정 단축키를 누르면 어노테이션 클래스가 변경되도록 설정했습니다.",
          ],
        },
        {
          title: "이미지를 변경하면 어노테이션 자동 저장",
          details: [
            "사용자가 어노테이션 작성 중 이미지 리스트에서 다른 이미지를 선택하면, 선택 직전까지 진행된 어노테이션 좌표를 서버에 자동으로 저장하여 어노테이션 상태를 유지함으로써 사용자 편의성을 높였습니다.",
          ],
        },
      ],
      troubleshooting: [
        {
          title: "첫 어노테이션을 그린 후 다음 어노테이션을 그리려고 마우스를 클릭할 때 이전에 그린 어노테이션이 사라지는 문제",
          cause: "부모 컴포넌트인 AnnotationEditorComponent가 리렌더링될 때 자식 컴포넌트인 Canvas가 불필요하게 리렌더링되어 이전에 그린 어노테이션 상태가 사라졌습니다.",
          solution:[
            "memo를 사용해 Canvas 컴포넌트를 메모이제이션함으로써 props가 변경되지 않는 한 재렌더링되지 않도록 설정하여 이전에 그린 어노테이션 상태가 유지되도록 했습니다.",
          ],
        },
        {
          title: "무한 루프 문제",
          cause: "Class들의 정보를 가지고 있는 datasetClasses가 함수로 정의되어 있어 리렌더링될 때마다 새로운 배열을 반환함 이로 인해 배열의 참조값이 매번 변경되면서 이를 의존성으로 사용하는 useEffect에서 변경되었다고 인식하고 반복해서 실행되어 무한 루프가 발생했습니다.",
          solution: [
            "useMemo를 사용하여 배열을 메모이제이션해 리렌더링 시에도 배열의 참조값이 유지하여 기존 배열 객체를 사용하므로 useEffect가 불필요하게 실행되지 않습니다.",
          ],
        },
        {
          title: "class를 변경하는 단축키 함수를 작성했으나 단축키를 눌러도 class가 변경되지 않는 문제",
          cause: "단축키 함수가 리렌더링마다 새로 생성되면서 이전 참조 상태를 잃고 새로운 참조를 사용해 최신 상태와 불일치하였습니다.",
          solution: [
            "useCallback을 사용해 단축키 함수가 동일한 참조 상태를 유지하도록 메모이제이션하여 함수가 재생성되지 않고 최신 상태를 참조하도록 했습니다.",
          ]
        },
        {
          title: "마우스를 떼면 어노테이션이 다른 위치로 이동하는 문제",
          cause: "리렌더링 시 마우스를 뗄 때의 좌표 값이 제대로 유지되지 않거나 초기화되었습니다.",
          solution: [
            "마우스 좌표 값이 리렌더링에 영향을 받지 않도록 useRef로 관리하여 좌표 값을 유지합니다.",
          ]
        },
      ],
      icandoit: [
        {
          title: "Redux를 사용한 효율적인 상태 관리가 가능합니다.",
          details: [
            "컴포넌트 간의 상태를 중앙에서 체계적으로 관리하여 유지보수성과 확장성을 높일 수 있습니다.",
          ],
        },
      ],
    },
  },
  {
    key: "x",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/xclone_video.mp4",
        }],
        title: "𝕏 Clone",
        description: "𝕏 클론코딩 웹사이트",
        github: "https://github.com/seung-mii/X-clone",
        period: "2023.07.14 ~ 2023.07.24",
        personnel: ["FS: 1"],
        skills: ["React", "TypeScript", "NoSQL", "Firebase", "Vite"],
      },
      function: [
        {
          title: "사용자 로그인",
          details: [
            "Firebase Authentication을 사용하여 사용자 로그인 및 회원가입 구현했습니다.",
            "간편한 인증 프로세스인 Github OAuth를 포함하여 다양한 로그인 옵션 제공합니다.",
            "인증된 사용자만 특정 페이지에 접근 가능하도록 설정했습니다."
          ],
        },
        {
          title: "트윗 작성 및 게시",
          details: [
            "Tweet 컴포넌트를 통해 사용자가 텍스트 입력 후 트윗을 작성하도록 구현했습니다.",
            "Firebase Firestore를 사용해 트윗 및 사용자 정보를 저장하고 실시간 업데이트하여 반영합니다.",
            "Timeline 컴포넌트를 사용해 게시된 트윗들을 시간 순서대로 표시합니다.",
            "useEffect와 Firebase SDK를 활용해 데이터 상태를 자동 갱신합니다.",
            "본인이 작성한 트윗에 한하여 삭제가 가능합니다.",
            "Post 컴포넌트를 사용해 개별 트윗 게시물을 렌더링합니다.",
          ],
        },
        {
          title: "프로필 관리",
          details: [
            "Firestore와 연동해 프로필 데이터를 동기화합니다.",
            "ProtectedRoute를 활용하여 인증된 사용자만 프로필 페이지에 접근하도록 제어했습니다.",
          ],
        },
      ],
      icandoit: [
        {
          title: "TypeScript를 활용해 코드 안정성 강화하였습니다.",
          details: [
            "Props 및 상태 관리를 명시적으로 설정하여 코드 유지보수성을 향상시킬 수 있습니다.",
            "컴포넌트 및 페이지에 명시적인 타입 정의를 추가하여 오류를 사전에 방지할 수 있습니다.",
            "공통 설정(tsconfig.json)을 통해 프로젝트 전반의 코드 품질 향상시킬 수 있습니다.",
          ],
        },
        {
          title: "빌트인(내장) 경로 처리 컴포넌트를 활용할 수 있습니다.",
          details: [
            "Loading 컴포넌트를 통해 비동기 데이터 로드 시 사용자 경험 개선할 수 있습니다.",
            "Not-found 컴포넌트를 통해 존재하지 않는 URL 접속 시 사용자 경험 개선할 수 있습니다.",
          ],
        },
        {
          title: "Firebase를 활용할 수 있습니다.",
          details: [
            "Firebase 프로젝트 설정을 통해 Authentication 및 Firestore 기능 연결할 수 있습니다.",
            "Firebase Hosting 설정을 통해 애플리케이션 배포한 경험이 있습니다.",
          ],
        },
        {
          title: "Vite 빌드 및 배포할 수 있습니다.",
          details: [
            "빠른 개발 환경 구성 및 빌드 속도를 개선할 수 있습니다.",
            "Firebase Hosting을 통해 프론트엔드 애플리케이션 배포한 경험이 있습니다.",
          ],
        },
      ],
    },
  },
  {
    key: "kis",
    value: {
      information: {
        videos: [{
          title: "Total",
          url: "/video/kis_video.mp4",
        }],
        title: "Kneeling bus Information System",
        description: "교통약자들을 위한 저상버스 정보 시스템",
        github: "https://github.com/StupidTalkingPotatoes/KIS_frontend",
        period: "2023.04.26 ~ 2023.06.08",
        personnel: ["FE: 1", "BE: 3"],
        skills: ["React", "JavaScript", "styled-components", "Kakao Map API", "Naver Maps API"],
        challenge: [
          "주변 교통약자들 10명을 조사하니 저상버스 대기 시간이 평균 1시간이라는 사실을 알게 되었습니다.",
        ],
        approach: [
          "안드로이드 앱에서는 전체 버스 정보를 알려주는 앱만 존재하고 iOS 앱에서는 서울시를 한정한 어플만 있었습니다.",
          "지자체에서 제공하는 버스 정보 시스템에서는 저상버스만 조회할 수 없었습니다.",
          "운영체제 상관없이 접근 가능한 웹 서비스 기반 저상버스 정보 시스템을 개발했습니다."
        ],
        result: [
          "Lighthouse 기준 성능과 SEO: 92점, FCP: 0.6s, TBT: 0.02s",
        ],
        award: [
          "제3회 경상북도 공공데이터 활용 창업경진대회 제품 및 서비스 개발 부문 우수 (12개의 팀 중 2등)",
          "포항테크노파크",
          "2023.07.28",
        ],
      },
      function: [
        {
          title: "사용자의 현재 위치 반경 500m 내의 주변 정류장 조회",
          details: [
            "사용자의 현재 위치 주소와 현재 위치 확인 가능합니다.",
            "Geolocation API의 getCurrentPosition을 Promise로 감싸 비동기 방식으로 현재 사용자 위치를 조회했습니다.",
            "정류장의 위치를 나타내는 마커를 누르면 해당 정류장명 확인 가능합니다."
          ],
        },
        {
          title: "실시간 저상버스 도착 정보",
          details: [
            "정류장 번호 또는 정류장명을 검색하여 원하는 정류장을 선택하면 해당 저상버스 도착 정보 조회 가능합니다.",
            "정류장의 위치와 정류장명 확인 가능합니다.",
            "사용자가 선택한 정류장에 대한 버스 번호, 노선 방향, 남은 시간, 남은 정류장 수 정보 확인 가능합니다."
          ],
        },
        {
          title: "실시간 버스 위치 정보",
          details: [
            "버스 번호를 검색하여 원하는 버스를 선택하면 해당 저상버스 위치 정보 조회 가능합니다.",
            "해당 버스의 노선 방향, 실시간 위치와 마커로 표시된 버스가 경유하는 모든 정류장명과 정류장의 위치 확인 가능합니다.",
            "Marker()와 InfoWindow()를 사용하여 커스텀 아이콘과 정류장명 정보를 표시하여 사용자에게 직관적인 위치 정보 제공합니다.",
            "현재 버스가 마지막으로 경유한 정류장 확인 가능합니다.",
          ],
        },
        {
          title: "경로 탐색",
          details: [
            "출발지와 도착지를 입력하면 출발지에서 도착지까지 도보 및 저상버스로만 이루어진 경로 확인 가능합니다.",
            "출발지와 도착지의 위치, 환승 지점의 위치 확인 가능합니다.",
            "각 경로에는 총 소요 시간과 경로 단계(이동 방식(도보 또는 버스)과 소요 시간)를 표시하며 이동 방식이 버스인 경우 승차 및 하차 정류장명, 이용 가능한 버스 번호, 그리고 남은 시간 확인 가능합니다.",
            "환승과 같은 경우 저상버스로 환승할 수 있는 경로 제공합니다.",
          ],
        },
      ],
      troubleshooting: [
        {
          title: "현재 사용자 위치의 위도와 경도를 설정해도 지도에 마커 미표시 문제",
          cause:
            "위치 정보는 비동기적으로 받아오는데 위치 정보가 도착하기 전에 지도가 렌더링되어 초기 렌더링 시점에서는 마커를 표시할 정확한 위치 정보가 없었고, 위치 정보를 나중에 받아왔지만 이미 렌더링된 지도에는 반영되지 않았습니다.",
          solution: [
            "getCurrentPosition은 비동기적으로 현재 사용자의 위치를 가져오는 함수이므로 위치 정보를 받아온 후에 마커를 지도에 표시하는 로직을 실행해야 했습니다.",
            "Promise를 return하여 then() 메서드를 활용해 위치 정보를 받은 후 좌표 정보를 지도에 반영하고 마커를 표시할 수 있게 했습니다.",
            "사용자의 현재 위치 정보인 point가 업데이트될 때마다 useEffect 훅이 실행되어 지도가 다시 렌더링되고 해당 위치에 맞춰 마커가 표시되도록 했습니다.",
          ],
        },
        {
          title: "출발지 및 도착지 변경 후 경로 정보를 가져오지 못하는 문제",
          cause:
            "출발지 및 도착지를 변경했으나 해당 변경을 감지하지 못해 API 호출이 발생하지 않았습니다.",
          solution: [
            "useEffect의 의존성 배열에 출발지 및 도착지 정보 변수를 추가하여 변수가 변경될 때마다 useEffect 내의 코드가 다시 실행되도록 했습니다.",
            "출발지 및 도착지 중 하나라도 변경되면 자동으로 API 호출을 트리거하여 최신 경로 정보를 가져와 동적으로 업데이트되도록 처리했습니다.",
          ],
        },
        {
          title: "출발지와 도착지 키워드 검색 시 다른 지역도 나오는 문제",
          cause:
            "Kakao Maps API를 사용하여 키워드 검색을 수행할 때 지역 필터링 없이 전국 단위로 검색 결과를 반환하기 때문에 경북 구미시에 한정된 결과를 얻지 못했습니다.",
          solution: [
            "주소의 앞 6자리를 비교하여 주소가 '경북 구미시'로 시작하는 결과만 남기고 다른 지역의 결과는 필터링하는 로직을 추가하여 수신된 데이터에 대해 원하는 지역의 장소만 남겼습니다.",
          ],
        },
        {
          title: "가독성과 유지보수성이 낮은 문제",
          cause:
            "CSS로 구현하면 컴포넌트 단위로 스타일을 관리하기가 어려우며 재사용성이 부족해 코드가 길어졌습니다.",
          solution: [
            "동적 스타일링이 가능하고 컴포넌트 기반 스타일링이 가능해 React와 밀접하게 통합되어 있는 styled-component로 변경하여 구현했습니다.",
          ],
        },
      ],
      icandoit: [
        {
          title: "React Router Hooks을 활용할 수 있습니다.",
          details: [
            "React Router DOM을 활용한 동적 라우팅을 통해 동적 URL 파라미터를 설정할 수 있습니다.",
            "useParams를 사용해 URL에 포함된 파라미터 값을 서버 API 요청에 활용하여 필요한 데이터를 송수신한 경험이 있습니다.",
            "Link와 useLocation을 통한 컴포넌트 간 데이터 전송한 경험이 있습니다."
          ],
        },
        {
          title: "React Hooks를 자유롭게 활용할 수 있습니다.",
          details: [
            "useEffect의 의존성 배열을 활용하여 컴포넌트의 마운트 조절하여 무한 루프 문제를 해결했습니다.",
          ],
        },
        {
          title: "Fetch API를 통한 비동기 데이터 수신",
          details: [
            "서버 데이터를 비동기로 받아와 useState에 저장하여 상태 업데이트 및 컴포넌트 간 데이터 공유 수행했습니다.",
          ],
        },
        {
          title: "CSS-in-JS 방식으로 스타일링을 할 수 있습니다.",
          details: [
            "props 기반 조건부 스타일링을 통해 전달받은 props 값에 따라 스타일의 속성을 변경할 수 있습니다.",
            "스타일 확장을 통해 기존 컴포넌트의 스타일을 상속받아 재사용할 수 있습니다.",
          ],
        },
      ],
    },
  },
  {
    key: "neighborfood",
    value: {
      information: {
        videos: [{
          title: "Total",
          url: "/video/neighborfood_video.mp4",
        }],
        title: "NeighborFood",
        description: "주변에 배달 음식을 주문할\n 같은 학교 학생들을 구할 수 있는 어플",
        github: "https://github.com/Neighbor-Food/NF_frontend",
        period: "2023.04.25 ~ 2023.06.02",
        personnel: ["FE: 3", "BE: 2"],
        skills: ["CSS", "JavaScript", "React", "Morpheus API"],
        challenge: [
          "코로나로 인한 배달 어플 사용이 증가하면서 배달비의 상승이 소비자에게 큰 부담이 되고 있습니다."
        ],
        approach: [
          "대학생들은 학교 주변에 밀집하여 거주하므로 음식을 함께 주문하면 가까운 거리에서 배달받고 배달비를 나누어 부담할 수 있습니다.",
          "외부인과 함께 배달을 받는 경우 안전 문제가 발생할 수 있어 대학교 사람들만 사용할 수 있는 안전한 어플이 필요했습니다.",
          "이러한 배경에서 조금이라도 배달비 부담을 줄이고 안전하게 사용할 수 있는 어플을 제공하고 싶었습니다."
        ],
        award: [
          "Webkit640 2기 프로젝트 발표회 우수 (20개의 팀 중 2등)",
          "포항테크노파크",
          "2023.06.09",
          "Webkit640 2기 팀프로젝트 경연 우수 (5개의 팀 중 2등)",
          "금오공과대학교",
          "2023.05.31",
        ],
      },
      function: [
        {
          title: "회원관리",
          details: [
            "회원가입, 회원탈퇴, 로그인, 로그아웃 기능이 있습니다.",
            "자신에 대한 회원 정보를 수정할 수 있습니다.",
            "내가 참여한 게시물만 모아서 확인할 수 있습니다."
          ],
        },
        {
          title: "모임 게시물 관리 [신승미 구현]",
          details: [
            "사람들이 올린 게시물을 카테고리 별로 조회할 수 있으며 각 모임 게시물의 작성자 이름과 작성일자, 제목, 본문 그리고 음식 받을 위치와 음식점을 확인할 수 있습니다.",
            "누구나 모임 게시물을 생성할 수 있으며 참여하면 참여중인 사용자의 이름과 인원 수를 확인할 수 있고 댓글을 단 사용자의 이름과 작성 일시를 확인할 수 있습니다.",
            "자신이 작성한 게시물만 삭제가 가능합니다.",
          ],
        },
        {
          title: "댓글 관리 [신승미 구현]",
          details: [
            "모임 참여한 사용자들은 댓글이 달리면 댓글 작성자의 이름과 내용을 이메일로 받을 수 있습니다.",
            "자신이 작성한 댓글만 삭제가 가능합니다.",
          ],
        },
        {
          title: "공동 장바구니 관리",
          details: [
            "음식점 이름과 희망 주문 시간까지 남은 시간을 확인할 수 있으며 각 참여자가 선택한 음식과 총 가격, 입금 여부도 볼 수 있습니다.",
            "방장인 경우 참여자들의 입금 여부를 버튼으로 설정 및 공지할 수 있습니다.",
            "방장이 주문하기 버튼을 누르면 주문했다는 이메일이 모든 참여자에게 전송됩니다.",
            "참여자인 경우 각 참여자의 입금 여부를 확인할 수 있고 본인에 한해서 주문 취소가 가능합니다."
          ],
        },
        {
          title: "음식점 관리 [신승미 구현]",
          details: [
            "모임 게시물의 음식점으로 설정할 음식점의 이름과 주문할 수 있는 음식들을 확인할 수 있습니다.",
            "카테고리별로 음식점을 조회할 수 있으며 음식점마다 배달비와 최소 주문 금액을 확인할 수 있습니다.",
          ],
        }, 
      ],
      troubleshooting: [
        {
          title: "CORS 문제",
          cause: "클라이언트에서 외부 API로 직접 요청을 보내는 방식으로 인해 발생했습니다.",
          solution: [
            "package.json 파일에 proxy 설정을 추가하여 개발 환경에서 CORS 문제를 우회할 수 있도록 설정했습니다.",
            "클라이언트 측에서 직접 API 서버에 요청하는 대신 로컬 서버를 경유해 요청을 프록시하여 CORS 정책에 의한 차단을 방지했습니다.",
          ],
        },
        {
          title: "본인이 작성하지 않은 게시물과 댓글이 삭제 가능한 문제",
          cause: "게시물과 댓글을 작성한 사용자와 현재 로그인한 사용자를 구분하지 못했습니다.",
          solution: [
            "AppStorage를 통해 현재 로그인한 사용자의 ID와 게시물 및 댓글 작성자의 ID를 비교하여, 일치하는 경우에만 삭제 버튼을 표시해 삭제 가능하도록 수정했습니다.",
          ],
        },
      ],
      icandoit: [
        {
          title: "비동기 데이터 수신 및 에러 처리를 할 수 있습니다.",
          details: [
            "Fetch API를 통해 비동기적으로 데이터를 수신할 수 있으며 수신 내용에 따른 에러 처리를 한 경험이 있습니다.",
          ],
        },
        {
          title: "블랍 형식의 이미지 데이터를 처리할 수 있습니다.",
          details: [
            "서버에서 이미지를 블랍(blob) 형식으로 받아 URL.createObjectURL을 사용해 브라우저에서 사용할 수 있는 URL로 변환하여 이미지를 사용한 경험이 있습니다.",
          ],
        },
      ],
    },
  },
  {
    key: "menu",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/menu_video.mp4",
        }],
        title: "Menu Recommendation",
        description: "맛집 주요 메뉴 추천 웹사이트",
        github: "https://github.com/seung-mii/menu-recommendation",
        period: "2023.04.13 ~ 2023.04.22",
        personnel: ["FS: 1"],
        skills: ["CSS", "JavaScript", "React", "SpringBoot", "H2 Database", "Maven", "Lombok"],
      },
      function: [
        {
          title: "회원 관리",
          details: [
            "회원가입 및 로그인 기능 구현했습니다.",
            "사용자 정보 수정을 통해 프로필 업데이트 가능합니다.",
            "백엔드 API와 통신하여 회원 정보를 관리합니다.",
          ],
        },
        {
          title: "음식점 목록 및 추천 메뉴 정보",
          details: [
            "음식점 목록을 표시하여 각 음식점별 추천 메뉴와 세부 정보를 확인 가능합니다.",
            "네비게이션 바 및 필터 옵션 제공하여 원하는 음식 종류만 다루는 음식점 목록 확인 가능합니다.",
            "백엔드에서 음식점 정보를 가져와 실시간 렌더링합니다.",
          ],
        },
        {
          title: "게시물 관리",
          details: [
            "새로운 게시물을 생성할 수 있으며 게시물 수정 및 삭제 가능합니다.",
            "백엔드 데이터베이스와 연동하여 게시물 데이터를 관리합니다.",
          ],
        },
        {
          title: "별점 및 리뷰 관리",
          details: [
            "음식점 또는 메뉴에 대한 별점 및 리뷰 작성 기능 제공합니다.",
            "작성된 별점을 수정 및 삭제 가능합니다.",
            "별점 평균을 계산하여 음식점 평가 시스템 구현합니다.",
          ],
        },
      ],
    },
  },
  {
    key: "todo",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/todolist_video.mp4",
        }],
        title: "To-do List",
        description: "SpringBoot와 React로 만든 To-do List",
        github: "https://github.com/seung-mii/To-do-List?tab=readme-ov-file",
        period: "2023.03.31 ~ 2023.04.11",
        personnel: ["FS: 1"],
        skills: ["CSS", "JavaScript", "React", "SpringBoot", "H2 Database", "Maven", "Lombok"],
      },
      function: [
        {
          title: "사용자 관리",
          details: [
            "사용자 생성, 로그인, 조회 등의 기능 및 비즈니스 로직을 구현했습니다.",
            "JPA를 활용한 데이터베이스를 연동했습니다.",
          ],
        },
        {
          title: "할 일 관리",
          details: [
            "컴포넌트로 할 일 추가, 삭제, 목록 표시를 구현했습니다.",
            "새로운 할 일을 입력하면 서버에 저장했습니다.",
            "할 일 목록 렌더링 및 삭제 기능을 제공했습니다.",
          ],
        },
        {
          title: "사용자 인증 및 관리",
          details: [
            "React Router를 활용한 라우팅했습니다.",
            "사용자 로그인 및 회원가입을 구현했습니다.",
            "JWT 토큰을 로컬 스토리지에 저장하여 인증 상태를 유지했습니다.",
          ],
        },
        {
          title: "Pagination 및 정렬 기능",
          details: [
            "To-do 목록의 페이지네이션 구현했습니다.",
          ],
        },
      ],
    },
  },
  {
    key: "book",
    value: {
      information: {
        title: "Book Management System",
        description: "Spring MVC 구조 기반 도서 관리 시스템",
        github: "https://github.com/seung-mii/Book-Management-System",
        period: "2023.03.18 ~ 2023.03.24",
        personnel: ["FS: 1"],
        skills: ["JSP", "CSS", "JavaScript", "JQuery", "Spring", "Maven", "MySQL", "Tomcat"],
      },
      function: [
        {
          title: "책 정보 생성, 조회, 수정, 삭제",
          details: [
            "Spring MVC 기반으로 RESTful API를 구현했습니다.",
            "MyBatis를 활용하여 데이터베이스를 연동했습니다.",
            "SQL 쿼리를 작성해 데이터 접근 객체(DAO)와 연결했습니다.",
          ],
        },
      ],
      icandoit: [
        {
          title: "데이터베이스 초기화 및 연동을 할 수 있습니다.",
          details: [
            "MyBatis XML 파일을 활용한 데이터베이스 연동한 경험이 있습니다.",
          ],
        },
        {
          title: "Spring Framework 기반 백엔드를 활용할 수 있습니다.",
          details: [
            "DI(의존성 주입)와 Bean 관리를 통해 유연한 애플리케이션 구조 구현했습니다.",
            "View Resolver 설정으로 JSP 뷰와 데이터 연동했습니다.",
          ],
        },
      ],
    },
  },
  {
    key: "meme",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/meme_video.mp4",
        }],
        title: "Meme Maker",
        description: "밈 생성기 만드는 사이트",
        github: "https://github.com/seung-mii/meme-maker",
        period: "2023.02.19 ~ 2023.02.20",
        personnel: ["FE: 1"],
        skills: ["HTML", "CSS", "JavaScript", "Canvas API"],
      },
      function: [
        {
          title: "그리기 및 채우기 모드 전환",
          details: [
            "mousemove, mousedown, mouseup, mouseleave 이벤트를 통해 선을 자연스럽게 그릴 수 있도록 구현했습니다.",
            "마우스의 이동 경로를 연결하고, 선을 화면에 출력했습니다.",
            "버튼 클릭 시 상태를 토글하며, 캔버스를 채우거나 선을 그릴 수 있도록 설정했습니다.",
            "모드 전환 상태는 버튼 텍스트(Fill, Draw)로 즉시 확인 가능합니다.",
          ],
        },
        {
          title: "색상 및 브러쉬 설정",
          details: [
            "색상 선택 도구와 data-color 속성을 활용해 선 색상과 채우기 색상을 동적으로 변경했습니다.",
            "슬라이더로 선 두께를 실시간으로 조정 가능합니다.",
          ],
        },
        {
          title: "컨버스 지우개 및 전체 삭제",
          details: [
            "지우개 버튼은 선 색상을 흰색으로 변경하여 마치 지우개처럼 작동하도록 구현했습니다.",
            "전체 삭제 버튼 클릭 시 캔버스를 흰색으로 덮어 초기 상태로 복원했습니다.",
          ],
        },
        {
          title: "텍스트 추가",
          details: [
            "캔버스에서 더블 클릭 이벤트 발생 시 사용자가 입력한 텍스트 출력했습니다.",
            "텍스트 스타일 설정이 다른 작업에 영향을 미치지 않도록 구현했습니다.",
          ],
        },
        {
          title: "이미지 저장",
          details: [
            "canvas.toDataURL()을 사용해 캔버스의 현재 상태를 Base64로 인코딩된 이미지 URL로 변환했습니다.",
            "<a> 태그를 동적으로 생성하여 href 속성에 해당 URL을 연결하고, download 속성을 사용해 파일명을 지정했습니다.",
            "임의로 클릭 이벤트를 발생시켜 사용자가 이미지를 다운로드할 수 있도록 처리했습니다.",
          ],
        },
        {
          title: "이미지 업로드",
          details: [
            "파일 입력 이벤트에서 첫 번째 파일을 가져와, URL.createObjectURL()로 브라우저에서 사용할 임시 URL 생성했습니다.",
            "Image 객체를 생성해 해당 URL을 소스로 지정하고, 캔버스에 이미지를 출력했습니다.",
          ],
        },
      ],
      icandoit: [
        {
          title: "Canvas API를 활용할 수 있게 되었습니다.",
          details: [
            "CSS 리셋 파일에 대해 배웠습니다.",
            "마우스의 여러 이벤트에 대해 함수를 적용할 수 있게 되었습니다.",
            "저장 시 이미지를 URL로 인코딩하여 이미지를 저장할 수 있게 되었습니다.",
          ],
        },
      ],
    },
  },
  {
    key: "starbucks",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/starbucks_video.mp4",
        }],
        title: "Starbucks Clone",
        description: "라이브러리나 프레임워크를 사용하지 않고\nVanilla JS로 구현한 스타벅스 클론코딩 웹사이트",
        github: "https://github.com/seung-mii/starbucks",
        link: "https://seung-mii.github.io/starbucks/",
        period: "2022.08.15 ~ 2022.08.21",
        personnel: ["FE: 1"],
        skills: ["HTML", "CSS", "JavaScript"],
        result: ["Lighthouse 기준 성능: 95점, 접근성과 SEO: 93점"],
      },
      function: [
        {
          title: "스크롤 이벤트를 통한 버튼 및 배지 표시 관리",
          details: [
            "GSAP 라이브러리를 사용해 스크롤 위치에 따라 요소의 상태를 보여주기/숨김 처리, 최상단 이동 설정했습니다.",
          ],
        },
        {
          title: "Swiper를 사용한 슬라이드 자동 재생 관리",
          details: [
            "autoplay와 loop 옵션을 사용하여 슬라이드를 자동 재생 설정했습니다."
          ],
        },
        {
          title: "YouTube API를 사용한 영상 재생 및 상태 관리",
          details: [
            "onYouTubeIframeAPIReady 함수를 사용해 유튜브 영상을 삽입했습니다.",
            "autoplay와 loop 옵션으로 영상을 자동 재생 및 반복 재생 설정했습니다.",
            "playVars에서 음소거 기능을 지원하지 않아 이벤트 처리로 음소거 설정했습니다.",
          ],
        },
        {
          title: "배경 이미지 상태 관리",
          details: [
            "background-attachment: fixed와 background-repeat: no-repeat 속성을 사용해 배경 이미지가 고정되도록 설정하고 이미지가 반복되지 않도록 설정했습니다.",
          ],
        },
        {
          title: "마우스 hover 시 애니메이션을 통한 정보 표시",
          details: [
            "마우스 hover 이벤트 발생 시 요소가 180도 회전하도록 설정하여 상세 정보가 표시되도록 애니메이션 효과 구현했습니다.",
          ],
        },
      ],
      icandoit: [
        {
          title: "동영상을 연동할 수 있습니다.",
          details: [
            "동영상의 다양한 옵션에 대해 활용할 수 있습니다.",
          ],
        },
        {
          title: "인터랙티브 컴포넌트에 대해 배웠습니다.",
          details: [
            "Scroll과 Swiper를 구현할 수 있습니다."
          ],
        }
      ],
    },
  },
  {
    key: "overwatch",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/overwatch_video.mp4",
        }],
        title: "Overwatch Heroes Selection",
        description: "Overwatch 게임의 영웅 선택 화면",
        github: "https://github.com/seung-mii/overwatch_heroes_selection",
        period: "2022.08.13 ~ 2022.08.14",
        personnel: ["FE: 1"],
        skills: ["HTML", "CSS"],
      },
      icandoit: [
        {
          title: "HTML에 대해 배웠습니다.",
          details: [
            "HTML 구조를 작성할 수 있게 되었습니다.",
            "시멘틱 태그에 대해 배웠습니다.",
          ],
        },
        {
          title: "CSS를 활용할 수 있게 되었습니다.",
          details: [
            "Mouse Hover 시 이벤트를 넣었습니다.",
            "class를 활용해 CSS를 지정할 수 있습니다.",
          ],
        },
      ],
    },
  },
];