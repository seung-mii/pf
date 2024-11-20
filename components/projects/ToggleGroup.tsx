import React, { useState } from "react";
import { ToggleProps } from "../../data/details";

const ToggleGroup: React.FC<ToggleProps> = ({ id, title, cause, solution, contents }) => {
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(50).fill(false));

  const handleToggle = (index: number) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div
      key={id}
      className="bg-[#A8C5D3] rounded-md shadow-sm p-4 cursor-pointer transition-all"
      onClick={() => handleToggle(id)}
    >
      <div className="flex items-center">
        <div className="w-5 h-4 relative mr-2">
          <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[id] ? "rotate-0 top-[7px]" : "rotate-0 top-[4px]" }`}></span>
          <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[id] ? "rotate-0 top-[7px]" : "rotate-90 top-[4px]" }`}></span>
        </div>
        <p className="font-bold text-sm">{title}</p>
      </div>
      {isOpen[id] && (
        <ul className="list-disc ml-6 mt-2 pt-2 border-t-[2px] border-[#1A2B3C] text-xs space-y-2">
          {contents && <li>{contents}</li>}
          {cause && 
            <>
              <li>{"원인: " + cause}</li>
              <li>{"해결방안: " + solution}</li>
            </>
          }
        </ul>
      )}
    </div>
  );
};

export default ToggleGroup;