import React from "react";
import ProfileSection from "./ProfileSection";
import ContactSection from "./ContactSection";

const FrontCard: React.FC = () => {
  return (
    <>
      <p className="text-s font-normal mb-4 text-center sm:mb-5 cursor-circleDark">
        상상을 실현하며, 사용자 경험과 만족을 극대화합니다.
      </p>
      <ProfileSection />
      <ContactSection />
    </>
  );
};

export default FrontCard;