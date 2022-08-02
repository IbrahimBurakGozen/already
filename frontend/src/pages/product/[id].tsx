import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useProductByIdQuery } from "@/modules/products/hooks/products.hook";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const ProductView = dynamic(
	() => import("@/modules/products/layouts/ProductView"),
	{
		ssr: false,
	}
);

interface Props {
	id: string;
}

export default function ProductPage({ id }: Props) {
	const { data, isLoading, error } = useProductByIdQuery(id);

	return <ProductView product={data} isLoading={isLoading} error={error} />;
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout px py>
			{page}
		</MainLayout>
	);
};

export async function getServerSideProps({ params }: Params) {
	const { id } = params;

	return {
		props: {
			id,
		},
	};
}
