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
				'background-img':
					"url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
