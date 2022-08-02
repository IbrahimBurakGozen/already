import FacebookIcon from "@/common/icons/socials/FacebookIcon";
import InstagramIcon from "@/common/icons/socials/InstagramIcon";
import classNames from "classnames";
import { bottomRoutes, mainRoutes, policyRoutes } from "@/common/config/paths";
import FooterLink from "./FooterLink/FooterLink";
import Submark from "@/common/icons/brand/Submark";
import Heading from "@/common/typography/Heading";
import NewsletterForm from "./NewsletterForm/NewsletterForm";

export default function Footer() {
	return (
		<footer
			className={classNames(
				"bg-blue-500  py-24 px-page ",
				"grid grid-cols-1  gap-y-24",
				"lg:grid-cols-4 lg:gap-x-16",
				"xl:grid-cols-5 xl:gap-x-8 2xl:gap-x-24"
			)}
		>
			{/* 
			
			
				Logo
			*/}
			<Submark className="fill-light-300 w-24 xl:w-36 ml-auto mx-auto		lg:hidden lg:row-start-1 xl:inline-block" />

			{/* 
			
			
				Newsletter
			*/}
			<div className="flex flex-col gap-4 w-full items-center		lg:items-start lg:col-start-4 lg:col-end-5		xl:col-start-5 xl:col-end-5">
				<Heading type="h4" color="light">
					Schrijf je in op onze nieuwsbrief
				</Heading>

				<NewsletterForm />
			</div>

			{/* 
			
			
				Main Routes
			*/}
			<div className="flex flex-col items-center gap-4		lg:row-start-1 lg:items-start">
				{[...mainRoutes, ...bottomRoutes].map(({ name, path }, index) => (
					<FooterLink key={index} href={path}>
						{name}
					</FooterLink>
				))}
			</div>
			{/* 
			
			
				Policy Routes
			*/}
			<div className="flex flex-col items-center gap-4		lg:row-start-1 lg:items-start">
				{policyRoutes.map(({ name, path }, index) => (
					<FooterLink key={index} href={path}>
						{name}
					</FooterLink>
				))}
			</div>
			{/* 
			
			
				Socials
			*/}
			<div className="flex flex-col items-center gap-16		lg:row-start-1 lg:items-start lg:h-full lg:justify-between">
				{/* 
					Contact
				*/}
				<div className="flex flex-col text-center lg:text-start items-center gap-4	lg:items-start">
					<FooterLink
						href="https://goo.gl/maps/9m3jZ56F6f5h8uRXA"
						target="_blank"
						color="light"
					>
						Heppensesteenweg 53, 3581 Beverlo
					</FooterLink>

					<FooterLink>BE0769775667</FooterLink>

					<FooterLink
						href="mailto:info@thegodshot.be"
						target="_blank"
						color="light"
					>
						info@already.shopping
					</FooterLink>
				</div>
				{/* 
					Socials
				*/}
				<div className="flex flex-row gap-8">
					<FacebookIcon className="w-5" />
					<InstagramIcon className="w-5" />
				</div>
			</div>
		</footer>
	);
}

{
	/* <FlandersLogoIcon /> */
}
{
	/* <div className={styles.logoContainer}>
				<LogoIcon />
			</div> */
	// <div className="flex flex-col items-center 		lg:col-start-4 xl:col-start-5">
	// 	{/* <FlandersLogoIcon className="w-40 fill-light-300" /> */}
	// </div>;
}
