import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

export default function AboutPage() {
	return (
		<div>
			<h1>About</h1>
		</div>
	);
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout py px>
			{page}
		</MainLayout>
	);
};
