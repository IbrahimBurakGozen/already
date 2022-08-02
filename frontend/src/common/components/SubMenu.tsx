import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { HTMLAttributes } from "react";
import Angle from "../icons/actions/Angle";

interface Props extends HTMLAttributes<HTMLDivElement> {
	opened: boolean;
	setOpened: (opened: boolean) => void;
	children: any;
	title: string;
	titleClassName?: string;
	childrenClassName?: string;
}

export default function SubMenu({
	opened,
	setOpened,
	title,
	children,
	className,
	onClick,
	titleClassName,
	childrenClassName,
	...props
}: Props) {
	const linksVariants = {
		initial: { opacity: 0, y: 0, height: 0, border: 0 },
		enter: { opacity: 1, y: 0, height: "auto" },
	};

	const angleVariants = {
		initial: { rotate: 0 },
		enter: { rotate: 180 },
	};

	return (
		<div {...props} className={classNames("flex flex-col gap-12", className)}>
			<motion.div
				className={classNames(
					"flex flex-row justify-between items-center gap-8 md:w-fit",
					titleClassName
				)}
				onClick={(e) => {
					onClick && onClick(e);
					setOpened(!opened);
				}}
			>
				<span className="text-4xl font-bold">{title}</span>

				<Angle
					className="w-8"
					initial="initial"
					animate={opened ? "enter" : "initial"}
					variants={angleVariants}
				/>
			</motion.div>

			<AnimatePresence>
				{opened && (
					<motion.div
						className={childrenClassName}
						initial="initial"
						animate={opened ? "enter" : "initial"}
						variants={linksVariants}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
