"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import Left from "../../../public/img/icon/left.png";
import { detailsData } from "../../../data/details";
import FunctionSection from "@/components/projects/FunctionSection";
import TroubleSection from "@/components/projects/TroubleSection";
import ICanDoItSection from "@/components/projects/ICanDoItSection";
import InfoSection from "@/components/projects/InfoSection";

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
    <div ref={wrapperRef} className="grid w-full font-sans text-darkBlue pt-20 h-[608vh]">
      <div className="fixed z-10 top-0 w-full h-[6vh] border-b-thin border-solid border-darkBlue flex items-center bg-top px-2 sm:px-4">
        <Link href="/projects" className="text-darkBlue text-base">
          <Image src={Left} alt="Go back Icon" className="w-5 h-5 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100" />
        </Link>
        <div className="flex-1 text-center text-s sm:text-m">{projectDetails.information.title}</div>
      </div>
      <InfoSection information={projectDetails.information}/>
      <div className="border-t border-b border-darkBlue w-full h-[500vh] mb-[100vh]">
        <div ref={stickyRef} className="sticky top-0 w-full h-screen overflow-hidden">
          {projectDetails.function && <FunctionSection details={projectDetails.function} />}
          {projectDetails.troubleshooting && <TroubleSection details={projectDetails.troubleshooting} />}
          {projectDetails.icandoit && <ICanDoItSection details={projectDetails.icandoit} />}
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-[3vw] sm:text-[1rem] text-darkBlue text-center bg-white/60 px-2 py-1 rounded shadow-md z-50 transition-opacity duration-500 ease-in-out whitespace-nowrap">
            Scroll to the bottom for more details.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;