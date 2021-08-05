module.exports = {
	purge: ['./src/**/*.js', './public/index.html'],
	mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bright: '#DFE6EE',
				'bright-theme': '#E8E9ED',
				dark: '#7B7D83',
				'dark-theme': '#2B2F36',
			},
			boxShadow: {
				'd-out': '3px 3px 6px #1e2126, -3px -3px 6px #383d46',
				'd-in': 'inset 3px 3px 6px #1e2126, inset -3px -3px 6px #383d46',
				'b-out': '3px 3px 6px #b3b3b6, -3px -3px 6px #ffffff',
				'b-in': 'inset 3px 3px 6px #a2a3a6, inset -3px -3px 6px #ffffff',
			},
			fontFamily: {
				roboto: '"Roboto", sans-serif',
			},
			backgroundImage: (theme) => ({
				'background-img': "url('./images/background_img.webp')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
