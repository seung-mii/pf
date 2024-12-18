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
    <div className="py-40 h-[100rem] font-sans">
      <div className="flex justify-center gap-4 mb-11">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 text-base border-2 border-darkBlue rounded-[25px] bg-transparent cursor-star transition-colors duration-300 hover:cursor-star hover:bg-darkBlue hover:text-white ${activeTab === tab ? "bg-darkBlue text-white" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {!isTabSwitching && ( // 첫 스킬이 애니메이션 적용이 안되는 건 이 코드와 관련되어 있음
        <div className={`flex flex-col items-start ml-[5%] sm:ml-[10%] md:ml-[20%] lg:ml-[30%] transition-opacity duration-300 ${isTabSwitching ? "opacity-0" : "opacity-100"}`}>
          {skillsData[activeTab]?.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex items-start gap-4 py-5 rounded-lg transition-all duration-700 ease-in-out transform ${visibleSkills.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <Image src={skill.logo} alt={`${skill.name} Logo`} className="w-[4em] h-[4em] rounded-full bg-lightWhite" loading="lazy" />
              <div className="flex-1">
                <h3 className={`text-base text-m font-bold mb-1 text-darkBlue ${skill.name.toLowerCase().replace(".", "-")}`}>
                  {skill.name}
                </h3>
                {skill.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-s leading-6 text-darkBlue">{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}