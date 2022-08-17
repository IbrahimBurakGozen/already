import classNames from "classnames";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

export type ToastState = "idle" | "success" | "error";

interface Props extends HTMLMotionProps<"span"> {
	state: ToastState;
	setState: (state: ToastState) => void;
	children: any;
}

export default function Toast({
	children,
	state,
	setState,
	className,
	...props
}: Props) {
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

	useEffect(() => {
		if (state !== "idle") {
			setTimeout(() => {
				setState("idle");
			}, 2000);
		}
	}, [state]);

	if (state === "idle") {
		return <></>;
	}

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.span
				{...props}
				className={classNames(
					"p-6 text-white text-lg font-semibold text-center rounded-xl",
					state === "success" && "bg-blue-500",
					state === "error" && "bg-red-500",
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
