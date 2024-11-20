import React, { useRef } from "react";
import { DetailsProps } from "../../data/details";
import ToggleGroup from "./ToggleGroup";

const ICanDoItSection: React.FC<DetailsProps> = ({ details }) => {
  const listContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="section w-full h-full absolute">
      <div className="title mt-[3vh] border-solid border-[1px] border-[#1A2B3C] bg-[#6F94B0] h-[6vh] flex items-center pl-[3vh]">
        I can do it
      </div>
      <div className="content px-[5vh] py-[2vh] bg-gradient-to-b from-[#6F94B0] to-[#A8C5D3]">
        <div ref={listContentRef} className="space-y-4">
          {details.map(({ title, details }, idx) => (
            <ToggleGroup key={idx} id={idx} title={title} contents={details} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ICanDoItSection;