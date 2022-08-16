import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const Banner = dynamic(() => import("@/modules/pages/components/Banner"), {
	ssr: false,
});

const Heading = dynamic(() => import("@/common/typography/Heading"), {
	ssr: false,
});

export default function ApproachPage() {
	return (
		<>
			<div className="h-screen flex flex-col justify-center items-center text-center">
				<Heading type="h1" color="blue">
					Je boodschappen in 3 stappen.
				</Heading>
			</div>

			<Banner
				title="1. Bestellen"
				subtitle="Kies je producten uit verschillende winkels tegelijk."
				image={{
					src: "/images/approach/step-1.jpg",
					alt: "Stap 1 afbeelding",
				}}
			/>

			<Banner
				title="2. Relaxen"
				subtitle="Gelukkig moet je niet lang wachten, want vandaag besteld morgen in huis!"
				image={{
					src: "/images/approach/step-2.jpg",
					alt: "Stap 2 afbeelding",
				}}
			/>

			<Banner
				title="3. Genieten"
				subtitle="Nu  volop genieten! "
				image={{
					src: "/images/approach/step-3.jpg",
					alt: "Stap 3 afbeelding",
				}}
			/>
		</>
	);
}

ApproachPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};
