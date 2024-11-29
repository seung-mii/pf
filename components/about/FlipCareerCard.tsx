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
    <div className="card relative min-w-[260px] h-full min-h-[330px] flex-col justify-between p-4 text-center items-center transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div className="front absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-base px-6 pt-2 pb-6 text-darkBlue bg-lightBlue">
        <div className="flex items-center justify-center text-m font-bold text-darkBlue m-6 whitespace-pre-line">
          {formattedTitle}
        </div>
        <div className="text-base text-s text-left leading-[1.4] flex-grow text-darkBlue">
          {details.map((line, i) => (
            <p key={i} className="mb-3">{line}</p>
          ))}
        </div>
        <div className="text-s text-darkBlue text-[#999] italic">{date}</div>
      </div>
      <div className="back absolute w-full h-full font-medium overflow-hidden [backface-visibility:hidden] flex flex-col justify-center rounded-[2vw] shadow-md text-xl font-semibold text-bottom bg-darkBlue [transform:rotateY(180deg)]">
        {category}
      </div>
    </div>
  );
}