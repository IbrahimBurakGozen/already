import { Color, textColors } from "@/common/config/colors";
import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";
import { fontWeights, FontWeights } from "../config/typography";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	children: any;
	type: HeadingTypes;
	color?: Color;
	weight?: FontWeights;
	shade?: 300 | 400 | 500 | 600 | 700;
	className?: string;
	breakpoint?: number;
	maxCharacters?: number;
}

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5";

export const headingStyles: { [K in HeadingTypes]: string } = {
	h1: "font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl",
	h2: "font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
	h3: "font-semibold test-xl md:text-2xl lg:text-3xl xl:text-4xl",
	h4: "font-medium text-base md:text-lg lg:text-xl xl:text-2xl",
	h5: "font-medium text-sm md:text-base lg:text-lg:text-xl",
};

export default function Heading({
	children,
	type,
	color = "dark",
	weight,
	shade = 500,
	breakpoint = 0,
	className,
	maxCharacters,
	...props
}: Props) {
	return createElement(
		type,
		{
			...props,
			className: classNames(
				headingStyles[type],
				textColors[color][shade],
				weight && fontWeights[weight],
				className
			),
			style: {
				...(breakpoint > 0 && {
					WebkitLineClamp: breakpoint,
					lineHeight: 1.2,
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
				}),
				...(maxCharacters != undefined && {
					maxWidth: `${maxCharacters}ch`,
				}),
			},
		},
		children
	);
}
