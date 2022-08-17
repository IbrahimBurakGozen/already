import { forwardRef, InputHTMLAttributes } from "react";
import Input from "./Input";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean | string;
	children?: any;
	containerClassName?: string;
	inputClassName?: string;
	errorClassName?: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>(
	({ children, className, error, ...props }, ref) => {
		return (
			<div className="flex flex-col gap-4">
				<Input
					{...props}
					error={Boolean(error)}
					ref={ref}
					className={className}
				/>
				{error && (
					<p className="text-red-500">
						{error && typeof error === "string" ? error : ""}
					</p>
				)}
			</div>
		);
	}
);

export default FormInput;
