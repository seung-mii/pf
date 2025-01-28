import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const VideoComponent = dynamic(() => import("./RealVideo"), { ssr: false });

interface LazyVideoProps {
  url: string;
  title: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ url, title }) => {
  return (
    <Suspense fallback={<div className="text-center text-m">동영상 로딩 중...</div>}>
      <VideoComponent url={url} title={title} />
    </Suspense>
  );
};

export default LazyVideo;