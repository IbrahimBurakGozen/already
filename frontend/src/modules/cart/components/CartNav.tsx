import Button from "@/common/actions/Button";
import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

export default function CartNav({ className, ...props }: Props) {
	return (
		<nav
			{...props}
			className={classNames(
				"bg-light-400 h-screen px-10 py-page",
				className
			)}
		>
			<div className="flex flex-col gap-16">
				<div className="grid grid-cols-2 gap-y-2 text-dark-600 text-lg">
					{/*
						Totaal
					*/}
					<span className="font-semibold">Totaal</span>
					<span className="font-medium justify-self-end">
						€ {/*{data.totalPrice} */} 20
					</span>
					{/*
					    Verzendkosten
					*/}
					<span className="font-semibold">Verzendkosten</span>
					<span className="font-medium justify-self-end">geen</span>
				</div>

				<Button>Afrekenen</Button>
			</div>
		</nav>
	);
}
