import Heading from "@/common/typography/Heading";
import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
	statusCode?: number;
	title: string;
}

export default function Error({
	title,
	statusCode,
	className,
	...props
}: Props) {
	return (
		<div
			{...props}
			className={classNames(
				"w-full flex flex-col justify-center items-center gap-24 md:gap-16",
				className
			)}
		>
			{/* <SadFaceIcon className="w-1/4 md:w-1/6 lg:w-1/12" /> */}

			<div className="flex flex-col gap-4 text-center">
				{statusCode && (
					<Heading type="h2" color="red">
						{statusCode}
					</Heading>
				)}
				<Heading color="red" type="h2">
					{title}
				</Heading>
			</div>
		</div>
	);
}
