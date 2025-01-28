"use client";

import { projectsData } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="relative mx-auto font-noto cursor-circle scroll-smooth z-10 py-10">
      <div className="grid grid-cols-3 gap-3 sm:gap-5 px-5">
        {projectsData.map((item, index) => (
          <Link
            key={index}
            href={`/${item.link}`}
            aria-label={`View details of ${item.title}`}
            className={`relative block h-[40vh] sm:h-[55vh] lg:h-[70vh] overflow-hidden group flex items-center justify-center cursor-circleHover
              ${index === 0 ? 'col-span-2' : ''} ${index === 1 || index == 2 ? 'col-span-1' : ''} ${index === 3 ? 'col-span-2 col-start-2' : ''} ${index === 4 ? 'col-span-1' : ''} ${index === 5 ? 'col-span-1 col-start-3' : ''} ${index >= 6 && index <= 8 ? 'col-span-1' : ''}`}
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.imgSrc?.src})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25" />
            <div className="relative z-10 text-center text-white px-6">
              {item.isImportant && <p className="text-xs lg:text-l mb-2">⭐️⭐️⭐️⭐️⭐️</p>}
              <div className="relative block overflow-hidden h-full">
                <span className="relative block h-full">
                  <span className="block text-s sm:text-m lg:text-xl transition-transform duration-700 ease-in-out group-hover:translate-y-[-130%] mb-1">
                    {item.title}
                  </span>
                  <span className="absolute top-[130%] left-0 w-full text-s sm:text-m lg:text-xl transition-transform duration-700 ease-in-out group-hover:translate-y-[-150%] sm:group-hover:translate-y-[-130%] group-hover:delay-150 cursor-circleHover">
                    {item.title}
                  </span>
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[1px] sm:h-[1.5px] bg-white transform scale-x-0 transition-transform duration-500 ease-in-out origin-right group-hover:scale-x-100 group-hover:origin-left" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}