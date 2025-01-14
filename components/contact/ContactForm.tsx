"use client";

import React, { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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

  return (
    <>
      <ToastContainer />
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 w-full max-w-2xl mt-2">
        <div className="relative">
          <label htmlFor="user_name" className="sr-only">이름</label>
          <input type="text" id="user_name" name="user_name" placeholder="Name..." required className="w-full px-3 py-2 md:px-4 md:py-3 text-s rounded-2xl border-solid border-thin border-black bg-lightWhite outline-none" />
        </div>
        <div className="relative">
          <label htmlFor="user_email" className="sr-only">이메일</label>
          <input type="email" id="user_email" name="user_email" placeholder="Email..." required className="w-full px-3 py-2 md:px-4 md:py-3 text-s rounded-2xl border-solid border-thin border-black bg-lightWhite outline-none" />
        </div>
        <div className="relative">
          <label htmlFor="message" className="sr-only">메시지</label>
          <textarea id="message" name="message" placeholder="Message..."  required className="w-full h-[15vh] sm:h-auto px-3 py-2 md:px-4 md:py-3 text-s rounded-2xl border-solid border-thin border-black bg-lightWhite outline-none resize-none" />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`block w-fit text-s font-bold text-black px-3 py-2 mx-auto border border-black rounded-full cursor-circleHover transition-all duration-300
            ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "hover:bg-black hover:text-white"} sm:px-6 sm:py-2`}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;