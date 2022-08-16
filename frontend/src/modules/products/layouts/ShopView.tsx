import CategoryMenu from "@/modules/categories/components/CategoryMenu";
import classNames from "classnames";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { HTMLAttributes } from "react";
import Filter from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import { useProductsQuery } from "../hooks/products.hook";

interface Props extends HTMLAttributes<HTMLDivElement> {
	params: Params;
}

export default function ShopView({ params, className, ...props }: Props) {
	const { data, isLoading, error } = useProductsQuery(params.category);

	if (isLoading) return <div>Loading...</div>;

	if (error || !data) return <div>Error: Error</div>;

	return (
		<div
			{...props}
			className={classNames(
				"grid grid-cols-1  xl:grid-cols-[20%_auto] xl:grid-rows-[auto_1fr]",
				className
			)}
		>
			<Filter className="" params={params} />
			
			<div className="flex flex-col gap-10">
				<CategoryMenu categoryId={params.category} />

				<ProductGrid products={data.products} />
			</div>
		</div>
	);
}
