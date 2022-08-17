import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const Heading = dynamic(() => import("@/common/typography/Heading"), {
	ssr: false,
});

export default function AccountPage() {
	return (
		<div className="flex flex-col justify-center items-center py-[30vh]">
			<Heading type="h1">Account: deze pagina is buiten de scope</Heading>
		</div>
	);
}

AccountPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout pt px>
			{page}
		</MainLayout>
	);
};
