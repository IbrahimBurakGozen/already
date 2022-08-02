import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import CategoryMenu from "../components/CategoryMenu";
import CategoryGrid from "../components/CategoryGrid";
import { useCategoriesQuery } from "../hooks/categories.hook";

interface Props {
	params: Params;
}

export default function CategoryView({ params }: Props) {
	const { data, isLoading, error } = useCategoriesQuery(params.parent);

	return (
		<div className="flex flex-col gap-10">
			<CategoryMenu categoryId={params.parent} />

			<CategoryGrid
				categories={data?.categories}
				error={error}
				isLoading={isLoading}
			/>
		</div>
	);
}
