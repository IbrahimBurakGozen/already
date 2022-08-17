import { WISHLIST_ID_COOKIE } from "src/const";
import { CategoryResponse } from "@/modules/categories/utils/types";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ServerError } from "src/utils/types";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CategoryResponse | ServerError>
) {
	const wishlistId = req.cookies[WISHLIST_ID_COOKIE];

	try {
		const { data } = await axios.get(process.env.API_PATH + "/wishlists/" + wishlistId);
		res.status(200).json(data.wishlist);
	} catch (e) {
		res.status(500).json({ message: "Internal Server Error" });
		throw e;
	}
}
