// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
// craco.config.js
module.exports = {
	style: {
		postcss: {
			plugins: [require('@tailwindcss/postcss7-compat'), require('autoprefixer')],
		},
	},
	babel: {
		loaderOptions: (babelLoaderOptions) => {
			const origBabelPresetCRAIndex = babelLoaderOptions.presets.findIndex((preset) => {
				return preset[0].includes('babel-preset-react-app');
			});

			const origBabelPresetCRA = babelLoaderOptions.presets[origBabelPresetCRAIndex];

			babelLoaderOptions.presets[origBabelPresetCRAIndex] = function overridenPresetCRA(api, opts, env) {
				const babelPresetCRAResult = require(origBabelPresetCRA[0])(api, origBabelPresetCRA[1], env);

				babelPresetCRAResult.presets.forEach((preset) => {
					// detect @babel/preset-react with {development: true, runtime: 'automatic'}
					const isReactPreset = preset && preset[1] && preset[1].runtime === 'automatic' && preset[1].development === true;
					if (isReactPreset) {
						preset[1].importSource = '@welldone-software/why-did-you-render';
					}
				});

				return babelPresetCRAResult;
			};

			return babelLoaderOptions;
		},
	},
	webpack: {
		alias: {
			'react-redux': process.env.NODE_ENV === 'development' ? 'react-redux/lib' : 'react-redux',
		},
		configure: {
			// plugins: [new WebpackBar({ profile: true }), new BundleAnalyzerPlugin()],
			// entry: './src/App.js',
			output: {},
			optimization: {
				minimize: true,
				//terse comment
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							format: {
								comments: false,
							},
						},
						extractComments: false,
					}),
				],
				splitChunks: {
					cacheGroups: {
						commons: {
							chunks: 'initial',
							minChunks: 2,
							maxInitialRequests: 5,
							minSize: 0,
						},
						lottie: {
							test: /lottie-web/,
							chunks: 'initial',
							name: 'lottie',
							priority: 9,
							enforce: true,
						},
					},
				},
			},
		},
	},
};
