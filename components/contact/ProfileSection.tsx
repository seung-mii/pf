import React from "react";
import Image from "next/image";
import Photo from "../../public/img/photo.jpeg";
import QR from "../../public/img/qr.png";
import Link from "next/link";

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-2">
        <Image src={Photo} alt="Profile Photo" className="w-[90px] h-[120px] sm:w-[100px] sm:h-[130px] md:w-[120px] md:h-[150px] lg:w-[130px] lg:h-[160px] object-cover" />
        <div className="text-left">
          <h1 className="text-m sm:text-l font-bold m-0">신승미</h1>
          <h2 className="text-s sm:text-m mt-1 sm:mt-2 md:mt-3">프론트엔드 개발자</h2>
        </div>
      </div>
      <div className="text-center">
        <Image src={QR} alt="Resume QR Code" className="mx-auto w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px]"/>
        <Link href="https://seung-mi-resume.vercel.app/" target="_blank" className="text-s m-0 underline sm:no-underline sm:hover:underline hover:cursor-circleDarkHover">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;