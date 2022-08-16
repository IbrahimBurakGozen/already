import { forwardRef } from "react";
import { HTMLMotionProps, motion, useAnimation } from "framer-motion";
import classNames from "classnames";
import {
	Color,
	bgColors,
	textColors,
	borderColors,
	hoverBgColors,
	hoverTextColors,
	hoverBorderColors,
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
		const variants: {
			[K in buttonVariant]: string;
		} = {
			filled: classNames(
				"text-white",
				bgColors[color][500],
				hoverBgColors[color][600]
			),
			outlined: classNames(
				"border-2",
				borderColors[color][500],
				textColors[color][500],
				hoverBorderColors[color][600],
				hoverTextColors[color][600]
			),
			text: classNames(textColors[color][500], hoverTextColors[color][600]),
		};

		const sizes = {
			textSizes: {
				small: "text-sm",
				medium: "text-base",
				large: "text-lg",
			},
			paddingSizes: {
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
			},
		};

		const shapes: {
			[K in buttonShape]: string;
		} = {
			default: classNames(
				"rounded-lg",
				sizes.textSizes[size],
				sizes.paddingSizes.long[size]
			),
			pill: classNames(
				"rounded-full",
				sizes.textSizes[size],
				sizes.paddingSizes.long[size]
			),
			square: classNames(
				"rounded-xl aspect-square",
				sizes.textSizes[size],
				sizes.paddingSizes.square[size]
			),
			circle: classNames(
				"rounded-full aspect-square",
				sizes.textSizes[size],
				sizes.paddingSizes.square[size]
			),
			none: sizes.textSizes[size],
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
					variants[variant],
					shapes[shape],
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
