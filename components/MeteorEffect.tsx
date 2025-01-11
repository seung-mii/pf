"use client"; 
import React, { useEffect, useState } from "react";

const MAX_STAR_COUNT = 50;
const colors = ["#d5adfc7f", "#f6ff7e7f", "#7efbff7f", "#ffffff7f"];

export default function MeteorEffect() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [starInterval, setStarInterval] = useState(0);
  const count = 6, maxDelay = 15, minSpeed = 6, maxSpeed = 8;
  const starCount = count < MAX_STAR_COUNT ? count : MAX_STAR_COUNT;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const calcStarInterval = () => {
        setScreenWidth(window.innerWidth);
        setStarInterval(Math.floor((window.innerWidth * 1.5) / (count * 5)));
      };

      calcStarInterval();
      window.addEventListener("resize", calcStarInterval);
      return () => {
        window.removeEventListener("resize", calcStarInterval);
      };
    }
  }, [count]);

  if (screenWidth === null) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-backGround">
      {new Array(starCount).fill(0).map((_, idx) => {
        const animationName = "meteor-right-30";
        const left = `${screenWidth - Math.random() * count * 5 * starInterval}px`;
        const animationDelay = `${(Math.random() * maxDelay).toFixed(2)}s`;
        const randomSpeed = minSpeed + Math.random() * (maxSpeed - minSpeed);
        const animationDuration = `${randomSpeed.toFixed(2)}s`;
        const colorIndex = Math.floor(Math.random() * colors.length - 0.001);
        const starColor = colors[colorIndex];
        const size = `${2 + Math.floor(Math.random() * 5)}px`;
        const boxShadow = `0px 0px 10px 3px ${starColor}`;

        return (
          <div
            key={idx}
            className="star relative top-[50%] rounded-full opacity-0"
            style={{ left, width: size, height: size, backgroundColor: starColor, animation: `${animationName} ${animationDuration} ease-in infinite`, animationDelay, boxShadow}}
          >
            <div className="star-trail"></div>
          </div>
        );
      })}
    </div>
  );
}