import Link from "next/link";
import Logo from "@/common/icons/brand/Logo";
import SearchIcon from "@/common/icons/navigation/SearchIcon";
import CartIcon from "@/common/icons/navigation/CartIcon";
import WishlistIcon from "@/common/icons/navigation/WishlistIcon";
import AccountIcon from "@/common/icons/navigation/AccountIcon";
import MenuIcon from "@/common/icons/navigation/MenuIcon";
import { useRouter } from "next/router";
import MobileMenu from "./Mobile/MobileMenu";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { bottomRoutes, mainRoutes } from "@/common/config/paths";
import Submark from "@/common/icons/brand/Submark";

export default function Navigation() {
	const router = useRouter();

	const [currentRoute, setCurrentRoute] = useState("");

	const [open, setOpen] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(true);

	const cycleMenu = () => {
		if (!animationComplete) return;
		setAnimationComplete(false);
		setOpen(!open);
	};

	useEffect(() => {
		setCurrentRoute(router.pathname);
	}, [router.pathname]);

	return (
		<header className="fixed w-full z-50 flex flex-col">
			{/* 
			
				Mobile Menu
			*/}
			<MobileMenu
				routes={[...mainRoutes, ...bottomRoutes]}
				open={open}
				currentRoute={currentRoute}
				cycleMenuCallback={cycleMenu}
				animationCompleteCallback={setAnimationComplete}
			/>
			{/* 
			
			
				Top Navigation
			*/}
			<div className="bg-light-300 w-full flex flex-row justify-between 	py-6 px-page">
				{/* 
			
			
					Logo 
				*/}
				<Link href="/">
					<Logo className="hidden md:block md:cursor-pointer md:fill-blue-500 md:w-28 lg:w-36" />
				</Link>

				<Link href="/">
					<Submark className="cursor-pointer fill-blue-500 w-10 max-h-min md:hidden" />
				</Link>
				{/* 
				
					Icon links
				*/}
				<div className="flex flex-row gap-10">
					{[
						{
							icon: (
								<SearchIcon className="cursor-pointer fill-blue-500 hover:fill-blue-600 w-6 lg:w-7" />
							),
							path: "/search",
						},
						{
							icon: (
								<WishlistIcon className="cursor-pointer fill-blue-500 hover:fill-blue-600 w-6 lg:w-7" />
							),
							path: "/cart/wishlist",
						},
						{
							icon: (
								<CartIcon className="cursor-pointer fill-blue-500 hover:fill-blue-600 w-6 lg:w-7" />
							),
							path: "/cart",
						},
						{
							icon: (
								<AccountIcon className="cursor-pointer fill-blue-500 hover:fill-blue-600 w-6 lg:w-7" />
							),
							path: "/account",
						},
					].map(({ icon, path }, index) => (
						<Link href={path} key={index}>
							{icon}
						</Link>
					))}
				</div>
			</div>
			{/* 
			
			
				Bottom Navigation
			*/}
			<div className=" w-full bg-blue-500 bg-opacity-30 backdrop-filter backdrop-blur-xl flex flex-row justify-end xl:justify-between	py-4 px-page">
				{/* 
					
					Left side links
				*/}
				<div className="hidden xl:flex xl:flex-row xl:gap-10 xl:w-full xl:items-center">
					{mainRoutes.map(({ name, path }, index) => (
						<Link href={path} key={index}>
							<a
								className={classNames(
									"font-medium text-lg cursor-pointer",
									path === currentRoute
										? "underline decoration-blue-500 decoration-2 underline-offset-4"
										: "underline decoration-transparent decoration-0 underline-offset-8   transition-all  duration-500 ease-in-out hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4"
								)}
							>
								{name}
							</a>
						</Link>
					))}
				</div>

				{/* 
			

				
					Right side links
				*/}
				<div className="hidden xl:flex xl:flex-row xl:gap-10 xl:w-full xl:justify-end  xl:items-center">
					{bottomRoutes.map(({ path, name }) => (
						<Link key={name} href={path} passHref>
							<a
								className={classNames(
									"font-normal text-sm hover:underline hover:underline-offset-4 decoration-blue-500",
									path === currentRoute
										? "underline decoration-blue-500 decoration-2 underline-offset-4"
										: "underline decoration-transparent decoration-0 underline-offset-8   transition-all  duration-500 ease-in-out hover:decoration-blue-500 hover:decoration-2 hover:underline-offset-4"
								)}
							>
								{name}
							</a>
						</Link>
					))}
				</div>

				<MenuIcon className="w-6 md:w-8 xl:hidden" onClick={cycleMenu} />
			</div>
		</header>
	);
}
