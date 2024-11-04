import React, { useState } from "react";
import Image from "next/image";
import { skillsData } from "../../data/skills";

export function SkillSection() {
  const [activeTab, setActiveTab] = useState("Language");
  const tabs = Object.keys(skillsData);

  return (
    <div className="p-8 font-serif">
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button key={tab} className={`px-6 py-2 text-base border-2 border-[#1a2b3c] rounded-[25px] bg-transparent cursor-pointer transition-colors duration-300  hover:bg-[#1a2b3c] hover:text-[#D1E4EC] ${activeTab === tab ? "bg-[#1a2b3c] text-[#D1E4EC]" : ""}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      {skillsData[activeTab] && (
        <div className="flex flex-col items-start pl-8">
          {skillsData[activeTab].map((skill) => (
            <div key={skill.name} className="flex items-start gap-4 px-10 py-3 my-2 rounded-lg transition-colors duration-300">
              <Image src={skill.logo} alt={`${skill.name} Logo`} className="w-[4.5em] h-[4.5em] rounded-full bg-white" loading="lazy" />
              <div className="flex-1">
                <h3 className={`text-base font-bold mb-2 text-[#1A2B3C] ${skill.name.toLowerCase().replace('.', '-')}`}>{skill.name}</h3>
                <ul>
                  {skill.description.map((desc, index) => (
                    <li key={index} className="text-sm leading-6 text-[#1A2B3C] list-disc ml-4">
                      {desc}
                    </li>
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