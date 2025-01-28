import React from "react";

interface RealVideoProps {
  url: string;
  title: string;
}

const RealVideo: React.FC<RealVideoProps> = ({ url, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <video autoPlay loop muted playsInline className="w-full max-h-[38vh] rounded-lg shadow-lg bg-black">
        <source src={url} type="video/mp4" />
      </video>
      <p className="mt-2 my-5 text-left w-full text-center">
        <strong className="text-s">{title}</strong>
      </p>
    </div>
  );
};

export default RealVideo;