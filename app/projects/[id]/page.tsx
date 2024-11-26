"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import Left from "../../../public/img/icon/left.png";
import Tab from "../../../public/img/icon/link.png"
import Github from "../../../public/img/icon/github-logo.png"
import { detailsData } from "../../../data/details";
import FunctionSection from "@/components/projects/FunctionSection";
import TroubleSection from "@/components/projects/TroubleSection";
import ICanDoItSection from "@/components/projects/ICanDoItSection";

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const { id } = params;
  
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const headerVh = 6;
  const contentVh = 96 - headerVh * 5;
  
  const projectDetails = detailsData.find((item) => item.key === id)?.value;

  const init = () => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    const children = sticky.querySelectorAll<HTMLDivElement>(".section");
    const start = wrapper.offsetTop + 100;
    const end = wrapper.offsetTop + wrapper.offsetHeight - window.innerHeight - 100;

    children.forEach((child, i) => {
      child.style.bottom = `${-100 + headerVh * (children.length - i)}vh`;
      child.querySelector<HTMLDivElement>(".title")!.style.height = `${headerVh}vh`;
      child.querySelector<HTMLDivElement>(".content")!.style.height = `${contentVh}vh`;
    });

    return { start, end, children };
  };

  const animate = (start: number, end: number, children: NodeListOf<HTMLDivElement>) => {
    const unit = (end - start) / children.length;

    children.forEach((child, i) => {
      const s = start + unit * i + 100;
      const e = start + unit * (i + 1);

      if (window.scrollY <= s) {
        child.style.transform = `translate3d(0, 0, 0)`;
      } else if (window.scrollY >= e) {
        child.style.transform = `translate3d(0, ${-contentVh}%, 0)`;
      } else {
        child.style.transform = `translate3d(0, ${((window.scrollY - s) / (unit - 100)) * -contentVh}%, 0)`;
      }
    });
  };

  useEffect(() => {
    const initialized = init();
    if (initialized) {
      const { start, end, children } = initialized;

      const handleScroll = () => {
        if (start !== undefined && end !== undefined && children) {
          animate(start, end, children);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  if (!projectDetails) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto p-4 sm:p-8 text-center font-sans text-darkBlue">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg mb-6">The project you are looking for does not exist.</p>
        <Link 
          href="/projects" 
          className="p-3 px-5 bg-top text-lightBlue rounded-[20px] transition-transform duration-500">
          Projects 페이지로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="w-full h-[500vh] font-sans text-darkBlue">
      <div className="fixed z-10 top-0 w-full h-[6vh] border-b-thin border-solid border-darkBlue flex items-center bg-top px-4">
        <Link href="/projects" className="text-darkBlue text-base">
          <Image src={Left} alt="Go back Icon" className="w-5 h-5 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100" />
        </Link>
      </div>
      <div ref={stickyRef} className="sticky top-0 w-full h-screen overflow-hidden bg-top">
        <div className="content px-[5vh] py-[2vh] bg-top">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center justify-end gap-4 mt-20">
              {projectDetails.information.videos?.[0] && (
                <div className="flex flex-col items-center justify-center">
                  <video autoPlay loop muted playsInline className="max-w-[55%] max-h-[135vh] rounded-md">
                    <source src={projectDetails.information.videos?.[0].url} type="video/mp4" />
                  </video>
                  <p className="mt-2"><strong className="text-s">{projectDetails.information.videos?.[0].title}</strong></p>
                </div>
              )}
              <div className="flex flex-col items-center w-full gap-4">
                <div className="flex gap-4 justify-center mb-4">
                  {projectDetails.information.github && (
                    <Link href={projectDetails.information.github} target="_blank">
                      <Image src={Github} alt="Github logo" width={24} height={24} />
                    </Link>
                  )}
                  {projectDetails.information.link && (
                    <Link href={projectDetails.information.link} target="_blank">
                      <Image src={Tab} alt="New Tab icon" width={24} height={24} />
                    </Link>
                  )}
                </div>
                <div className="text-sm text-center leading-6">
                  <p><strong>{projectDetails.information.description}</strong></p>
                  <p className="italic mt-2">{projectDetails.information.period}</p>
                  <p>{projectDetails.information.personnel.join(", ")}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {projectDetails.information.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-2 text-xs font-medium border-solid border-thin border-darkBlue rounded-2xl">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-4">
              {projectDetails.information.videos?.[1] && (
                <div className="flex flex-col items-center justify-center">
                  <video autoPlay loop muted playsInline className="max-w-[55%] max-h-[135vh] rounded-md">
                    <source src={projectDetails.information.videos?.[1].url} type="video/mp4" />
                  </video>
                  <p className="mt-2"><strong className="text-s">{projectDetails.information.videos?.[1].title}</strong></p>
                </div>
              )}
              {projectDetails.information.videos?.[2] && (
                <div className="flex flex-col items-center justify-center">
                  <video autoPlay loop muted playsInline className="max-w-[55%] max-h-[135vh] rounded-md">
                    <source src={projectDetails.information.videos?.[2].url} type="video/mp4" />
                  </video>
                  <p className="mt-2"><strong className="text-s">{projectDetails.information.videos?.[2].title}</strong></p>
                </div>
              )}
            </div>
            {projectDetails.information.challenge &&
              <>
                <div className="border-solid border-thin border-darkBlue rounded-md p-4 relative shadow-sm">
                  <h1 className="absolute -top-3 left-4 bg-top text-sm font-bold px-2">
                    Challenge
                  </h1>
                  <p className="text-xs leading-5 mt-2 ml-1">
                    {projectDetails.information.challenge}
                  </p>
                </div>
                <div className="border-solid border-thin border-darkBlue rounded-md p-4 relative shadow-sm">
                  <h1 className="absolute -top-3 left-4 bg-top text-sm font-bold px-2">
                    Approach
                  </h1>
                  <ul className="list-disc pl-4 text-xs leading-5 mt-2">
                    {projectDetails.information.approach?.map((approach, idx) => (
                      <li key={idx}>{approach}</li>
                    ))}
                  </ul>
                </div>
              </>
            }
            {projectDetails.information.result &&
              <div className="border-solid border-thin border-darkBlue rounded-md p-4 relative shadow-sm">
                <h1 className="absolute -top-3 left-4 bg-top text-sm font-bold px-2">
                  Result
                </h1>
                <ul className="list-disc pl-4 text-xs leading-5 mt-2">
                  {projectDetails.information.result.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            }
          </div>
        </div>
        {projectDetails.function && <FunctionSection details={projectDetails.function} />}
        {projectDetails.troubleshooting && <TroubleSection details={projectDetails.troubleshooting} />}
        {projectDetails.icandoit && <ICanDoItSection details={projectDetails.icandoit} />}
      </div>
    </div>
  );
};

export default ProjectDetails;