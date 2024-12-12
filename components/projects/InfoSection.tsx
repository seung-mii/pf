import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InfoSectionProps } from "@/data/details";
import Tab from "@/public/img/icon/link.png";
import Github from "@/public/img/icon/github-logo.png";

const InfoSection: React.FC<InfoSectionProps> = ({ information }) => {
  return (
    <div className="pt-[4vh] h-screen grid grid-cols-2 grid-rows-1 gap-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 px-8 bg-top">
      {information.videos?.[0] && (
        <div className="flex flex-col items-center justify-center">
          <video autoPlay loop muted playsInline controls className="w-[100%] sm:w-[93%] md:w-[85%] lg:w-[80%] rounded-lg shadow-lg">
            <source src={information.videos?.[0].url} type="video/mp4" />
          </video>
          <p className="mt-4"><strong className="text-s">{information.videos?.[0].title}</strong></p>
        </div>
      )}
      <div className="flex flex-col items-center w-full gap-2 justify-center">
        {information.github && information.link && (
          <div className="flex gap-4 justify-center mb-4">
            {information.github && (
              <Link href={information.github} target="_blank">
                <Image src={Github} alt="Github logo" width={22} height={22} />
              </Link>
            )}
            {information.link && (
              <Link href={information.link} target="_blank">
                <Image src={Tab} alt="New Tab icon" width={22} height={22} />
              </Link>
            )}
          </div>
        )}
        <div className="text-center leading-6">
          <p><strong className="text-m">{information.description}</strong></p>
          <p className="text-s mt-2">{information.period} [{information.personnel.join(", ")}]</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {information.skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-2 text-s border-solid border-thin border-darkBlue rounded-2xl">
              {skill}
            </span>
          ))}
        </div>
      </div>
      {information.videos?.[1] && (
        <div className="flex flex-col items-center justify-center">
          <video autoPlay loop muted controls playsInline className="w-[100%] sm:w-[93%] md:w-[85%] lg:w-[80%] rounded-lg shadow-md">
            <source src={information.videos?.[1].url} type="video/mp4" />
          </video>
          <p className="mt-4"><strong className="text-s">{information.videos?.[1].title}</strong></p>
        </div>
      )}
      {information.videos?.[2] && (
        <div className="flex flex-col items-center justify-center">
          <video autoPlay loop muted controls playsInline className="w-[100%] sm:w-[93%] md:w-[85%] lg:w-[80%] rounded-lg shadow-md">
            <source src={information.videos?.[2].url} type="video/mp4" />
          </video>
          <p className="mt-4"><strong className="text-s">{information.videos?.[2].title}</strong></p>
        </div>
      )}
      {information.challenge && information.approach && (
        <div className="flex flex-col gap-6 col-span-2 mb-12">
          <div className="border-solid border-thin border-darkBlue rounded-md p-4 mb-5 mx-10 relative shadow-sm">
            <h1 className="absolute -top-2 left-4 bg-top text-m px-2">
              Challenge
            </h1>
            <p className="text-s leading-5 mt-1 ml-1">
              {information.challenge}
            </p>
          </div>
          <div className="border-solid border-thin border-darkBlue rounded-md p-4 mx-10 relative shadow-sm">
            <h1 className="absolute -top-2 left-4 bg-top text-m px-2">
              Approach
            </h1>
            <ul className="list-disc pl-4 text-s leading-5 mt-1">
              {information.approach.map((ap, idx) => (
                <li key={idx}>{ap}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoSection;
