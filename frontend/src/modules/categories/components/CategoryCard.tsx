import Heading from "@/common/typography/Heading";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { HTMLAttributes } from "react";
import { checkImage } from "src/utils/checkers";
import { Category } from "../utils/types";

interface Props extends HTMLAttributes<HTMLDivElement> {
	category: Category;
}

export default function CategoryCard({ category, className, ...props }: Props) {
	const router = useRouter();

	function handleClick() {
		if (!category.hasChildren) {
			router.push(`/products?category=${category.id}`);
			return;
		}
		router.push(`/categories?parent=${category.id}`);
	}

	return (
		<div
			{...props}
			className={classNames(
				"flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transform transition-transform duration-200 ease-in-out",
				className
			)}
			onClick={handleClick}
		>
			<Image
				{...checkImage(category.image)}
				width={100}
				height={100}
				layout="responsive"
				objectFit="cover"
				className="rounded-3xl"
				unoptimized
			/>

			<Heading type="h4" color="dark" breakpoint={2}>
				{category.title}
			</Heading>
		</div>
	);
}
