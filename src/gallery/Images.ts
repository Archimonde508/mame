import { GalleryImage, ImageBase } from "../types/Image";

const isPrd = import.meta.env.VITE_IS_PRD === 'true';
const baseUrl = `${isPrd ? '' : '/src'}/gallery`
const modelUrl = `${baseUrl}/model/`
const orientalUrl = `${baseUrl}/oriental/`
const actressUrl = `${baseUrl}/actress/`
const aboutUrl = `${baseUrl}/about/`

const aboutImage: ImageBase = {
  src: `${aboutUrl}about.jpg`,
}

const orientalImages: GalleryImage[] = [
  {
    src: `${orientalUrl}1 Moevir Magazine October Issue 202319.jpg`,
    width: 524,
    height: 793,
    title: "1 Moevir Magazine October Issue 202319.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${orientalUrl}1 Moevir Magazine October Issue 202320.jpg`,
    width: 524,
    height: 793,
    title: "1 Moevir Magazine October Issue 202320.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  // {
  //   src: `${arabianUrl}ART_2742 kopia.jpg`,
  //   width: 524,
  //   height: 793,
  //   title: "ART_2742 kopia.jpg",
  //   description: "After Rain (Jeshu John - designerspics.com)",
  // },
  {
    src: `${orientalUrl}Malgorzata Horyn-Olszewska 50 lat .JPG`,
    width: 524,
    height: 793,
    title: "Malgorzata Horyn-Olszewska 50 lat .JPG",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${orientalUrl}Malgorzata Horyn-Olszewska 50 lat.jpg`,
    width: 524,
    height: 793,
    title: "Malgorzata Horyn-Olszewska 50 lat.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${orientalUrl}Malgorzata Horyn-Olszewska PORTRET.jpg`,
    width: 524,
    height: 793,
    title: "Malgorzata Horyn-Olszewska PORTRET.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${orientalUrl}Malgorzata Horyn-Olszewska w hidzabie.jpg`,
    width: 524,
    height: 793,
    title: "Malgorzata Horyn-Olszewska w hidzabie.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  // {
  //   src: `${arabianUrl}Malgorzata Horyn-Olszewska. .jpg`,
  //   width: 524,
  //   height: 793,
  //   title: "Malgorzata Horyn-Olszewska. .jpg",
  //   description: "After Rain (Jeshu John - designerspics.com)",
  // },
  {
    src: `${orientalUrl}Malgorzata Horyn-Olszewska.png`,
    width: 524,
    height: 793,
    title: "Malgorzata Horyn-Olszewska.png",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${orientalUrl}Malgorzata Horyn-Olszewska1CASTING STUDIO.jpg`,
    width: 524,
    height: 793,
    title: "Malgorzata Horyn-Olszewska1CASTING STUDIO.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${orientalUrl}Malgorzata Horyn-Olszewska3.png`,
    width: 524,
    height: 793,
    title: "Malgorzata Horyn-Olszewska3.png",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${orientalUrl}Malgorzata. Horyn-Olszewska.jpg`,
    width: 524,
    height: 793,
    title: "Malgorzata. Horyn-Olszewska.jpg",
    description: "After Rain (Jeshu John - designerspics.com)",
  }

]

const modelImages: GalleryImage[] = [
  {
    src: `${modelUrl}1.JPG`,
    width: 524,
    height: 793,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${modelUrl}2.PNG`,
    width: 610,
    height: 920,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${modelUrl}3.PNG`,
    width: 611,
    height: 920,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${modelUrl}4.PNG`,
    width: 615,
    height: 919,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: `${modelUrl}5.PNG`,
    width: 602,
    height: 915,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
  }
];


const actressImages: GalleryImage[] = [
  {
    src: `${actressUrl}1.JPG`,
    width: 524,
    height: 793,
    title: "aaaaa",
    description: "After Rain (Jeshu John - designerspics.com)",
  }
];

export { actressImages, modelImages, orientalImages, aboutImage };
