import { Color, textColors } from "@/common/config/colors";
import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	children: any;
	color?: Color;
	shade?: 300 | 400 | 500 | 600 | 700;
	className?: string;
	breakpoint?: number;
	size?: paragraphSizes;
	maxCharacters?: number;
}

type paragraphSizes = "small" | "medium" | "large";

export const paragraphStyles: { [K in paragraphSizes]: string } = {
	small: "text-sm md:text-base",
	medium: "text-2xl md:text-3xl 2xl:text-4xl",
	large: "text-3xl md:text-4xl 2xl:text-5xl",
};

export default function Paragraph({
	children,
	className,
	color = "dark",
	shade = 500,
	breakpoint = 0,
	size = "medium",
	maxCharacters,
	...props
}: Props) {
	return createElement(
		"p",
		{
			...props,
			className: classNames(
				"font-light",
				paragraphStyles[size],
				textColors[color][shade],
				className
			),
			style: {
				...(breakpoint > 0 && {
					WebkitLineClamp: breakpoint,
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
