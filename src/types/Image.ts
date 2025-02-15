export interface GalleryImage extends LightBoxImage {
    width: number;
    height: number;
}

export interface LightBoxImage extends ImageBase {
    description: string;
    title: string
}

export interface ImageBase {
    src: string;
}