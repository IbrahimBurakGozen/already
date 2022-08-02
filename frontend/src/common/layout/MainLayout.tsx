import Head from "next/head";
import { HTMLAttributes } from "react";
import classNames from "classnames";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

interface Props extends HTMLAttributes<HTMLElement> {
	px?: boolean;
	py?: boolean;
	pt?: boolean;
	pb?: boolean;
	pl?: boolean;
	pr?: boolean;
	children: any;
	navigation?: boolean;
	footer?: boolean;
}

export default function MainLayout({
	px,
	py,
	pt,
	pb,
	pl,
	pr,
	children,
	navigation = true,
	footer = true,
	className,
	...props
}: Props) {
	return (
		<>
			<Head>
				<title>already</title>
			</Head>

			{navigation && <Navigation />}

			<main
				{...props}
				className={classNames(
					//  y-axis
					py && "py-page",
					pt && "pt-page",
					pb && "pb-page",
					// x -axis
					px && "px-page",
					pl && "pl-page",
					pr && "pr-page",
					className
				)}
			>
				{children}
			</main>

			{footer && <Footer />}
		</>
	);
}
