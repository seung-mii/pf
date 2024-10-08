"use client";

import React, { useState, useRef, useEffect, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import Photo from "../../public/img/photo.jpeg";
import QR from "../../public/img/qr.png";
import Filp from "../../public/img/icon/reload.png";

export default function Contact() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const frontLightRef = useRef<HTMLDivElement>(null);
  const backLightRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        );
        toast.success("메일이 전송되었습니다!", { position: 'top-center' });
        formRef.current.reset();
      } else {
        throw new Error("Form reference is null");
      }
    } catch (error) {
      console.error(error);
      toast.error("메일 전송에 실패했습니다. tmdal9953@naver.com로 메일주시면 빠른 시일 내에 개선하겠습니다!", { position: 'top-center' });
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <div className="flex items-center justify-center relative min-h-screen text-[#1E2F44] bg-gradient-to-b from-[#6F94B0] to-[#A8C5D3] font-serif px-4">
      <div
        ref={cardWrapperRef}
        className="relative flex flex-col items-center justify-center w-full sm:w-11/12 md:w-4/5 lg:w-[55%] transition-transform duration-200 [perspective:1000px] md:hover:scale-105"
      >
        <div className={`w-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
          <div ref={frontCardRef} className="relative flex flex-col bg-[#f0f0f0] p-4 sm:p-7 md:p-8 lg:p-10 shadow-md [backface-visibility:hidden]">
            <div ref={frontLightRef}className="absolute w-full h-full pointer-events-none -translate-x-4 -translate-y-4 sm:-translate-x-7 sm:-translate-y-7 md:-translate-x-8 md:-translate-y-8 lg:-translate-x-10 lg:-translate-y-10"></div>
            <p className="text-[12px] sm:text-[13px] font-normal mb-4 text-center sm:mb-5">
              상상을 실현하며, 사용자 경험과 만족을 극대화합니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-2">
                <Image src={Photo} alt="Profile Photo" className="w-[90px] h-[120px] sm:w-[100px] sm:h-[130px] md:w-[120px] md:h-[150px] lg:w-[130px] lg:h-[160px] object-cover" />
                <div className="text-left">
                  <h1 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold m-0">Shin Seung Mi</h1>
                  <h2 className="text-[12px] sm:text-[13px] md:text-[14px] mt-1 sm:mt-2 md:mt-3">Frontend Developer</h2>
                </div>
              </div>
              <div className="text-center">
                <Image src={QR} alt="Resume QR Code" className="mx-auto w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px]"/>
                <p className="text-[12px] sm:text-[13px] m-0">Resume</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-t-[1px] border-solid border-[#1E2F44] pt-4 sm:pt-6 mt-4 sm:mt-6">
              <div className="flex-1 text-left">
                <p className="text-[12px] sm:text-[13px] mt-3 mb-3 sm:mb-5">
                  <strong className="font-semibold">Tel. </strong>
                  010 7200 0776
                </p>
                <p className="text-[12px] sm:text-[13px]">
                  <strong className="font-semibold">Mail. </strong>
                  <Link href="mailto:tmdal9953@naver.com" className="underline-offset-2 hover:underline">
                    tmdal9953@naver.com
                  </Link>
                </p>
              </div>
              <div className="flex-1 text-left sm:pl-5 mt-4 sm:mt-0">
                <p className="text-[12px] sm:text-[13px] mt-3 mb-3 sm:mb-5">
                  <strong className="font-semibold">Github. </strong>
                  <Link href="https://github.com/seung-mii" target="_blank" className="underline-offset-2 hover:underline">
                    seung-mii
                  </Link>
                </p>
                <p className="text-[12px] sm:text-[13px]">
                  <strong className="font-semibold">Tistory. </strong>
                  <Link href="https://mi-dairy.tistory.com/" target="_blank" className="underline-offset-2 hover:underline">
                    mi-diary
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div ref={backCardRef} className="absolute top-0 left-0 w-full h-full bg-[#f0f0f0] p-4 sm:p-6 md:p-8 lg:p-10 shadow-md flex flex-col items-center justify-start [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div ref={backLightRef} className="absolute w-full h-full pointer-events-none -translate-x-4 -translate-y-4 sm:-translate-x-7 sm:-translate-y-7 md:-translate-x-8 md:-translate-y-8 lg:-translate-x-10 lg:-translate-y-10"></div>
            <div className="w-full text-left">
              <h1 className="w-[140px] sm:w-[160px] md:w-[170px] text-[14px] sm:text-[16px] md:text-[18px] font-semibold mb-3 sm:mb-5 pb-2 sm:pb-3 border-b-[1px] border-solid border-[#1E2F44]">
                CONTACT
              </h1>
              <div className="text-[12px] mb-3">
                <p className="mb-2">
                  저의 포트폴리오를 봐주셔서 진심으로 감사드립니다.
                </p>
                <p>
                  개선할 점이나 묻고 싶은 것을 편하게 작성해주시면 정말 큰 도움이 됩니다.
                </p>
              </div>
            </div>
            <ToastContainer />
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 w-full max-w-2xl mt-2 sm:mt-3">
              <div className="relative">
                <input type="text" name="user_name" placeholder="Name..." required className="w-full p-3 md:p-4 text-[12px] rounded-[15px] bg-[#D1E4EC] outline-none sm:p-3" />
              </div>
              <div className="relative">
                <input type="email" name="user_email" placeholder="Email..." required className="w-full p-3 md:p-4 text-[12px] rounded-[15px] bg-[#D1E4EC] outline-none sm:p-3" />
              </div>
              <div className="relative">
                <textarea placeholder="Message..." name="message" required className="w-full p-3 md:p-4 text-[12px] rounded-[15px] bg-[#D1E4EC] outline-none resize-none sm:p-3" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`block w-fit text-[10px] font-bold px-3 py-2 mx-auto border border-[#1e2f44] rounded-full cursor-pointer transition-all duration-300
                  ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "hover:bg-[#2F3E4F] hover:text-white"} sm:px-6 sm:py-2`}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-10" onClick={handleFlip}>
          <Image src={Filp} alt="Filp Icon" className="w-5 h-5 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}