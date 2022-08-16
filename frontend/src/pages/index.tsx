import Arrow from "@/common/icons/actions/Arrow";
import Heading from "@/common/typography/Heading";
import { useCategoriesQuery } from "@/modules/categories/hooks/categories.hook";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const CategoryGrid = dynamic(
	() => import("@/modules/categories/components/CategoryGrid"),
	{
		ssr: false,
	}
);

export default function HomePage() {
	const { data, isLoading, error } = useCategoriesQuery(null);

	return (
		<>
			<div className="relative h-[50vh] rounded-3xl shadow-md p-8">
				<Image
					width={100}
					height={50}
					src="/images/home/home-landing.jpg"
					alt="Home page landing image"
					layout="fill"
					objectFit="cover"
					className="-z-10 rounded-3xl"
				/>
				<Link href="/products">
					<div className="z-10 absolute bottom-8 md:bottom-16 left-8 md:left-16 flex md:flex-row flex-wrap gap-4 w-fit md:w-fit h-min cursor-pointer">
						<Heading color="light" type="h2">
							Ontdek ons aanbod
						</Heading>
						<Arrow
							direction="left-to-right"
							className="hidden md:block fill-light-300 w-16 xl:w-24"
						/>
					</div>
				</Link>
			</div>

			<div className="pt-section">
				<CategoryGrid
					categories={data?.categories}
					isLoading={isLoading}
					error={error}
				/>
			</div>
		</>
	);
}

HomePage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout py px>
			{page}
		</MainLayout>
	);
};
