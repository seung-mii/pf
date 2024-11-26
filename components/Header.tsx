"use client";

import React, { useEffect, useState } from "react";
import Catalog from "./Catalog";

export function Header() {
  const [isLineAnimating, setIsLineAnimating] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [circleStyle, setCircleStyle] = useState({});
  const [isCircleVisible, setIsCircleVisible] = useState(false);

  const handleCircleAnimation = (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    setCircleStyle({
      top: `${y}px`,
      left: `${x}px`,
      transform: "scale(0)",
    });
    setIsCircleVisible(true);

    setTimeout(() => {
      setCircleStyle((prevStyle) => ({
        ...prevStyle,
        transform: "scale(100)",
      }));
    }, 10);

    setTimeout(() => {
      setShowCatalog(true);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLineAnimating(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (showCatalog) {
    return <Catalog />;
  }

  return (
    <div className="relative bg-transparent">
      <header className="absolute top-0 left-0 w-full flex justify-end items-center gap-8 px-8 py-6 bg-top z-10">
        <div className={`h-[2px] flex-1 bg-darkBlue transition-[clip-path] duration-1000 ease-linear`} style={{ clipPath: isLineAnimating ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}></div>
        <div className="flex flex-col gap-1 cursor-pointer" onClick={handleCircleAnimation}>
          <div className="rounded-[2px] bg-darkBlue" style={{ animation: isLineAnimating ? "draw-bar 0.5s ease forwards" : "none", animationDelay: isLineAnimating ? "1s" : "0s" }}></div>
          <div className="rounded-[2px] bg-darkBlue" style={{ animation: isLineAnimating ? "draw-bar 0.5s ease forwards" : "none", animationDelay: isLineAnimating ? "1.5s" : "0s" }}></div>
          <div className="rounded-[2px] bg-darkBlue" style={{ animation: isLineAnimating ? "draw-bar 0.5s ease forwards" : "none", animationDelay: isLineAnimating ? "2s" : "0s" }}></div>
        </div>
      </header>
      {isCircleVisible && (
        <div
          className="fixed top-0 left-0 w-[100px] h-[100px] bg-bottom rounded-full pointer-events-none transition-transform duration-1000 ease-out"
          style={{ ...circleStyle, position: "fixed", zIndex: 20 }}
        ></div>
      )}
    </div>
  );
}

export default Header;