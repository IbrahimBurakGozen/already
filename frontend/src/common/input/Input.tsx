import classNames from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ className, error, ...props }, ref) => {
		return (
			<input
				{...props}
				ref={ref}
				className={classNames(
					"rounded-xl bg-light-500 px-5 py-3 text-sm focus:outline-blue-500",
					error && "border-red-500 border-2 focus:outline-red-500",
					className
				)}
			/>
		);
	}
);

export default Input;

// styles.container,
