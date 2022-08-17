import { getWishlistId, setWishlistId } from "@/utils/cookies/wishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Wishlist, WishlistLine } from "../utils/types";

export interface AddLineToWishlistHookInput {
	id: string;
}

export function useWishlist() {
	const queryClient = useQueryClient();
	/**
	 *
	 *
	 * @param {Wishlist} wishlist
	 */
	const wishlist = useQuery(["wishlist"], async () => {
		const wishlistId = getWishlistId();

		if (!wishlistId) {
			const { data } = await axios.get("/api/wishlist/create");
			setWishlistId(data.id);
		}

		const { data } = await axios.get("/api/wishlist");

		return data as Wishlist;
	});
	/**
	 *
	 *
	 * @param {(wishlist: Wishlist) => void} onUpdate - Callback when wishlist is updated
	 */
	const addLine = useMutation(async (input: AddLineToWishlistHookInput) => {
		const { data } = await axios.post("/api/wishlist/lines/add", {
			line: input,
		});
		return data;
	});
	/**
	 *
	 *
	 * @param {(wishlist: Wishlist) => void} onUpdate - Callback when wishlist is updated
	 */
	const updateLine = useMutation(
		async (line: WishlistLine) => {
			const response = await axios.post("/api/wishlist/lines/update", {
				line,
			});
			return response.data;
		},
		{
			onSuccess: () => queryClient.invalidateQueries(["wishlist"]),
		}
	);
	/**
	 *
	 *
	 * @param {(wishlist: Wishlist) => void} onUpdate - Callback when wishlist is updated
	 */
	const removeLine = useMutation(
		async (lineIds: string[]) => {
			const response = await axios.post("/api/wishlist/lines/remove", {
				lineIds: lineIds,
			});
			return response.data;
		},
		{
			onSuccess: () => queryClient.invalidateQueries(["wishlist"]),
		}
	);

	return {
		wishlist,
		addLine,
		updateLine,
		removeLine,
	};
}
