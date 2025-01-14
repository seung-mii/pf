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
    <div ref={ref} className={`relative w-full my-2 sm:my-3 opacity-0 transform text-fontColor translate-y-5 transition-all duration-700 ease-in-out font-batang ${isVisible ? "opacity-100 translate-y-0" : ""} flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-fontColor rounded-full z-5"></div>
      <div className={`absolute top-1/2 w-1/2 h-[1.5px] bg-fontColor ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`}></div>
      <div className="bg-darkPurple bg-opacity-95 shadow-lg rounded-lg overflow-hidden w-3/5 sm:w-5/12 md:w-5/12 relative">
        <div className="relative overflow-hidden">
          {item.imgSrc ? (
            <Image src={item.imgSrc} alt={`${item.title} 프로젝트 이미지`}
              width={600}
              height={400}
              priority={true}
              quality={80}
              style={{ maxHeight: '30vh' }}
              className="transition-transform filter transition-filter duration-300 ease" />
          ) : (
            <div className="w-[30rem] h-[17vh] sm:h-[30vh] bg-darkPurple flex items-center justify-center border border-gray-300">
              <p className="text-[#bdbdbd] text-center absolute inset-0 flex justify-center items-center">No Image</p>
            </div>
          )}
          <div className="absolute top-2 left-2 bg-point text-black text-xs px-2 py-1 rounded font-bold">
            {item.badge}
          </div>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 ease hover:opacity-100">
            <Link href={`/projects/${item.link}`} className="text-fontColor text-m underline cursor-circleHover" aria-label={`View details of ${item.title}`}>
              Detail
            </Link>
          </div>
        </div>
        <div className="pt-2 pb-3 px-3 text-center bg-darkPurple">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-2">
            <h3 className="text-base text-m font-bold mr-0 sm:mr-2  mb-1 sm:mb-0">{item.title}</h3>
            <p className="pb-1 text-s">{item.date}</p>
          </div>
          <div className="flex justify-center flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-3 sm:px-2 py-1 sm:py-2 border-solid border-thin border-fontColor rounded-full capitalize">
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
