"use client";

import React from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import Left from "../../../public/img/icon/left.png";
import { detailsData } from "../../../data/details";
import InfoSection from "@/components/projects/InfoSection";

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const { id } = params;
  
  const projectDetails = detailsData.find((item) => item.key === id)?.value;

  if (!projectDetails) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto p-4 sm:p-8 text-center font-batang text-fontColor">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg mb-6">The project you are looking for does not exist.</p>
        <Link 
          href="/projects" 
          className="p-3 px-5 bg-backGround text-darkPurple rounded-[20px] transition-transform duration-500">
          Projects 페이지로 돌아가기
        </Link>
      </div>
    );
  }

  return ( 
    <div className="relative cursor-circle bg-backGround min-h-screen sm:h-auto">
      <div className={`fixed z-30 top-0 left-0 w-full flex border-b-thin border-solid border-fontColor items-center bg-backGround px-3 sm:px-4 font-batang
        ${projectDetails.information.description.includes("\n") ? "py-1" : "py-3"}`}
      >
        <Link href="/projects">
          <Image src={Left} alt="Go back Icon" className="w-3 h-3 sm:w-4 sm:h-4 opacity-80 transition-opacity duration-300 ease-in-out cursor-circleHover" />
        </Link>
        <div className="flex-1 text-center text-s sm:text-m leading-4 sm:leading-6 text-fontColor">
          {projectDetails.information.description.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="grid w-full font-batang text-fontColor cursor-circle py-5">
        <InfoSection
          information={projectDetails.information}
          functions={projectDetails.functions}
          troubleshooting={projectDetails.troubleshooting}
          icandoit={projectDetails.icandoit}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;