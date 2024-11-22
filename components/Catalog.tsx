"use client";

import React from "react";
import Link from "next/link";

const CatalogData = [
  { href: "/", text: "HOME" },
  { href: "/about", text: "ABOUT" },
  { href: "/projects", text: "PROJECTS" },
  { href: "/contact", text: "CONTACT" },
];

export function Catalog() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#A8C5D3]">
      <nav className="flex flex-col items-center gap-20 text-[25px] font-bold text-[#1A2B3C]">
        {CatalogData.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Catalog;