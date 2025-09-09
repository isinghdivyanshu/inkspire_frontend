import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				darker: "#0B0B0B",
				dark: "#161516",
				myGray: "#201F20",
				mix: "#363336",
				soil: "#9A8873",
				skin: "#EAD0B3",
				light: "#FFFFFF",
			},
			animation: {
				shimmer: 'shimmer 2s linear infinite',
			},
			keyframes: {
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
