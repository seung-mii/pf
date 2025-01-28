import { useEffect, useState } from "react";
import { ContentInfo, contentsData } from "../data/contents";
import { StaticHighlight } from "./StaticHighlight";

export function ContentSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() => Array(contentsData.length).fill(false));

  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);

        setVisibleItems((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    const items = document.querySelectorAll<HTMLElement>(".content-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-20 sm:mx-10 mt-2 sm:mt-0">
      {contentsData.map((item: ContentInfo, index) => {
        const isVisible = visibleItems[index];
        return (
          <div key={item.id} data-index={index} className={`content-item relative flex justify-between w-full pt-4 pb-5 sm:pb-10 border-t border-gray-700 overflow-hidden transition-all duration-1000 ${isVisible ? "border-animate" : ""}`}>
            <span className="mt-2 text-purple opacity-30 text-xs sm:text-sm font-medium tracking-wide w-1/12">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col w-9/12 pr-6 sm:pr-16">
              {item.subject.slice(0, 1).map((s, i) => (
                <p key={i} className="mr-2 sm:mr-0 mb-1 text-lg sm:text-xl font-normal text-purple opacity-30 text-xl sm:text-3xl pointer-events-none">
                  {s}
                </p>
              ))}
              <div className="text-gray-400 text-xs sm:text-s leading-5 sm:leading-6 space-y-2">
                {item.paragraphs.map((para, i) => (
                  <p key={i} className={`sm:mt-1 text-purple hover:text-fontColor transform opacity-0 paragraph-animate ${isVisible ? "fade-up" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                    <StaticHighlight text={para} highlights={item.highlights} links={item.links} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}