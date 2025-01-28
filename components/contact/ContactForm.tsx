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
          <input type="text" id="user_name" name="user_name" placeholder="Your name" required className="w-full px-2 py-2 mt-1 text-s border-solid border-b-thin sm:border-b-[1.5px] border-[#9ca3af] bg-lightWhite outline-none focus:border-black rounded-none" />
        </div>
        <div className="relative">
          <label htmlFor="user_email" className="sr-only">이메일</label>
          <input type="email" id="user_email" name="user_email" placeholder="abcd123@gmail.com" required className="w-full px-2 py-2 mt-1 text-s border-solid border-b-thin sm:border-b-[1.5px] border-[#9ca3af] bg-lightWhite outline-none focus:border-black rounded-none" />
        </div>
        <div className="relative">
          <label htmlFor="message" className="sr-only">메시지</label>
          <textarea id="message" name="message" placeholder="Best web!"  required className="w-full h-[15vh] sm:h-auto px-2 py-2 mt-1 text-s leading-5 border-solid border-b-thin sm:border-b-[1.5px] border-[#9ca3af] bg-lightWhite outline-none resize-none focus:border-black rounded-none" />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`relative group w-fit text-s font-semibold text-black px-2 md:px-4 py-1 md:py-2 mt-0 lg:mt-2 mx-auto border border-black rounded-full cursor-circleHover overflow-hidden transition-all duration-500
            ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : ""}`}
        >
          <span className="absolute inset-0 bg-black transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 pointer-events-none"/>
          <span className="relative block text-black transition-transform duration-500 ease-in-out pointer-events-none z-10 group-hover:-translate-y-[150%]">
            {isSubmitting ? "Sending..." : "Send"}
          </span>
          {!isSubmitting && (
            <span className="absolute left-0 right-0 text-white transition-transform duration-1000 ease-in-out pointer-events-none z-10 top-[150%] group-hover:translate-y-[-220%] sm:group-hover:translate-y-[-270%]">
              Send
            </span>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;