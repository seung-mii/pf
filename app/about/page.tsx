"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Svg } from "@/components/about/Svg";
import { ContentSection } from "@/components/about/ContentSection";
import { skillsData } from "../../data/skills";

export default function About() {
  const tabs = ["Language", "Frontend", "Tool"];
  const [activeTab, setActiveTab] = useState("Language");

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

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
        <ContentSection />
      </div>
      <div className="p-8 font-serif">
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button key={tab} className={`px-6 py-2 text-base border-2 border-[#1a2b3c] rounded-[25px] bg-transparent cursor-pointer transition-colors duration-300  hover:bg-[#1a2b3c] hover:text-[#D1E4EC] ${activeTab === tab ? "bg-[#1a2b3c] text-[#D1E4EC]" : ""}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
        {skillsData[activeTab] && (
          <div className="flex flex-col items-start pl-8">
            {skillsData[activeTab].map((skill) => (
              <div key={skill.name} className="flex items-start gap-4 px-10 py-3 my-2 rounded-lg transition-colors duration-300">
                <Image src={skill.logo} alt={`${skill.name} Logo`} className="w-[4.5em] h-[4.5em] rounded-full bg-white" loading="lazy" />
                <div className="flex-1">
                  <h3 className={`text-base font-bold mb-2 text-[#1A2B3C] ${skill.name.toLowerCase().replace('.', '-')}`}>{skill.name}</h3>
                  <ul>
                    {skill.description.map((desc, index) => (
                      <li key={index} className="text-sm leading-6 text-[#1A2B3C] list-disc ml-4">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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