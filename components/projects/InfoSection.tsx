import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InfoSectionProps } from "@/data/details";
import Tab from "@/public/img/icon/link.png";
import Github from "@/public/img/icon/github-logo.png";

const InfoSection: React.FC<InfoSectionProps> = ({ information }) => {
  const [hasVideo0, setHasVideo0] = useState(true);
  
  useEffect(() => {
    setHasVideo0(!!information.videos?.[0]);
  }, [information.videos]);

  return (
    <div className="sm:h-screen sm:grid sm:grid-cols-2 sm:gap-6 px-8 h-[80vh] relative">
      {information.videos?.[0] && (
        <div className="flex flex-col items-center justify-center">
          <video autoPlay loop muted playsInline className="w-[90%] sm:w-[83%] md:w-[78%] lg:w-[70%] max-h-[38vh] rounded-lg shadow-md">
            <source src={information.videos?.[0].url} type="video/mp4" />
          </video>
          <p className="mt-2"><strong className="text-s">{information.videos?.[0].title}</strong></p>
        </div>
      )}
      <div className={`flex flex-col items-center w-full my-3 gap-2 justify-center ${!hasVideo0 ? "col-span-2 mb-0" : ""}`}>
        <div className="flex gap-2 sm:gap-4 justify-center mt-6 mb-2 sm:mb-4">
          {information.github && (
            <Link href={information.github} target="_blank">
              <Image src={Github} alt="Github logo" className="w-5 h-5 sm:w-15 sm:h-15 cursor-star" />
            </Link>
          )}
          {information.link && (
            <Link href={information.link} target="_blank">
              <Image src={Tab} alt="New Tab icon" className="w-5 h-5 sm:w-15 sm:h-15 cursor-star" />
            </Link>
          )}
        </div>
        <div className="text-center leading-4 sm:leading-6">
          <p><strong className="text-m font-semibold">
              {information.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </strong></p>
          <p className="text-s mt-2">{information.period} [{information.personnel.join(", ")}]</p>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mt-2 mb-7">
          {information.skills.map((skill, idx) => (
            <span key={idx} className="mx-0.5 p-2 sm:px-3 sm:py-2 text-xs sm:text-s border-solid border-thin border-darkBlue rounded-2xl">
              {skill}
            </span>
          ))}
        </div>
      </div>
      {information.videos?.[1] && (
        <div className="flex flex-col items-center justify-center mb-5">
          <video autoPlay loop muted playsInline className="w-[90%] sm:w-[83%] md:w-[78%] lg:w-[70%] max-h-[38vh] rounded-lg shadow-md">
            <source src={information.videos?.[1].url} type="video/mp4" />
          </video>
          <p className="mt-2"><strong className="text-s">{information.videos?.[1].title}</strong></p>
        </div>
      )}
      {information.videos?.[2] && (
        <div className="flex flex-col items-center justify-center mb-5">
          <video autoPlay loop muted playsInline className="w-[90%] sm:w-[83%] md:w-[78%] lg:w-[70%] max-h-[38vh] rounded-lg shadow-md">
            <source src={information.videos?.[2].url} type="video/mp4" />
          </video>
          <p className="mt-2"><strong className="text-s">{information.videos?.[2].title}</strong></p>
        </div>
      )}
      <div className="flex flex-col gap-4 sm:gap-6 col-span-2 mb-5">
        {information.challenge && (
          <>
            <div className="border-solid border-thin border-darkBlue rounded-md px-2 py-3 sm:p-4 my-2 mx-0 sm:mx-10 relative shadow-sm">
              <h1 className="absolute -top-2 left-4 bg-[#7499b4] text-s sm:text-m px-2">Challenge</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-3 sm:leading-5 sm:mt-1">
                {information.challenge?.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="border-solid border-thin border-darkBlue rounded-md px-2 py-3 sm:p-4 mx-0 sm:mx-10 relative shadow-sm">
              <h1 className="absolute -top-2 left-4 bg-[#7499b4] text-s sm:text-m px-2">Approach</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-3 sm:leading-5 sm:mt-1">
                {information.approach?.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        {information.result && (
          <div className="border-solid border-thin border-darkBlue rounded-md px-2 py-3 sm:p-4 my-2 mx-0 sm:mx-10 relative shadow-sm">
            <h1 className="absolute -top-2 left-4 bg-[#7499b4] text-s sm:text-m px-2">Result</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-3 sm:leading-5 sm:mt-1">
                {information.result?.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
          </div>
        )}
        {information.award && (
          <div className="border-solid border-thin border-darkBlue rounded-md px-2 py-3 sm:p-4 my-2 mx-0 sm:mx-10 relative shadow-sm">
            <h1 className="absolute -top-2 left-4 bg-top text-s sm:text-m px-2">Contest</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-3 sm:leading-5 sm:mt-1">
                {information.award?.map((s, idx) => {
                  if (idx % 3 === 0) return <li key={idx}>{s}</li>;
                  else return (<li key={`solution-${idx}`} className="select-none leading-relaxed ml-4">{s}</li>);
                })}
              </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
