import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const CategoryView = dynamic(
	() => import("@/modules/categories/layouts/CategoryView"),
	{
		ssr: false,
	}
);

interface Props {
	params: Params;
}

export default function CategoriesPage({ params }: Props) {
	return <CategoryView params={params} />;
}

CategoriesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout py px>
			{page}
		</MainLayout>
	);
};

export function getServerSideProps({ query }: Params) {
	return {
		props: {
			params: query,
		},
	};
}
