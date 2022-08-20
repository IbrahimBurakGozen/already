import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const WishlistView = dynamic(
	() => import("@/modules/cart/layout/WishlistView"),
	{
		ssr: false,
	}
);

export default function WishlistPage() {
	return <WishlistView />;
}

WishlistPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout px py>
			{page}
		</MainLayout>
	);
};
