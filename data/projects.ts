import { StaticImageData } from "next/image";
import Kis from "../public/img/kis_photo.webp";
import Labeling from "../public/img/labeling_photo.webp";
import Menu from "../public/img/menu_photo.webp";
import Movie from "../public/img/movie_photo.png";
import NeighborFood from "../public/img/neighborfood_photo.webp";
import Pf from "../public/img/pf_photo.png";
import X from "../public/img/xclone_photo.png";
import Three from "../public/img/three_photo.png";
import Zomato from "../public/img/zomato_photo.webp";

export interface TimelineItemProps {
  item: ProjectInfo;
  index: number;
}

export interface ProjectInfo {
  id: number;
  title: string;
  date: string;
  tags: string[];
  imgSrc: StaticImageData;
  link: string;
  badge: string;
  isImportant: boolean;
}

export const projectsData: ProjectInfo[] = [
  {
    id: 1,
    title: "Labeling Tool",
    date: "「2023.11.01 ~ 2023.12.21」",
    tags: ["React", "Redux", "Fabric.js", "Typescript", "Tailwind CSS"],
    imgSrc: Labeling,
    link: "labeling",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 2,
    title: "Kneeling bus Information System",
    date: "「2023.04.26 ~ 2023.06.08」",
    tags: ["React", "JavaScript", "styled-components", "Kakao Map API", "Naver Maps API"],
    imgSrc: Kis,
    link: "kis",
    badge: "TEAM",
    isImportant: true,
  },
  {
    id: 3,
    title: "NeighborFood",
    date: "「2023.04.25 ~ 2023.06.02」",
    tags: ["CSS", "JavaScript", "React", "Material-UI", "Morpheus API"],
    imgSrc: NeighborFood,
    link: "neighborfood",
    badge: "TEAM",
    isImportant: true,
  },
  {
    id: 4,
    title: "Portfolio",
    date: "「2024.10.03 ~ 2024.12.30」",
    tags: ["Next.js", "Three.js", "React", "Typescript", "Tailwind CSS", "Vercel"],
    imgSrc: Pf,
    link: "portfolio",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 5,
    title: "Zomato Clone",
    date: "「2024.09.02 ~ 2024.09.29」",
    tags: ["HTML", "SCSS", "JavaScript", "Vercel"],
    imgSrc: Zomato,
    link: "zomato",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 6,
    title: "Three.js Study",
    date: "「2024.12.15 ~ 2024.12.26」",
    tags: ["Three.js"],
    imgSrc: Three,
    link: "three",
    badge: "SOLO",
    isImportant: false,
  },
  {
    id: 7,
    title: "𝕏 Clone",
    date: "「2023.07.14 ~ 2023.07.24」",
    tags: ["React", "TypeScript", "NoSQL", "Firebase", "Vite"],
    imgSrc: X,
    link: "x",
    badge: "SOLO",
    isImportant: false,
  },
  {
    id: 8,
    title: "Menu Recommendation",
    date: "「2023.04.13 ~ 2023.04.22」",
    tags: ["CSS", "JavaScript", "React", "SpringBoot", "H2 Database", "Maven", "Lombok"],
    imgSrc: Menu,
    link: "menu",
    badge: "SOLO",
    isImportant: false,
  },
  {
    id: 9,
    title: "Movie Web",
    date: "「2024.11.13 ~ 2024.11.20」",
    tags: ["Next.js", "React", "Typescript", "Vercel"],
    imgSrc: Movie,
    link: "movie",
    badge: "SOLO",
    isImportant: false,
  },
];