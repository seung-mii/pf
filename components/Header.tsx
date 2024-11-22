"use client";

import React, { useState } from "react";
import Catalog from "./Catalog";

export function Header() {
  const [showCatalog, setShowCatalog] = useState(false);

  const handleOpenCatalog = () => {
    setShowCatalog(true);
  };

  if (showCatalog) {
    return <Catalog />;
  }

  return (
    <div className="relative">
      <header className="flex justify-end items-center gap-8 px-8 py-6 bg-[transparent] z-10 relative">
        <div className="h-[2px] flex-1 bg-[#1A2B3C] transition-[clip-path] duration-1000 ease-linear inset(0 100% 0 0)"></div>
        <div className="flex flex-col gap-1 cursor-pointer" onClick={handleOpenCatalog}>
          <div className="w-[25px] h-[3px] rounded-[2px] bg-[#1A2B3C]"></div>
          <div className="w-[25px] h-[3px] rounded-[2px] bg-[#1A2B3C]"></div>
          <div className="w-[25px] h-[3px] rounded-[2px] bg-[#1A2B3C]"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;