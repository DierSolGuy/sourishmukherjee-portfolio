module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	extends: [
		"plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
		"plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
		"prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		"plugin:prettier/recommended",
		"plugin:react-hooks/recommended"
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		"react/jsx-uses-react": "off",
		"multiline-ternary": "off",
		"react/react-in-jsx-scope": "off",
		quotes: ["error", "double"],
		"arrow-parens": ["error", "as-needed"]
	},
	settings: {
		react: {
			version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	}
};
