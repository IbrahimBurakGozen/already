import Image from "next/image";
import { HTMLAttributes, useState } from "react";
import classnames from "classnames";
import { ProductImage } from "../utils/types";
import Skeleton from "@/common/components/Skeleton";
import { checkImage } from "src/utils/checkers";

interface Props extends HTMLAttributes<HTMLDivElement> {
	images: ProductImage[];
	isLoading?: boolean;
}

export default function ImageList({ images, isLoading, className }: Props) {
	const [bannerImageIndex, setbannerImageIndex] = useState(0);

	if (isLoading) {
		return (
			<div className="w-full aspect-square">
				<Skeleton className="h-full" />
			</div>
		);
	}

	return (
		<div className={classnames("flex flex-col gap-8", className)}>
			<div className="w-full aspect-square">
				<Image
					{...checkImage(images[bannerImageIndex])}
					width={100}
					height={100}
					objectFit="cover"
					layout="responsive"
				/>
			</div>

			{images.length > 1 && (
				<div
					className="grid gap-4 overflow-x-scroll w-full"
					style={{
						gridTemplateColumns: `repeat(${images.length}, 20%)`,
					}}
				>
					{images.map((image, index) => {
						return (
							<div
								key={index}
								onClick={() => setbannerImageIndex(index)}
								className={classnames(
									"aspect-square cursor-pointer w-full",
									bannerImageIndex === index ? "border-4 border-green-700" : ""
								)}
							>
								<Image
									src={image.url}
									alt={image.alt}
									width={100}
									height={100}
									layout="responsive"
									objectFit="cover"
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
