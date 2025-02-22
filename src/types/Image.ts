export interface GalleryImage extends LightBoxImage {
    thumbanilWidth: number;
    thumbanilHeight: number;
    thumbnailSrc: string;
}

export interface LightBoxImage extends ImageBase {
    description: string;
    title: string
}

export interface ImageBase {
    src: string;
}