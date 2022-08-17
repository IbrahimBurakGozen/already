import { CategoryResponse } from "@/modules/categories/utils/types";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { WISHLIST_ID_COOKIE } from "src/const";
import { ServerError } from "src/utils/types";

export interface AddLineToWishlistInput {
	wishlistId: string;
	line: {
		id: string;
		quantity: number;
	};
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CategoryResponse | ServerError>
) {
	const wishlistId = req.cookies[WISHLIST_ID_COOKIE];

	const input = {
		WishlistId: wishlistId,
		Line: req.body.line,
	};

	try {
		const { data } = await axios.post(
			process.env.API_PATH + "/wishlists/lines",
			input
		);
		res.status(200).json(data.wishlist);
	} catch (e: any) {
		res.status(500).json({ message: "Internal Server Error" });
		console.log("Error", e?.response?.data);
	}
}
