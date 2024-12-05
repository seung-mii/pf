"use client";

import React, { useState, useCallback } from "react";
import { ParagraphsTypingEffectProps } from "@/data/contents";
import { TypingEffect } from "./TypingEffect";
import { StaticHighlight } from "./StaticHighlight";

export function ParagraphsTypingEffect({ paragraphs, highlights, links, onComplete }: ParagraphsTypingEffectProps) {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const handleLineComplete = useCallback(() => {
    setCurrentParagraphIndex((prev) => {
      const next = prev + 1;
      if (next >= paragraphs.length) onComplete?.();
      return next;
    });
  }, [paragraphs.length, onComplete]);

  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} className="m-0 text-darkBlue">
          {i < currentParagraphIndex && (
            <StaticHighlight text={para} highlights={highlights} links={links} />
          )}
          {i === currentParagraphIndex && (
            <TypingEffect text={para} highlights={highlights} links={links} onComplete={handleLineComplete} />
          )}
          {i > currentParagraphIndex && (
            null
          )}
        </p>
      ))}
    </>
  );
}