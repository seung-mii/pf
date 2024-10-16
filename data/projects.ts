import { StaticImageData } from "next/image";
import Kis from "../public/img/kis_photo.webp";
import Labeling from "../public/img/labeling_photo.webp";
import Meme from "../public/img/meme_photo.png";
import Menu from "../public/img/menu_photo.webp";
import NeighborFood from "../public/img/neighborfood_photo.webp";
import Overwatch from "../public/img/overwatch_photo.png";
import Todolist from "../public/img/todolist_photo.png";
import Starbucks from "../public/img/starbucks_photo.webp";
import X from "../public/img/xclone_photo.png";
import Zomato from "../public/img/zomato_photo.webp";

interface ProjectInfo {
  id: number;
  title: string;
  date: string;
  tags: string[];
  imgSrc?: StaticImageData;
  link: string;
  badge: string;
  isImportant: boolean;
}

export const projectsData: ProjectInfo[] = [
  {
    id: 1,
    title: "Portfolio",
    date: "「2024.10.03 ~ ing」",
    tags: ["Next.js", "Three.js", "React", "Typescript", "Tailwind CSS", "Vercel"],
    link: "portfolio",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 2,
    title: "Zomato Clone",
    date: "「2024.09.02 ~ 2024.09.29」",
    tags: ["HTML", "SCSS", "JavaScript", "Vercel"],
    imgSrc: Zomato,
    link: "zomato",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 3,
    title: "Labeling Tool",
    date: "「2023.11.01 ~ 2023.12.21」",
    tags: ["React", "Redux", "Fabric.js", "Typescript", "Tailwind CSS"],
    imgSrc: Labeling,
    link: "labeling",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 4,
    title: "𝕏 Clone",
    date: "「2023.07.14 ~ 2023.07.24」",
    tags: ["React", "TypeScript", "NoSQL", "Firebase", "Vite"],
    imgSrc: X,
    link: "x",
    badge: "SOLO",
    isImportant: false,
  },
  {
    id: 5,
    title: "Kneeling bus Information System",
    date: "「2023.04.26 ~ 2023.06.08」",
    tags: ["React", "JavaScript", "styled-components", "Kakao Map API", "Naver Maps API"],
    imgSrc: Kis,
    link: "kis",
    badge: "TEAM",
    isImportant: true,
  },
  {
    id: 6,
    title: "NeighborFood",
    date: "「2023.04.25 ~ 2023.06.02」",
    tags: ["CSS", "JavaScript", "React", "Material-UI", "Morpheus API"],
    imgSrc: NeighborFood,
    link: "neighborfood",
    badge: "TEAM",
    isImportant: true,
  },
  {
    id: 7,
    title: "Menu Recommendation",
    date: "「2023.04.13 ~ 2023.04.22」",
    tags: ["CSS", "JavaScript", "React", "SpringBoot", "H2 Database", "Maven", "Lombok"],
    imgSrc: Menu,
    link: "menu",
    badge: "SOLO",
    isImportant: false,
  },
  {
    id: 8,
    title: "To-do List",
    date: "「2023.03.31 ~ 2023.04.11」",
    tags: ["CSS", "JavaScript", "React", "SpringBoot", "H2 Database", "Maven", "Lombok"],
    imgSrc: Todolist,
    link: "todo",
    badge: "SOLO",
    isImportant: false,
  },
  {
    id: 9,
    title: "Book Management System",
    date: "「2023.03.18 ~ 2023.03.24」",
    tags: ["JSP", "CSS", "JavaScript", "JQuery", "Spring", "Maven", "MySQL", "Tomcat"],
    link: "book",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 10,
    title: "Meme Maker",
    date: "「2023.02.19 ~ 2023.02.20」",
    tags: ["HTML", "CSS", "JavaScript", "Canvas API"],
    imgSrc: Meme,
    link: "meme",
    badge: "SOLO",
    isImportant: false,
  },
  {
    id: 11,
    title: "Starbucks Clone",
    date: "「2022.08.15 ~ 2022.08.21」",
    tags: ["HTML", "CSS", "JavaScript"],
    imgSrc: Starbucks,
    link: "starbucks",
    badge: "SOLO",
    isImportant: true,
  },
  {
    id: 12,
    title: "Overwatch Heroes Selection",
    date: "「2022.08.13 ~ 2022.08.14」",
    tags: ["HTML", "CSS"],
    imgSrc: Overwatch,
    link: "overwatch",
    badge: "SOLO",
    isImportant: false,
  },
];