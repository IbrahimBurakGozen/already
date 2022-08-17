import dynamic from "next/dynamic";
import Image from "next/image";
import { ComponentType, ReactElement } from "react";
/**
 *
 * Images
 */
import landingImage from "@/public/images/about/landing.jpg";
import realiseImage from "@/public/images/about/realise.jpg";
import aimImage from "@/public/images/about/aim.jpg";

/**
 *
 * Dynamic imports
 */
const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const CallToAction = dynamic(
	() => import("@/modules/pages/components/CallToAction"),
	{
		ssr: false,
	}
);

const Heading = dynamic(() => import("@/common/typography/Heading"), {
	ssr: false,
});

const Text = dynamic(() => import("@/common/typography/Text"), {
	ssr: false,
});

const Paragraph = dynamic(() => import("@/common/typography/Paragraph"), {
	ssr: false,
});
/**
 *
 * Icons
 */
const Graphic = dynamic(() => import("@/common/icons/brand/Graphic"), {
	ssr: false,
});

const Time = dynamic(() => import("@/modules/pages/icons/Time"), {
	ssr: false,
});

const Stress = dynamic(() => import("@/modules/pages/icons/Stress"), {
	ssr: false,
});

const Money = dynamic(() => import("@/modules/pages/icons/Money"), {
	ssr: false,
});

export default function AboutPage() {
	return (
		<>
			<section className="relative h-screen">
				<Image
					src={landingImage}
					alt="About page landing image"
					layout="fill"
					objectFit="cover"
				/>

				<div className="absolute w-full h-full backdrop-blur-xl" />

				<div className="absolute left-0 right-0 bottom-0 top-20 lg:top-[20vh]  w-full my-auto px-page grid grid-cols-1 lg:grid-cols-[50%_40%] lg:gap-x-[10%] items-center">
					<Text
						type="h1"
						color="light"
						className="font-bold text-8xl md:text-9xl"
					>
						Nog zo veel meer…
					</Text>

					<Graphic className="hidden lg:block lg:fill-light-500" />
				</div>
			</section>

			<section className="mx-page py-24 flex flex-col gap-4">
				<Heading type="h2" color="blue" className="lg:ml-36">
					Wat doen we juist?
				</Heading>

				<Paragraph size="small" maxCharacters={50} className="lg:ml-36">
					Zou het niet te gek zijn zou je je boodschappen online uit
					verschillende supermarkten tegelijk kunnen doen? En zou het niet
					waanzinniger zijn zouden deze de volgende dag thuis geleverd worden?
					Dat is nu mogelijk met already!
				</Paragraph>
			</section>

			<div className="bg-light-300 px-page py-24 md:py-36 flex flex-col gap-16 md:gap-28">
				<Heading type="h1" color="dark">
					Hoe we je leven vergemakkelijken
				</Heading>

				<div className="flex flex-row flex-wrap gap-x-36 gap-y-24">
					{[
						{
							icon: Time as ComponentType<any>,
							title: "Efficiënt",
							description: `Heb je geen tijd om te relaxen? Met zo veel dagdagelijkse klusjes is dat begrijpelijk. Wij willen één van die klusjes vergemakkelijken, zodat jij meer tijd om te relaxen!`,
						},
						{
							icon: Stress as ComponentType<any>,
							title: "Stressvrij",
							description: `Een parkeerplaats zoeken, producten zoeken die nergens kan vinden, lange rijen aan de kassa, betalingsfouten aan de kassa,… Brrrr! ik krijg er de rillingen van! Dat is gelukkig allemaal in het verleden.`,
						},
						{
							icon: Money as ComponentType<any>,
							title: "Voordeliger",
							description: `Door het gebruiksgemak dat we aanbieden kan je enkel hetgeen kopen dat je nodig hebt wanneer je het nodig hebt. Zo. heb je altijd alles snel in huis voordelig en gemakkelijk.`,
						},
					].map((element, index) => (
						<div
							className="flex-1 grow basis-full md:basis-1/3 xl:basis-1/4 grid grid-cols-1 grid-rows-[7rem_auto_1fr] gap-y-8 text-center justify-items-center items-center"
							key={index}
						>
							{<element.icon className="fill-blue-500 h-24" />}

							<div className="flex flex-col gap-2 justify-center items-center">
								<Heading type="h3" maxCharacters={15}>
									{element.title}
								</Heading>
								<Paragraph size="small" maxCharacters={40}>
									{element.description}
								</Paragraph>
							</div>
						</div>
					))}
				</div>
			</div>

			<section className="bg-blue-500 px-page py-24 flex flex-col gap-4">
				<Heading type="h2" color="light" className="lg:ml-36">
					Onze Visie
				</Heading>

				<Paragraph
					size="small"
					maxCharacters={50}
					color="light"
					className="lg:ml-36"
				>
					We willen het doen van boodschappen innoveren, zo kunnen we dagelijkse
					zorgen verminderen en het leven comfortabeler maken.
				</Paragraph>
			</section>

			<section className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 pb-24 lg:py-40 items-center">
				<Image
					src={realiseImage}
					alt="Visie realiseren afbeedling"
					layout="responsive"
					objectFit="cover"
					className="lg:col-start-2 lg:row-start-1 lg:rounded-l-3xl"
				/>

				<div className="flex flex-col gap-4 px-page lg:row-start-1 lg:col-start-1">
					<Heading type="h1" color="dark">
						Hoe we onze visie willen realiseren
					</Heading>

					<Paragraph size="small" maxCharacters={50} color="dark">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
					</Paragraph>
				</div>
			</section>

			<section className="bg-light-300 grid grid-cols-1 lg:grid-cols-2 gap-y-16 pb-24 lg:py-40 items-center">
				<Image
					src={aimImage}
					alt="Visie realiseren afbeedling"
					layout="responsive"
					objectFit="cover"
					className="lg:rounded-r-3xl"
				/>

				<div className="flex flex-col gap-4 px-page">
					<Heading type="h1" color="dark">
						Waar we naartoe streven
					</Heading>

					<Paragraph size="small" maxCharacters={50} color="dark">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
					</Paragraph>
				</div>
			</section>

			<CallToAction />
		</>
	);
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};
