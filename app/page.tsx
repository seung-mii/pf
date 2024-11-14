"use client";

import { useRef } from "react";
import { useThreeScene } from "@/hooks/useThreeScene";

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);
  useThreeScene(mountRef);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 text-white font-semibold px-4 py-2 rounded-md text-sm font-serif">
        마우스로 고개를 돌려 별을 찾아 클릭해보세요.
      </div>
      <div ref={mountRef} className="w-full h-screen" />
    </div>
  );
}