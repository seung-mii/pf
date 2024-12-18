"use client"

import React from "react";
import FrontCard from "../../components/contact/FrontCard";
import BackCard from "../../components/contact/BackCard";
import FlipIcon from "../../components/contact/FlipIcon";
import useCardFlip from "../../hooks/useCardFlip";

export default function Contact() {
  const { isFlipped, cardWrapperRef, frontCardRef, backCardRef, frontLightRef, backLightRef, handleFlip } = useCardFlip();

  return (
    <div className="flex items-center justify-center relative min-h-screen text-darkBlue bg-gradient-to-b from-top to-bottom font-serif px-4 star cursor-star">
      <div
        ref={cardWrapperRef}
        className="relative flex flex-col items-center justify-center w-full sm:w-11/12 md:w-4/5 lg:w-[55%] transition-transform duration-500 ease-out [perspective:1000px] md:hover:scale-105 cursor-star"
      >
        <div className={`w-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
          <div ref={frontCardRef} className="relative flex flex-col bg-lightWhite p-4 sm:p-7 md:p-8 lg:p-10 shadow-md [backface-visibility:hidden]">
            <div ref={frontLightRef} className="absolute w-full h-full pointer-events-none -translate-x-4 -translate-y-4 sm:-translate-x-7 sm:-translate-y-7 md:-translate-x-8 md:-translate-y-8 lg:-translate-x-10 lg:-translate-y-10 transition-transform duration-500 ease-out"></div>
            <FrontCard />
          </div>
          <div ref={backCardRef} className="absolute top-0 left-0 w-full h-full bg-lightWhite p-4 sm:p-6 md:p-8 lg:p-10 shadow-md flex flex-col items-center justify-start [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div ref={backLightRef} className="absolute w-full h-full pointer-events-none -translate-x-4 -translate-y-4 sm:-translate-x-7 sm:-translate-y-7 md:-translate-x-8 md:-translate-y-8 lg:-translate-x-10 lg:-translate-y-10 transition-transform duration-500 ease-out"></div>
            <BackCard />
          </div>
        </div>
        <FlipIcon onClick={handleFlip} />
      </div>
    </div>
  );
}