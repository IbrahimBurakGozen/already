import Button from "@/common/actions/Button";
import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
	totalPrice: number;
}

export default function CartNav({ totalPrice, className, ...props }: Props) {
	return (
		<nav
			{...props}
			className={classNames(
				"bg-blue-500 bg-opacity-20 backdrop-filter backdrop-blur-xl lg:bg-light-300",
				"fixed bottom-0 lg:top-0 lg:right-0",
				"w-full lg:w-1/4 h-fit lg:h-screen lg:max-h-screen",
				"px-6 py-10 md:px-20 lg:px-10",
				className
			)}
		>
			<div className="flex flex-col gap-8 lg:gap-16 h-full justify-end">
				<div className="grid grid-cols-2 gap-y-2 text-dark-600 text-lg">
					{/*
						Totaal
					*/}
					<span className="font-semibold">Totaal</span>
					<span className="font-medium justify-self-end">
						€ {totalPrice.toString().split(".").join(",")}
					</span>
					{/*
					    Verzendkosten
					*/}
					<span className="font-semibold">Verzending</span>
					<span className="font-medium justify-self-end">€0</span>
				</div>

				<Button>Afrekenen</Button>
			</div>
		</nav>
	);
}
