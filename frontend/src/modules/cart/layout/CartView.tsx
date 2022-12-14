import Heading from "@/common/typography/Heading";
import { useCart } from "@/modules/cart/hooks/cart";
import dynamic from "next/dynamic";

const CartNav = dynamic(() => import("@/modules/cart/components/CartNav"), {
	ssr: false,
});

const CartCard = dynamic(() => import("@/modules/cart/components/CartCard"), {
	ssr: false,
});

const Error = dynamic(() => import("@/common/components/Error"), {
	ssr: false,
});

const Skeleton = dynamic(() => import("@/common/components/Skeleton"), {
	ssr: false,
});

export default function CartView() {
	const {
		cart: { data, isLoading, error },
		updateLine,
		removeLine,
	} = useCart();

	if (isLoading) {
		return (
			<div className="grid grid-cols-[auto_20%]">
				<div className="py-page">
					<div className="px-page flex flex-col gap-12">
						{/* 
                        
                            Title
                        */}
						<div className="pb-4 border-b-2 border-blue-300">
							<Heading type="h3" color="blue">
								Jouw Winkelmandje
							</Heading>
						</div>

						<div id="cart-items-container" className="flex flex-col">
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
				</div>

				<Skeleton />
			</div>
		);
	}

	if (error || !data || data == undefined) {
		return (
			<div className="flex flex-col gap-60 px-page py-page">
				<Heading type="h3" color="blue">
					Jouw Winkelmandje
				</Heading>

				<Error title="Oeps! Er is iets fout gegaan." className="py-[10vh]" />
			</div>
		);
	}

	if (data.lines.length === 0) {
		return (
			<div className="flex flex-col gap-60 px-page py-page">
				<Heading type="h3" color="blue">
					Jouw Winkelmandje
				</Heading>

				<Heading type="h3" className="text-center py-[10vh]">
					Je winkelmandje is leeg.
				</Heading>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[auto_25%]">
			<div className="py-page">
				<div className="px-page flex flex-col gap-20">
					{/* 
                        
                            Title
                        */}
					<div className="pb-4 flex flex-row justify-between items-center flex-wrap gap-8 border-b-2 border-blue-300">
						<Heading type="h3" color="blue">
							Jouw Winkelmandje
						</Heading>

						<Heading type="h4" color="dark">
							{data.lines.length} Artikelen
						</Heading>
					</div>

					<div id="cart-items-container" className="flex flex-col">
						{data.lines.map((line, index) => (
							<CartCard
								key={index}
								item={line}
								removeLine={removeLine.mutate}
								updateLine={updateLine.mutate}
							/>
						))}
					</div>
				</div>
			</div>

			<CartNav cart={data} />
		</div>
	);
}
