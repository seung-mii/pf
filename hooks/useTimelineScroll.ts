import { useEffect } from "react";
import throttle from "lodash/throttle";

export function useTimelineScroll(timelineRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineLine = timeline.querySelector<HTMLDivElement>(".timeline-line");
      if (!timelineLine) return;

      const timelineTop = timeline.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const maxHeight = document.body.scrollHeight - 70;
      const newHeight = Math.min(maxHeight, Math.max(0, viewportHeight - timelineTop));
      timelineLine.style.height = `${newHeight}px`;
    }, 200);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [timelineRef]);
}