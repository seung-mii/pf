"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import Left from "../../../public/img/icon/left.png";
import Tab from "../../../public/img/icon/link.png"
import Github from "../../../public/img/icon/github-logo.png"

const detailsData = [
  {
    key: "labeling",
    value: {
      information: {
        videos: [{
          title: "Home",
          url: "/video/labeling_video.mp4",
        }],
        title: "Labeling Tool",
        description: "Labeling Tool",
        github: "https://github.com/seung-mii/",
        link: "https://github.com/seung-mii/",
        period: "2023.11.01 ~ 2023.12.21",
        personnel: ["FE: 1"],
        skills: ["React", "Redux", "Fabric.js", "Typescript", "Tailwind CSS"],
        challenge: [
          "기존 타사 라벨링툴은 하나의 이미지를 라벨링하는 데 시간이 많이 소요되었습니다."
        ],
        approach: [
          "회사의 라벨러 5명과 소통하며 파악한 결과, 단축키와 필터 기능의 부족으로 인한 작업 효율 저하가 주요 문제라는 것을 알게 되었습니다.",
          "Canvas 기반의 라이브러리 4개를 비교분석 후 Fabric.js를 채택하여 사용자의 요구에 맞춘 라벨링툴을 개발하였습니다."
        ],
        result: [
          "작업 과정에서 클릭 수가 약 40% 하였습니다.",
          "타사 라벨링툴을 사용하는 비용인 매월 약 150만 원의 비용 절감하였습니다.",
        ],
        award: [
          "예시 데이터"
        ],
      },
      function: [
        {
          title: "어노테이션 생성",
          details: [
            "어노테이션 생성 시 이미지 영역을 넘지 않도록 제한했습니다."
          ],
        },
        {
          title: "어노테이션 이동 및 크기 조정",
          details: [
            "어노테이션 이동 및 크기 조정 시 이미지 영역을 넘지 않도록 제한했습니다.",
            "키보드 방향키를 사용해 어노테이션이 자유롭게 이동하도록 구현했습니다.",
            "fabricRect의 scaleX와 scaleY 속성을 사용해 상하좌우 및 각 꼭짓점에서 어노테이션의 크기 조정 가능합니다.",
          ],
        },
        {
          title: "이미지 확대/축소",
          details: [
            "zoomToPoint 메서드를 사용해 현재 마우스가 위치한 좌표를 중심으로 이미지 확대/축소가 되도록 구현했습니다.",
            "마우스 휠을 통해 빠르게 이미지 확대/축소가 가능합니다.",
          ],
        },
        {
          title: "필터 적용",
          details: [
            "fabric.Imagefilters로 이미지에 밝기 및 대조 필터를 실시간으로 적용 가능합니다.",
            "사용자가 input에 -100부터 100까지 사이 값을 직접 입력하여 밝기 및 대조 값을 빠르게 수정 가능합니다.",
          ],
        },
        {
          title: "단축키로 패닝과 스냅 기능을 통한 사용자 편의성 향상",
          details: [
            "useRef와 fabric.js의 viewportTransform으로 이미지 상하좌우 이동하는 패닝 기능을 제공했습니다.",
            "스냅 기능을 통해 단축키 한 번으로 이미지를 초기 크기와 위치로 빠르게 복구 가능합니다.",
          ],
        },
        {
          title: "단축키로도 클래스 변경 관리",
          details: [
            "useCallback과 단축키 이벤트 리스너를 사용해 사용자가 특정 단축키를 누르면 어노테이션 클래스가 변경되도록 설정했습니다.",
          ],
        },
        {
          title: "이미지를 변경하면 어노테이션 자동 저장",
          details: [
            "사용자가 어노테이션 작성 중 이미지 리스트에서 다른 이미지를 선택하면, 선택 직전까지 진행된 어노테이션 좌표를 서버에 자동으로 저장하여 어노테이션 상태를 유지함으로써 사용자 편의성을 높였습니다.",
          ],
        },
      ],
      troubleshooting: [
        {
          title: "첫 어노테이션을 그린 후 다음 어노테이션을 그리려고 마우스를 클릭할 때 이전에 그린 어노테이션이 사라지는 문제",
          cause: "부모 컴포넌트인 AnnotationEditorComponent가 리렌더링될 때 자식 컴포넌트인 Canvas가 불필요하게 리렌더링되어 이전에 그린 어노테이션 상태가 사라졌습니다.",
          solution:[
            "memo를 사용해 Canvas 컴포넌트를 메모이제이션함으로써 props가 변경되지 않는 한 재렌더링되지 않도록 설정하여 이전에 그린 어노테이션 상태가 유지되도록 했습니다.",
          ],
        },
        {
          title: "무한 루프 문제",
          cause: "Class들의 정보를 가지고 있는 datasetClasses가 함수로 정의되어 있어 리렌더링될 때마다 새로운 배열을 반환함 이로 인해 배열의 참조값이 매번 변경되면서 이를 의존성으로 사용하는 useEffect에서 변경되었다고 인식하고 반복해서 실행되어 무한 루프가 발생했습니다.",
          solution: [
            "useMemo를 사용하여 배열을 메모이제이션해 리렌더링 시에도 배열의 참조값이 유지하여 기존 배열 객체를 사용하므로 useEffect가 불필요하게 실행되지 않습니다.",
          ],
        },
        {
          title: "class를 변경하는 단축키 함수를 작성했으나 단축키를 눌러도 class가 변경되지 않는 문제",
          cause: "단축키 함수가 리렌더링마다 새로 생성되면서 이전 참조 상태를 잃고 새로운 참조를 사용해 최신 상태와 불일치하였습니다.",
          solution: [
            "useCallback을 사용해 단축키 함수가 동일한 참조 상태를 유지하도록 메모이제이션하여 함수가 재생성되지 않고 최신 상태를 참조하도록 했습니다.",
          ]
        },
        {
          title: "마우스를 떼면 어노테이션이 다른 위치로 이동하는 문제",
          cause: "리렌더링 시 마우스를 뗄 때의 좌표 값이 제대로 유지되지 않거나 초기화되었습니다.",
          solution: [
            "마우스 좌표 값이 리렌더링에 영향을 받지 않도록 useRef로 관리하여 좌표 값을 유지합니다.",
          ]
        },
      ],
      icandoit: [
        {
          title: "Redux를 사용한 효율적인 상태 관리가 가능합니다.",
          details: [
            "컴포넌트 간의 상태를 중앙에서 체계적으로 관리하여 유지보수성과 확장성을 높일 수 있습니다.",
          ],
        },
      ],
    },
  },
]

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const { id } = params;
  
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(detailsData.length).fill(false));
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const listContentRef = useRef<HTMLDivElement | null>(null);
  const headerVh = 6;
  const contentVh = 96 - headerVh * 5;
  
  const projectDetails = detailsData.find((item) => item.key === id)?.value;
  
  const handleToggle = (index: number) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const init = () => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    if (!wrapper || !sticky) return;

    const children = sticky.querySelectorAll<HTMLDivElement>(".section");
    const start = wrapper.offsetTop + 100;
    const end = wrapper.offsetTop + wrapper.offsetHeight - window.innerHeight - 100;

    children.forEach((child, i) => {
      child.style.bottom = `${-100 + headerVh * (children.length - i)}vh`;
      child.querySelector<HTMLDivElement>(".title")!.style.height = `${headerVh}vh`;
      child.querySelector<HTMLDivElement>(".content")!.style.height = `${contentVh}vh`;
    });

    return { start, end, children };
  };

  const animate = (start: number, end: number, children: NodeListOf<HTMLDivElement>) => {
    const unit = (end - start) / children.length;

    children.forEach((child, i) => {
      const s = start + unit * i + 100;
      const e = start + unit * (i + 1);

      if (window.scrollY <= s) {
        child.style.transform = `translate3d(0, 0, 0)`;
      } else if (window.scrollY >= e) {
        child.style.transform = `translate3d(0, ${-contentVh}%, 0)`;
      } else {
        child.style.transform = `translate3d(0, ${((window.scrollY - s) / (unit - 100)) * -contentVh}%, 0)`;
      }
    });
  };

  useEffect(() => {
    const initialized = init();
    if (initialized) {
      const { start, end, children } = initialized;

      const handleScroll = () => {
        if (start !== undefined && end !== undefined && children) {
          animate(start, end, children);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  if (!projectDetails) {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-8">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="w-full h-[600vh] font-[Palatino] text-[#1A2B3C]">
      <div className="fixed z-10 top-0 w-full h-[6vh] border-[1px] border-solid border-[#1A2B3C] flex items-center bg-[#6F94B0] px-6">
        <Link href="/projects">
          <Image src={Left} alt="Go back Icon" className="w-4 h-4 opacity-80 transition-opacity duration-300 ease-in-out" />
        </Link>
      </div>
      <div ref={stickyRef} className="sticky top-0 w-full h-screen overflow-hidden bg-[#6F94B0]">
        <div className="content px-[5vh] py-[2vh] bg-[#6F94B0]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center justify-end gap-4 mt-20">
              {projectDetails.information.videos?.[0] && (
                <div className="flex flex-col items-center justify-center">
                  <video autoPlay loop muted playsInline className="max-w-[55%] rounded-md">
                    <source src={projectDetails.information.videos?.[0].url} type="video/mp4" />
                  </video>
                  <p className="mt-2"><strong className="text-s">{projectDetails.information.videos?.[0].title}</strong></p>
                </div>
              )}
              <div className="flex flex-col items-center w-full gap-4">
                <div className="flex gap-4 justify-center mb-4">
                  {projectDetails.information.github && (
                    <Link href={projectDetails.information.github} target="_blank">
                      <Image src={Github} alt="Github logo" width={24} height={24} />
                    </Link>
                  )}
                  {projectDetails.information.link && (
                    <Link href={projectDetails.information.link} target="_blank">
                      <Image src={Tab} alt="New Tab icon" width={24} height={24} />
                    </Link>
                  )}
                </div>
                <div className="text-sm text-center leading-6">
                  <p><strong>{projectDetails.information.description}</strong></p>
                  <p className="italic mt-2">{projectDetails.information.period}</p>
                  <p>{projectDetails.information.personnel.join(", ")}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {projectDetails.information.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-2 text-xs font-medium border-solid border-[1px] border-[#1A2B3C] rounded-2xl">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-solid border-[1px] border-[#1A2B3C] rounded-md p-4 relative shadow-sm">
              <h1 className="absolute -top-3 left-4 bg-[#6F94B0] text-sm font-bold px-2">
                Challenge
              </h1>
              <p className="text-xs leading-5 mt-2 ml-1">
                {projectDetails.information.challenge}
              </p>
            </div>
            <div className="border-solid border-[1px] border-[#1A2B3C] rounded-md p-4 relative shadow-sm">
              <h1 className="absolute -top-3 left-4 bg-[#6F94B0] text-sm font-bold px-2">
                Approach
              </h1>
              <ul className="list-disc pl-4 text-xs leading-5 mt-2">
                {projectDetails.information.approach.map((approach, idx) => (
                  <li key={idx}>{approach}</li>
                ))}
              </ul>
            </div>
            <div className="border-solid border-[1px] border-[#1A2B3C] rounded-md p-4 relative shadow-sm">
              <h1 className="absolute -top-3 left-4 bg-[#6F94B0] text-sm font-bold px-2">
                Result
              </h1>
              <ul className="list-disc pl-4 text-xs leading-5 mt-2">
                {projectDetails.information.result.map((result, idx) => (
                  <li key={idx}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {projectDetails.function &&
          <div className="section w-full h-full absolute">
            <div className="title mt-[3vh] border-solid border-[1px] border-[#1A2B3C] bg-[#6F94B0] h-[6vh] flex items-center pl-[3vh]">
              Function
            </div>
            <div className="content px-[5vh] py-[2vh] bg-gradient-to-b from-[#6F94B0] to-[#A8C5D3]">
              <div ref={listContentRef} className="space-y-4">
                {projectDetails.function.map(({ title, details }, idx) => (
                  <div
                    key={idx}
                    className="bg-[#A8C5D3] rounded-md shadow-sm p-4 cursor-pointer transition-all"
                    onClick={() => handleToggle(idx)}
                  >
                    <div className="flex items-center">
                      <div className="w-5 h-4 relative mr-2">
                        <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[idx] ? "rotate-0 top-[7px]" : "rotate-0 top-[4px]"}`}></span>
                        <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[idx] ? "rotate-0 top-[7px]" : "rotate-90 top-[4px]"}`}></span>
                      </div>
                      <p className="font-bold text-sm">{title}</p>
                    </div>
                    {isOpen[idx] && (
                      <ul className="list-disc ml-6 mt-2 pt-2 border-t-[2px] border-[#1A2B3C] text-xs space-y-2">
                        <li>{details}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
        {projectDetails.troubleshooting && 
          <div className="section w-full h-full absolute">
            <div className="title mt-[3vh] border-solid border-[1px] border-[#1A2B3C] bg-[#6F94B0] h-[6vh] flex items-center pl-[3vh]">
              Trouble Shooting
            </div>
            <div className="content px-[5vh] py-[2vh] bg-gradient-to-b from-[#6F94B0] to-[#A8C5D3]">
              <div ref={listContentRef} className="space-y-4">
                {projectDetails.troubleshooting.map(({ title, cause, solution }, idx) => (
                  <div
                    key={idx+10}
                    className="bg-[#A8C5D3] rounded-md shadow-sm p-4 cursor-pointer transition-all"
                    onClick={() => handleToggle(idx+10)}
                  >
                    <div className="flex items-center">
                      <div className="w-5 h-4 relative mr-2">
                        <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[idx+10] ? "rotate-0 top-[7px]" : "rotate-0 top-[4px]" }`}></span>
                        <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[idx+10] ? "rotate-0 top-[7px]" : "rotate-90 top-[4px]" }`}></span>
                      </div>
                      <p className="font-bold text-sm">{title}</p>
                    </div>
                    {isOpen[idx+10] && (
                      <ul className="list-disc ml-6 mt-2 pt-2 border-t-[2px] border-[#1A2B3C] text-xs space-y-2">
                        <li>{"원인: " + cause}</li>
                        <li>{"해결방안: " + solution}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
        {projectDetails.icandoit &&
          <div className="section w-full h-full absolute">
            <div className="title mt-[3vh] border-solid border-[1px] border-[#1A2B3C] bg-[#6F94B0] h-[6vh] flex items-center pl-[3vh]">
              I can do it
            </div>
            <div className="content px-[5vh] py-[2vh] bg-gradient-to-b from-[#6F94B0] to-[#A8C5D3]">
              <div ref={listContentRef} className="space-y-4">
                {projectDetails.icandoit.map(({ title, details }, idx) => (
                  <div
                    key={idx + 20}
                    className="bg-[#A8C5D3] rounded-md shadow-sm p-4 cursor-pointer transition-all"
                    onClick={() => handleToggle(idx + 20)}
                  >
                    <div className="flex items-center">
                      <div className="w-5 h-4 relative mr-2">
                        <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[idx + 20] ? "rotate-0 top-[7px]" : "rotate-0 top-[4px]"}`}></span>
                        <span className={`block absolute w-full h-[2px] bg-[#1A2B3C] transition-transform ${isOpen[idx + 20] ? "rotate-0 top-[7px]" : "rotate-90 top-[4px]"}`}></span>
                      </div>
                      <p className="font-bold text-sm">{title}</p>
                    </div>
                    {isOpen[idx + 20] && (
                      <ul className="list-disc ml-6 mt-2 pt-2 border-t-[2px] border-[#1A2B3C] text-xs space-y-2">
                        <li>{details}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ProjectDetails;