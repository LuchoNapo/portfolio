/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'nothing': ['"Nothing You Could Do"', 'cursive'],
			},
			keyframes: {
				fadeUp: {
					'0%': {
						opacity: 0,
						transform: 'translateY(50px)', // Inicia 50px más abajo
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0)', // Termina en la posición original
					},
				},
			},
			animation: {
				fadeUp: 'fadeUp 1s ease-out forwards', // Animación de 1 segundo hacia arriba
			},

		},
	},

	plugins: [],
}
