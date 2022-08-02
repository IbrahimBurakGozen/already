import classNames from "classnames";
import { HTMLAttributes } from "react";
import { Product } from "../utils/types";
import ProductCard from "./ProductCard";

interface Props extends HTMLAttributes<HTMLDivElement> {
	products: Product[];
}

export default function ProductGrid({ products, className, ...props }: Props) {
	return (
		<div
			{...props}
			className={classNames(
				"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7    gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16",
				className
			)}
		>
			{products.map((product, index) => (
				<ProductCard key={index} product={product} />
			))}
		</div>
	);
}
