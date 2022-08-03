/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Avenir: ["Avenir", "sans"],
				AvenirMedium: ["AvenirMedium", "sans"],
				AvenirDemi: ["AvenirDemi", "sans"],
				AvenirBold: ["AvenirBold", "sans"],
				AvenirHeavy: ["AvenirHeavy", "sans"],
			},
			colors: {
				primary: "#FFD000",
				dark: "#080808"
			}
		},
	},
	plugins: [],
};
