"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const CatalogData = [
  { href: "/", text: "HOME" },
  { href: "/about", text: "ABOUT" },
  { href: "/projects", text: "PROJECTS" },
  { href: "/contact", text: "CONTACT" },
];

export function Catalog() {
  const [visibleLinks, setVisibleLinks] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLinks((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-bottom">
      <nav className="flex flex-col items-center gap-20 text-xl font-bold text-darkBlue">
        {CatalogData.map((link, index) => (
          <Link
            key={link.text}
            href={link.href}
            className={`hover:underline transition-all duration-500 ease-out`}
            style={{
              opacity: visibleLinks > index ? 1 : 0,
              transform: visibleLinks > index ? "translateY(0)" : "translateY(20px)",
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