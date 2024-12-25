import React, { useRef } from "react";
import { DetailsProps } from "../../data/details";
import ToggleGroup from "./ToggleGroup";

const ICanDoItSection: React.FC<DetailsProps> = ({ details }) => {
  const listContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="section w-full h-full absolute">
      <div className="title font-semibold text-s sm:text-m border-y-thin border-solid border-darkBlue bg-top h-[6vh] flex items-center pl-[2vh] sm:pl-[3vh]">
        I can do it
      </div>
      <div className="content px-[3vh] py-[2vh] sm:px-[5vh] sm:py-[2vh] bg-gradient-to-b from-top to-bottom">
        <div ref={listContentRef} className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 auto-rows-[minmax(0, 1fr, auto)]">
          {details.map(({ title, details }, idx) => (
            <div key={idx} className="h-auto self-start">
              <ToggleGroup id={idx} title={title} contents={details} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ICanDoItSection;