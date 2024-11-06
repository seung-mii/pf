"use client";

import React, { useEffect, useRef } from "react";
import { Svg } from "@/components/about/Svg";
import { ContentSection } from "@/components/about/ContentSection";
import { SkillSection } from "@/components/about/SkillSection";
import { careersData } from "../../data/careers";

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
            {careersData.map((career, idx) => (
              <div key={idx} className="card flex w-[23%] min-w-[300px] h-full min-h-[400px] flex-col justify-between p-4 text-center relative text-[4vw] items-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer">
                <div className="front absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-base p-6 text-[#1A2B3C] bg-[#D1E4EC]">
                  <div className="text-[1.2rem] font-bold text-[#2b5876] mb-6 whitespace-pre-line">
                    {career.title.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="text-base text-left leading-[1.4] flex-grow text-[#1A2B3C]">
                    {career.details.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="text-sm text-[#999] mt-4 italic">
                    {career.date}
                  </div>
                </div>
                <div className="back absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-[0.5em] text-[#A8C5D3] bg-[#1A2B3C] [transform:rotateY(180deg)]">
                  {career.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}