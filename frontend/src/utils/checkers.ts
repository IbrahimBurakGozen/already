import { Image } from "./types";

export function checkImage(image: Image | undefined): {
	src: string;
	alt: string;
} {
	return {
		src: checkImageSrc(image),
		alt: checkImageAlt(image),
	};
}

export function checkImageSrc(image: Image | undefined): string {
	return image?.url || "/images/placeholder-image.jpg";
}

export function checkImageAlt(image: Image | undefined): string {
	return image?.alt || "placeholder-image";
}
