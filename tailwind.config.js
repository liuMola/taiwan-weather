module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
				'd-out': '  19px 19px 37px #15171a, -19px -19px 37px #414752',
				'd-in': 'inset 19px 19px 37px #15171a, inset -19px -19px 37px #414752',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
