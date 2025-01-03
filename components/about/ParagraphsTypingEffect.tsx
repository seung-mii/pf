"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ParagraphsTypingEffectProps } from "@/data/contents";
import { TypingEffect } from "./TypingEffect";
import { StaticHighlight } from "./StaticHighlight";

export function ParagraphsTypingEffect({ id, paragraphs, highlights, links, onComplete }: ParagraphsTypingEffectProps) {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(-1);
  const initialDelay = 2000; 

  useEffect(() => {
    if (id === 0) {
      const timer = setTimeout(() => {
        setCurrentParagraphIndex(0); 
      }, initialDelay);
      return () => clearTimeout(timer); 
    } else {
      setCurrentParagraphIndex(0);
    }
  }, [id, initialDelay]);

  const handleLineComplete = useCallback(() => {
    setCurrentParagraphIndex((prev) => {
      const next = prev + 1;
      if (next >= paragraphs.length) onComplete?.();
      return next;
    });
  }, [paragraphs.length, onComplete]);

  return (
    <>
      {currentParagraphIndex === -1 ? (
        <p className="text-darkBlue">...</p>
      ) : (
        paragraphs.map((para, i) => (
          <p key={i} className="m-0 text-darkBlue">
            {i < currentParagraphIndex && (
              <StaticHighlight text={para} highlights={highlights} links={links} />
            )}
            {i === currentParagraphIndex && (
              <TypingEffect text={para} highlights={highlights} links={links} onComplete={handleLineComplete} />
            )}
          </p>
        ))
      )}
    </>
  );
}