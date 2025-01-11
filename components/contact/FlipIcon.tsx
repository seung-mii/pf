"use client";

import React from "react";
import Image from "next/image";
import Filp from "../../public/img/icon/vertical-flip.png";

interface FlipIconProps {
  onClick: () => void;
}

const FlipIcon: React.FC<FlipIconProps> = ({ onClick }) => {
  return (
    <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-circleHover" onClick={onClick}>
      <Image src={Filp} alt="Filp Icon" className="w-5 h-5 sm:w-6 sm:h-6 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100" />
    </div>
  );
};

export default FlipIcon;