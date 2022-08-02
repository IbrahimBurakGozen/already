import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CategoryResponse, Category } from "../utils/types";

export function useCategoriesQuery(parent: string | null) {
	return useQuery<CategoryResponse>(["categories", parent], async () => {
		const query = parent ? `?parent=${parent}` : "";
		const { data } = await axios.get("/api/categories" + query);
		return data;
	});
}


export function useCategoryByIdQuery(id: string) {
	return useQuery<Category>(["category", id], async () => {
		const { data } = await axios.get("/api/categories/" + id);
		return data;
	});
}