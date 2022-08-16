import Heading from "@/common/typography/Heading";

interface Props {
	children: any;
	title: string;
}

export default function FilterItem({ children, title }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<Heading type="h4" color="blue">
				{title}
			</Heading>

			<ul className="flex flex-col gap-2 cursor-pointer text-sm text-dark-700">
				{children}
			</ul>
		</div>
	);
}
