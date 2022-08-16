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
}

export default function Banner({
	title,
	subtitle,
	image,
	className,
	...props
}: Props) {
	return (
		<div
			{...props}
			className={classNames("relative h-screen px-page", className)}
		>
			<Image {...image} layout="fill" objectFit="cover" />

			<div className="absolute left-0 top-0 w-full h-full backdrop-blur-sm" />

			<div className="absolute top-0 left-0 flex flex-col ml-page mt-page gap-6 ">
				<Heading type="h1" color="blue">
					{title}
				</Heading>
				<Heading type="h2" color="dark" maxCharacters={30}>
					{subtitle}
				</Heading>
			</div>
		</div>
	);
}
