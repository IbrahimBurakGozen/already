import classNames from "classnames";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

interface Props extends HTMLMotionProps<"span"> {
	state: "success" | "error";
	children: any;
}

export default function Toast({ children, state, className, ...props }: Props) {
	const variants = {
		initial: {
			opacity: 0,
			y: -20,
		},
		enter: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.span
				{...props}
				className={classNames(
					"p-8 text-white text-2xl font-semibold text-center rounded-xl",
					state === "success" && "bg-blue-500",
					state === "error" && "bg-red-700",
					className
				)}
				variants={variants}
				initial="initial"
				animate="enter"
				exit="exit"
			>
				{children}
			</motion.span>
		</AnimatePresence>
	);
}
