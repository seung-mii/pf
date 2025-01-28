"use client";

import { useState, useRef } from "react";
import TypingEffect from "@/components/TypingEffect";
import { ContentSection } from "@/components/ContentSection";
import { CareerSection } from "@/components/CareerSection";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

const listData = [
  { id: 1, title: "ABOUT" },
  { id: 2, title: "CAREER" },
  { id: 3, title: "PROJECTS" },
  { id: 4, title: "CONTACT" },
];

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [aboutRef, careerRef, projectsRef, contactRef];

  const handleScrollToIndex = (index: number) => {
    const targetEl = sectionRefs[index].current;
    if (!targetEl) return;

    let top = targetEl.offsetTop;
    if (index === 1) {
      if (window.innerWidth < 640) top += window.innerHeight * 2;
      else if (window.innerWidth < 1024) top += window.innerHeight * 2.3;
      else top += window.innerHeight * 3; 
    }

    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`fixed right-5 sm:right-9 w-24 sm:w-32 z-20 transform -translate-y-1/2 overflow-hidden border-solid border-white border-thin bg-opacity-50 backdrop-blur-xl rounded-3xl transition-all duration-300
          ${isOpen ? "top-20 sm:top-28 h-28 sm:h-44" : "top-10 sm:top-11 h-8 sm:h-10"}
        `}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-full h-full flex items-center justify-center text-white text-m sm:text-l cursor-circleHover"
          >
            ≡ List view
          </button>
        )}
        {isOpen && (
          <div className="relative w-full h-full text-white py-2 sm:py-3 cursor-circle flex flex-col">
            <ul className="flex-grow space-y-1 max-h-80 sm:max-h-96 overflow-y-auto scrollbar-hide pb-2">
              {listData.map((item, idx) => (
                <li
                  key={idx}
                  className="text-m sm:text-l text-white text-center px-3 py-1 md:px-1 md:py-2 hover:text-fontColor transition-colors cursor-circleHover"
                  onClick={() => {
                    handleScrollToIndex(idx);
                    setIsOpen(false);
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div ref={aboutRef} className="h-auto px-5 pt-1 pb-5 sm:px-5 sm:py-8 font-noto cursor-circle">
        <TypingEffect />
        <ContentSection />
      </div>
      <div ref={careerRef} className="cursor-scroll">
        <CareerSection />
      </div>
      <div ref={projectsRef} className="cursor-scroll">
        <Projects />
      </div>
      <div ref={contactRef} className="cursor-circle">
        <Contact />
      </div>
    </>
  );
}