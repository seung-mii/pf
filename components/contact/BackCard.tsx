import React from "react";
import ContactForm from "./ContactForm";

const ContactBackCard: React.FC = () => {
  return (
    <>
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
      <ContactForm />
    </>
  );
};

export default ContactBackCard;