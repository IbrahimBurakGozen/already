import Error from "@/common/components/Error";
import Skeleton from "@/common/components/Skeleton";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import { Category } from "../utils/types";
import CategoryCard from "./CategoryCard";

interface Props extends HTMLAttributes<HTMLDivElement> {
	categories: Category[] | null | undefined;
	isLoading: boolean;
	error: any;
}

export default function CategoryGrid({
	categories,
	isLoading,
	error,
	className,
	...props
}: Props) {
	if (isLoading) {
		<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6    gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16">
			{[...Array(12)].map((_, i) => (
				<div key={i} className="flex flex-col gap-4 items-center">
					<Skeleton className="w-full h-full aspect-square rounded-3xl" />
					<Skeleton className="w-1/2 rounded-3xl" />
				</div>
			))}
		</div>;
	}

	if (error || !categories) {
		return (
			<div className="flex flex-col justify-center py-[25vh]">
				<Error title="Oeps er is iets fout gegaan!" />
			</div>
		);
	}

	return (
		<div
			{...props}
			className={classNames(
				"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7    gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16",
				className
			)}
		>
			{categories.map((category, index) => (
				<CategoryCard key={index} category={category} />
			))}
		</div>
	);
}

// [
// 	{
// 		id: "1",
// 		title: "Zuivel",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/zuivel.jpg",
// 			alt: "Zuivel",
// 		},
// 	},
// 	{
// 		id: "2",
// 		title: "Dranken",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/dranken.jpg",
// 			alt: "Dranken",
// 		},
// 	},
// 	{
// 		id: "3",
// 		title: "Noten en Zaden",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/noten.jpg",
// 			alt: "Noten",
// 		},
// 	},
// 	{
// 		id: "4",
// 		title: "Kant-en-klaar",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/kant-en-klaar.jpg",
// 			alt: "Kant en klaar",
// 		},
// 	},
// 	{
// 		id: "5",
// 		title: "Schoonmaak & hygiëne",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/hygiene.jpg",
// 			alt: "Schoonmaak & hygiëne",
// 		},
// 	},
// 	{
// 		id: "6",
// 		title: "Ontbijtgranen & beleg",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/ontbijtgranen.jpeg",
// 			alt: "Ontbijtgranen & beleg",
// 		},
// 	},
// 	{
// 		id: "7",
// 		title: "Huidieren",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/huisdieren.jpg",
// 			alt: "Huidieren",
// 		},
// 	},
// 	{
// 		id: "8",
// 		title: "Baby",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/baby.jpg",
// 			alt: "Snacks",
// 		},
// 	},
// 	{
// 		id: "9",
// 		title: "Snacks",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/snacks.jpg",
// 			alt: "Snacks",
// 		},
// 	},
// 	{
// 		id: "10",
// 		title: "Vlees & vis",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/vlees.jpg",
// 			alt: "Vlees & vis",
// 		},
// 	},
// 	{
// 		id: "11",
// 		title: "Soepen, sauzen, olie",
// 		hasSubcategories: true,
// 		image: {
// 			src: "/images/categories/soepen.jpg",
// 			alt: "Vlees & vis",
// 		},
// 	},
// ]
