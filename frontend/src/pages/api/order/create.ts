import { CategoryResponse } from "@/modules/categories/utils/types";
import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CART_ID_COOKIE } from "src/const";
import { ServerError } from "src/utils/types";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CategoryResponse | ServerError>
) {
	const cartId = req.cookies[CART_ID_COOKIE];

	try {
		const { data } = await axios.post(process.env.API_PATH + "/orders/create", {
			cartId,
		});
		res.status(200).json(data.order);
	} catch (e: AxiosError | unknown) {
		res.status(500).json({ message: "Internal Server Error" });
		throw e;
	}
}
