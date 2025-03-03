import srcWork1 from "../../public/work1.webp"
import srcWork2 from "../../public/work2.webp"
import srcWork3 from "../../public/work3.webp"
import srcWork4 from "../../public/work4.webp"
import srcWork5 from "../../public/work5.webp"
import srcWork6 from "../../public/work6.webp"
import srcWork7 from "../../public/work7.webp"
import srcWork8 from "../../public/work8.webp"

export interface IMAGES {
    id: number;
    link: string;
    src: string;
    alt: string;
}

export const galleryListRow1: IMAGES[] = [
    {
        id: 1,
        link: "#",
        src: srcWork1,
        alt: "protfolio 1",
    },
    {
        id: 2,
        link: "#",
        src: srcWork4,
        alt: "protfolio 2",
    },
    {
        id: 3,
        link: "#",
        src: srcWork6,
        alt: "protfolio 3",
    },
    {
        id: 4,
        link: "#",
        src: srcWork3,
        alt: "protfolio 4",
    },
]

export const galleryListRow2: IMAGES[] = [
    {
        id: 1,
        link: "#",
        src: srcWork2,
        alt: "protfolio 1",
    },
    {
        id: 2,
        link: "#",
        src: srcWork5,
        alt: "protfolio 2",
    },
    {
        id: 3,
        link: "#",
        src: srcWork7,
        alt: "protfolio 3",
    },
    {
        id: 4,
        link: "#",
        src: srcWork8,
        alt: "protfolio 4",
    },
]

