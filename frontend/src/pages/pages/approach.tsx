import dynamic from "next/dynamic";
import { ReactElement } from "react";
/**
 *
 * Images
 */
import step1Image from "@/public/images/approach/step-1.jpg";
import step2Image from "@/public/images/approach/step-2.jpg";
import step3Image from "@/public/images/approach/step-3.jpg";
import CallToAction from "@/modules/pages/components/CallToAction";
/**
 *
 * Dynamic imports
 */
const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const Banner = dynamic(() => import("@/modules/pages/components/Banner"), {
	ssr: false,
});

const Heading = dynamic(() => import("@/common/typography/Heading"), {
	ssr: false,
});

const Text = dynamic(() => import("@/common/typography/Text"), {
	ssr: false,
});

export default function ApproachPage() {
	return (
		<>
			<div className="h-screen py-px px-page flex flex-col justify-center items-center text-center">
				<Heading type="h1" color="blue" className="flex flex-col">
					<Text
						type="span"
						color="blue"
						className="text-9xl md:text-[14rem] xl:text-[18rem]"
					>
						3
					</Text>

					<Text type="span" color="blue" maxCharacters={25}>
						stappen voor je boodschappen.
					</Text>
				</Heading>
			</div>

			<Banner
				title="1. Bestellen"
				subtitle="Kies je producten uit verschillende winkels tegelijk."
				image={{
					src: step1Image as unknown as string,
					alt: "Stap 1 afbeelding",
				}}
				position="right"
			/>

			<Banner
				title="2. Relaxen"
				subtitle="Gelukkig moet je niet lang wachten, want vandaag besteld morgen in huis!"
				image={{
					src: step2Image as unknown as string,
					alt: "Stap 2 afbeelding",
				}}
			/>

			<Banner
				title="3. Genieten"
				subtitle="Nu  volop genieten! "
				image={{
					src: step3Image as unknown as string,
					alt: "Stap 3 afbeelding",
				}}
				position="right"
			/>

			<CallToAction />
		</>
	);
}

ApproachPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};
