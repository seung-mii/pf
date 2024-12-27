"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import TimelineItem from "@/components/projects/TimelineItem";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useTimelineScroll } from "@/hooks/useTimelineScroll";
import { ProjectInfo, projectsData } from "@/data/projects";

export default function Projects() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<ProjectInfo[]>(projectsData.slice(0, 2));
  const [hasMore, setHasMore] = useState(true);
  const [isImportantOnly, setIsImportantOnly] = useState(true);

  const fetchMoreData = useCallback(() => {
    const filteredProjects = isImportantOnly
      ? projectsData.filter((project) => project.isImportant)
      : projectsData;

    if (items.length >= filteredProjects.length) {
      setHasMore(false);
      return;
    }
    const nextItems = filteredProjects.slice(items.length, items.length + 2);
    setItems((prevItems) => [...prevItems, ...nextItems]);
  }, [items.length, isImportantOnly]);

  useInfiniteScroll({ hasMore, fetchMoreData, dependencies: [items] });
  useTimelineScroll(timelineRef);

  useEffect(() => {
    const filteredProjects = isImportantOnly ? projectsData.filter((project) => project.isImportant) : projectsData;
    setItems(filteredProjects.slice(0, 2));
    setHasMore(filteredProjects.length > 2);
  }, [isImportantOnly]);

  return (
    <div ref={timelineRef} className="relative max-w-5xl mx-auto p-4 sm:p-8 font-sans star cursor-star">
      <button
        onClick={() => setIsImportantOnly((prev) => !prev)}
        className="absolute top-14 left-1/2 transform -translate-x-1/2 px-4 py-3 bg-point text-darkBlue text-xs sm:text-s rounded-full z-10 cursor-star"
      >
        {isImportantOnly ? "Click Here to View All" : "Click Here to View Important"}
      </button>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-0 bg-darkBlue transition-all duration-300 ease-out timeline-line z-5"></div>
      <div className="flex flex-col items-center mt-12">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
        {hasMore && (
          <div id="loader" className="text-center mt-4">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}