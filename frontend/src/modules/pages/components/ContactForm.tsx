import Button from "@/common/actions/Button";
import Toast, { ToastState } from "@/common/actions/Toast";
import FormInput from "@/common/input/FormInput";
import FormTextArea from "@/common/input/FormTextArea";
import Heading from "@/common/typography/Heading";
import classNames from "classnames";
import { forwardRef, HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
	name: string;
	email: string;
	phone: string;
	note: string;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
	title: string;
}

const ContactForm = forwardRef<HTMLDivElement, Props>(
	({ title, className, ...props }, ref) => {
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm<FormData>();

		const [submitState, setSubmitState] = useState<ToastState>("idle");

		async function onSubmit(data: FormData) {
			const msg = {
				subject: title + " - Contact Form",
				message: `
					<h1>${title}:</h1>
					<ul>
						<li>Naam: ${data.name}</li>
						<li>Email ${data.email}</li>
						<li>Phone ${data.phone}</li>
						<li>Bericht: ${data.note}</li>
					</ul>
				`,
			};

			try {
				await fetch("/api/mail", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(msg),
				});
				setSubmitState("success");
			} catch {
				setSubmitState("error");
			}
		}

		return (
			<div
				{...props}
				ref={ref}
				className={classNames("flex flex-col gap-12 justify-center", className)}
			>
				<Toast state={submitState} setState={setSubmitState}>
					{submitState === "success"
						? "Bedankt, je bericht is succesvol verzonden!"
						: "Er is iets misgegaan, probeer het later nog eens."}
				</Toast>

				<Heading type="h1" color="blue">
					{title}
				</Heading>

				<form
					className="flex flex-col gap-6 w-full md:max-w-sm md:mx-auto lg:mx-0"
					onSubmit={handleSubmit(onSubmit)}
				>
					<FormInput
						error={errors.name?.message}
						type="name"
						placeholder="Vul hier je naam in…"
						{...register("name", {
							required: "Je naam is verplicht",
						})}
					/>
					<FormInput
						error={errors.email?.message}
						type="email"
						placeholder="Vul hier je email in…"
						{...register("email", {
							required: "Je email is verplicht",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: "Vul een geldig emailadres in",
							},
						})}
					/>
					<FormInput
						type="tel"
						placeholder="Vul hier je telefoon in… (optioneel)"
						{...register("phone")}
					/>
					<FormTextArea
						error={errors.note?.message}
						placeholder="Vul hier je bericht in…"
						{...register("note", {
							required: "Je bericht is verplicht",
						})}
					/>

					<Button>Verzenden</Button>
				</form>
			</div>
		);
	}
);

export default ContactForm;
