import { ToggleProps } from "../../data/details";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"; 

const ToggleGroup: React.FC<ToggleProps> = ({ id, title, cause, solution, code, contents }) => {
  return (
    <div
      key={id}
      className="bg-purple rounded-md shadow-sm p-3 sm:p-4 cursor-circle transition-all text-darkBlue"
    >
      <div className="flex items-center">
        <div className="w-5 h-2 relative">
          <span className="block absolute w-[6px] sm:w-[9px] h-[1px] bg-darkBlue transition-transform rotate-[45deg] top-[4px] left-[1px]"></span>
          <span className="block absolute w-[6px] sm:w-[9px] h-[1px] bg-darkBlue transition-transform rotate-[-45deg] top-[4px] left-[5px] sm:left-[6.5px]"></span>
        </div>
        <p className="font-semibold text-xs sm:text-s select-none leading-relaxed ml-1 sm:ml-2">{title}</p>
      </div>
      <ul className="list-disc ml-4 sm:ml-6 mt-2 py-1 sm:py-2 text-xs space-y-1">
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
                <ol className="list-decimal space-y-1">
                  {solution.map((s, sidx) => (
                    <li key={`solution-${id}-${sidx}`} className="select-none leading-relaxed ml-4">{s}</li>
                  ))}
                </ol>
              </>
            )}
            {code && (
              <>
                <li key={`code-title-${id}`} className="select-none leading-relaxed mt-2">⏳ Code</li>
                {code?.map((snippet, idx) => (
                  <SyntaxHighlighter
                    key={`code-${id}-${idx}`}
                    language="diff"
                    style={atomDark}
                    customStyle={{
                      padding: "0px 20px",  
                      margin: "8px 0px",
                      lineHeight: 1.8,
                      fontSize: "10px",
                      borderRadius: "10px"
                    }}
                  >
                    {snippet}
                  </SyntaxHighlighter>
                ))}
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default ToggleGroup;