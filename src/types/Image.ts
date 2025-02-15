export interface GalleryImage extends LightBoxImage {
    width: number;
    height: number;
}

export interface LightBoxImage extends Image {
    description: string;
    title: string
}

export interface Image {
    src: string;
}