import { CategoryResponse } from "@/modules/categories/utils/types";
import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ServerError } from "src/utils/types";

export interface CartCreateRequestInput {
	buyer?: {
		id: string;
	};
	lines?: {
		id: string;
		quantity: number;
	}[];
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CategoryResponse | ServerError>
) {
	try {
		const { data } = await axios.post(process.env.API_PATH + "/carts/create");
		res.status(200).json(data.cart);
	} catch (e: AxiosError | unknown) {
		res.status(500).json({ message: "Internal Server Error" });
		throw e;
	}
}
