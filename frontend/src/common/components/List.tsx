import classNames from "classnames";
import { HTMLAttributes } from "react";
import { Color, textColors } from "../config/colors";

interface Props extends HTMLAttributes<HTMLUListElement> {
	items: string[];
	color?: Color;
	bullet?: boolean;
}

export default function List({
	items,
	bullet = true,
	color = "dark",
	className,
	...props
}: Props) {

	return (
		<ul
			{...props}
			className={classNames(
				"m-0 p-0 list-none text-2xl",
				textColors[color][700],
				bullet && "list-disc",
				className
			)}
		>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}
