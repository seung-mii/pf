"use client";

import { useEffect, useRef } from "react";
import { Svg } from "@/components/about/Svg";
import { ContentSection } from "@/components/about/ContentSection";
import { SkillSection } from "@/components/about/SkillSection";

export default function About() {
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
      <SkillSection />
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