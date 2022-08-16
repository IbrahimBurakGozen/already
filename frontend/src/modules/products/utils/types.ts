import { Brand, Category, Shop } from "@/modules/categories/utils/types";
import { Image } from "src/utils/types";

export interface Product {
	id: string;
	title: string;
	description: string;
	price: ProductPrice;
	featuredImage: Image;
	images: Image[];
	shop: Shop;
	category: Category;
	brand: Brand;
	variants: ProductVariant[];
	options: ProductOption[];
}

export interface ProductPrice {
	maxPrice: number;
	minPrice: number;
}

export interface ProductOption {
	name: string;
	values: string[];
}

export interface ProductVariant {
	id: string;
	barcode: string;
	price: number;
	quantity: number;
	sku: string;
	default: boolean;
	selectedOptions: ProductSelectedOption[];
}

export interface ProductSelectedOption {
	name: string;
	value: string;
}

export interface ProductImage extends Image {}
