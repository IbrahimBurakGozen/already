import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const CartView = dynamic(() => import("@/modules/cart/layout/CartView"), {
	ssr: false,
});

export default function CartPage() {
	return <CartView />;
}

CartPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout footer={false}>{page}</MainLayout>;
};
