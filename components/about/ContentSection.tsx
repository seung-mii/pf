import React, { useCallback, useState } from "react";
import { ContentInfo, contentsData } from "../../data/contents";
import { ParagraphsTypingEffect } from "./ParagraphsTypingEffect";
import { StaticHighlight } from "./StaticHighlight";

export function ContentSection() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  
  const handleItemComplete = useCallback(() => {
    setCurrentItemIndex((prev) => prev + 1);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-2 sm:mt-0">
      {contentsData.map((item: ContentInfo, index: number) => {
        const isPast = index < currentItemIndex;
        const isPresent = index === currentItemIndex;
        const isFuture = index > currentItemIndex;
        
        return (
          <div key={item.id} className="border-thin sm:border-[1.5px] border-solid border-darkBlue px-4 py-3 sm:p-6 rounded-2xl text-s leading-[1.8] bg-transparent hover:bg-lightWhite/20 hover:scale-[1.02] transition-all duration-300">
            {isPast && (
              <>
                {item.paragraphs.map((para, i) => (
                  <p key={i} className="m-0 text-darkBlue">
                    <StaticHighlight text={para} highlights={item.highlights} links={item.links} />
                  </p>
                ))}
              </>
            )}
            {isPresent && <ParagraphsTypingEffect id={item.id} paragraphs={item.paragraphs} highlights={item.highlights} links={item.links} onComplete={handleItemComplete} />}
            {isFuture && <div className="text-darkBlue">...</div>}
          </div>
        );
      })}
    </div>
  );
}