import classNames from "classnames";
import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
	({ className, error, ...props }, ref) => {
		return (
			<textarea
				{...props}
				ref={ref}
				className={classNames(
					"rounded-xl bg-light-500 px-5 py-3 text-sm focus:outline-blue-500 h-36",
					error && "border-red-500 border-2 focus:outline-red-500",
					className
				)}
			/>
		);
	}
);

export default TextArea;
