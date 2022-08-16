import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const ShopView = dynamic(() => import("@/modules/products/layouts/ShopView"), {
	ssr: false,
});

interface Props {
	params: Params;
}

export default function ProductsPage({ params }: Props) {
	return <ShopView params={params} />;
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
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
