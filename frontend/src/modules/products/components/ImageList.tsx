import Image from "next/image";
import { HTMLAttributes, useState } from "react";
import classnames from "classnames";
import { ProductImage } from "../utils/types";
import Skeleton from "@/common/components/Skeleton";
import { checkImage } from "src/utils/checkers";

interface Props extends HTMLAttributes<HTMLDivElement> {
	images: ProductImage[];
}

export default function ImageList({ images, className }: Props) {
	const [bannerImageIndex, setbannerImageIndex] = useState(0);

	return (
		<div className={classnames("flex flex-col gap-4", className)}>
			<div className="w-full aspect-square">
				<Image
					{...checkImage(images[bannerImageIndex])}
					width={100}
					height={100}
					objectFit="cover"
					layout="responsive"
					className="rounded-3xl"
				/>
			</div>

			{images.length > 1 && (
				<div
					className="grid gap-2 overflow-x-scroll w-full"
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
									"aspect-square cursor-pointer w-full rounded-xl",
									bannerImageIndex === index ? "border-2 border-blue-700" : ""
								)}
							>
								<Image
									src={image.url}
									alt={image.alt}
									width={100}
									height={100}
									layout="responsive"
									objectFit="cover"
									className="rounded-xl"
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
