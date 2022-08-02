import classNames from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ className = "", error, ...props }, ref) => {
		return (
			<input
				{...props}
				ref={ref}
				className={classNames(
					"rounded-full bg-light-400 px-8 py-2 text-sm focus:outline-blue-500",
					error && "border-red-700 border-2 focus:outline-red-700",
					className
				)}
			/>
		);
	}
);

export default Input;

// styles.container,
