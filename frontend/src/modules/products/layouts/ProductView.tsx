import Button from "@/common/actions/Button";
import Error from "@/common/components/Error";
import Spinner from "@/common/components/Spinner";
import Dropdown from "@/common/input/Dropdown";
import Radio from "@/common/input/Radio";
import Heading from "@/common/typography/Heading";
import Paragraph from "@/common/typography/Paragraph";
import { Product, ProductOption, ProductVariant } from "../utils/types";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WishlistButton from "@/modules/products/components/WishlistButton";
import CloseIcon from "@/common/icons/actions/CloseIcon";
import BreadCrumbs from "../components/BreadCrumbs";
import ImageList from "../components/ImageList";
import Text from "@/common/typography/Text";

interface Props {
	product: Product;
	isLoading: boolean;
	error: unknown | null;
}

export default function ProductView({ product, isLoading, error }: Props) {
	const router = useRouter();

	const [breakText, setBreakText] = useState(true);

	const [currentQuantity, setCurrentQuantity] = useState(1);

	// const [currentVariant, selectedOptions, setSelectedOptions] =
	// 	useOptionsHook(product);

	if (isLoading) {
		return (
			<div className="min-h-[80vh] w-full flex flex-col justify-center items-center bg-light-700">
				<Spinner className="w-24 md:w-40" />
			</div>
		);
	}

	if (error || !product) {
		return <Error title="Product is niet gevonden" />;
	}

	return (
		<section className="grid grid-cols-1 gap-y-24    lg:grid-cols-[30%_auto] lg:grid-row-[auto_1fr] lg:gap-x-40">
			{/* 
                
                
                    BreadCrumbs
                */}
			<div className="col-span-1 row-span-1 lg:col-span-2 flex flex-row justify-between items-center">
				{/* <BreadCrumbs currentBreadCrumb={product.title} className="basis-1/2" /> */}
				<BreadCrumbs />

				<div className="flex flex-row justify-end gap-10">
					<WishlistButton callback={() => {}} className="w-7" />
					<CloseIcon onClick={() => router.back()} className="w-6" />
				</div>
			</div>
			{/* 
                
                
                
                    ImageList
            */}
			<ImageList
				images={isLoading || error || !product ? [] : product.images}
				isLoading={isLoading}
				className="row-span-1 col-span-1"
			/>
			{/* 
                
                
                
                    ProductInfo
                */}
			<div className="flex flex-col gap-28 row-span-1 col-span-1">
				<div className="flex flex-col gap-16">
					<Text
						maxCharacters={25}
						type="h1"
						color="blue"
						className="text-xl md:text-2xl lg:text-3xl"
					>
						{product.title}
					</Text>

					<Heading
						type="h4"
						color="light"
						className="bg-green-700 px-16 py-6 w-min"
					>
						€{product.price.minPrice}
					</Heading>
				</div>

				{/* {product.options.length > 0 && product.options[0].name !== "Title" && (
					<div className="flex flex-col gap-8">
						{product.options.map(
							({ name, values }: ProductOption, index: number) => (
								<div key={index} className="flex flex-col gap-4">
									<Heading type="h4">{name}</Heading>

									<div className="flex flex-row gap-16">
										{values.map((value, index) => (
											<Radio
												name={name}
												value={value}
												key={index}
												checked={value === selectedOptions[name]}
												onChange={() => setSelectedOptions(name, value)}
											/>
										))}
									</div>
								</div>
							)
						)}
					</div>
				)} */}

				<div className="flex flex-col gap-10">
					<div className="flex flex-row gap-8">
						<Heading type="h4">Aantal:</Heading>
						<Dropdown
							className="w-fit"
							value={Number(currentQuantity)}
							onChange={(e: any) => setCurrentQuantity(Number(e.target.value))}
							options={Array.from(Array(51).keys())}
						/>
					</div>

					<Button
						size="medium"
						// className="w-full md:w-2/3 lg:w-fit"
					>
						In Winkelmandje
					</Button>
				</div>
			</div>
		</section>
	);
}

// .reduce(
// 	(acc: any, option: { name: any; value: any }) => ({
// 		...acc,
// 		[option.name]: option.value,
// 	}),
// 	{}
// )
