import React, { useState } from "react";
import { ToggleProps } from "../../data/details";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"; 

const ToggleGroup: React.FC<ToggleProps> = ({ id, title, cause, solution, before, after, contents }) => {
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
      className="bg-lightBlue rounded-md shadow-sm p-3 sm:p-4 cursor-star transition-all"
      onClick={() => handleToggle(id)}
    >
      <div className="flex items-center">
        <div className="w-5 h-2 relative sm:mr-1">
          <span className={`block absolute w-[8px] sm:w-[13px] h-[1px] bg-darkBlue transition-transform ${isOpen[id] ? "rotate-0 top-[3px]" : "rotate-0 top-[3px]" }`}></span>
          <span className={`block absolute w-[8px] sm:w-[13px] h-[1px] bg-darkBlue transition-transform ${isOpen[id] ? "rotate-0 top-[3px]" : "rotate-90 top-[3px]" }`}></span>
        </div>
        <p className="font-semibold text-xs sm:text-s select-none leading-relaxed">{title}</p>
      </div>
      {isOpen[id] && (
        <ul className="list-disc ml-4 sm:ml-6 mt-2 py-1 sm:py-2 text-xs space-y-2">
          {contents?.map((item, idx: number) => (
            <li key={`content-${idx}`} className="select-none leading-relaxed">
              {item}
            </li>
          ))}
          {cause && solution && (
            <>
              {cause.includes("\n") ? (
                <>
                  <li key={`cause-title-${id}`} className="select-none leading-relaxed">원인</li>
                  {cause.split("\n").map((c, idx) => (
                    <li key={`cause-${idx}`} className="select-none leading-relaxed ml-4">{c}</li>
                  ))}
                </>
              ) : (
                <li key={`cause-${id}`} className="select-none leading-relaxed"> {`원인: ${cause}`}</li>
              )}
              {solution.length < 2 ? (
                <li key={`solution-${id}`} className="select-none leading-relaxed">{`해결방안: ${solution[0]}`}</li>
              ) : (
                <>
                  <li key={`solution-title-${id}`} className="select-none leading-relaxed">해결방안</li>
                  <ol className="list-decimal space-y-2">
                    {solution.map((s, sidx) => (
                      <li key={`solution-${id}-${sidx}`} className="select-none leading-relaxed ml-4">{s}</li>
                    ))}
                  </ol>
                </>
              )}
              {before && before.length > 0 && (
                <li key={`before-title-${id}`} className="select-none leading-relaxed mt-2">
                  Before
                </li>
              )}
              {before?.map((b, sidx) => (
                <SyntaxHighlighter
                  key={`before-${id}-${sidx}`}
                  language="typescript"
                  style={atomDark}
                  customStyle={{
                    padding: "0px",  
                    margin: "5px 0px",
                    lineHeight: 1.8,
                    borderRadius: "10px"
                  }}
                >
                  {b}
                </SyntaxHighlighter>
              ))}
              {before && after && after.length > 0 && (
                <li key={`after-title-${id}`} className="select-none leading-relaxed mt-2">
                  After
                </li>
              )}
              {!before && after && after.length > 0 && (
                <li key={`after-title-${id}`} className="select-none leading-relaxed mt-2">
                  Code
                </li>
              )}
              {after?.map((a, sidx) => (
                <SyntaxHighlighter
                  key={`after-${id}-${sidx}`}
                  language="typescript"
                  style={atomDark}
                  customStyle={{
                    padding: "0px",  
                    margin: "5px 0px",
                    lineHeight: 1.8,
                    borderRadius: "10px"
                  }}
                >
                  {a}
                </SyntaxHighlighter>
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default ToggleGroup;