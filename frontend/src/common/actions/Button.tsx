import { forwardRef } from "react";
import { HTMLMotionProps, motion, useAnimation } from "framer-motion";
import classNames from "classnames";
import {
	bgColors,
	Color,
	focusBgColors,
	focusTextColors,
	hoverBgColors,
	hoverTextColors,
	textColors,
} from "../config/colors";

interface Props extends HTMLMotionProps<"button"> {
	children: any;
	color?: Color;
	variant?: buttonVariant;
	size?: buttonSize;
	shape?: buttonShape;
}

export type buttonVariant = "filled" | "outlined" | "text";

export type buttonSize = "small" | "medium" | "large";

export type buttonShape = "default" | "pill" | "square" | "circle" | "none";

const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			size = "medium",
			color = "blue",
			shape = "default",
			variant = "filled",
			children,
			className,
			onClick,
			...props
		},
		ref
	) => {
		const colors: {
			[K in buttonVariant]: {
				[K in Color]: string;
			};
		} = {
			filled: {
				blue: `text-white ${bgColors.blue[600]} ${hoverBgColors.blue[500]} ${focusBgColors.blue[500]}`,
				red: `text-white ${bgColors.red[600]} ${hoverBgColors.red[500]} ${focusBgColors.red[500]}`,
				dark: `text-white ${bgColors.dark[600]} ${hoverBgColors.dark[500]} ${focusBgColors.dark[500]}`,
				light: `text-white ${bgColors.light[600]} ${hoverBgColors.light[500]} ${focusBgColors.light[500]}`,
				transparent: `${bgColors.transparent[600]} ${hoverBgColors.transparent[500]} ${focusBgColors.transparent[500]}`,
			},
			outlined: {
				blue: `border-blue-700 border-2 hover:border-blue-600 focus:border-blue-600 ${textColors.blue[700]} ${hoverTextColors.blue[600]} ${focusTextColors.blue[600]}`,
				red: `border-red-700 border-2 hover:border-red-600 focus:border-red-600 ${textColors.red[700]} ${hoverTextColors.red[600]} ${focusTextColors.red[600]}`,
				light: `border-light-300 border-2 hover:border-light-500 focus:border-light-500 ${textColors.light[700]} ${hoverTextColors.light[600]} ${focusTextColors.light[600]}`,
				dark: `border-dark-700 border-2 hover:border-dark-600 focus:border-dark-600 ${textColors.dark[700]} ${hoverTextColors.dark[600]} ${focusTextColors.dark[600]}`,
				transparent: "border-transparent",
			},
			text: {
				blue: `${textColors.blue[700]} ${hoverTextColors.blue[600]} ${focusTextColors.blue[600]}`,
				red: `${textColors.red[700]} ${hoverTextColors.red[600]} ${focusTextColors.red[600]}`,
				light: `${textColors.light[700]} ${hoverTextColors.light[600]} ${focusTextColors.light[600]}`,
				dark: `${textColors.dark[700]} ${hoverTextColors.dark[600]} ${focusTextColors.dark[600]}`,
				transparent: textColors.transparent[700],
			},
		};

		const textSizes = {
			small: "text-sm",
			medium: "text-base",
			large: "text-lg",
		};

		const paddingSizes = {
			long: {
				small: "py-3 px-10",
				medium: "py-4 px-12",
				large: "py-5 px-20",
			},
			square: {
				small: "py-3 px-3",
				medium: "py-4 px-4",
				large: "py-5 px-5",
			},
		};

		const shapes: {
			[K in buttonShape]: {
				[K in buttonSize]: string;
			};
		} = {
			default: {
				small: `${textSizes.small}  ${paddingSizes.long.small} rounded-xl`,
				medium: `${textSizes.medium} ${paddingSizes.long.medium} rounded-xl `,
				large: `${textSizes.large} ${paddingSizes.long.large} rounded-xl `,
			},
			pill: {
				small: `${textSizes.small}  ${paddingSizes.long.small} rounded-full`,
				medium: `${textSizes.medium} ${paddingSizes.long.medium} rounded-full `,
				large: `${textSizes.large} ${paddingSizes.long.large} rounded-full `,
			},
			square: {
				small: `${textSizes.small}  ${paddingSizes.square.small} rounded-xl aspect-square`,
				medium: `${textSizes.medium} ${paddingSizes.square.medium} rounded-xl aspect-square `,
				large: `${textSizes.large} ${paddingSizes.square.large} rounded-xl aspect-square `,
			},
			circle: {
				small: `${textSizes.small}  ${paddingSizes.square.small} rounded-full aspect-square`,
				medium: `${textSizes.medium} ${paddingSizes.square.medium} rounded-full aspect-square `,
				large: `${textSizes.large} ${paddingSizes.square.large} rounded-full aspect-square `,
			},
			none: textSizes,
		};

		const controls = useAnimation();

		const animation = {
			start: {
				scale: [0.9, 1],
				transition: {
					duration: 0.2,
					stiffness: 10,
					type: "spring",
				},
			},
			end: {
				scale: 1,
				opacity: 1,
			},
		};

		return (
			<motion.button
				{...props}
				ref={ref}
				className={classNames(
					colors[variant][color],
					shapes[shape][size],
					"font-semibold",
					className
				)}
				onClick={(e) => {
					controls.start("start");
					onClick && onClick(e);
				}}
				variants={animation}
				initial="end"
				animate={controls}
			>
				{children}
			</motion.button>
		);
	}
);

export default Button;
