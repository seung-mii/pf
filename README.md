# 🎨 포트폴리오 웹사이트

🔹 **개인 프로젝트**  
📅 **개발 기간:** 2024.10.03 ~ 2024.12.30  
🌍 **배포 주소:** [🔗 Link](https://seung-mi-pf.vercel.app/)  


<br/>

## 📝 Project Introduce
Next.js와 Three.js, Tailwind CSS를 함께 공부하기 위해 제작한 웹사이트입니다.


<br/>

## 🚀 Getting Started
### 🛠 Requirements  
For building and running the application you need:
- **Node.js** `>= 20.0.0`  
- **Npm** `>= 8.0.0`


### 📦 Installation  
```bash
$ git clone https://github.com/seung-mii/pf.git
$ cd pf  
```


### 🖥 Execution
``` bash
$ npm install  
$ npm run dev  
```

<br/>

## 🔧 Tech Stack
### ⚙️ Environment  
<p align="left">
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</p>


### 🛠️ Development  
<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> 
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white"> 
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"> 
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> 
</p>


### 📚 Library  
<p align="left">
  <img src="https://img.shields.io/badge/EmailJS-0072C6?style=for-the-badge&logo=maildotru&logoColor=white">  
  <img src="https://img.shields.io/badge/Lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white">
  <img src="https://img.shields.io/badge/React Toastify-FF6F00?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Intersection Observer API-007ACC?style=for-the-badge&logo=javascript&logoColor=white">
  <img src="https://img.shields.io/badge/React Syntax Highlighter-FFCC00?style=for-the-badge&logo=react&logoColor=black">
</p>


<br/>


## ✨ Key Features
### 💡 반응형 디자인을 구현하였습니다.
- Tailwind CSS의 반응형 접두사를 활용하여 다양한 뷰포트 크기에 맞는 디자인을 조정했습니다.
- 커스텀 브레이크포인트를 `tailwind.config.js` 파일에 정의하여 프로젝트에 맞는 유연한 레이아웃을 설계했습니다.
- 모바일, 태블릿, 데스크톱 환경에서도 일관된 사용자 경험을 제공하는 디자인을 구현했습니다.


### 💡 성능 개선 및 최적화(리팩토링)하였습니다.
- 영상 컴포넌트에 대해 next/dynamic을 활용해 컴포넌트 단위 지연 로딩을 적용하고, H.264 코덱과 MP4 포맷으로 변환하여 초기 로딩 성능을 개선하였습니다.
- 반복 렌더링되는 리스트는 useMemo로 캐싱하고, 이벤트 핸들러는 useCallback을 통해 렌더링 최적화를 적용해 전반적인 렌더 효율을 높였습니다.
- Lodash 라이브러리의 throttle를 활용하여 이벤트 핸들러 호출 빈도를 제한하여 성능을 개선하였습니다.
- Intersection Observer API를 활용하여 스크롤 이벤트를 효율적으로 처리하고 필요한 콘텐츠만 로드하여 성능을 최적화하였습니다.


### 💡 Three.js 라이브러리를 사용하여 웹페이지에 3D 환경을 구현했습니다. (UX 개선을 위해 현재는 삭제)
- 카메라, 조명, 렌더링을 설정하여 몰입감 있는 배경을 제작했습니다.
- 3D 배경이 사용자 인터랙션에 따라 동적으로 반응하도록 구현했습니다.


### 💡 SVG 요소를 사용해 텍스트에 애니메이션 효과를 추가했습니다. (UX 개선을 위해 현재는 삭제)
- clip-path를 활용하여 텍스트 디자인을 구현했습니다.
- 애니메이션을 넣어 텍스트가 부드럽게 나타나거나 사라지는 효과를 구현했습니다.


### 💡 React와 CSS를 활용하여 스크롤 시 카드를 3D로 뒤집는 애니메이션을 구현했습니다.
- Intersection Observer를 사용하여 카드가 뷰포트에 들어왔을 때 애니메이션이 실행되도록 설정했습니다.
- CSS의 transform과 perspective를 조합하여 부드럽고 자연스러운 3D 효과를 만들었습니다.


### 💡 카드 요소에 perspective를 적용하여 3D 입체감을 부여했습니다.
- 마우스 움직임에 따라 카드의 각도가 실시간으로 변경되도록 구현했습니다.
- React 상태 관리와 CSS 애니메이션을 결합해 인터랙션이 부드럽게 동작하도록 설계했습니다.


### 💡 폴더 모양의 UI를 만들어 스크롤과 함께 열리고 닫히는 애니메이션을 구현했습니다. (UX 개선을 위해 현재는 삭제)
- 스크롤 위치에 따라 CSS 클래스가 동적으로 변경되도록 설정했습니다.
- 폴더의 열림과 닫힘 애니메이션을 keyframes를 활용해 매끄럽게 처리했습니다.

<br/>

## 🏛️ Architecture
### 📂 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── tailwind.config.ts
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── favicon.ico
│   └── [id]
│       └── page.tsx
├── components/
│   ├── ContentSection.tsx
│   ├── CareerSection.tsx
│   ├── FlipCareerCard.tsx
│   ├── StaticHighlight.tsx
│   ├── TypeEffect.tsx
│   ├── Contact.tsx
│   ├── Projects.tsx
│   ├── contact/
│   │   ├── FrontCard.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── BackCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── FlipIcon.tsx
│   └── projects/
│       ├── InfoSection.tsx
│       ├── LazyVideo.tsx
│       ├── RealVideo.tsx
│       └── ToggleGroup.tsx
├── hooks/
│   └── useCardFlip.ts
├── utils/
│   └── toKorChars.ts
├── data/
│   ├── projects.ts
│   ├── details.ts
│   ├── careers.ts
│   └── contents.ts
└── public/
    ├── img/
    │   └── ...
    └── video/
        └── ...

```

<br/>

<p align="right">
  <a href="https://hits.seeyoufarm.com">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fseung-mii%2Fpf&count_bg=%23748DA6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false">
  </a>
</p>