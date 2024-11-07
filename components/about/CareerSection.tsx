import React, { useEffect, useRef } from "react";
import { careersData } from "../../data/careers";
import { FlipCareerCard } from "./FlipCareerCard";

export function CareerSection() {
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
    <div ref={wrapperRef} className="w-full h-[500vh]">
      <div ref={stickyRef} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute w-[95vw] h-auto min-h-[40vw] m-8 p-8 box-border overflow-visible flex gap-6 justify-center items-center flex-wrap [perspective:1000px] [transform-style:preserve-3d]">
          {careersData.map((career, idx) => (
            <FlipCareerCard key={idx} category={career.category} title={career.title} details={career.details} date={career.date} />
          ))}
        </div>
      </div>
    </div>
  );
}