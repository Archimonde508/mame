export interface GalleryImage extends ImageBase {
    width: number;
    height: number;
}

export interface ImageBase {
    src: string;
    description: string;
    title: string
}