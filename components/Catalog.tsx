"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CatalogData = [
  { href: "/", text: "HOME" },
  { href: "/about", text: "ABOUT" },
  { href: "/projects", text: "PROJECTS" },
  { href: "/contact", text: "CONTACT" },
];

export function Catalog({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const [visibleLinks, setVisibleLinks] = useState<number>(0);
  const [isXButtonVisible, setIsXButtonVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLinks((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 300);
    
    setTimeout(() => {
      setIsXButtonVisible(true);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsFadingOut(true); 
    setTimeout(() => {
      onClose(); 
    }, 500);
  };

  const handleLink = (text: string, href: string) => {
    if (text.toLowerCase() === pathname.slice(1).toLowerCase()) {
      handleClose();
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className={`cursor-star fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${isFadingOut ? "opacity-0" : "opacity-100"} bg-bottom z-40`}>
      <div
        className={`fixed top-7 right-7 cursor-star z-50 transition-transform duration-500 ease-out ${isXButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]"}`}
        onClick={handleClose}
      >
        <div className="w-[25px] h-[2px] bg-darkBlue rounded-md transform rotate-45"></div>
        <div className="w-[25px] h-[2px] bg-darkBlue rounded-md transform -rotate-45 -mt-[2px]"></div>
      </div>
      <nav className="flex flex-col items-center justify-center w-full h-full gap-20 text-xl font-bold text-darkBlue">
        {CatalogData.map((link, index) => (
        <Link
          key={link.text}
          href={link.href}
          className={`hover:underline hover:cursor-star transition-all duration-500 ease-out`}
          style={{opacity: visibleLinks > index ? 1 : 0, transform: visibleLinks > index ? "translateY(0)" : "translateY(20px)"}}
          onClick={(e) => {
            e.preventDefault();
            handleLink(link.text, link.href);
          }}
        >
          {link.text}
        </Link>
        ))}
      </nav>
    </div>
  );
}

export default Catalog;