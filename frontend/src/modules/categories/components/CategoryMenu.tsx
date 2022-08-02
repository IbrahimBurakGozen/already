import Skeleton from "@/common/components/Skeleton";
import Heading from "@/common/typography/Heading";
import classNames from "classnames";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { useCategoryByIdQuery } from "../hooks/categories.hook";

interface Props extends HTMLAttributes<HTMLDivElement> {
	// currentCategory: Category | null | undefined;
	// previousCategory: Category | null | undefined;
	categoryId: string | null | undefined;
	// setParent: (parent: string | null) => void;
}

export default function CategoryMenu({
	// currentCategory,
	// previousCategory,
	// setParent,
	categoryId,
	className,
	...props
}: Props) {
	/**
	 *
	 *
	 *  If the category true,
	 */
	const { data, isLoading, error } = useCategoryByIdQuery(categoryId || "");

	/**
	 *
	 *
	 * If the category is null,
	 */
	if (!categoryId) {
		return (
			<div {...props} className={classNames("flex flex-row gap-4", className)}>
				<Heading type="h2">Kies een categorie</Heading>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div {...props} className={classNames("w-full flex gap-2", className)}>
				<Skeleton className="w-1/2 h-8 md:w-1/3 2xl:w-1/5" />
			</div>
		);
	}

	if (error || !data) return <Heading type="h2">Er is iets foutgegaan</Heading>;

	/**
	 *
	 *
	 * If the category doesn't have a parent
	 */

	if (!data.parent) {
		return (
			<div {...props} className={classNames("flex flex-row gap-4", className)}>
				<Link href="/categories">
					<Heading type="h2" className="underline cursor-pointer">
						Categorieën
					</Heading>
				</Link>

				<Heading type="h2">{">"}</Heading>

				<Heading type="h2">{data.title}</Heading>
			</div>
		);
	}
	/**
	 *
	 *
	 * If the category has a parent
	 */
	if (data.parent) {
		return (
			<div {...props} className={classNames("flex flex-row gap-4", className)}>
				<Link href="/categories">
					<Heading type="h2">{"..."}</Heading>
				</Link>

				<Heading type="h2">{">"}</Heading>

				<Link href={`/categories?parent=` + data.parent.id}>
					<Heading type="h2" className="underline cursor-pointer">
						{data.parent.title}
					</Heading>
				</Link>

				<Heading type="h2">{">"}</Heading>

				<Heading type="h2">{data.title}</Heading>
			</div>
		);
	}

	return <div></div>;
}
