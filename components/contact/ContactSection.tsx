import React from "react";
import Link from "next/link";
import Image from "next/image";
import Right from "../../public/img/icon/right.png";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between border-t-thin border-solid border-lightPurple pt-4 sm:pt-6 mt-3 sm:mt-6">
      <div className="flex-1 flex flex-col items-start text-left">
        <p className="text-s mt-1 mb-1 sm:mb-3 whitespace-nowrap inline-flex items-center gap-1 mt-1 pb-[2px] group relative">
          <Image src={Right} alt="right arrow" className="w-2 h-2 sm:w-3 sm:h-3 transition-transform duration-300 ease-in-out rotate-45 group-hover:rotate-0"/>
          <Link href="tel:+821072000776" className="underline-offset-2 text-s m-0 hover:cursor-circleDarkHover flex items-center">
            <strong className="font-semibold mr-1">Tel. </strong>
            010 7200 0776
          </Link>
          {/* <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"/> */}
        </p>
        <p className="text-s whitespace-nowrap inline-flex items-center gap-1 mt-1 pb-[2px] group relative">
          <Image src={Right} alt="right arrow" className="w-2 h-2 sm:w-3 sm:h-3 transition-transform duration-300 ease-in-out rotate-45 group-hover:rotate-0"
          />
          <Link href="mailto:tmdal9953@naver.com" className="underline-offset-2 hover:cursor-circleDarkHover flex items-center">
            <strong className="font-semibold mr-1">Mail. </strong>
            tmdal9953@naver.com
          </Link>
          {/* <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"/> */}
        </p>
      </div>
      <div className="flex-1 flex flex-col items-start text-left sm:mt-0 mt-1">
        <p className="text-s mt-0 mb-1 sm:mb-3 whitespace-nowrap inline-flex items-center gap-1 mt-1 pb-[2px] group relative">
          <Image src={Right} alt="right arrow" className="w-2 h-2 sm:w-3 sm:h-3 transition-transform duration-300 ease-in-out rotate-45 group-hover:rotate-0"
          />
          <Link href="https://github.com/seung-mii" target="_blank" className="underline-offset-2 hover:cursor-circleDarkHover flex items-center">
            <strong className="font-semibold mr-1">Github. </strong>
            seung-mii
          </Link>
          {/* <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"/> */}
        </p>
        <p className="text-s whitespace-nowrap inline-flex items-center gap-1 mt-1 pb-[2px] group relative">
          <Image src={Right} alt="right arrow" className="w-2 h-2 sm:w-3 sm:h-3 transition-transform duration-300 ease-in-out rotate-45 group-hover:rotate-0"
          />
          <Link href="https://mi-dairy.tistory.com/" target="_blank" className="underline-offset-2 hover:cursor-circleDarkHover flex items-center">
            <strong className="font-semibold mr-1">Tistory. </strong>
            mi-diary
          </Link>
          {/* <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"/> */}
        </p>
      </div>
    </div>

  );
};

export default ContactSection;