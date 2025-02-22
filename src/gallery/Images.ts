import { GalleryImage, ImageBase } from "../types/Image";

const isPrd = import.meta.env.VITE_IS_PRD === "true";
const baseUrl = `${isPrd ? "" : "/src"}/gallery`;
const modelUrl = `${baseUrl}/model/`;
const orientalUrl = `${baseUrl}/oriental/`;
const actressUrl = `${baseUrl}/actress/`;
const aboutUrl = `${baseUrl}/about/`;

const aboutImage: ImageBase = {
  src: `${aboutUrl}about.jpg`,
};

const orientalImages: GalleryImage[] = [
  {
    src: `${orientalUrl}1.jpg`,
    thumbanilWidth: 830,
    thumbanilHeight: 1244,
    title: "1 Moevir Magazine October Issue 202319.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/1.webp`,
  },
  {
    src: `${orientalUrl}2.jpg`,
    thumbanilWidth: 1823,
    thumbanilHeight: 1189,
    title: "1 Moevir Magazine October Issue 202320.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/2.webp`,
  },
  {
    src: `${orientalUrl}3.jpg`,
    thumbanilWidth: 1493,
    thumbanilHeight: 1567,
    title: "Malgorzata Horyn-Olszewska 50 lat .JPG",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/3.webp`,
  },
  {
    src: `${orientalUrl}4.jpg`,
    thumbanilWidth: 901,
    thumbanilHeight: 1350,
    title: "Malgorzata Horyn-Olszewska 50 lat.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/4.webp`,
  },
  {
    src: `${orientalUrl}5.jpg`,
    thumbanilWidth: 1095,
    thumbanilHeight: 810,
    title: "Malgorzata Horyn-Olszewska PORTRET.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/5.webp`,
  },
  {
    src: `${orientalUrl}6.jpg`,
    thumbanilWidth: 629,
    thumbanilHeight: 874,
    title: "Malgorzata Horyn-Olszewska w hidzabie.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/6.webp`,
  },
  {
    src: `${orientalUrl}7.jpg`,
    thumbanilWidth: 878,
    thumbanilHeight: 1376,
    title: "Malgorzata Horyn-Olszewska.png",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/7.webp`,
  },
  {
    src: `${orientalUrl}8.jpg`,
    thumbanilWidth: 971,
    thumbanilHeight: 1306,
    title: "Malgorzata Horyn-Olszewska1CASTING STUDIO.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/8.webp`,
  },
  {
    src: `${orientalUrl}9.jpg`,
    thumbanilWidth: 1298,
    thumbanilHeight: 978,
    title: "Malgorzata Horyn-Olszewska3.png",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/9.webp`,
  },
  {
    src: `${orientalUrl}10.jpg`,
    thumbanilWidth: 900,
    thumbanilHeight: 1199,
    title: "Malgorzata. Horyn-Olszewska.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/10.webp`,
  },
  {
    src: `${orientalUrl}11.jpg`,
    thumbanilWidth: 1497,
    thumbanilHeight: 1966,
    title: "Malgorzata. Horyn-Olszewska.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/11.webp`,
  },
  {
    src: `${orientalUrl}12.png`,
    thumbanilWidth: 968,
    thumbanilHeight: 602,
    title: "Malgorzata. Horyn-Olszewska.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/12.webp`,
  },
  {
    src: `${orientalUrl}13.JPG`,
    thumbanilWidth: 654,
    thumbanilHeight: 739,
    title: "Malgorzata. Horyn-Olszewska.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${orientalUrl}/thumbnails/13.webp`,
  },
];

const modelImages: GalleryImage[] = [
  {
    src: `${modelUrl}1.JPG`,
    thumbanilWidth: 524,
    thumbanilHeight: 793,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${modelUrl}/thumbnails/1.webp`,
  },
  {
    src: `${modelUrl}2.PNG`,
    thumbanilWidth: 610,
    thumbanilHeight: 920,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${modelUrl}/thumbnails/2.webp`,
  },
  {
    src: `${modelUrl}3.PNG`,
    thumbanilWidth: 611,
    thumbanilHeight: 920,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${modelUrl}/thumbnails/3.webp`,
  },
  {
    src: `${modelUrl}4.PNG`,
    thumbanilWidth: 615,
    thumbanilHeight: 919,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${modelUrl}/thumbnails/4.webp`,
  },
  {
    src: `${modelUrl}5.PNG`,
    thumbanilWidth: 602,
    thumbanilHeight: 915,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
    thumbnailSrc: `${modelUrl}/thumbnails/5.webp`,
  },
];

const actressImages: ImageBase[] = [
  {
    src: `${actressUrl}1.JPG`,
  },
];

export { actressImages, modelImages, orientalImages, aboutImage };
