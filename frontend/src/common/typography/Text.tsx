import classNames from "classnames";
import { createElement, HTMLAttributes } from "react";
import { Color, textColors } from "../config/colors";

interface Props extends HTMLAttributes<HTMLElement> {
	children: any;
	type: "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";
	color?: Color;
	shade?: 300 | 400 | 500 | 600 | 700;
	breakpoint?: number;
	maxCharacters?: number;
}

export default function Text({
	children,
	type,
	color = "dark",
	shade = 500,
	breakpoint = 0,
	maxCharacters,
	className,
	...props
}: Props) {
	return createElement(
		type,
		{
			...props,
			className: classNames(className, textColors[color][shade]),
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
