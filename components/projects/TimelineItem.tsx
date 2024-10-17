"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { TimelineItemProps } from "../../data/projects";

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (ref.current) animationObserver.unobserve(ref.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      animationObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        animationObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`relative w-full my-3 opacity-0 transform translate-y-5 transition-all duration-700 ease-in-out font-serif ${isVisible ? "opacity-100 translate-y-0" : ""} flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#1A2B3C] rounded-full z-10"></div>
      <div className={`absolute top-1/2 w-1/2 h-px bg-[#1A2B3C] ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`}></div>
      <div className="bg-white bg-opacity-95 shadow-lg rounded-lg overflow-hidden w-2/5 sm:w-5/12 md:w-5/12 relative">
        <div className="relative overflow-hidden">
          {item.imgSrc ? (
            <Image src={item.imgSrc} alt={item.title} width={500} height={300}
              className="w-full max-h-60 transition-transform filter transition-filter duration-300 ease"
            />
          ) : (
            <div className="w-[30rem] h-[25vh] bg-white flex items-center justify-center border border-gray-300">
              <p className="text-gray-500 text-center absolute inset-0 flex justify-center items-center">No Image</p>
            </div>
          )}
          <div className="absolute top-2 left-2 bg-[#D1E4EC] text-[#1A2B3C] text-[12px] sm:text-[13px] md:text-[14px] px-2 py-1 rounded">
            {item.badge}
          </div>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 ease hover:opacity-100">
            <Link href={`/projects/${item.link}`} className="text-[#D1E4EC] text-[10px] sm:text-[11px] md:text-[12px] underline">
              Detail
            </Link>
          </div>
        </div>
        <div className="pt-2 pb-3 px-3 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-2">
            <h3 className="text-base text-[11px] sm:text-[13px] md:text-[15px] font-bold mr-0 sm:mr-2  mb-1 sm:mb-0">{item.title}</h3>
            <p className="pb-1 text-[10px] sm:text-[11px] md:text-[12px]">{item.date}</p>
          </div>
          <div className="flex justify-center flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="text-[8px] sm:text-[9px] md:text-[10px] px-2 sm:px-3 py-1 sm:py-2 border-solid border-[1px] border-[#1A2B3C] rounded-full capitalize">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
