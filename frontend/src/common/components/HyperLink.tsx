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
	href: string;
	color?: Color;
	target?: string;
}

export default function HyperLink({
	children,
	href,
	className,
	color = "blue",
	target,
	...props
}: Props) {
	return (
		<Link href={href} passHref>
			<motion.a
				{...props}
				className={classNames(
					"text-3xl hover:underline cursor-pointer",
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
