import classNames from "classnames";
import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
	label: string;
	checked?: boolean;
	labelClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
	({ checked, className, labelClassName, label, ...props }, ref) => {
		return (
			<label
				className={classNames(
					"flex items-center text-md font-regular",
					labelClassName
				)}
			>
				<input
					{...props}
					ref={ref}
					type="checkbox"
					className={classNames(
						"mr-2 w-4 h-4 accent-blue-500 rounded border-blue-500 outline-none",
						className
					)}
					checked={checked}
				/>
				{label}
			</label>
		);
	}
);

export default Checkbox;
