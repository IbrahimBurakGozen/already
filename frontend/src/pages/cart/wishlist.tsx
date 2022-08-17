import MainLayout from "@/common/layout/MainLayout";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

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
