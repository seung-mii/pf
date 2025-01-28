"use client";

import React from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import Left from "@/public/img/icon/left.png";
import { detailsData } from "@/data/details";
import InfoSection from "@/components/projects/InfoSection";

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const { id } = params;
  
  const projectDetails = detailsData.find((item) => item.key === id)?.value;

  if (!projectDetails) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto p-4 sm:p-8 text-center font-noto text-fontColor cursor-circle">
        <h1 className="text-2xl font-normal mb-4">Page Not Found</h1>
        <Link href="/" className="p-3 px-5 bg-backGround bg-fontColor text-darkBlue border-thin border-fontColor border-solid rounded-[20px] transition-transform duration-500 cursor-circleHover">
          Go Back
        </Link>
      </div>
    );
  }

  return ( 
    <div className="relative">
      <div className="fixed z-30 top-0 left-0 w-full bg-backGround px-4 p-3 sm:px-4 font-batang cursor-circle">
        <Link href="/" className="cursor-circle">
          <Image src={Left} alt="Go back Icon" className="w-3 h-3 sm:w-4 sm:h-4 opacity-80 transition-opacity duration-300 ease-in-out cursor-circleHover" />
        </Link>
      </div>
      <div className="grid w-full font-noto text-fontColor cursor-circle">
        <InfoSection
          information={projectDetails.information}
          functions={projectDetails.functions}
          troubleshooting={projectDetails.troubleshooting}
          icandoit={projectDetails.icandoit}
          kpt={projectDetails.kpt}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;