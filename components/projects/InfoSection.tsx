import React, { useMemo } from "react";
import { DetailTotalInfo } from "@/data/details";
import Tab from "@/public/img/icon/link.png";
import Github from "@/public/img/icon/github-logo.png";
import Link from "next/link";
import Image from "next/image";
import ToggleGroup from "./ToggleGroup";
import LazyVideo from "./LazyVideo";

const InfoSection: React.FC<DetailTotalInfo> = ({ information, functions, troubleshooting, kpt }) => {
  const memoizedVideos = useMemo(() => {
    return information.videos?.map((video, index: number) => (
      <LazyVideo key={index} url={video.url} title={video.title} />
    ));
  }, [information.videos]);

  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-y-5 gap-x-3 px-7 pt-5 sm:pt-8 sm:pt-0 relative">
      <div className="sm:sticky top-10 sm:h-full flex flex-col items-start sm:justify-start">
        <div className="w-full flex gap-2 sm:gap-4 mt-5 mb-2 sm:my-5">
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
        <div className="w-full text-left text-md sm:text-l font-medium leading-5 sm:leading-7 text-fontColor">
          {information.description}
        </div>
        <div className="mt-4 sm:mt-6 w-full">
          <div className="w-full border-l-2 border-fontColor border-solid pl-2 py-1 text-s sm:text-m mb-3">
            <span>인원 : {information.personnel.join(", ")}</span>
          </div>
          <div className="w-full border-l-2 border-fontColor border-solid pl-2 py-1 text-s sm:text-m mb-3 leading-5">
            <span>기간 : {information.period}</span>
          </div>
          <div className="w-full border-l-2 border-fontColor border-solid pl-2 py-1 text-s sm:text-m leading-5 sm:leading-6">
            <span>기술 스택 및 API : {information.skills.join(", ")}</span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-8 sm:pr-4 xl:pr-0">
          {memoizedVideos}
        </div>
      </div>
      <div className="sm:overflow-y-auto sm:max-h-[95vh] sm:pt-8 scrollbar-hide cursor-scroll">
        <div className="flex flex-col items-center w-full mb-5 gap-6 justify-center">
          {information.challenge && (
            <>
              <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mb-1 relative shadow-lg">
                <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">🔍ﾠ Challenge</h1>
                <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 space-y-1">
                  {information.challenge?.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mb-1 relative shadow-lg">
                <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">💡ﾠ Approach</h1>
                <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 space-y-1">
                  {information.approach?.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            </>
        )}
          {information.result && (
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">📊ﾠ Result</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 space-y-1">
                {information.result?.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          )}
          {information.award && (
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mx-0 my-1 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">🏆ﾠ Contest</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
                {information.award?.map((s, idx) => {
                  if (idx % 3 === 0) return <li key={idx}>{s}</li>;
                  else return (<li key={`solution-${idx}`} className="select-none leading-relaxed ml-4">{s}</li>);
                })}
              </ul>
            </div>
          )}
          {troubleshooting && (
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-6 mx-0 my-1 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">🐞ﾠ Trouble Shooting</h1>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 auto-rows-[minmax(0, 1fr, auto)]">
                {troubleshooting?.map(({ title, cause, solution, code }, idx) => (
                  <div key={idx} className="h-auto self-start">
                    <ToggleGroup id={idx} title={title} cause={cause} solution={solution} code={code} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {functions && (
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-6 mx-0 my-1 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">🧩ﾠ Function</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 auto-rows-[minmax(0, 1fr, auto)]">
                {functions.map(({ title, details }, idx) => (
                  <div key={idx} className="h-auto self-start">
                    <ToggleGroup id={idx} title={title} contents={details} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* {icandoit && (
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-6 mx-0 my-1 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">💪ﾠ I can do it</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 auto-rows-[minmax(0, 1fr, auto)]">
                {icandoit.map(({ title, details }, idx) => (
                  <div key={idx} className="h-auto self-start">
                    <ToggleGroup id={idx} title={title} contents={details} />
                  </div>
                ))}
              </div>
            </div>
          )} */}
          {kpt?.keep &&
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mx-0 my-1 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">👍ﾠ Keep</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
                {kpt.keep?.map((k, kidx) => (
                  <li key={kidx}>{k}</li>
                ))}
              </ul>
            </div>
          }
          {kpt?.problem &&
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mx-0 my-1 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">⚠️ﾠ Problem</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
                {kpt.problem?.map((p, pidx) => (
                  <li key={pidx}>{p}</li>
                ))}
              </ul>
            </div>
          }
          {kpt?.trys &&
            <div className="w-full border-solid border-thin border-fontColor rounded-md px-3 py-4 sm:p-5 mx-0 my-1 relative shadow-lg">
              <h1 className="absolute -top-3.5 left-4 px-2 py-2 sm:py-1 bg-backGround text-s sm:text-m">🚀ﾠ Try</h1>
              <ul className="list-disc pl-4 text-xs sm:text-s leading-4 sm:leading-6 sm:mt-1 space-y-1 sm:space-y-0">
                {kpt.trys?.map((t, tidx) => (
                  <li key={tidx}>{t}</li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default InfoSection;