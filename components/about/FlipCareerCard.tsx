import React from "react";
import { CareerInfo } from "../../data/careers";

export function FlipCareerCard({ category, title, details, date }: CareerInfo) {
  const formattedTitle = title.split("\n").map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div
      className="card relative min-w-[260px] h-full min-h-[330px] text-center transition-transform duration-700 ease-out cursor-pointer [transform-style:preserve-3d] hover:rotate-y-180"
      style={{ perspective: "1000px" }}
    >
      <div className="front absolute w-full h-full flex flex-col justify-center rounded-[2vw] shadow-md text-base px-6 pt-2 pb-6 text-darkBlue bg-lightBlue backface-hidden">
        <div className="flex items-center justify-center text-m font-bold text-darkBlue h-[30%] whitespace-pre-line">
          {formattedTitle}
        </div>
        <div className="text-base text-s text-left leading-[1.4] flex-grow text-darkBlue">
          {details.map((line, i) => (
            <p key={i} className="mb-3">{line}</p>
          ))}
        </div>
        <div className="text-s text-darkBlue italic">{date}</div>
      </div>
      <div className="back absolute w-full h-full flex flex-col justify-center rounded-[2vw] shadow-md text-xl font-semibold text-bottom bg-darkBlue rotate-y-180 backface-hidden">
        {category}
      </div>
    </div>
  );
}