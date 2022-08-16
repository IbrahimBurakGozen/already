import { getCartId, setCartId } from "@/utils/cookies/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Cart, CartLine } from "../utils/types";

export interface AddLineToCartHookInput {
	id: string;
	quantity: number;
}

export function useCart() {
	const queryClient = useQueryClient();
	/**
	 *
	 *
	 * @param {Cart} cart
	 */
	const cart = useQuery(["cart"], async () => {
		const cartId = getCartId();

		if (!cartId) {
			const { data } = await axios.get("/api/cart/create");
			setCartId(data.id);
		}

		const { data } = await axios.get("/api/cart");

		return data as Cart;
	});
	/**
	 *
	 *
	 * @param {(cart: Cart) => void} onUpdate - Callback when cart is updated
	 */
	const addLine = useMutation(async (input: AddLineToCartHookInput) => {
		const { data } = await axios.post("/api/cart/lines/add", {
			line: input,
		});
		return data;
	});
	/**
	 *
	 *
	 * @param {(cart: Cart) => void} onUpdate - Callback when cart is updated
	 */
	const updateLine = useMutation(
		async (line: CartLine) => {
			const response = await axios.post("/api/cart/lines/update", {
				line,
			});
			return response.data;
		},
		{
			onSuccess: () => queryClient.invalidateQueries(["cart"]),
		}
	);
	/**
	 *
	 *
	 * @param {(cart: Cart) => void} onUpdate - Callback when cart is updated
	 */
	const removeLine = useMutation(
		async (lineIds: string[]) => {
			const response = await axios.post("/api/cart/lines/remove", {
				lineIds: lineIds,
			});
			return response.data;
		},
		{
			onSuccess: () => queryClient.invalidateQueries(["cart"]),
		}
	);

	return {
		cart: cart,
		addLine,
		updateLine,
		removeLine,
	};
}
