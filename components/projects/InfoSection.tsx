import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InfoSectionProps } from "@/data/details";
import Tab from "@/public/img/icon/link.png";
import Github from "@/public/img/icon/github-logo.png";

const InfoSection: React.FC<InfoSectionProps> = ({ information }) => {
  return (
    <div className="content px-[5vh] py-[2vh] bg-top">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-end gap-4 mt-20">
          {information.videos?.[0] && (
            <div className="flex flex-col items-center justify-center">
              <video autoPlay loop muted playsInline className="max-w-[55%] max-h-[135vh] rounded-md">
                <source src={information.videos?.[0].url} type="video/mp4" />
              </video>
              <p className="mt-2"><strong className="text-s">{information.videos?.[0].title}</strong></p>
            </div>
          )}
          <div className="flex flex-col items-center w-full gap-4">
            <div className="flex gap-4 justify-center mb-4">
              {information.github && (
                <Link href={information.github} target="_blank">
                  <Image src={Github} alt="Github logo" width={24} height={24} />
                </Link>
              )}
              {information.link && (
                <Link href={information.link} target="_blank">
                  <Image src={Tab} alt="New Tab icon" width={24} height={24} />
                </Link>
              )}
            </div>
            <div className="text-sm text-center leading-6">
              <p><strong>{information.description}</strong></p>
              <p className="italic mt-2">{information.period}</p>
              <p>{information.personnel.join(", ")}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {information.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-2 text-xs font-medium border-solid border-thin border-darkBlue rounded-2xl">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          {information.videos?.[1] && (
            <div className="flex flex-col items-center justify-center">
              <video autoPlay loop muted playsInline className="max-w-[55%] max-h-[135vh] rounded-md">
                <source src={information.videos?.[1].url} type="video/mp4" />
              </video>
              <p className="mt-2"><strong className="text-s">{information.videos?.[1].title}</strong></p>
            </div>
          )}
          {information.videos?.[2] && (
            <div className="flex flex-col items-center justify-center">
              <video autoPlay loop muted playsInline className="max-w-[55%] max-h-[135vh] rounded-md">
                <source src={information.videos?.[2].url} type="video/mp4" />
              </video>
              <p className="mt-2"><strong className="text-s">{information.videos?.[2].title}</strong></p>
            </div>
          )}
        </div>
        {information.challenge && information.approach &&
          <>
            <div className="border-solid border-thin border-darkBlue rounded-md p-4 relative shadow-sm">
              <h1 className="absolute -top-3 left-4 bg-top text-sm font-bold px-2">
                Challenge
              </h1>
              <p className="text-xs leading-5 mt-2 ml-1">
                {information.challenge}
              </p>
            </div>
            <div className="border-solid border-thin border-darkBlue rounded-md p-4 relative shadow-sm">
              <h1 className="absolute -top-3 left-4 bg-top text-sm font-bold px-2">
                Approach
              </h1>
              <ul className="list-disc pl-4 text-xs leading-5 mt-2">
                {information.approach.map((approach, idx) => (
                  <li key={idx}>{approach}</li>
                ))}
              </ul>
            </div>
          </>
        }
        {information.result &&
          <div className="border-solid border-thin border-darkBlue rounded-md p-4 relative shadow-sm">
            <h1 className="absolute -top-3 left-4 bg-top text-sm font-bold px-2">
              Result
            </h1>
            <ul className="list-disc pl-4 text-xs leading-5 mt-2">
              {information.result.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default InfoSection;
