"use client";

import { Svg } from "@/components/about/Svg";
import { ContentSection } from "@/components/about/ContentSection";
import { SkillSection } from "@/components/about/SkillSection";
import { CareerSection } from "@/components/about/CareerSection";

export default function About() {
  return (
    <>
      <div className="px-16 py-8 font-sans cursor-star">
        <Svg />
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