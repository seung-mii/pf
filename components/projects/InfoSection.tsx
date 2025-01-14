import React, { useEffect, useState } from "react";
import { DetailTotalInfo } from "@/data/details";
import Tab from "@/public/img/icon/link.png";
import Github from "@/public/img/icon/github-logo.png";
import Link from "next/link";
import Image from "next/image";
import ToggleGroup from "./ToggleGroup";

const InfoSection: React.FC<DetailTotalInfo> = ({ information, functions, troubleshooting, icandoit }) => {
  const [hasVideo0, setHasVideo0] = useState(true);
  
  useEffect(() => {
    setHasVideo0(!!information.videos?.[0]);
  }, [information.videos]);

  return (
    <div className="sm:grid md:grid-cols-2 sm:gap-y-6 px-8 relative pt-10 sm:pt-20">
      {information.videos?.[0] && (
        <div className="flex flex-col items-center justify-center mb-5">
          <video autoPlay loop muted playsInline className="w-[90%] sm:w-[83%] md:w-[78%] lg:w-[70%] max-h-[38vh] rounded-lg shadow-md">
            <source src={information.videos?.[0].url} type="video/mp4" />
          </video>
          <p className="my-1"><strong className="text-s">{information.videos?.[0].title}</strong></p>
        </div>
      )}
      {information.videos?.[1] && (
        <div className="flex flex-col items-center justify-center mb-5">
          <video autoPlay loop muted playsInline className="w-[90%] sm:w-[83%] md:w-[78%] lg:w-[70%] max-h-[38vh] rounded-lg shadow-md">
            <source src={information.videos?.[1].url} type="video/mp4" />
          </video>
          <p className="my-1"><strong className="text-s">{information.videos?.[1].title}</strong></p>
        </div>
      )}
      {information.videos?.[2] && (
        <div className="flex flex-col items-center justify-center mb-5">
          <video autoPlay loop muted playsInline className="w-[90%] sm:w-[83%] md:w-[78%] lg:w-[70%] max-h-[38vh] rounded-lg shadow-md">
            <source src={information.videos?.[2].url} type="video/mp4" />
          </video>
          <p className="my-1"><strong className="text-s">{information.videos?.[2].title}</strong></p>
        </div>
      )}
      <div className={`flex flex-col items-center w-full mb-12 gap-2 justify-center ${!hasVideo0 ? "col-span-2 mb-0" : ""}`}>
        <div className="flex flex-col justify-center gap-3 leading-4 sm:leading-8">
          <div className="flex-1 flex gap-2 sm:gap-4 ml-3 mb-2">
            {information.link && (
              <Link href={information.link} target="_blank">
                <Image src={Tab} alt="New Tab icon" className="w-4 h-4 sm:w-5 sm:h-5 cursor-circleHover" />
              </Link>
            )}
            {information.github && (
              <Link href={information.github} target="_blank">
                <Image src={Github} alt="Github logo" className="w-4 h-4 sm:w-5 sm:h-5 cursor-circleHover" />
              </Link>
            )}
          </div>
          <div className="border-l-4 border-fontColor border-solid pl-4 text-s">
            <span className="">인원 : {information.personnel.join(", ")}</span>
          </div>
          <div className="border-l-4 border-fontColor border-solid pl-4 text-s">
            <span className="">기간 : {information.period}</span>
          </div>
          <div className="border-l-4 border-fontColor border-solid pl-4 text-s">
            <span className="">기술 스택 및 API : {information.skills.join(", ")}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 col-span-2">
        {information.challenge && (
          <>
            <div className="border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mt-4 mb-1 mx-0 sm:mx-10 relative shadow-md">
              <h1 className="absolute -top-3.5 left-4 px-3 py-1 bg-backGround text-s sm:text-m">Challenge</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
                {information.challenge?.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mx-0 my-1 sm:mx-10 relative shadow-md">
              <h1 className="absolute -top-3.5 left-4 px-3 py-1 bg-backGround text-s sm:text-m">Approach</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
                {information.approach?.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        {information.result && (
          <div className="border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mx-0 my-1 sm:mx-10 relative shadow-md">
            <h1 className="absolute -top-3.5 left-4 px-3 py-1 bg-backGround text-s sm:text-m">Result</h1>
            <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
              {information.result?.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        {information.award && (
          <div className="border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mx-0 my-1 sm:mx-10 relative shadow-md">
            <h1 className="absolute -top-3.5 left-4 px-3 py-1 bg-backGround text-s sm:text-m">Contest</h1>
            <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
              {information.award?.map((s, idx) => {
                if (idx % 3 === 0) return <li key={idx}>{s}</li>;
                else return (<li key={`solution-${idx}`} className="select-none leading-relaxed ml-4">{s}</li>);
              })}
            </ul>
          </div>
        )}
        {troubleshooting && (
          <div className="border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-6 mx-0 my-1 sm:mx-10 relative shadow-md">
            <h1 className="absolute -top-3.5 left-4 px-3 py-1 bg-backGround text-s sm:text-m">Trouble Shooting</h1>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 auto-rows-[minmax(0, 1fr, auto)]">
              {troubleshooting?.map(({ title, cause, solution, before, after }, idx) => (
                <div key={idx} className="h-auto self-start">
                  <ToggleGroup id={idx} title={title} cause={cause} solution={solution} before={before} after={after} />
                </div>
              ))}
            </div>
          </div>
        )}
        {functions && (
          <div className="border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-6 mx-0 my-1 sm:mx-10 relative shadow-md">
            <h1 className="absolute -top-3.5 left-4 px-3 py-1 bg-backGround text-s sm:text-m">Function</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 auto-rows-[minmax(0, 1fr, auto)]">
              {functions.map(({ title, details }, idx) => (
                <div key={idx} className="h-auto self-start">
                  <ToggleGroup id={idx} title={title} contents={details} />
                </div>
              ))}
            </div>
          </div>
        )}
        {icandoit && (
          <div className="border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-6 mx-0 my-1 sm:mx-10 relative shadow-md">
            <h1 className="absolute -top-3.5 left-4 px-3 py-1 bg-backGround text-s sm:text-m">I can do it</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 auto-rows-[minmax(0, 1fr, auto)]">
              {icandoit.map(({ title, details }, idx) => (
                <div key={idx} className="h-auto self-start">
                  <ToggleGroup id={idx} title={title} contents={details} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;