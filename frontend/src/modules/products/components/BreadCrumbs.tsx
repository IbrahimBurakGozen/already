import HyperLink from "@/common/components/HyperLink";
import Link from "next/link";
import { Fragment, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
	breadcrumbs: { name: string; url?: string }[];
}

export default function BreadCrumbs({ breadcrumbs, ...props }: Props) {
	return (
		<div {...props} className="flex flex-row flex-wrap gap-2">
			{breadcrumbs.map(({ name, url }, index) => {
				if (!url) {
					return (
						<Fragment key={index}>
							<a key={index} className="text-gray-600 text-xs md:text-base">
								{name}
							</a>

							{index !== breadcrumbs.length - 1 && (
								<span className="text-gray-600 text-xs md:text-base">/</span>
							)}
						</Fragment>
					);
				}

				return (
					<Fragment key={index}>
						<Link key={index} href={url}>
							<a className="text-gray-600 text-xs md:text-base cursor-pointer hover:underline">
								{name}
							</a>
						</Link>

						{index !== breadcrumbs.length - 1 && (
							<span className="text-gray-600 text-xs md:text-base">/</span>
						)}
					</Fragment>
				);
			})}
		</div>
	);
}
