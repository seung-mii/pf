"use client";

import Link from "next/link";
import React from "react";

const CatalogData = [
  { href: "/", text: "ABOUT" },
  { href: "/projects", text: "PROJECTS" },
  { href: "/contact", text: "CONTACT" },
];

export function Header() {
  return (
    <div className="relative cursor-circle font-batang">
      <header className="fixed top-0 left-0 w-full flex justify-end items-center gap-8 px-4 sm:px-8 py-3 sm:py-4 bg-backGround z-20">
        <nav className="flex flex-row items-center justify-center w-full h-full gap-2 sm:gap-6 text-m sm:font-bold text-fontColor">
          {CatalogData.map((link, index) => (
            <React.Fragment key={link.text}>
              <Link
                href={link.href}
                className="hover:underline transition-all duration-500 ease-out cursor-circleHover"
              >
                {link.text}
              </Link>
              {index < CatalogData.length - 1 && <span className="text-fontColor">•</span>}
            </React.Fragment>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Header;