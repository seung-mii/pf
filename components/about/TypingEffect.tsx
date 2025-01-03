"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Highlight, LinkData, TypingEffectProps } from "@/data/contents";

export function TypingEffect({ text, highlights, links, onComplete, typingSpeed = 30 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const chars = text.split("");
    const typingInterval = setInterval(() => {
      if (charIndex < chars.length) {
        setDisplayText((prev) => prev + chars[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        onComplete?.();
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [charIndex, text, typingSpeed, onComplete]);

  const processHighlightsAndLinks = ( rawText: string, highlights?: Highlight[], links?: LinkData[] ): React.ReactNode[] => {
    let elements: React.ReactNode[] = [rawText];

    if (highlights && highlights.length > 0) {
      highlights.forEach(({ text: highlightText, color }) => {
        const regex = new RegExp(`(${highlightText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "g");
        elements = elements.flatMap((element) => {
          if (typeof element === "string") {
            return element.split(regex).map((part, i) =>
              part === highlightText ? (
                <span key={`highlight-${highlightText}-${i}`} style={{ color }}>
                  {part}
                </span>
              ) : (
                part
              )
            );
          }
          return element;
        });
      });
    }

    if (links && links.length > 0) {
      links.forEach(({ text: linkText, href }) => {
        const regex = new RegExp(`(${linkText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "g");
        elements = elements.flatMap((element) => {
          if (typeof element === "string") {
            return element.split(regex).map((part, i) =>
              part === linkText ? (
                <Link key={`link-${linkText}-${i}`} href={href} className="underline" target="_blank" rel="noopener noreferrer">
                  {part}
                </Link>
              ) : (
                part
              )
            );
          }
          return element;
        });
      });
    }
    return elements;
  };

  return <>{processHighlightsAndLinks(displayText, highlights, links)}</>;
}