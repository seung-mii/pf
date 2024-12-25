"use client";

import React from "react";
import Image from "next/image";
import Filp from "../../public/img/icon/reload.png";

interface FlipIconProps {
  onClick: () => void;
}

const FlipIcon: React.FC<FlipIconProps> = ({ onClick }) => {
  return (
    <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 cursor-star z-10" onClick={onClick}>
      <Image src={Filp} alt="Filp Icon" className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100" />
    </div>
  );
};

export default FlipIcon;