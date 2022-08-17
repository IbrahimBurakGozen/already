import Heading from "@/common/typography/Heading";
import dynamic from "next/dynamic";
import { useWishlist } from "../hooks/wishlist";

const WishlistCard = dynamic(
	() => import("@/modules/cart/components/WishlistCard"),
	{
		ssr: false,
	}
);

const Error = dynamic(() => import("@/common/components/Error"), {
	ssr: false,
});

const Skeleton = dynamic(() => import("@/common/components/Skeleton"), {
	ssr: false,
});

export default function WishlistView() {
	const {
		wishlist: { data, isLoading, error },
		updateLine,
		removeLine,
	} = useWishlist();

	if (isLoading) {
		return (
			<div className="flex flex-col gap-20">
				<div className="pb-4 border-b-2 border-blue-300">
					<Heading type="h3" color="blue">
						Jouw Favorieten
					</Heading>
				</div>

				<div className="flex flex-col">
					{Array.from({ length: 4 }, (_, index) => (
						<div
							key={index}
							className="flex flex-row gap-8 border-b-2 last:border-b-0 border-light-400 pb-10 mb-10"
						>
							<div className="aspect-square h-24">
								<Skeleton className="h-full" />
							</div>

							<div className="flex flex-col gap-4 w-full md:w-1/3">
								<Skeleton className="h-8" />
								<Skeleton className="h-4 w-2/3" />
								<Skeleton className="h-4 w-2/3" />
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	if (error || !data || data == undefined) {
		return (
			<div className="flex flex-col gap-60">
				<Heading type="h3" color="blue">
					Jouw Favorieten
				</Heading>

				<Error title="Oeps! Er is iets fout gegaan." className="py-[10vh]" />
			</div>
		);
	}

	if (data.lines.length === 0) {
		return (
			<div className="flex flex-col gap-60">
				<Heading type="h3" color="blue">
					Jouw Favorieten
				</Heading>

				<Heading type="h3" className="text-center py-[10vh]">
					Je favorieten zijn leeg.
				</Heading>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-20 ">
			<div className="pb-4 flex flex-row justify-between items-center flex-wrap gap-8 border-b-2 border-blue-300">
				<Heading type="h3" color="blue">
					Jouw Favorieten
				</Heading>

				<Heading type="h4" color="dark">
					{data.lines.length} Artikelen
				</Heading>
			</div>

			<div className="flex flex-col">
				{data.lines.map((line, index) => (
					<WishlistCard
						key={index}
						item={line}
						removeLine={removeLine.mutate}
						updateLine={updateLine.mutate}
					/>
				))}
			</div>
		</div>
	);
}
