import classNames from "classnames";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLSelectElement> {
	options: any[];
}

export default function Dropdown({ options, className, ...props }: Props) {
	return (
		<select
			{...props}
			className={classNames(
				"bg-transparent p-2 border-2 rounded-xl text-lg font-medium accent-blue-500 border-dark-700 ring-blue-500 text-dark-700 focus:ring-blue-500 focus:border-blue-500",
				className
			)}
		>
			{options.map((option) => (
				<option key={option} value={option.toString()}>
					{option.toString()}
				</option>
			))}
		</select>
	);
}
