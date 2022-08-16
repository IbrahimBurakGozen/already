import { Image } from "src/utils/types";

export interface CategoryResponse {
	parent: Category | null;
	categories: Category[];
}

export interface Category {
	id: string;
	title: string;
	description: string | null;
	hasChildren: boolean;
	hasParent: boolean;
	parent: Category | null;
	parentId: string | null;
	children: Category[];
	image: Image;
	createdAt: string;
	updatedAt: string;
}

export interface Brand {
	id: string;
	name: string;
	description: string;
	createdAt: string;
	updatedAt: string;
}

export interface Shop {
	name: string;
	rating: number;
	logoUrl: string;
}
