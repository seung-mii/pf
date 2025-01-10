import React from "react";
import { CareerInfo } from "../data/careers";

export function FlipCareerCard({ category, title, details, date }: CareerInfo) {
  const formattedTitle = title.split("\n").map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div
      className="card relative w-40 sm:w-64 h-72 sm:h-80 text-center transition-transform duration-700 ease-out [transform-style:preserve-3d] hover:rotate-y-180"
      style={{ perspective: "1000px" }}
    >
      <div className="front absolute w-full h-full flex flex-col justify-center rounded-xl shadow-md text-base px-3 pt-2 pb-3 sm:px-6 sm:pt-2 sm:pb-6 text-fontColor bg-darkPurple backface-hidden">
        <div className="flex items-center justify-center text-m font-bold text-fontColor h-1/3 whitespace-pre-line">
          {formattedTitle}
        </div>
        <div className="text-s sm:text-md text-left leading-4 sm:leading-5 flex-grow text-fontColor">
          {details.map((line, i) => (
            <p key={i} className="mb-2">{line}</p>
          ))}
        </div>
        <div className="text-s sm:text-md text-[#bdbdbd] italic">{date}</div>
      </div>
      <div className="back absolute w-full h-full flex flex-col justify-center rounded-xl shadow-md text-xl font-semibold text-center text-darkPurple bg-fontColor rotate-y-180 backface-hidden">
        {category}
      </div>
    </div>
  );
}