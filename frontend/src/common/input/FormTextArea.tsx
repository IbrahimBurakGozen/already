import classNames from "classnames";
import { forwardRef, HTMLAttributes } from "react";
import TextArea from "./TextArea";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	error?: boolean | string;
}

const FormTextArea = forwardRef<HTMLTextAreaElement, Props>(
	({ className, error, ...props }, ref) => {
		return (
			<div className="flex flex-col gap-4">
				<TextArea
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

export default FormTextArea;
