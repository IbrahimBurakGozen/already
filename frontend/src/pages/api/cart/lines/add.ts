import { CategoryResponse } from "@/modules/categories/utils/types";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CART_ID_COOKIE } from "src/const";
import { ServerError } from "src/utils/types";

export interface AddLineToCartInput {
	cartId: string;
	line: {
		id: string;
		quantity: number;
	};
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CategoryResponse | ServerError>
) {
	const cartId = req.cookies[CART_ID_COOKIE];

	const input = {
		CartId: cartId,
		Line: req.body.line,
	};

	console.log("input", input);

	try {
		const { data } = await axios.post(
			process.env.API_PATH + "/carts/lines",
			input
		);
		res.status(200).json(data.cart);
	} catch (e: any) {
		res.status(500).json({ message: "Internal Server Error" });
		console.log("Error", e?.response?.data);
	}
}
