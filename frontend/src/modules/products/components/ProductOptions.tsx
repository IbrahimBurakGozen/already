import Radio from "@/common/input/Radio";
import Heading from "@/common/typography/Heading";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import { ProductOption } from "../utils/types";

interface Props extends HTMLAttributes<HTMLElement> {
	options: ProductOption[];
	selectedOptions: { [key: string]: string };
	setSelectedOptions: (option: string, value: string) => void;
}

export default function ProductOptions({
	options,
	selectedOptions,
	setSelectedOptions,
	className,
	...props
}: Props) {
	if (options.length === 0) {
		return <></>;
	}

	return (
		<div className="flex flex-col gap-12">
			{options.map(({ name, values }, index: number) => (
				<div key={index} className="flex flex-col gap-4">
					<Heading type="h4">{name}</Heading>

					<div className="flex flex-row gap-16">
						{values.map((value, index) => (
							<Radio
								name={name}
								value={value}
								key={index}
								checked={value === selectedOptions[name]}
								onChange={() => setSelectedOptions(name, value)}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
