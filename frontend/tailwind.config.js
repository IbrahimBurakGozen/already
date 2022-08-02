/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/common/**/*.{js,ts,jsx,tsx}",
		"./src/modules/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			blue: {
				300: "#c5ddf8",
				400: "#9ec7f2",
				500: "#80b2ed", // primary
				600: "#4e88e3",
				700: "#396cd7",
			},
			red: {
				300: "#f9a8a8",
				400: "#f37676",
				500: "#ea5959", // primary
				600: "#d52d2d",
				700: "#b32222",
			},
			light: {
				300: "#fafafa",
				400: "#efefef",
				500: "#dcdcdc",
				600: "#bdbdbd",
				700: "#989898",
			},
			dark: {
				300: "#aca29c",
				400: "#8b7d76",
				500: "#70645c",
				600: "#594e48",
				700: "#463f3a",
			},
			black: "#000",
			white: "#fff",
			transparent: "transparent",
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			spacing: {},
		},
	},
	plugins: [],
};
