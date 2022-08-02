import Image from "next/image";
import Link from "next/link";
import { Product } from "../utils/types";
import Heading from "@/common/typography/Heading";
import Paragraph from "@/common/typography/Paragraph";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import { checkImage } from "src/utils/checkers";

interface Props extends HTMLAttributes<HTMLElement> {
	product: Product;
	settings?: {
		showPrice: boolean;
	};
}

export default function ProductCard({
	product: { id, title, price, featuredImage },
	settings = { showPrice: true },
	className,
	...props
}: Props) {
	return (
		<Link href={"/product/" + id}>
			<div
				{...props}
				className={classNames(
					"flex flex-col gap-4 cursor-pointer hover:scale-105 transform transition-transform duration-200 ease-in-out",
					className
				)}
			>
				<Image
					{...checkImage(featuredImage)}
					width={100}
					height={100}
					layout="responsive"
					objectFit="cover"
					className="rounded-2xl aspect-square"
				/>

				<div className="flex flex-col gap-2">
					<Heading breakpoint={2} type="h4" color="blue">
						{title}
					</Heading>
				</div>

				{settings.showPrice && (
					<span className="text-dark-500 bg-green-700 font-semibold text-sm md:text-base">
						€{price.minPrice}
					</span>
				)}
			</div>
		</Link>
	);
}
