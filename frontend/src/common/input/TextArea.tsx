import classNames from "classnames";
import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
	({ className = "", error, ...props }, ref) => {
		return (
			<textarea
				{...props}
				ref={ref}
				className={classNames(
					"rounded-3xl px-8 py-4 text-2xl focus:outline-blue-500 bg-light-400 h-36",
					error && "border-red-700 border-2 focus:outline-red-700",
					className
				)}
			/>
		);
	}
);

export default TextArea;
