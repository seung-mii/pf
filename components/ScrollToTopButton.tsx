"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Up from "../public/img/icon/up_light.png";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const topElement = document.getElementById("top");
    if (topElement) observer.observe(topElement);

    return () => {
      if (topElement) observer.unobserve(topElement);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 transition-all duration-500 ease-in-out z-[100] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="p-3 bg-darkBlue rounded-full shadow-lg transition-all duration-500 ease-in-out"
        >
          <Image
            src={Up}
            alt="Up To Top Icon"
            className="w-3 h-3 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
        </button>
      </div>
    </>
  );
};

export default ScrollToTopButton;