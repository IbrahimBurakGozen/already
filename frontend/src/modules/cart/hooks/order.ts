import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useOrder() {
	const queryClient = useQueryClient();

	const create = useMutation(
		async (id: string) => {
			const { data } = await axios.post("/api/order/create");
			return data;
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["cart"]);
			},
		}
	);

	return {
		create,
	};
}
