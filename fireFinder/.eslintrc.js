module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/prettier",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				// możesz dostosować ustawienia Prettier tutaj, np:
				singleQuote: true,
				semi: false,
				trailingComma: "all",
			},
		],
		// dodaj pozostałe reguły ESLint tutaj
	},
};
