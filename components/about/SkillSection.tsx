import React, { useEffect, useState } from "react";
import Image from "next/image";
import { skillsData } from "../../data/skills";

export function SkillSection() {
  const tabs = Object.keys(skillsData);
  const [activeTab, setActiveTab] = useState("Language");
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const [isTabSwitching, setIsTabSwitching] = useState(true);

  useEffect(() => {
    if (skillsData[activeTab]) {
      setIsTabSwitching(true);
      setVisibleSkills([]);
      setTimeout(() => {
        skillsData[activeTab].forEach((_, index) => {
          setTimeout(() => {
            setVisibleSkills((prev) => [...prev, index]);
          }, index * 200);
        });
        setIsTabSwitching(false);
      }, 300);
    }
  }, [activeTab]);

  return (
    <div className="py-20 sm:py-40 h-[100rem] font-sans">
      <div className="flex justify-center gap-4 mb-11">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1 sm:px-6 sm:py-2 text-s text-base border-thin border-darkBlue rounded-3xl bg-transparent cursor-star transition-colors duration-300 hover:cursor-star hover:bg-darkBlue hover:text-white ${activeTab === tab ? "!bg-darkBlue !text-white" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {!isTabSwitching && ( // 첫 스킬이 애니메이션 적용이 안되는 건 이 코드와 관련되어 있음
        <div className={`flex flex-col items-start mx-[10vw] sm:mx-[20vw] md:mx-[30vw] transition-opacity duration-300 ${isTabSwitching ? "opacity-0" : "opacity-100"}`}>
         {skillsData[activeTab]?.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex items-start gap-4 pb-12 rounded-lg transition-all duration-700 ease-in-out transform ${visibleSkills.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <Image src={skill.logo} alt={`${skill.name} Logo`} className="w-[3em] h-[3em] sm:w-[4em] sm:h-[4em] rounded-full bg-lightWhite" loading="lazy" />
              <div className="flex-1">
                <h3 className={`text-m font-semibold mb-2 text-darkBlue ${skill.name.toLowerCase().replace(".", "-")}`}>
                  {skill.name}
                </h3>
                <ul className="list-disc pl-4 text-s leading-5 text-darkBlue">
                  {skill.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}