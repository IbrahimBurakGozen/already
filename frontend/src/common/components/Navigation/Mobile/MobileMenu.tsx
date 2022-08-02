import { motion } from "framer-motion";
import Link from "next/link";
import CloseIcon from "@/common/icons/actions/CloseIcon";
import classnames from "classnames";
import Submark from "@/common/icons/brand/Submark";

interface Props {
	routes: { path: string; name: string; subLinks?: boolean }[];
	open: boolean;
	currentRoute: string;
	cycleMenuCallback: () => void;
	animationCompleteCallback: (arg0: boolean) => void;
}

export default function MobileMenu({
	routes,
	open,
	currentRoute,
	animationCompleteCallback,
	cycleMenuCallback,
}: Props) {
	const animation = {
		container: {
			closed: {
				left: "-100vw",
				transition: {
					ease: [1, 0.165, 0.165, 1],
					delay: 0.7 / 2,
					duration: 0.7,
					staggerChildren: 0.1,
				},
			},
			opened: {
				left: 0,
				transition: {
					ease: [1, 0.165, 0.165, 1],
					duration: 0.7,
					staggerChildren: 0.1,
					delayChildren: 0.7 / 2,
				},
			},
		},
		links: {
			closed: {
				x: -300,
				opacity: 0,
				transition: {
					ease: [1, 0.165, 0.165, 1],
				},
			},
			opened: {
				x: 0,
				opacity: 1,
				transition: {
					ease: [1, 0.165, 0.165, 1],
				},
			},
		},
	};

	return (
		<motion.nav
			className="bg-blue-500 fixed w-[100vw] h-[100vh]  top-0 z-50 overflow-hidden flex flex-col gap-20 		px-page py-10"
			onAnimationComplete={() => animationCompleteCallback(true)}
			initial={false}
			animate={open ? "opened" : "closed"}
			variants={animation.container}
		>
			<div className="flex flex-row justify-between w-full">
				<CloseIcon
					onClick={cycleMenuCallback}
					className="w-8 md:w-12 fill-light-300"
				/>
				<Submark className="w-20 md:w-28 fill-light-300" />
			</div>

			<div
				className="flex flex-col flex-wrap gap-7 md:gap-12"
				onClick={cycleMenuCallback}
			>
				{routes.map(({ name, path }, index) => (
					<Link key={index} href={path}>
						<motion.a
							className={classnames(
								"text-light-300 font-semibold text-2xl md:text-3xl w-fit cursor-pointer",
								path === currentRoute && "underline underline-offset-2"
							)}
							variants={animation.links}
						>
							{name}
						</motion.a>
					</Link>
				))}
			</div>
		</motion.nav>
	);
}
