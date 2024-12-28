import { useEffect } from "react";
import { UseInfiniteScrollProps } from "@/data/projects";

export function useInfiniteScroll({ hasMore, fetchMoreData, dependencies = []}: UseInfiniteScrollProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMoreData();
        }
      },
      { threshold: 0.5 }
    );

    const loader = document.getElementById("loader");
    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [fetchMoreData, hasMore]);
}