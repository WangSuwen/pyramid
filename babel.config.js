module.exports = {
	presets: [
		'@vue/app',
		'@vue/babel-preset-jsx'
	],
	plugins: [
		// 双问号
		'@babel/plugin-proposal-nullish-coalescing-operator',
		// 可选链
		'@babel/plugin-proposal-optional-chaining'
	]
};
