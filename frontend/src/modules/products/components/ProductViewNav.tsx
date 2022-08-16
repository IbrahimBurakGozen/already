import Button from "@/common/actions/Button";
import CartIcon from "@/common/icons/navigation/CartIcon";
import Dropdown from "@/common/input/Dropdown";
import Heading from "@/common/typography/Heading";
import { AddLineToCartHookInput } from "@/modules/cart/hooks/cart";
import classNames from "classnames";
import { HTMLAttributes, useState } from "react";
import { Product } from "../utils/types";

interface Props extends HTMLAttributes<HTMLElement> {
	product: Product;
	currentVariant: number;
	addToCart: (input: AddLineToCartHookInput) => void;
}

export default function ProductViewNav({
	product,
	currentVariant,
	addToCart,
	className,
	...props
}: Props) {
	const [currentQuantity, setCurrentQuantity] = useState(1);

	function handleAddToCart() {
		addToCart({
			id: product.variants[currentVariant].id,
			quantity: currentQuantity,
		});
	}

	return (
		<nav
			{...props}
			className={classNames(
				"flex flex-col gap-16 lg:bg-light-300 lg:rounded-3xl lg:p-10 ",
				className
			)}
		>
			{/* 
            
                Price
            */}
			<div className="flex flex-col gap-2">
				<Heading weight="black" type="h5">
					Prijs
				</Heading>
				<Heading type="h4">€{product.variants[currentVariant].price}</Heading>
			</div>
			{/* 
            
            
                Score
            */}
			<div className="flex flex-col gap-2">
				<Heading weight="black" type="h5">
					Winkelscore
				</Heading>
				<div className="flex flex-row">
					{Array.from(Array(10)).map((_, index) => (
						<div
							key={index}
							className={classNames(
								"px-1 py-2",
								index % 2 === 0 ? "rounded-l-full" : "rounded-r-full mr-2",
								product.shop.rating > index ? "bg-blue-500" : "bg-light-500"
							)}
						/>
					))}
				</div>
			</div>
			{/* 
            
            
                Information
            */}
			<div className="flex flex-col gap-2">
				<Heading weight="black" type="h5">
					Informatie
				</Heading>

				<Heading type="h5">Winkel: {product.shop.name}</Heading>
				<Heading type="h5">Categorie: {product.category.title}</Heading>
				<Heading type="h5">Merk: {product.brand.name}</Heading>
			</div>
			{/* 
            
            
                Delivery
            */}
			<div className="flex flex-col gap-2">
				<Heading weight="black" type="h5">
					Levering
				</Heading>

				<Heading type="h5">
					Voor 00:00 besteld <br /> Morgen bezorgd
				</Heading>
			</div>
			{/* 
            
            
                Order
            */}
			<div className="flex flex-col gap-8">
				<div className="flex flex-row gap-4 items-center">
					<Heading type="h5">Aantal:</Heading>
					<Dropdown
						className="w-fit"
						value={Number(currentQuantity)}
						onChange={(e: any) => setCurrentQuantity(Number(e.target.value))}
						options={Array.from(Array(51).keys())}
					/>
				</div>

				<Button
					size="medium"
					className="w-full flex flex-row gap-4 justify-center"
					onClick={handleAddToCart}
				>
					<CartIcon className="fill-light-300 w-6" />
					In Mandje
				</Button>
			</div>
		</nav>
	);
}
