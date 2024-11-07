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
    <div className="card flex w-[23%] min-w-[300px] h-full min-h-[400px] flex-col justify-between p-4 text-center relative text-[4vw] items-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer">
      <div className="front absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-base p-6 text-[#1A2B3C] bg-[#D1E4EC]">
        <div className="text-[1.2rem] font-bold text-[#2b5876] mb-6 whitespace-pre-line">
          {formattedTitle}
        </div>
        <div className="text-base text-left leading-[1.4] flex-grow text-[#1A2B3C]">
          {details.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="text-sm text-[#999] mt-4 italic">
          {date}
        </div>
      </div>
      <div className="back absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-[0.5em] text-[#A8C5D3] bg-[#1A2B3C] [transform:rotateY(180deg)]">
        {category}
      </div>
    </div>
  );
}