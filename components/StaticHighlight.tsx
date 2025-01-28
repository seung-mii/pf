"use client";

import React from "react";
import Link from "next/link";
import { Highlight, LinkData, StaticHighlightProps } from "@/data/contents";

export function StaticHighlight({ text, highlights, links }: StaticHighlightProps) {
  const processHighlightsAndLinks = ( rawText: string, highlights?: Highlight[], links?: LinkData[] ): React.ReactNode[] => {
    let elements: React.ReactNode[] = [rawText];

    if (highlights && highlights.length > 0) {
      highlights.forEach(({ text: hlText, color }) => {
        const regex = new RegExp(`(${hlText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "g");

        elements = elements.flatMap((element) => {
          if (typeof element === "string") {
            return element.split(regex).map((part, i) =>
              part === hlText ? (
                <span key={`highlight-${hlText}-${i}`} style={{ color }} className="font-normal">
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
                <Link key={`link-${linkText}-${i}`} href={href} className="underline cursor-circleHover" target="_blank" rel="noopener noreferrer">
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

  return <>{processHighlightsAndLinks(text, highlights, links)}</>;
}