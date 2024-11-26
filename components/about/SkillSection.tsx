import React, { useState } from "react";
import Image from "next/image";
import { skillsData } from "../../data/skills";

export function SkillSection() {
  const [activeTab, setActiveTab] = useState("Language");
  const tabs = Object.keys(skillsData);

  return (
    <div className=" py-40 font-sans">
      <div className="flex justify-center gap-4 mb-11">
        {tabs.map((tab) => (
          <button key={tab} className={`px-6 py-2 text-base text-s border-thin border-darkBlue rounded-[25px] bg-transparent cursor-pointer transition-colors duration-300  hover:bg-darkBlue hover:text-lightBlue ${activeTab === tab ? "bg-darkBlue text-lightBlue" : ""}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      {skillsData[activeTab] && (
        <div className="flex flex-col items-start ml-[30%]">
          {skillsData[activeTab].map((skill) => (
            <div key={skill.name} className="flex items-start gap-4 py-5 rounded-lg transition-colors duration-300">
              <Image src={skill.logo} alt={`${skill.name} Logo`} className="w-[4.5em] h-[4.5em] rounded-full bg-lightWhite" loading="lazy" />
              <div className="flex-1">
                <h3 className={`text-base text-m font-bold mb-2 text-darkBlue ${skill.name.toLowerCase().replace('.', '-')}`}>{skill.name}</h3>
                {skill.description.map((desc, index) => (
                  <p key={index} className="text-s leading-6 text-darkBlue">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}