import { Image } from "@/utils/types";

export interface Cart {
	id: string;
	// note: string;
	buyerIdentity: {
		countryCode: string;
		email: string;
		phone: string;
	};
	lines: CartLine[];
	totalPrice: number;
}

export interface CartLine {
	id: string;
	variantId: string;
	productId: string;

	quantity: number;
	title: string;
	description: string;
	price: number;

	image: Image;
}

export interface Wishlist {
	id: string;
	buyerIdentity: {
		countryCode: string;
		email: string;
		phone: string;
	};
	lines: WishlistLine[];
}

export interface WishlistLine {
	id: string;
	variantId: string;
	productId: string;

	title: string;
	description: string;
	price: number;

	image: Image;
}
