import dynamic from "next/dynamic";
import { ReactElement } from "react";

const MainLayout = dynamic(() => import("@/common/layout/MainLayout"), {
	ssr: false,
});

const ContactForm = dynamic(
	() => import("@/modules/pages/components/ContactForm"),
	{
		ssr: false,
	}
);

const Heading = dynamic(() => import("@/common/typography/Heading"), {
	ssr: false,
});

const Graphic = dynamic(() => import("@/common/icons/brand/Graphic"), {
	ssr: false,
});

export default function ContactPage() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20%]">
			<ContactForm title="Stuur ons een bericht" />

			<Graphic className="hidden lg:block fill-blue-500" />
		</div>
	);
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout px py>
			{page}
		</MainLayout>
	);
};
