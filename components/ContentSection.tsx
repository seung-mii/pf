import { ContentInfo, contentsData } from "../data/contents";
import { StaticHighlight } from "./StaticHighlight";

export function ContentSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 mt-2 sm:mt-0">
      {contentsData.map((item: ContentInfo) => (
        <div
          key={item.id}
          className="relative content-item border-thin sm:border-[1.5px] border-solid border-fontColor px-4 pt-6 pb-3 sm:pt-7 sm:pb-5 sm:px-6 rounded-2xl text-s leading-[1.8] bg-transparent hover:bg-lightWhite/20 hover:scale-[1.02] transition-all duration-300"
        >
          {item.subject.slice(0, 1).map((s, i) => (
            <p key={i} className="absolute top-0 left-0 w-full px-4 py-1 sm:px-5 sm:py-3 text-fontColor opacity-20 text-xl sm:text-3xl font-bold pointer-events-none">
              {s}
            </p>
          ))}
          {item.paragraphs.map((para, i) => (
            <p key={i} className="sm:mt-1 text-fontColor">
              <StaticHighlight text={para} highlights={item.highlights} links={item.links} />
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}