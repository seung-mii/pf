"use client";

import React, { useRef, useState } from "react";
import { projectsData } from "../../data/projects";
import TimelineItem from "@/components/projects/TimelineItem";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useTimelineScroll } from "@/hooks/useTimelineScroll";
import { ProjectInfo } from "@/data/projects";

export default function Project() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<ProjectInfo[]>(projectsData.slice(0, 2));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= projectsData.length) {
      setHasMore(false);
      return;
    }
    const nextItems = projectsData.slice(items.length, items.length + 2);
    setItems((prevItems) => [...prevItems, ...nextItems]);
  };

  useInfiniteScroll({ hasMore, fetchMoreData, dependencies: [items] });
  useTimelineScroll(timelineRef);

  return (
    <div ref={timelineRef} className="relative max-w-5xl mx-auto p-4 sm:p-8 font-sans">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-darkBlue h-0 transition-all duration-300 ease-out timeline-line"></div>
      <div className="flex flex-col items-center mt-7">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
      {hasMore && (
        <div id="loader" className="text-center mt-4">
          Loading...
        </div>
      )}
    </div>
  );
}