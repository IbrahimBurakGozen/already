import Button, {
	buttonShape,
	buttonSize,
	buttonVariant,
} from "@/common/actions/Button";
import HyperLink from "@/common/components/HyperLink";
import Heading from "@/common/typography/Heading";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});
export default function DesignSystemPage() {
	return (
		<>
			<div className="mx-page py-section">
				<Heading
					type="h1"
					color="blue"
					className="mb-10 pb-6 border-b-4 border-blue-500"
				>
					Design System
				</Heading>

				<div className="flex flex-col">
					<HyperLink color="dark" href="#heading">
						Heading
					</HyperLink>
					<HyperLink color="dark" href="#actions">
						Actions
					</HyperLink>
				</div>
			</div>

			<div
				id="heading"
				className="mt-section py-section bg-light-400 flex flex-col gap-12"
			>
				<Heading type="h2" color="dark">
					- Headings
				</Heading>

				<div className="px-page flex flex-col gap-8">
					<Heading type="h1" color="blue">
						Heading 1
					</Heading>

					<Heading type="h2" color="blue">
						Heading 2
					</Heading>

					<Heading type="h3" color="blue">
						Heading 3
					</Heading>

					<Heading type="h4" color="blue">
						Heading 4
					</Heading>

					<Heading type="h5" color="blue">
						Heading 5
					</Heading>
				</div>
			</div>

			<div
				id="actions"
				className="mt-section py-section bg-light-400 flex flex-col gap-12"
			>
				<Heading type="h2" color="dark">
					- Buttons
				</Heading>

				<div className="px-page">
					{
						["default", "pill", "square", "circle", "none"].map(
							(shape, index) => (
								<div key={index} className="py-6">
									<Heading type="h3" color="dark">
										{shape}
									</Heading>
									{["filled", "outlined", "text"].map((variant, index) => (
										<div key={index} className="py-4">
											{["small", "medium", "large"].map((size, index) => (
												<Button
													key={index}
													variant={variant as buttonVariant}
													shape={shape as buttonShape}
													size={size as buttonSize}
													className="block mb-4 md:inline-block mr-8 last:mr-0"
												>
													{size}
												</Button>
											))}
										</div>
									))}
								</div>
							)
						) // typescript
					}
				</div>
			</div>
		</>
	);
}

DesignSystemPage.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout py>{page}</MainLayout>;
};
