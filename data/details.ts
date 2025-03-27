export interface ToggleProps {
  id: number;
  title: string;
  cause?: string;
  solution?: string[];
  code?: string[];
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
  code?: string[];
}

interface VideoInfo {
  title: string;        
  url: string;          
}

interface KPTInfo {
  keep?: string[];
  problem?: string[];
  trys?: string[];   
}

export interface DetailTotalInfo {
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
  functions?: DetailsInfo[];
  troubleshooting?: TroubleInfo[];
  icandoit?: DetailsInfo[];
  kpt?: KPTInfo;
}

export const detailsData: { key: string; value: DetailTotalInfo }[] = [
  {
    key: "three",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/three_video.mov",
        }],
        title: "3차원 하늘 공간",
        description: "Three.js 공부를 위해 제작해본 웹사이트",
        github: "https://github.com/seung-mii/threejs-study",
        period: "2024.12.15 ~ 2024.12.26",
        personnel: ["FE 1명"],
        skills: ["Three.js"],
      },
      functions: [
      {
        title: "3차원 하늘 공간을 구현했습니다.",
        details: [
          "육면체 지오메트리에 하늘 텍스처를 매핑하여 스카이박스를 구성하고, 카메라를 내부에 배치했습니다.",
        ],
      }],
    },
  },
  {
    key: "movie",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/movie_video.mp4",
        }],
        title: "Movie Web",
        description: "영화 웹사이트",
        github: "https://github.com/seung-mii/nextjs-study",
        period: "2024.11.13 ~ 2024.11.20",
        personnel: ["FE 1명"],
        skills: ["Next.js", "React", "Typescript", "Vercel"],
      },
      functions: [
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
      kpt: {
        keep: [
          "동적 라우팅과 Suspense를 통해 영화별 상세 정보를 쉽고 빠르게 확인할 수 있도록 구현했다.",
          "CSS 모듈을 활용하여 컴포넌트 단위 스타일로 충돌을 방지하고 유지보수가 용이하게 구현했다."
        ],
        problem: [
          "큰 동영상 파일이 여러 개 로드될 때 초기 로딩 시간이 길어질 우려가 있다.",
          "네트워크 에러 시 fallback UI를 표시하는 로직이 미흡하여 사용자 경험 저하 가능성이 있다."
        ],
        trys: [
          "Lazy loading 기법을 적용하거나 동영상 리소스를 더욱 세분화하여 로딩 성능을 개선하려고 한다.",
          "에러 처리에 대한 구체적인 대응 방안을 보강해 사용자 경험을 높일 예정이다.",
          "큰 동영상 파일이 여러 개 로딩될 경우를 대비해 코드 스플리팅과 React Lazy/Suspense를 좀 더 세분화하면 성능을 최적화할 수 있을 것 같다."
        ],
      }
    },
  },
  {
    key: "portfolio",
    value: {
      information: {
        videos: [{
          title: "Mobile ver.",
          url: "/video/pf_video.mov",
        }, {
          title: "Previous ver.",
          url: "/video/prepf_video.mp4",
        }],
        title: "Portfolio",
        description: "모바일부터 데스크톱까지 반응형 포토폴리오 사이트",
        github: "https://github.com/seung-mii/pf",
        link: "https://seung-mi-pf.vercel.app/",
        period: "2024.10.03 ~ 2024.12.30",
        personnel: ["FE 1명"],
        skills: ["Next.js", "Three.js", "React", "Typescript", "Tailwind CSS", "Vercel"],
        result: [
          "Lighthouse 기준 성능이 94점, 접근성이 96점, SEO가 92점을 기록했습니다.",
        ],
      },
      functions: [{
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
          "영상 컴포넌트에 대해 next/dynamic을 활용해 컴포넌트 단위 지연 로딩을 적용하고, H.264 코덱과 MP4 포맷으로 변환하여 초기 로딩 성능을 개선하였습니다.",
          "반복 렌더링되는 리스트는 useMemo로 캐싱하고, 이벤트 핸들러는 useCallback을 통해 렌더링 최적화를 적용해 전반적인 렌더 효율을 높였습니다.",
          "Lodash 라이브러리의 throttle를 활용하여 이벤트 핸들러 호출 빈도를 제한하여 성능을 개선하였습니다.",
          "Intersection Observer API를 활용하여 스크롤 이벤트를 효율적으로 처리하고 필요한 콘텐츠만 로드하여 성능을 최적화하였습니다.",
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
        title: "카드 요소에 perspective를 적용하여 3D 입체감을 부여했습니다.",
        details: [
          "마우스 움직임에 따라 카드의 각도가 실시간으로 변경되도록 구현했습니다.",
          "React 상태 관리와 CSS 애니메이션을 결합해 인터랙션이 부드럽게 동작하도록 설계했습니다.",
        ],
      },
      {
        title: "폴더 모양의 UI를 만들어 스크롤과 함께 열리고 닫히는 애니메이션을 구현했습니다. (UX 개선을 위해 현재는 삭제)",
        details: [
          "스크롤 위치에 따라 CSS 클래스가 동적으로 변경되도록 설정했습니다.",
          "폴더의 열림과 닫힘 애니메이션을 keyframes를 활용해 매끄럽게 처리했습니다.",
        ],
      },
      {
        title: "Three.js 라이브러리를 사용하여 웹페이지에 3D 환경을 구현했습니다. (UX 개선을 위해 현재는 삭제)",
        details: [
          "카메라, 조명, 렌더링을 설정하여 몰입감 있는 배경을 제작했습니다.",
          "3D 배경이 사용자 인터랙션에 따라 동적으로 반응하도록 구현했습니다.",
        ],
      },
      {
        title: "SVG 요소를 사용해 텍스트에 애니메이션 효과를 추가했습니다. (UX 개선을 위해 현재는 삭제)",
        details: [
          "clip-path를 활용하여 텍스트 디자인을 구현했습니다.",
          "애니메이션을 넣어 텍스트가 부드럽게 나타나거나 사라지는 효과를 구현했습니다.",
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
      kpt: {
        keep: [
          "Tailwind CSS로 반응형 디자인을 일관되게 적용해 모바일부터 데스크톱까지 호환성을 갖췄다.",
          "Three.js, SVG 애니메이션 등 다양한 시도를 통해 시각적·기술적 역량을 넓혔다."
        ],
        problem: [
          "3D 효과나 애니메이션이 많으면 성능이 떨어지고, UX가 복잡해져 사용자 이탈이 발생할 수 있다.",
        ],
        trys: [
          "사용자 옵션을 제공하여 3D 배경이나 SVG 애니메이션 효과를 ON/OFF로 선택할 수 있도록 수정할 수 있다."
        ],
      }
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
          // {
          //   title: "Dining & Nightlife and Clubs",
          //   url: "/video/zomato_video2.mp4",
          // },
        ],
        title: "Zomato Clone",
        description: "라이브러리나 프레임워크를 사용하지 않고\nVanilla JS로 구현한 Zomato 클론코딩 웹사이트",
        github: "https://github.com/seung-mii/zomato-clone",
        link: "https://zomato-clone-by-sm.vercel.app/index.html",
        period: "2023.02.07 ~ 2023.05.15, 2024.09.02 ~ 2024.09.29",
        personnel: ["FE 1명"],
        skills: ["HTML", "SCSS", "JavaScript", "Vercel"],
        result: ["Lighthouse 기준 SEO와 접근성이 76점 → 100점으로 31% 증가했습니다."],
      },
      functions: [
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
      kpt: {
        keep: [
          "라이브러리나 프레임워크 없이 웹 표준에 충실해 접근성과 SEO 점수를 크게 높였다.",
        ],
        problem: [
          "Vanilla JS로 기능이 많아지면 코드 구조가 복잡해지고 유지보수가 어렵다."
        ],
        trys: [
          "Webpack/Vite 등 번들러로 코드를 모듈화해 빌드 프로세스를 최적화하고 코드 구조를 정리하면 좋을 것 같다."
        ],
      }
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
        personnel: ["FE 1명"],
        skills: ["React", "Redux", "Fabric.js", "Typescript", "Tailwind CSS"],
        challenge: [
          "기존의 타사 라벨링툴은 하나의 이미지를 라벨링하는 데 시간이 많이 소요되었습니다."
        ],
        approach: [
          "회사의 라벨러 5명과 소통하여 파악한 결과, 단축키와 필터 기능의 부족으로 인한 작업 효율 저하가 주요 문제라는 것을 알게 되었습니다.",
          "단기간에 구현해야했기 때문에 라이브러리를 사용하여 개발하기로 하였습니다.",
          "Canvas 기반의 라이브러리 Fabric.js, Konva.js, Paper.js, Pixi.js 4개를 비교분석하였습니다.",
          "실시간 필터 효과와 세부적인 도형 편집을 제공하는 Fabric.js를 채택하여 사용자의 요구에 맞춘 라벨링툴을 개발하였습니다."
        ],
        result: [
          "작업 과정에서 클릭 수가 약 40% 감소하였습니다.",
          "타사 라벨링툴을 사용하는 비용인 매월 약 150만 원의 비용 절감하였습니다.",
        ],
      },
      functions: [
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
            "memo를 사용해 Canvas 컴포넌트를 메모이제이션함으로써 props가 변경되지 않는 한 리렌더링되지 않도록 설정하여 이전에 그린 어노테이션 상태가 유지되도록 했습니다.",
          ],
          code: [`
+ import { memo } from 'react';

  const Canvas: React.FC<Props> = (props) => {
    return (
      <div>
        <canvas id="canvas" />
      </div>
    );
  };

- export default Canvas;
+ export default memo(Canvas);
          `],
        },
        {
          title: "무한 루프 문제",
          cause: "datasetClasses가 리렌더링 시마다 새로운 배열이 생성되어 이를 의존성으로 사용하는 useEffect가 값이 변경된 것으로 잘못 인식해 반복 실행되면서 무한 루프가 발생했습니다.\nchangeColorHotkey과 addFilterImg 함수가 매 렌더링마다 새 함수가 만들어져서 이 함수를 의존성 배열에 등록한 useEffect가 계속 변경되었다고 인식해 반복 실행되거나 불필요한 리렌더링을 유발했습니다.\nDOM 요소(Fabric.js Canvas 인스턴스)나 특정 좌표 값(canvasRef, imageSizeRef, isPanning, origX, origY 등)을 useState로 관리하면 변경 시마다 리렌더링이 발생하고 의존성 배열로 인한 무한 루프가 발생했습니다.\n부모 컴포넌트가 리렌더링될 때, 자식 컴포넌트도 매번 리렌더링되어 불필요한 렌더링되었습니다.",
          solution: [
            "useMemo를 사용해 datasetClasses을 메모이제이션하여 리렌더링 시에도 기존 배열 참조값을 유지하도록 함으로써 useEffect가 불필요하게 재실행되지 않도록 했습니다.",
            "useCallback으로 함수를 감싸 특정 의존성이 변경되지 않으면 함수 참조값이 바뀌지 않도록 해 무한 루프 및 불필요한 리렌더링을 방지했습니다.",
            "useRef를 사용하여 렌더링과 무관하게 유지해야 할 데이터를 저장하고 값 변경 시에도 리렌더링이 일어나지 않게 함으로써 무한 루프나 성능 저하를 방지했습니다.",
            "React.memo를 사용해 자식 컴포넌트를 메모이제이션해 props가 변하지 않는다면 리렌더링을 스킵하여 성능을 최적화하고 불필요한 리렌더링를 방지했습니다.",
          ],
          code: [`
- const datasetClasses = [
+ const datasetClasses = useMemo(() => [
  {
    name: "4",
    tool: [ "BOUNDING_BOX" ],
    color: "#ff00bb"
  }, ...
- ]; 
+ ], []); 
          `, `
- function changeColorHotkey(event: KeyboardEvent) {
+ const changeColorHotkey = useCallback((event: KeyboardEvent) => {
    const keyIndex = parseInt(event.key, 10) - 1;
    if (keyIndex >= 0 && keyIndex < datasetClasses.length) onChangeColor(datasetClasses[keyIndex].color);
+   }, [datasetClasses]
- }
+ );

- function addFilterImg(img: HTMLImageElement) {
+ const addFilterImg = useCallback((img: HTMLImageElement) => {
    const brightnessFilter = new fabric.Image.filters.Brightness({
      brightness: parseFloat(inputValue.brightness) / 100,
    });

    ...
+  }, [inputValue.brightness, inputValue.contrast]
- }
+ );
          `, `
- let canvasRef = null;
+ const canvasRef = useRef<fabric.Canvas | null>(null);
- let imageSizeRef = { minX: 0, maxX: 0, minY: 0, maxY: 0 };
+ const imageSizeRef = useRef({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
- let isPanning = false;
+ const isPanning = useRef(false);
- let isDrawing = true;
+ const isDrawing = useRef(true);
...
          `, `
- export default AnnotationEditorComponent;
+ export default memo(AnnotationEditorComponent);
          `
          ],
        },
        {
          title: "class를 변경하는 단축키 함수를 작성했으나 단축키를 눌러도 class가 변경되지 않는 문제",
          cause: "단축키 함수가 리렌더링마다 새로 생성되면서 이전 참조 상태를 잃고 새로운 참조를 사용해 최신 상태와 불일치하였습니다.",
          solution: [
            "useCallback을 사용해 단축키 함수가 동일한 참조 상태를 유지하도록 메모이제이션하여 함수가 재생성되지 않고 최신 상태를 참조하도록 했습니다.",
          ],
          code: [`
- function changeColorHotkey (event: KeyboardEvent) {
+ const changeColorHotkey = useCallback((event: KeyboardEvent) => {
    const keyIndex = parseInt(event.key, 10) - 1;
    if (keyIndex >= 0 && keyIndex < datasetClasses.length) onChangeColor(datasetClasses[keyIndex].color);
+   }, [datasetClasses]
- }
+ );
          `],
        },
        {
          title: "마우스를 떼면 어노테이션이 다른 위치로 이동하는 문제",
          cause: "리렌더링 시 마우스를 뗄 때의 좌표 값이 제대로 유지되지 않거나 초기화되었습니다.",
          solution: [
            "마우스 좌표 값이 리렌더링에 영향을 받지 않도록 useRef로 관리하여 좌표 값을 유지합니다.",
          ],
          code: [`
- let lastPosX = 0;
+ const lastPosX = useRef(0);
- let lastPosY = 0;
+ const lastPosY = useRef(0);
- let origX = 0;
+ const origX = useRef(0);
- let origY = 0;
+ const origY = useRef(0);
          `, `
const startDraw = (opt: any) => {
-   if (!opt.e.shiftKey && isDrawing && canvas) {
+   if (!opt.e.shiftKey && isDrawing.current && canvasRef.current) {
-     const pointer = canvas.getPointer(opt.e);
+     const pointer = canvasRef.current.getPointer(opt.e);

-     origX = pointer.x;
+     origX.current = pointer.x;
-     origY = pointer.y;
+     origY.current = pointer.y;
    ...
  }
};

const ingDraw = (opt: any) => {
-   if (!isDrawing || !rect || !canvas) return;
+   if (!isDrawing.current || !rect || !canvasRef.current) return;
-   const pointer = canvas.getPointer(opt.e);
+   const pointer = canvasRef.current.getPointer(opt.e);

-   let width = Math.abs(origX - pointer.x);
+   let width = Math.abs(origX.current - pointer.x);
-   let height = Math.abs(origY - pointer.y);
+   let height = Math.abs(origY.current - pointer.y);
  ...
};
          `],
        },
      ],
      icandoit: [
        {
          title: "Redux를 사용한 효율적인 상태 관리를 할 수 있습니다.",
          details: [
            "컴포넌트 간의 상태를 중앙에서 체계적으로 관리하여 유지보수성과 확장성을 높일 수 있습니다.",
          ],
        },
        {
          title: "React Hooks를 활용해 성능을 개선할 수 있습니다.",
          details: [
            "useEffect, useMemo, useCallback, useRef, React.memo를 활용하는 방법을 압니다.",
            "리렌더링을 방지해 무한 루프 문제를 해결할 수 있습니다."
          ],
        },
      ],
      kpt: {
        keep: [
          "Figma로 디자인을 미리 완성한 후 UI를 구성하고, 연관성이 낮은 기능부터 순차적으로 구현 계획을 세우니 개발을 빠르게 진행할 수 있었다.",
          "Fabric.js를 활용해 도형 편집, 단축키, 필터 적용 등 라벨링 프로세스를 효율적으로 구현했다.",
        ],
        problem: [
          "Canvas 라이브러리와 React 상태 관리가 얽혀 리렌더링 이슈·무한 루프 등 복잡한 버그가 발생했다.",
          "개발 기간 중 빈번한 버그로 인해 일정이 지연되었다.",
        ],
        trys: [
          "Fabric.js + React 구조를 사전에 문서화하고 이벤트 바인딩과 Canvas 초기화 흐름을 체계화해 협업 시 혼선을 줄일 수 있다.",
          "성능 테스트 및 테스트 코드를 마련해 안정성을 강화하면 좋을 것 같다.",
        ],
      }
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
      functions: [
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
      kpt: {
        keep: [
          "Firebase Authentication, Firestore를 이용해 빠르게 SNS 기초 기능(트윗 작성, 실시간 업데이트)을 구축했다.",
          "TypeScript + Vite를 통해 빌드 속도를 높이고 코드 안정성을 확보했다.",
        ],
        problem: [
          "Firebase만 쓰면 복잡한 권한 분기나 대용량 트래픽 시 제약이 있을 수 있다.",
          "보안 규칙 설정이 미비하면 잘못된 데이터 접근 가능성이 생길 여지가 있다.",
        ],
        trys: [
          "Firebase Security Rules, Cloud Functions 등을 적극적으로 활용해 권한 문제를 예방할 계획이다.",
          "SNS 특성상 이미지 업로드 및 알림 같은 기능을 추가 개발해 확장성을 키우려고 한다."
        ],
      }
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
        personnel: ["FE 1명", "BE 3명"],
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
          "Lighthouse 기준, 성능과 SEO을 92점을 기록했습니다.",
          "FCP가 0.6s, TBT가 0.02s를 기록했습니다.",
        ],
        award: [
          "제3회 경상북도 공공데이터 활용 창업경진대회 제품 및 서비스 개발 부문 우수 (12개의 팀 중 2등)",
          "포항테크노파크",
          "2023.07.28",
          "2023년 한국정보기술학회 대학생 논문경진대회 우수논문상 동상",
          "한국정보기술학회장",
          "2023.06.02",
        ],
      },
      functions: [
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
          cause: "위치 정보는 비동기적으로 받아오는데 위치 정보가 도착하기 전에 지도가 렌더링되어 초기 렌더링 시점에서는 마커를 표시할 정확한 위치 정보가 없었고, 위치 정보를 나중에 받아왔지만 이미 렌더링된 지도에는 반영되지 않았습니다.",
          solution: [
            "getCurrentPosition은 비동기적으로 현재 사용자의 위치를 가져오는 함수이므로 위치 정보를 받아온 후에 마커를 지도에 표시하는 로직을 실행해야 했습니다.",
            "Promise를 return하여 then() 메서드를 활용해 위치 정보를 받은 후 좌표 정보를 지도에 반영하고 마커를 표시할 수 있게 했습니다.",
            "사용자의 현재 위치 정보인 point가 업데이트될 때마다 useEffect 훅이 실행되어 지도가 다시 렌더링되고 해당 위치에 맞춰 마커가 표시되도록 했습니다.",
          ],
          code: [`
+ function getCurrentPosition() {
+   return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
-     setPoint(position);
+   });
+ }

+ useEffect(() => {
+   getCurrentPosition()
+   .then(point => setPoint(point))
+ }, [])
          `, `
useEffect(()=> {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(\`http://119.56.230.204:506/api/nodes?latitude=\${point.coords.latitude}&longitude=\${point.coords.longitude}\`, requestOptions)
  .then(response => response.json())
  .then(result => setList(result))
  .catch(error => console.log('error :: ', error))
- }, []);
+ }, [point])
          `],
        },
        {
          title: "출발지 및 도착지 변경 후 경로 정보를 가져오지 못하는 문제",
          cause: "출발지 및 도착지를 변경했으나 해당 변경을 감지하지 못해 API 호출이 발생하지 않았습니다.",
          solution: [
            "useEffect의 의존성 배열에 출발지 및 도착지 정보 변수를 추가하여 변수가 변경될 때마다 useEffect 내의 코드가 다시 실행되도록 했습니다.",
            "출발지 및 도착지 중 하나라도 변경되면 자동으로 API 호출을 트리거하여 최신 경로 정보를 가져와 동적으로 업데이트되도록 처리했습니다.",
          ],
          code: [`
useEffect(() => {
  if(destinationSelected != undefined) {
    fetch(\`http://119.56.230.204:506/paths?departureLongitude=\${departureSelected.longitude}&departureLatitude=\${departureSelected.latitude}&arrivalLongitude=\${destinationSelected.longitude}&arrivalLatitude=\${destinationSelected.latitude}\`, requestOptions)
    .then(response => response.json())
    .then(result => { setList(result); })
    .catch(error => console.log('error :: ', error));
  }
- }, []);
+ }, [departureSelected, destinationSelected]);
          `],
        },
        {
          title: "출발지와 도착지 키워드 검색 시 다른 지역도 나오는 문제",
          cause: "Kakao Maps API를 사용하여 키워드 검색을 수행할 때 지역 필터링 없이 전국 단위로 검색 결과를 반환하기 때문에 경북 구미시에 한정된 결과를 얻지 못했습니다.",
          solution: [
            "주소의 앞 6자리를 비교하여 주소가 '경북 구미시'로 시작하는 결과만 남기고 다른 지역의 결과는 필터링하는 로직을 추가하여 수신된 데이터에 대해 원하는 지역의 장소만 남겼습니다.",
          ],
          code : [`
const onDepartureClick = () => {
  ...
  function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
-       setDepartureList(data);
+       {data && data.map((items) => {if (items.address_name.slice(0, 6) == "경북 구미시") { setDepartureList(data); } })}
    } 
  }
}

const onDestinationClick = () => {
  ...
  function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
-       setDestinationList(data);
+       {data && data.map((items) => { if (items.address_name.slice(0, 6) == "경북 구미시") { setDestinationList(data); } }) }
    } 
  }
}
          `],
        },
        {
          title: "가독성과 유지보수성이 낮은 문제",
          cause: "CSS로 구현하면 컴포넌트 단위로 스타일을 관리하기가 어려우며 재사용성이 부족해 코드가 길어졌습니다.",
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
          title: "Fetch API를 통한 비동기 데이터 수신할 수 있습니다.",
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
      kpt: {
        keep: [
          "백엔드 구현이 완료되지 않은 상황에서 더미 데이터를 사용하여 미리 연동하였고, 이를 통해 사전 구현을 진행함으로써 전체 개발 시간을 단축할 수 있었다.",
          "백엔드와 함께 응답 명세 API 설계를 했었는데 같이 하니까 백엔드가 생각하지 못한 프론트에서 필요한 정보를 바로 알려줄 수 있어서 편했다.",
          "1달이라는 짧은 기간 동안 저상버스만 별도 조회 가능한 MVP를 완성해 대회에서 2등을 수상했다.",
        ],
        problem: [
          "너무 빠른 개발 일정으로 에러 처리가 미흡하다.",
        ],
        trys: [
          "위치 정보 수신 후 지도 렌더링을 진행하도록 비동기 흐름을 정교화하고 예외 처리를 보완하는 것이 좋을 것 같다.",
          "향후 단계에서는 장애 상황을 대비해 로딩/에러 UI를 명확히 제공할 계획이다.",
        ],
      }
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
        description: "배달 음식을 함께 주문할 같은 학교 학생들을 구하는 어플",
        github: "https://github.com/seung-mii/NF_frontend/tree/main",
        period: "2023.04.25 ~ 2023.06.02",
        personnel: ["FE 3명", "BE 2명"],
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
      functions: [
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
          code: [`
{
  "name": "neighborfood",
  "version": "0.1.0",
  "private": true,
+   "proxy": "http://localhost:8080",
  "dependencies": {
    ...
  }
}
          `,`
let headers = new Headers({
  "Content-Type": "application/json", 
});

const accessToken = AppStorage.getItem("ACCESS_TOKEN");
if (accessToken) {
  headers.append("Authorization", "Bearer " + accessToken);
}

let options = {
  headers: headers,
-   url: "http://..." + api,
+   url: APL_BASE_URL + api,
  method: method,
};

if (request) {
  options.body = JSON.stringify(request);
}
          `],
        },
        {
          title: "본인이 작성하지 않은 게시물과 댓글이 삭제 가능한 문제",
          cause: "게시물과 댓글을 작성한 사용자와 현재 로그인한 사용자를 구분하지 못했습니다.",
          solution: [
            "Morpheus 앱에서는 localStorage를 사용할 수 없기 때문에 AppStorage를 통해 현재 로그인한 사용자의 ID와 게시물 및 댓글 작성자의 ID를 비교하여, 일치하는 경우에만 삭제 버튼을 표시해 삭제 가능하도록 수정했습니다.",
          ],
          code: [`
/src/AppStorage.js

+ const isMorpheus = (() => {
+   const userAgent = window.navigator.userAgent.toLocaleLowerCase();
+   return userAgent.indexOf("morpheus") > -1;
+ })();

+ export function getItem(key) {
+   return isMorpheus ? M.data.storage(key) : localStorage.getItem(key);
+ }

+ export function setItem(key, value) {
+   return isMorpheus
+     ? M.data.storage(key, value)
+     : localStorage.setItem(key, value);
+ }

+ export function removeItem(key, value) {
+   return isMorpheus
+     ? M.data.removeStorage(key, value)
+     : localStorage.removeItem(key, value);
+ }
+           `, `
+ AppStorage.getItem("username") === list.member.name && (
+   <button onClick={() => onBoardDelete(list.board_no)}>
+     <span class="material-symbols-rounded">delete</span>
+   </button>
+ )
+           `, `
+ AppStorage.getItem("username") === item.writer && (
+   <button onClick={() => onCommentDelete(item.reply_no)}>
+     <span class="material-symbols-rounded">delete</span>
+   </button>
+ )
          `],
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
      kpt: {
        keep: [
          "배달비 절감을 위해 학교 사람들끼리 모여서 주문하는 기획으로 대회 기간 내에 성공적으로 완성했다.",
          "팀원들 사이에 소통을 많이 해서 설계를 미흡하게 했음에도 빠르게 잘 해결해 나갔다.",
        ],
        problem: [
          "개발 과정에서 설계를 조금 미흡하게 한 탓에 중간중간 많은 수정을 거쳤고, 이로 인해 시간이 많이 소요된 점이 아쉬웠다.",
          "원래는 채팅방 형식으로 모임을 구성하는 방향으로 기획했지만 시간상의 제한으로 인해 게시글과 댓글 형식으로 변경하여 구현했다."
        ],
        trys: [
          "설계에 시간이 많이 소요되어도 설계를 꼼꼼하게 해야겠다고 다짐하였다.",
          "게시글과 댓글 대신 채팅방 형식으로도 구현해보려고 한다.",
        ],
      }
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
      functions: [
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
      kpt: {
        keep: [
          "9일만에 SpringBoot를 활용한 CRUD를 성공적으로 구현했다.",
          "Spring Boot + React로 풀스택을 구성해 음식점 목록, 추천 메뉴, 별점·리뷰 등을 한꺼번에 다뤘다.",
        ],
        problem: [
          "H2 데이터베이스 중심이라 운영 단계에서의 대규모 확장성은 고려하지 못했다.",
        ],
        trys: [
          "향후 MySQL/PostgreSQL 등 정식 DB로 이전하고 배포 환경까지 고려해 확장성을 높일 수 있다.",
          "Redux/React Query를 도입해 실시간 리뷰 갱신을 체계화하고 악성 리뷰나 중복 리뷰를 방지하는 로직도 추가할 계획이다."
        ],
      }
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
      functions: [
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
      kpt: {
        keep: [
          "Spring MVC와 MyBatis를 이용해 전통적인 JSP 기반 웹 애플리케이션을 완성해 전통적인 서버 렌더링 패턴을 이해했다.",
        ],
        problem: [
          "JSP + MyBatis + XML 설정은 비교적 오래된 스택이어서 유지보수성이나 확장성에서 한계가 있다.",
          "단위/통합 테스트가 부족해 기능 확장 시 에러를 사전에 잡기 어렵다.",
        ],
        trys: [
          "Spring Boot와 JPA로 마이그레이션하여 최신 스택 활용 및 설정 단순화를 시도해볼 수 있다.",
          "JUnit/Mockito 테스트 코드를 도입해 DAO/Service 레이어의 동작을 사전에 검증하고 품질을 높일 수 있다.",
        ],
      }
    },
  },
];