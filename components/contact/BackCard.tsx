import React from "react";
import ContactForm from "./ContactForm";

const ContactBackCard: React.FC = () => {
  return (
    <>
      <div className="w-full text-left cursor-circleDark">
        <h1 className="text-l sm:text-xl font-semibold mb-3 sm:mb-6">
          CONTACT
        </h1>
        <div className="text-s my-4 sm:mb-3">
          <p className="mb-3">
            저의 포트폴리오를 봐주셔서 진심으로 감사드립니다.
          </p>
          <p>
            개선점이나 질문을 편하게 작성해주시면 큰 도움이 됩니다.
          </p>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactBackCard;