import Heading from "@/common/typography/Heading";
import classNames from "classnames";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
	title: string;
	subtitle: string;
	image: {
		src: string;
		alt: string;
	};
	position?: "left" | "right";
}

export default function Banner({
	title,
	subtitle,
	image,
	position = "left",
	className,
	...props
}: Props) {
	return (
		<div
			{...props}
			className={classNames("relative h-screen px-page", className)}
		>
			<Image {...image} layout="fill" objectFit="cover" />

			<div
				className={classNames(
					"absolute top-0 flex flex-col mt-page gap-3 md:gap-5 px-8 py-10 lg:px-24 lg:py-20 bg-blue-500 opacity-90 backdrop-blur-xl",
					position === "left" && "left-0 rounded-r-xl",
					position === "right" && "right-0 rounded-l-xl"
				)}
			>
				<Heading type="h1" color="light">
					{title}
				</Heading>
				<Heading type="h3" color="light" maxCharacters={25}>
					{subtitle}
				</Heading>
			</div>
		</div>
	);
}
