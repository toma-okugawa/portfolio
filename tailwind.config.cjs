const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Noto Sans JP Variable"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				resume: {
					"primary": "#00489D",
					"primary-content": "#ffffff",
					"secondary": "#3d6db5",
					"secondary-content": "#ffffff",
					"accent": "#00489D",
					"accent-content": "#ffffff",
					"neutral": "#1f2937",
					"neutral-content": "#f3f4f6",
					"base-100": "#ffffff",
					"base-200": "#f4f6fa",
					"base-300": "#e2e8f2",
					"base-content": "#1e293b",
					"info": "#0072ca",
					"success": "#177245",
					"warning": "#b45309",
					"error": "#b91c1c",
					"--rounded-box": "0.5rem",
					"--rounded-btn": "0.375rem",
					"--rounded-badge": "1.9rem",
				},
			},
		],
		darkTheme: "resume",
		logs: false,
	}
}
