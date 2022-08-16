import TrashIcon from "@/common/icons/actions/TrashIcon";
import Dropdown from "@/common/input/Dropdown";
import Heading from "@/common/typography/Heading";
import Paragraph from "@/common/typography/Paragraph";
import { CartLine } from "../utils/types";
import classNames from "classnames";
import Link from "next/link";
import { HTMLProps, useState } from "react";
import { checkImage } from "@/utils/checkers";
import Button from "@/common/actions/Button";
import Image from "next/image";
import { useCarlineQuantity } from "../hooks/cartLine";

interface Props extends HTMLProps<HTMLDivElement> {
	item: CartLine;
	updateLine: (line: CartLine) => void;
	removeLine: (ids: string[]) => void;
}

export default function CartCard({
	item,
	updateLine,
	removeLine,
	className,
	...props
}: Props) {
	const [deleted, setDeleted] = useState(false);
	const [currentQuantity, setCurrentQuantity] = useCarlineQuantity(
		item.quantity
	);

	function handleUpdate(quantity: number) {
		setCurrentQuantity(quantity);
		updateLine({
			...item,
			quantity: quantity,
		});
	}

	function handleRemove() {
		removeLine([item.id]);
		setDeleted(true);
	}

	return (
		<div
			{...props}
			className={classNames(
				"flex flex-row gap-8 border-b-2 last:border-b-0 border-light-400 pb-10 mb-10",
				deleted && "hidden",
				className
			)}
		>
			<Link href={`/product/${item.productId}`}>
				<div className="flex flex-row grow basis-3/6 gap-10 cursor-pointer">
					<Image
						{...checkImage(item.image)}
						width={100}
						height={100}
						className="rounded-xl"
					/>

					<div className="flex flex-col gap-4">
						<Heading type="h4" breakpoint={2}>
							{item.title}
						</Heading>
						<Paragraph size="small" breakpoint={2} maxCharacters={40}>
							{item.description}
						</Paragraph>
					</div>
				</div>
			</Link>

			<div className="flex flex-row justify-between items-center basis-4/6 lg:basis-2/6">
				<Dropdown
					options={Array.from(Array(51).keys())}
					value={currentQuantity}
					onChange={(e: any) => handleUpdate(Number(e.target.value))}
				/>

				<Heading type="h4">€{item.price}</Heading>

				<Button
					id="remove-product-from-cart-button"
					shape="circle"
					variant="text"
					onClick={handleRemove}
				>
					<TrashIcon className="w-4" />
				</Button>
			</div>
		</div>
	);
}
