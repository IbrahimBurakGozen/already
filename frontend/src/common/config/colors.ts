export type Color = "blue" | "red" | "light" | "dark" | "transparent";

export type ColorVariants = 300 | 400 | 500 | 600 | 700;

export const [
	// basic
	textColors,
	bgColors,
	fillColors,
	borderColors,
	// hover
	hoverTextColors,
	hoverBgColors,
	hoverFillColors,
	hoverBorderColors,
	// focus
	focusTextColors,
	focusBgColors,
	focusFillColors,
	focusBorderColors,
]: {
	[key in Color]: {
		[key in ColorVariants]: string;
	};
}[] = [
	/*



		Basic
	*/
	{
		red: {
			300: "text-red-300",
			400: "text-red-400",
			500: "text-red-500",
			600: "text-red-600",
			700: "text-red-700",
		},
		blue: {
			300: "text-blue-300",
			400: "text-blue-400",
			500: "text-blue-500",
			600: "text-blue-600",
			700: "text-blue-700",
		},

		light: {
			300: "text-light-300",
			400: "text-light-400",
			500: "text-light-500",
			600: "text-light-400",
			700: "text-light-300",
		},
		dark: {
			300: "text-dark-300",
			400: "text-dark-400",
			500: "text-dark-500",
			600: "text-dark-600",
			700: "text-dark-700",
		},
		transparent: {
			300: "text-transparent",
			400: "text-transparent",
			500: "text-transparent",
			600: "text-transparent",
			700: "text-transparent",
		},
	},
	{
		red: {
			300: "bg-red-300",
			400: "bg-red-400",
			500: "bg-red-500",
			600: "bg-red-600",
			700: "bg-red-700",
		},
		blue: {
			300: "bg-blue-300",
			400: "bg-blue-400",
			500: "bg-blue-500",
			600: "bg-blue-600",
			700: "bg-blue-700",
		},

		light: {
			300: "bg-light-300",
			400: "bg-light-400",
			500: "bg-light-500",
			600: "bg-light-400",
			700: "bg-light-300",
		},
		dark: {
			300: "bg-dark-300",
			400: "bg-dark-400",
			500: "bg-dark-500",
			600: "bg-dark-600",
			700: "bg-dark-700",
		},
		transparent: {
			300: "bg-transparent",
			400: "bg-transparent",
			500: "bg-transparent",
			600: "bg-transparent",
			700: "bg-transparent",
		},
	},
	{
		red: {
			300: "fill-red-300",
			400: "fill-red-400",
			500: "fill-red-500",
			600: "fill-red-600",
			700: "fill-red-700",
		},
		blue: {
			300: "fill-blue-300",
			400: "fill-blue-400",
			500: "fill-blue-500",
			600: "fill-blue-600",
			700: "fill-blue-700",
		},

		light: {
			300: "fill-light-300",
			400: "fill-light-400",
			500: "fill-light-500",
			600: "fill-light-400",
			700: "fill-light-300",
		},
		dark: {
			300: "fill-dark-300",
			400: "fill-dark-400",
			500: "fill-dark-500",
			600: "fill-dark-600",
			700: "fill-dark-700",
		},
		transparent: {
			300: "fill-transparent",
			400: "fill-transparent",
			500: "fill-transparent",
			600: "fill-transparent",
			700: "fill-transparent",
		},
	},
	{
		red: {
			300: "border-red-300",
			400: "border-red-400",
			500: "border-red-500",
			600: "border-red-600",
			700: "border-red-700",
		},
		blue: {
			300: "border-blue-300",
			400: "border-blue-400",
			500: "border-blue-500",
			600: "border-blue-600",
			700: "border-blue-700",
		},

		light: {
			300: "border-light-300",
			400: "border-light-400",
			500: "border-light-500",
			600: "border-light-400",
			700: "border-light-300",
		},
		dark: {
			300: "border-dark-300",
			400: "border-dark-400",
			500: "border-dark-500",
			600: "border-dark-600",
			700: "border-dark-700",
		},
		transparent: {
			300: "border-transparent",
			400: "border-transparent",
			500: "border-transparent",
			600: "border-transparent",
			700: "border-transparent",
		},
	},
	/*



		Hover
	*/
	{
		red: {
			300: "hover:text-red-300",
			400: "hover:text-red-400",
			500: "hover:text-red-500",
			600: "hover:text-red-600",
			700: "hover:text-red-700",
		},
		blue: {
			300: "hover:text-blue-300",
			400: "hover:text-blue-400",
			500: "hover:text-blue-500",
			600: "hover:text-blue-600",
			700: "hover:text-blue-700",
		},

		light: {
			300: "hover:text-light-300",
			400: "hover:text-light-400",
			500: "hover:text-light-500",
			600: "hover:text-light-400",
			700: "hover:text-light-300",
		},
		dark: {
			300: "hover:text-dark-300",
			400: "hover:text-dark-400",
			500: "hover:text-dark-500",
			600: "hover:text-dark-600",
			700: "hover:text-dark-700",
		},
		transparent: {
			300: "hover:text-transparent",
			400: "hover:text-transparent",
			500: "hover:text-transparent",
			600: "hover:text-transparent",
			700: "hover:text-transparent",
		},
	},
	{
		red: {
			300: "hover:bg-red-300",
			400: "hover:bg-red-400",
			500: "hover:bg-red-500",
			600: "hover:bg-red-600",
			700: "hover:bg-red-700",
		},
		blue: {
			300: "hover:bg-blue-300",
			400: "hover:bg-blue-400",
			500: "hover:bg-blue-500",
			600: "hover:bg-blue-600",
			700: "hover:bg-blue-700",
		},

		light: {
			300: "hover:bg-light-300",
			400: "hover:bg-light-400",
			500: "hover:bg-light-500",
			600: "hover:bg-light-400",
			700: "hover:bg-light-300",
		},
		dark: {
			300: "hover:bg-dark-300",
			400: "hover:bg-dark-400",
			500: "hover:bg-dark-500",
			600: "hover:bg-dark-600",
			700: "hover:bg-dark-700",
		},
		transparent: {
			300: "hover:bg-transparent",
			400: "hover:bg-transparent",
			500: "hover:bg-transparent",
			600: "hover:bg-transparent",
			700: "hover:bg-transparent",
		},
	},
	{
		red: {
			300: "hover:fill-red-300",
			400: "hover:fill-red-400",
			500: "hover:fill-red-500",
			600: "hover:fill-red-600",
			700: "hover:fill-red-700",
		},
		blue: {
			300: "hover:fill-blue-300",
			400: "hover:fill-blue-400",
			500: "hover:fill-blue-500",
			600: "hover:fill-blue-600",
			700: "hover:fill-blue-700",
		},

		light: {
			300: "hover:fill-light-300",
			400: "hover:fill-light-400",
			500: "hover:fill-light-500",
			600: "hover:fill-light-400",
			700: "hover:fill-light-300",
		},
		dark: {
			300: "hover:fill-dark-300",
			400: "hover:fill-dark-400",
			500: "hover:fill-dark-500",
			600: "hover:fill-dark-600",
			700: "hover:fill-dark-700",
		},
		transparent: {
			300: "hover:fill-transparent",
			400: "hover:fill-transparent",
			500: "hover:fill-transparent",
			600: "hover:fill-transparent",
			700: "hover:fill-transparent",
		},
	},
	{
		red: {
			300: "hover:border-red-300",
			400: "hover:border-red-400",
			500: "hover:border-red-500",
			600: "hover:border-red-600",
			700: "hover:border-red-700",
		},
		blue: {
			300: "hover:border-blue-300",
			400: "hover:border-blue-400",
			500: "hover:border-blue-500",
			600: "hover:border-blue-600",
			700: "hover:border-blue-700",
		},

		light: {
			300: "hover:border-light-300",
			400: "hover:border-light-400",
			500: "hover:border-light-500",
			600: "hover:border-light-400",
			700: "hover:border-light-300",
		},
		dark: {
			300: "hover:border-dark-300",
			400: "hover:border-dark-400",
			500: "hover:border-dark-500",
			600: "hover:border-dark-600",
			700: "hover:border-dark-700",
		},
		transparent: {
			300: "hover:border-transparent",
			400: "hover:border-transparent",
			500: "hover:border-transparent",
			600: "hover:border-transparent",
			700: "hover:border-transparent",
		},
	},
	/*



		Focus
	*/
	{
		red: {
			300: "focus:text-red-300",
			400: "focus:text-red-400",
			500: "focus:text-red-500",
			600: "focus:text-red-600",
			700: "focus:text-red-700",
		},
		blue: {
			300: "focus:text-blue-300",
			400: "focus:text-blue-400",
			500: "focus:text-blue-500",
			600: "focus:text-blue-600",
			700: "focus:text-blue-700",
		},

		light: {
			300: "focus:text-light-300",
			400: "focus:text-light-400",
			500: "focus:text-light-500",
			600: "focus:text-light-400",
			700: "focus:text-light-300",
		},
		dark: {
			300: "focus:text-dark-300",
			400: "focus:text-dark-400",
			500: "focus:text-dark-500",
			600: "focus:text-dark-600",
			700: "focus:text-dark-700",
		},
		transparent: {
			300: "focus:text-transparent",
			400: "focus:text-transparent",
			500: "focus:text-transparent",
			600: "focus:text-transparent",
			700: "focus:text-transparent",
		},
	},
	{
		red: {
			300: "focus:bg-red-300",
			400: "focus:bg-red-400",
			500: "focus:bg-red-500",
			600: "focus:bg-red-600",
			700: "focus:bg-red-700",
		},
		blue: {
			300: "focus:bg-blue-300",
			400: "focus:bg-blue-400",
			500: "focus:bg-blue-500",
			600: "focus:bg-blue-600",
			700: "focus:bg-blue-700",
		},

		light: {
			300: "focus:bg-light-300",
			400: "focus:bg-light-400",
			500: "focus:bg-light-500",
			600: "focus:bg-light-400",
			700: "focus:bg-light-300",
		},
		dark: {
			300: "focus:bg-dark-300",
			400: "focus:bg-dark-400",
			500: "focus:bg-dark-500",
			600: "focus:bg-dark-600",
			700: "focus:bg-dark-700",
		},
		transparent: {
			300: "focus:bg-transparent",
			400: "focus:bg-transparent",
			500: "focus:bg-transparent",
			600: "focus:bg-transparent",
			700: "focus:bg-transparent",
		},
	},
	{
		red: {
			300: "focus:fill-red-300",
			400: "focus:fill-red-400",
			500: "focus:fill-red-500",
			600: "focus:fill-red-600",
			700: "focus:fill-red-700",
		},
		blue: {
			300: "focus:fill-blue-300",
			400: "focus:fill-blue-400",
			500: "focus:fill-blue-500",
			600: "focus:fill-blue-600",
			700: "focus:fill-blue-700",
		},

		light: {
			300: "focus:fill-light-300",
			400: "focus:fill-light-400",
			500: "focus:fill-light-500",
			600: "focus:fill-light-400",
			700: "focus:fill-light-300",
		},
		dark: {
			300: "focus:fill-dark-300",
			400: "focus:fill-dark-400",
			500: "focus:fill-dark-500",
			600: "focus:fill-dark-600",
			700: "focus:fill-dark-700",
		},
		transparent: {
			300: "focus:fill-transparent",
			400: "focus:fill-transparent",
			500: "focus:fill-transparent",
			600: "focus:fill-transparent",
			700: "focus:fill-transparent",
		},
	},
	{
		red: {
			300: "focus:border-red-300",
			400: "focus:border-red-400",
			500: "focus:border-red-500",
			600: "focus:border-red-600",
			700: "focus:border-red-700",
		},
		blue: {
			300: "focus:border-blue-300",
			400: "focus:border-blue-400",
			500: "focus:border-blue-500",
			600: "focus:border-blue-600",
			700: "focus:border-blue-700",
		},

		light: {
			300: "focus:border-light-300",
			400: "focus:border-light-400",
			500: "focus:border-light-500",
			600: "focus:border-light-400",
			700: "focus:border-light-300",
		},
		dark: {
			300: "focus:border-dark-300",
			400: "focus:border-dark-400",
			500: "focus:border-dark-500",
			600: "focus:border-dark-600",
			700: "focus:border-dark-700",
		},
		transparent: {
			300: "focus:border-transparent",
			400: "focus:border-transparent",
			500: "focus:border-transparent",
			600: "focus:border-transparent",
			700: "focus:border-transparent",
		},
	},
];
