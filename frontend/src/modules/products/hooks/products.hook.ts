import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProductsQuery(categoryId: string) {
	return useQuery(["products", categoryId], async () => {
		const query = categoryId ? `?category=${categoryId}` : "";
		const { data } = await axios.get("/api/products" + query);
		return data;
	});
}

export function useProductByIdQuery(productId: string) {
	return useQuery(["product", productId], async () => {
		const { data } = await axios.get(`/api/products/${productId}`);
		return data;
	});
}