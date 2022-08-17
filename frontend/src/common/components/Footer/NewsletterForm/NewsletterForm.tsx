import PlaneIcon from "@/common/icons/actions/PlaneIcon";
import Paragraph from "@/common/typography/Paragraph";
import classNames from "classnames";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../actions/Button";
import Input from "../../../input/Input";

interface Props extends HTMLAttributes<HTMLFormElement> {
	className?: string;
}

export default function NewsletterForm({ className, ...props }: Props) {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function onSubmit(data: any) {
		setIsSubmitted(true);
		console.log(data);
	}

	return (
		<>
			<form
				{...props}
				className={classNames("flex flex-row", className)}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					type="email"
					placeholder="Schrijf hier je email..."
					className="rounded-l-full rounded-r-none"
					{...register("email", {
						required: true,
					})}
				/>
				<Button
					color="blue"
					shape="square"
					size="medium"
					variant="filled"
					className="bg-blue-600 rounded-r-full rounded-l-none flex flex-col justify-center items-center"
				>
					<PlaneIcon
						animate={
							isSubmitted && {
								x: ["0px", "20px", "0px"],
								opacity: [1, 0, 1],
								transition: { duration: 2 },
							}
						}
						className="fill-light-300  w-3"
					/>
				</Button>
			</form>

			<Paragraph color="red">{errors.email && "Email is required"}</Paragraph>
		</>
	);
}
