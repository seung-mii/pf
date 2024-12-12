import React, { useRef } from "react";
import { DetailsProps } from "../../data/details";
import ToggleGroup from "./ToggleGroup";

const FunctionSection: React.FC<DetailsProps> = ({ details }) => {
  const listContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="section w-full h-full absolute">
      <div className="title font-semibold text-m border-y-thin border-solid border-darkBlue bg-top h-[6vh] flex items-center pl-[3vh]">
        Function
      </div>
      <div className="content px-[5vh] py-[2vh] bg-gradient-to-b from-top to-bottom">
        <div ref={listContentRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map(({ title, details }, idx) => (
            <ToggleGroup key={idx} id={idx} title={title} contents={details} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunctionSection;