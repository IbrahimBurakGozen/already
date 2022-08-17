import AccountIcon from "../icons/navigation/AccountIcon";
import CartIcon from "../icons/navigation/CartIcon";
import SearchIcon from "../icons/navigation/SearchIcon";
import WishlistIcon from "../icons/navigation/WishlistIcon";

export const mainRoutes = [
	{ name: "Boodschappen", path: "/categories" },
	{ name: "Werking", path: "/pages/approach" },
	{ name: "Wie zijn we?", path: "/pages/about" },
];

export const bottomRoutes = [
	// { name: "Zakelijk", path: "/pages/business" },
	// { name: "FAQ", path: "/pages/faq" },
	{ name: "Contact", path: "/pages/contact" },
];

export const policyRoutes = [
	{ name: "Verzending", path: "/pages/verzending", order: 1 },
	{ name: "Retouren en Ruilen", path: "/pages/retrour", order: 2 },
	{ name: "Algemene Voorwaarden", path: "/pages/policy", order: 3 },
	{ name: "Privacy", path: "/pages/privacy", order: 4 },
	{ name: "Wettelijke kennisgeving", path: "/pages/ownership", order: 5 },
];

export const iconRoutes = [
	{
		icon: SearchIcon,
		path: "/search",
	},
	{
		icon: WishlistIcon,
		path: "/cart/wishlist",
	},
	{
		icon: CartIcon,
		path: "/cart",
	},
	{
		icon: AccountIcon,
		path: "/account",
	},
];
