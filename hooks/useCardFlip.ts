import { useState, useEffect, useRef } from "react";

const useCardFlip = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const frontLightRef = useRef<HTMLDivElement>(null);
  const backLightRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    const cardWrapper = cardWrapperRef.current;
    const frontCard = frontCardRef.current;
    const backCard = backCardRef.current;
    const frontLight = frontLightRef.current;
    const backLight = backLightRef.current;

    if (!cardWrapper || !frontCard || !backCard || !frontLight || !backLight) return;

    const mouseMove = (e: MouseEvent) => {
      const rect = cardWrapper.getBoundingClientRect();
      const left = e.clientX - rect.left;
      const top = e.clientY - rect.top;
      const centerX = left - rect.width / 2;
      const centerY = top - rect.height / 2;
      const d = Math.sqrt(centerX ** 2 + centerY ** 2);

      if (!isFlipped) {
        frontCard.style.boxShadow = `${-centerX / 8}px ${-centerY / 13}px 10px rgba(0, 0, 0, 0.2)`;
        frontCard.style.transform = `rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 50}deg)`;
        frontLight.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, #00000010, #00000000)`;

        backCard.style.transform = "rotateY(180deg)";
        backCard.style.boxShadow = "";
        backLight.style.backgroundImage = "";
      } else {
        backCard.style.boxShadow = `${-centerX / 8}px ${-centerY / 13}px 10px rgba(0, 0, 0, 0.2)`;
        backCard.style.transform = `rotateY(180deg) rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 50}deg)`;
        backLight.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, #00000010, #00000000)`;
        backLight.style.transform = `translateY(-30px)`;

        frontCard.style.transform = "";
        frontCard.style.boxShadow = "";
        frontLight.style.backgroundImage = "";
      }
    };

    const mouseLeave = () => {
      frontCard.style.boxShadow = "";
      frontCard.style.transform = "";
      frontLight.style.backgroundImage = "";

      backCard.style.boxShadow = "";
      backCard.style.transform = "rotateY(180deg)";
      backLight.style.backgroundImage = "";
    };

    cardWrapper.addEventListener("mousemove", mouseMove);
    cardWrapper.addEventListener("mouseleave", mouseLeave);

    return () => {
      cardWrapper.removeEventListener("mousemove", mouseMove);
      cardWrapper.removeEventListener("mouseleave", mouseLeave);
    };
  }, [isFlipped]);

  return {
    isFlipped,
    cardWrapperRef,
    frontCardRef,
    backCardRef,
    frontLightRef,
    backLightRef,
    handleFlip,
  };
};

export default useCardFlip;