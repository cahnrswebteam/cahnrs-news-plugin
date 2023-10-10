const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		'cahnrs-gutenberg-blocks': './blocks/index.js'
	},
	output: {
		path: path.join(__dirname, './assets/js'),
		filename: '[name].js'
	}
}