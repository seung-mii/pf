import { ContentInfo, contentsData } from "../data/contents";
import { StaticHighlight } from "./StaticHighlight";
import { motion } from "framer-motion";

export function ContentSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mt-2 sm:mt-0">
      {contentsData.map((item: ContentInfo, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: index * 0.5 }} 
          className="border-thin sm:border-[1.5px] border-solid border-fontColor px-4 py-3 sm:p-6 rounded-2xl text-s leading-[1.8] bg-transparent hover:bg-lightWhite/20 hover:scale-[1.02] transition-all duration-300"
        >
          {item.paragraphs.map((para, i) => (
            <p key={i} className="m-0 text-fontColor">
              <StaticHighlight text={para} highlights={item.highlights} links={item.links} />
            </p>
          ))}
        </motion.div>
      ))}
    </div>
  );
}