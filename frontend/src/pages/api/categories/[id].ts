import { CategoryResponse } from "@/modules/categories/utils/types";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ServerError } from "src/utils/types";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CategoryResponse | ServerError>
) {
	const { id } = req.query;

	try {
		const { data } = await axios.get(
			process.env.API_PATH + "/categories/" + id
		);
		res.status(200).json(data.category);
	} catch (e) {
		res.status(500).json({ message: "Internal Server Error" });
		throw e;
	}
}
