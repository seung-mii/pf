import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between border-t-thin border-solid border-darkBlue pt-4 sm:pt-6 mt-3 sm:mt-6">
      <div className="flex-1 text-left ml-1">
        <p className="text-s mt-1 mb-3 sm:mb-5">
          <strong className="font-semibold">Tel. </strong>
          010 7200 0776
        </p>
        <p className="text-s">
          <strong className="font-semibold">Mail. </strong>
          <Link href="mailto:tmdal9953@naver.com" className="underline-offset-2 underline sm:no-underline sm:hover:underline hover:cursor-star">
            tmdal9953@naver.com
          </Link>
        </p>
      </div>
      <div className="flex-1 text-left ml-1 sm:pl-5 mt-3 sm:mt-0">
        <p className="text-s mt-0 mb-3 sm:mb-5">
          <strong className="font-semibold">Github. </strong>
          <Link href="https://github.com/seung-mii" target="_blank" className="underline-offset-2 underline sm:no-underline sm:hover:underline hover:cursor-star">
            seung-mii
          </Link>
        </p>
        <p className="text-s">
          <strong className="font-semibold">Tistory. </strong>
          <Link href="https://mi-dairy.tistory.com/" target="_blank" className="underline-offset-2 underline sm:no-underline sm:hover:underline hover:cursor-star">
            mi-dairy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;