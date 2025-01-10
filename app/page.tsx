"use client";

import TypingEffect from "@/components/TypingEffect";
import { ContentSection } from "@/components/ContentSection";
import { SkillSection } from "@/components/SkillSection";
import { CareerSection } from "@/components/CareerSection";

export default function About() {
  return (
    <>
      <div className="h-[80vh] sm:h-[70vh] md:h-[65vh] lg:h-[60vh] xl:h-[50vh]  px-7 pt-1 pb-5 sm:px-14 sm:py-8 font-batang cursor-circle">
        <TypingEffect />
        <ContentSection />
      </div>
      <div className="cursor-circle">
        <SkillSection />
      </div>
      <div className="cursor-scroll">
        <CareerSection />
      </div>
    </>
  );
}