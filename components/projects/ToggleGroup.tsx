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
      className="bg-bottom rounded-md shadow-sm p-4 cursor-pointer transition-all"
      onClick={() => handleToggle(id)}
    >
      <div className="flex items-center">
        <div className="w-5 h-2 relative mr-1">
          <span className={`block absolute w-[13px] h-[1px] bg-darkBlue transition-transform ${isOpen[id] ? "rotate-0 top-[3px]" : "rotate-0 top-[3px]" }`}></span>
          <span className={`block absolute w-[13px] h-[1px] bg-darkBlue transition-transform ${isOpen[id] ? "rotate-0 top-[3px]" : "rotate-90 top-[3px]" }`}></span>
        </div>
        <p className="font-semibold text-s select-none leading-relaxed">{title}</p>
      </div>
      {isOpen[id] && (
        <ul className="list-disc ml-6 mt-2 py-2 text-xs space-y-2">
          {contents?.map((item, idx: number) => (
            <li key={`content-${idx}`} className="select-none leading-relaxed">
              {item}
            </li>
          ))}
          {cause && solution && (
            <>
              <li key={`cause-${id}`} className="select-none leading-relaxed"> {`원인: ${cause}`}</li>
              {solution.length < 2 ? (
                <li key={`solution-${id}`} className="select-none leading-relaxed">{`해결방안: ${solution[0]}`}</li>
              ) : (
                <>
                  <li key={`solution-title-${id}`} className="select-none leading-relaxed">해결방안</li>
                  {solution.map((s, sidx) => (
                    <li key={`solution-${id}-${sidx}`} className="select-none leading-relaxed ml-4">{s}</li>
                  ))}
                </>
              )}
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default ToggleGroup;