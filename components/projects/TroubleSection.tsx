import React, { useRef } from "react";
import { TroubleSectionProps } from "../../data/details";
import ToggleGroup from "./ToggleGroup";

const TroubleSection: React.FC<TroubleSectionProps> = ({ details }) => {
  const listContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="section w-full h-full absolute">
      <div className="title font-semibold text-m font-bold border-y-thin border-solid border-darkBlue bg-top h-[6vh] flex items-center pl-[3vh]">
        Trouble Shooting
      </div>
      <div className="content px-[5vh] py-[2vh] bg-gradient-to-b from-top to-bottom">
        <div ref={listContentRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(0, 1fr, auto)]">
          {details.map(({ title, cause, solution }, idx) => (
            <div key={idx} className="h-full">
              <ToggleGroup id={idx} title={title} cause={cause} solution={solution} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TroubleSection;