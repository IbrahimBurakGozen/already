import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const Heading = dynamic(() => import("@/common/typography/Heading"), {
	ssr: false,
});

export default function SearchPage() {
	return (
		<div className="flex flex-col justify-center items-center py-[30vh]">
			<Heading type="h1">Search: deze pagina is buiten de scope</Heading>
		</div>
	);
}

SearchPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout pt px>
			{page}
		</MainLayout>
	);
};
