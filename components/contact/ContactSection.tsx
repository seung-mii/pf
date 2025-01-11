import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-row justify-between border-t-thin border-solid border-lightPurple pt-4 sm:pt-6 mt-3 sm:mt-6">
      <div className="flex-1 text-left ml-1">
        <p className="text-s mt-1 mb-3 sm:mb-5">
          <strong className="font-semibold">Tel. </strong>
          010 7200 0776
        </p>
        <p className="text-s">
          <strong className="font-semibold">Mail. </strong>
          <Link href="mailto:tmdal9953@naver.com" className="underline-offset-2 underline sm:no-underline sm:hover:underline hover:cursor-circleDarkHover">
            tmdal9953@naver.com
          </Link>
        </p>
      </div>
      <div className="flex-1 text-left ml-7 sm:pl-5 my-1 sm:mt-0">
        <p className="text-s mt-0 mb-3 sm:mb-5">
          <strong className="font-semibold">Github. </strong>
          <Link href="https://github.com/seung-mii" target="_blank" className="underline-offset-2 underline sm:no-underline sm:hover:underline hover:cursor-circleDarkHover">
            seung-mii
          </Link>
        </p>
        <p className="text-s">
          <strong className="font-semibold">Tistory. </strong>
          <Link href="https://mi-dairy.tistory.com/" target="_blank" className="underline-offset-2 underline sm:no-underline sm:hover:underline hover:cursor-circleDarkHover">
            mi-diary
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;