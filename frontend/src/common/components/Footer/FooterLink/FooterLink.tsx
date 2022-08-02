import Link from "next/link";
import { HTMLMotionProps, motion } from "framer-motion";
import classNames from "classnames";
import {
	Color,
	focusTextColors,
	hoverTextColors,
	textColors,
} from "@/common/config/colors";

interface Props extends HTMLMotionProps<"a"> {
	children: any;
	href?: string;
	color?: Color;
	target?: string;
}

export default function FooterLink({
	children,
	href,
	className,
	color = "light",
	target,
	...props
}: Props) {
	if (!href) {
		return (
			<motion.a
				{...props}
				className={classNames(
					"font-medium text-lg md:text-2xl lg:text-lg xl:text-base",
					textColors[color][700],
					className
				)}
				target={target}
			>
				{children}
			</motion.a>
		);
	}

	return (
		<Link href={href} passHref>
			<motion.a
				{...props}
				className={classNames(
					"font-medium hover:underline cursor-pointer",
					"text-lg md:text-2xl lg:text-base xl:text-sm",
					textColors[color][700],
					hoverTextColors[color][600],
					focusTextColors[color][600],
					className
				)}
				target={target}
			>
				{children}
			</motion.a>
		</Link>
	);
}
