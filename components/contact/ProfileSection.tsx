import React from "react";
import Image from "next/image";
import Photo from "../../public/img/photo.jpeg";
import QR from "../../public/img/qr.png";

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-2">
        <Image src={Photo} alt="Profile Photo" className="w-[90px] h-[120px] sm:w-[100px] sm:h-[130px] md:w-[120px] md:h-[150px] lg:w-[130px] lg:h-[160px] object-cover" />
        <div className="text-left">
          <h1 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold m-0">Shin Seung Mi</h1>
          <h2 className="text-[12px] sm:text-[13px] md:text-[14px] mt-1 sm:mt-2 md:mt-3">Frontend Developer</h2>
        </div>
      </div>
      <div className="text-center">
        <Image src={QR} alt="Resume QR Code" className="mx-auto w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px]"/>
        <p className="text-[12px] sm:text-[13px] m-0">Resume</p>
      </div>
    </div>
  );
};

export default ProfileSection;