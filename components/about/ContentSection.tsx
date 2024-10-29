import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ContentInfo, contentsData } from "../../data/contents";

export function ContentSection() {
  const [isLineAnimating, setIsLineAnimating] = useState(false);
  const [visibleBoxes, setVisibleBoxes] = useState(0);
  
  const processParagraph = (paragraph: string, highlights?: { text: string; color: string }[], links?: { text: string; href: string }[]): React.ReactNode[] => {
    let elements: React.ReactNode[] = [paragraph];
    
    if (highlights && highlights.length > 0) {
      highlights.forEach(({ text, color }) => {
        const regex = new RegExp(`(${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "g");
        elements = elements.flatMap(element => {
          if (typeof element === 'string') {
            return element.split(regex).map((part, index) => 
              part === text ? <span key={`highlight-${text}-${index}`} style={{ color }}>{part}</span> : part
            );
          }
          return element;
        });
      });
    }

    if (links && links.length > 0) {
      links.forEach(({ text, href }) => {
        const regex = new RegExp(`(${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "g");
        elements = elements.flatMap(element => {
          if (typeof element === 'string') {
            return element.split(regex).map((part, index) => 
              part === text ? <Link key={`link-${text}-${index}`} href={href} className="underline" target="_blank" rel="noopener noreferrer">{part}</Link> : part
            );
          }
          return element;
        });
      });
    }

    return elements;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLineAnimating(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLineAnimating) {
      const interval = setInterval(() => {
        setVisibleBoxes((prev) => {
          if (prev < 4) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 2500);
    }
  }, [isLineAnimating]);

  return (
    <div className="grid grid-cols-2 gap-8">
      {contentsData.map((item: ContentInfo, index: number) => (
        <div
          key={item.id}
          className={`border-[1.5px] border-solid border-[#1A2B3C] p-8 rounded-[15px] text-[1rem] leading-[1.8] bg-transparent hover:bg-white/20 hover:scale-[1.02] transition-opacity transition-transform duration-700 ease-out opacity-0 translate-y-5
            ${visibleBoxes > index ? "opacity-100 translate-y-0" : ""}`}
        >
          {item.paragraphs.map((para, idx) => (
            <p key={idx} className="m-0 text-[#1A2B3C]">
              {processParagraph(para, item.highlights, item.links)}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}