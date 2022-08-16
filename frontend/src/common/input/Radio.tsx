import classNames from "classnames";
import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
	value: string;
	name?: string;
	checked?: boolean;
}

const Radio = forwardRef<HTMLInputElement, Props>(
	({ value, name, className, checked, ...props }, ref) => {
		return (
			<label
				className={classNames(
					"flex items-center text-base font-regular cursor-pointer",
					className
				)}
			>
				<input
					{...props}
					type="radio"
					ref={ref}
					name={name}
					value={value}
					checked={checked}
					className="mr-2 w-4 accent-blue-500 focus:ring-blue-500 rounded-full"
				/>
				{value}
			</label>
		);
	}
);

export default Radio;

//
