import React from "react";
import dynamic from "next/dynamic";

interface LazyVideoProps {
  url: string;
  title: string;
}

const VideoComponent = dynamic(() => import("./RealVideo"), {
  ssr: false,
  loading: () => <div className="text-center text-m">동영상 로딩 중...</div>,
});

const LazyVideo: React.FC<LazyVideoProps> = ({ url, title }) => {
  return <VideoComponent url={url} title={title} />;
};

export default LazyVideo;