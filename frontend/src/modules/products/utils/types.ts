import { Image } from "src/utils/types";

export interface Product {
	id: string;
	title: string;
	description: string;
	price: ProductPrice;
	featuredImage: Image;
	images: Image[];
}

export interface ProductPrice {
	maxPrice: number;
	minPrice: number;
}

export interface ProductOption {
	option: string;
	values: string[];
}

export interface ProductVariant {
	barcode: string;
	optionValues: string[];
	price: number;
	quantity: number;
	sku: string;
}

export interface ProductImage extends Image {}
