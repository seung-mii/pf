"use client";

import TypingEffect from "@/components/TypingEffect";
import { ContentSection } from "@/components/ContentSection";
import { SkillSection } from "@/components/SkillSection";
import { CareerSection } from "@/components/CareerSection";

export default function About() {
  return (
    <>
      <div className="h-[55vh] sm:h-[62vh] md:h-[59vh] px-7 pt-1 pb-5 sm:px-14 sm:py-8 font-sans cursor-star">
        <TypingEffect />
        <ContentSection />
      </div>
      <div className="cursor-star">
        <SkillSection />
      </div>
      <div className="cursor-downArrow">
        <CareerSection />
      </div>
    </>
  );
}