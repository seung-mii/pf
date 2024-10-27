"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Html from "../../public/img/logo/html.webp";
import Css from "../../public/img/logo/css.png";
import Javascript from "../../public/img/logo/javascript.png";
import Typescript from "../../public/img/logo/typescript.webp";
import REact from "../../public/img/logo/react.png";
import Nextjs from "../../public/img/logo/nextjs.webp";
import REdux from "../../public/img/logo/redux.webp";
import REcoil from "../../public/img/logo/recoil.webp";
import Tailwindcss from "../../public/img/logo/tailwindcss.webp";
import Styledcomponent from "../../public/img/logo/styledcomponent.webp";
import Nodejs from "../../public/img/logo/nodejs.png";
import Firebase from "../../public/img/logo/firebase.png";
import Mysql from "../../public/img/logo/mysql.webp";
import Mongodb from "../../public/img/logo/mongodb.webp";
import Figma from "../../public/img/logo/figma.webp";
import Postman from "../../public/img/logo/postman.png";
import { Svg } from "@/components/about/Svg";

export default function About() {
  const tabs = ["Language", "Frontend", "Backend", "DBMS", "Tool"];
  const [isLineAnimating, setIsLineAnimating] = useState(false);
  const [visibleBoxes, setVisibleBoxes] = useState(0);
  const [activeTab, setActiveTab] = useState("Language");

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLineAnimating(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLineAnimating) {
      const interval = setInterval(() => {
        setVisibleBoxes((prev) => {
          if (prev < 4) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 2500);
    }
  }, [isLineAnimating]);

  useEffect(() => {
    let start = 0;
    let end = 0;
    let step = 0;
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const cards = sticky?.querySelectorAll<HTMLDivElement>(".card");
    const length = cards?.length;

    if (!wrapper || !sticky || !length) return;

    const init = () => {
      start = wrapper.offsetTop - 100;
      end = wrapper.offsetTop + wrapper.offsetHeight - window.innerHeight * 1.2;
      step = (end - start) / (length * 2);
    };

    const animate = () => {
      cards.forEach((card, i) => {
        const s = start + step * i;
        const e = s + step * (length + 1);

        if (window.scrollY <= s) {
          card.style.transform = `perspective(100vw) translateX(100vw) rotateY(180deg)`;
        } else if (window.scrollY > s && window.scrollY <= e - step) {
          card.style.transform = `perspective(100vw) translateX(${100 + ((window.scrollY - s) / (e - s)) * -100}vw) rotateY(180deg)`;
        } else if (window.scrollY > e - step && window.scrollY <= e) {
          card.style.transform = `perspective(100vw) translateX(${100 + ((window.scrollY - s) / (e - s)) * -100}vw) rotateY(${180 + -((window.scrollY - (e - step)) / step) * 180}deg)`;
        } else if (window.scrollY > e) {
          card.style.transform = `perspective(100vw) translateX(0vw) rotateY(0deg)`;
        }
      });
    };

    init();
    window.addEventListener("scroll", animate);
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("scroll", animate);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <>
      <div className="px-16 py-8 font-serif">
        <Svg />
        <div className="grid grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`border-[1.5px] border-solid border-[#1A2B3C] p-8 rounded-[15px] text-[1rem] leading-[1.8] bg-transparent hover:bg-white/20 hover:scale-[1.02] transition-opacity transition-transform duration-700 ease-out opacity-0 translate-y-5
                ${visibleBoxes > index ? "opacity-100 translate-y-0" : ""}`}
            >
              {index === 0 && (
                <>
                  <p className="m-0 text-[#1A2B3C]">
                    <span className="text-[#ffdf00]">사용자의 경험과 피드백</span>을 중요하게 생각하며
                  </p>
                  <p className="m-0 text-[#1A2B3C]">
                    이를 반영해 모두를 만족시킬 웹을 개발하고 싶습니다.
                  </p>
                </>
              )}
              {index === 1 && (
                <>
                  <p className="m-0 text-[#1A2B3C]">학생회부터 팀 프로젝트, 인턴까지 다양한 상황에서</p>
                  <p className="m-0 text-[#1A2B3C]">
                    <span className="text-[#ffdf00]">여러 사람들과 일을 수행하며 성공적인 결과를 도출한 경험</span>이 있어
                  </p>
                  <p className="m-0 text-[#1A2B3C]">협업에 자신 있습니다.</p>
                </>
              )}
              {index === 2 && (
                <>
                  <p className="m-0 text-[#1A2B3C]">인턴 당시 사용자 편의성을 해결하여</p>
                  <p className="m-0 text-[#1A2B3C]">
                    <span className="text-[#ffdf00]"> 작업 효율 40% 증가와 약 150만 원을 절감</span>한 경험이 있습니다.
                  </p>
                </>
              )}
              {index === 3 && (
                <>
                  <p className="m-0 text-[#1A2B3C]">지식을 습득하고 이해하는 과정을 기록으로 남겨</p>
                  <p className="m-0 text-[#1A2B3C]">
                    성장하기 위해 꾸준히 <Link href="https://mi-dairy.tistory.com/" target="_blank" className="underline">블로그</Link>에 기록하고 있습니다.
                  </p>
                  <p className="m-0 text-[#1A2B3C]">
                    현재 다양한 주제에 대해 <span className="text-[#ffdf00]">200+</span>개 작성하였습니다.
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 font-serif">
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-base border-2 border-[#1a2b3c] rounded-[25px] bg-transparent cursor-pointer transition-colors duration-300  hover:bg-[#1a2b3c] hover:text-[#D1E4EC] ${activeTab === tab ? "bg-[#1a2b3c] text-[#D1E4EC]" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === "Language" && (
          <div className="flex flex-col items-start pl-8">
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Html} alt="HTML Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">HTML</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">웹 표준과 접근성을 고려한 마크업을 작성할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Css} alt="CSS Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">CSS</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">스타일 관련 라이브러리 없이 CSS만으로 원하는 스타일을 구현할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Javascript} alt="JavaScript Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">
                  JavaScript
                </h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">Vanilla JS로만 작동되는 웹을 구현할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Typescript} alt="TypeScript Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">
                  TypeScript
                </h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">타입 안정성을 보장하며 유지보수가 쉬운 코드를 작성할 수 있으며 버그를 사전에 방지할 수 있습니다.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Frontend" && (
          <div className="flex flex-col items-start pl-8">
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={REact} alt="React Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">React</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">재사용 가능한 컴포넌트 기반 설계 및 개발을 할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Nextjs} alt="Next.js Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">Next.js</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">SSR 및 정적 사이트 생성을 구현할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={REdux} alt="Redux Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">Redux</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">애플리케이션 상태를 중앙에서 관리하고 디버깅을 용이하게 할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={REcoil} alt="Recoil Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">Recoil</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">Recoil을 활용하여 간편하게 글로벌 상태 관리를 구현할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Tailwindcss} alt="Tailwind CSS Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">
                  Tailwind CSS
                </h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">유틸리티 클래스 기반으로 효율적이고 반응형 스타일을 작성할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Styledcomponent} alt="styled-component Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">
                  styled-component
                </h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">컴포넌트 기반으로 스타일을 작성하고 유지할 수 있습니다.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Backend" && (
          <div className="flex flex-col items-start pl-8">
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Nodejs} alt="Node.js Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">Node.js</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">RESTful API를 설계할 수 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Firebase} alt="Firebase Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">Firebase</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">인증, 실시간 데이터베이스, 서버리스 기능 등을 빠르게 구현할 수 있습니다.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "DBMS" && (
          <div className="flex flex-col items-start pl-8">
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Mysql} alt="mysql Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">MySQL</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">백엔드와의 API 통합을 통해 데이터를 처리하고 시각화한 경험이 있습니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Mongodb} alt="mongodb Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">mongoDB</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">비정형 데이터를 처리하는 REST API와의 통합 작업 경험이 있습니다.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Tool" && (
          <div className="flex flex-col items-start pl-8">
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Figma} alt="Figma Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">Figma</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">UI/UX 디자인 제작 및 프로토타입 설계가 가능합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 m-4 rounded-[10px]">
              <Image src={Postman} alt="postman Logo" className="w-[4.5em] h-[4.5em] rounded-full bg-white" /> 
              <div className="flex-1">
                <h3 className="text-base font-bold mb-2 text-[#1A2B3C]">Postman</h3>
                <p className="text-sm leading-6 text-[#1A2B3C]">API 테스트 및 디버깅을 통해 효율적인 개발 환경을 구축할 수 있습니다.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div ref={wrapperRef} className="w-full h-[500vh]">
        <div ref={stickyRef} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute w-[95vw] h-auto min-h-[40vw] m-8 p-8 box-border overflow-visible flex gap-6 justify-center items-center flex-wrap [perspective:1000px] [transform-style:preserve-3d]">
            <div className="card flex w-[23%] min-w-[300px] h-full min-h-[400px] flex-col justify-between p-4 text-center relative text-[4vw] items-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer">
              <div className="front absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-base p-6 text-[#1A2B3C] bg-[#D1E4EC]">
                <div className="text-[1.2rem] font-bold text-[#2b5876] mb-6">
                  스누아이랩 SW 개발팀 [인턴]
                </div>
                <div className="text-base text-left leading-[1.4] flex-grow text-[#1A2B3C]">
                  <p>• 자사 웹앱의 이슈를 약 56% 해결</p>
                  <p>• 자사 웹앱의 불편함을 개선하여 설계한 UI/UX가 실제 제품 수정 방향으로 채택</p>
                  <p>• Labeling Tool UI/UX 설계 & 개발</p>
                  <p>• i18n을 통한 다국어 지원</p>
                </div>
                <div className="text-sm text-[#999] mt-4 italic">
                  2023.09 ~ 2023.12
                </div>
              </div>
              <div className="back absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-[0.5em] text-[#A8C5D3] bg-[#1A2B3C] [transform:rotateY(180deg)]">
                CAREER
              </div>
            </div>
            <div className="card flex w-[23%] min-w-[300px] h-full min-h-[400px] flex-col justify-between p-4 text-center relative text-[4vw] items-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer">
              <div className="front absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-base p-6 text-[#1A2B3C] bg-[#D1E4EC]">
                <div className="text-[1.2rem] font-bold text-[#2b5876] mb-6">
                  <p>국립금오공과대학교</p>
                  <p>컴퓨터공학과 졸업</p>
                </div>
                <div className="text-base text-left leading-[1.4] flex-grow text-[#1A2B3C]">
                  <p>학생회 홍보국 3년 연임</p>
                  <p>• 학교 행사/소식을 대자보로 꾸준히 게시</p>
                  <p>• 소통 창구 운영으로 의견을 반영해 학생회실 개방</p>
                  <p>• 학생회 지원율 전년도 대비 1.5배 증가</p>
                </div>
                <div className="text-sm text-[#999] mt-4 italic">
                  2020.03 ~ 2024.02
                </div>
              </div>
              <div className="back absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-[0.5em] text-[#A8C5D3] bg-[#1A2B3C] [transform:rotateY(180deg)]">
                EDUCATION
              </div>
            </div>
            <div className="card flex w-[23%] min-w-[300px] h-full min-h-[400px] flex-col justify-between p-4 text-center relative text-[4vw] items-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer">
              <div className="front absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-base p-6 text-[#1A2B3C] bg-[#D1E4EC]">
                <div className="text-[1.2rem] font-bold text-[#2b5876] mb-6">
                  Webkit640
                </div>
                <div className="text-base text-left leading-[1.4] flex-grow text-[#1A2B3C]">
                  <p>웹 개발 실무인재 양성과정 (640시간)</p>
                  <p>• 프론트 & 백엔드 이론 교육</p>
                  <p>• 개인 & 팀 프로젝트 진행 (멘토링 포함)</p>
                  <p>• JavaScript, React, SpringBoot, MongoDB 등</p>
                </div>
                <div className="text-sm text-[#999] mt-4 italic">
                  2023.01 ~ 2023.05
                </div>
              </div>
              <div className="back absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-[0.5em] text-[#A8C5D3] bg-[#1A2B3C] [transform:rotateY(180deg)]">
                EDUCATION
              </div>
            </div>
            <div className="card flex w-[23%] min-w-[300px] h-full min-h-[400px] flex-col justify-between p-4 text-center relative text-[4vw] items-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer">
              <div className="front absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-base p-6 text-[#1A2B3C] bg-[#D1E4EC]">
                <div className="text-[1.2rem] font-bold text-[#2b5876] mb-6">
                  정보처리기사
                </div>
                <div className="text-base text-left leading-[1.4] flex-grow text-[#1A2B3C]">
                  한국산업인력공단
                </div>
                <div className="text-sm text-[#999] mt-4 italic">
                  2023.09.01
                </div>
              </div>
              <div className="back absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-[0.5em] text-[#A8C5D3] bg-[#1A2B3C] [transform:rotateY(180deg)]">
                CERTIFICATE
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}