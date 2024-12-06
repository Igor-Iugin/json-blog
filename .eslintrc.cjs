const FS_LAYERS = [
	'app',
	'pages',
	'widgets',
	'features',
	'entities',
	'shared',
	'core'
]

module.exports = {
	env: {browser: true, es2020: true},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:boundaries/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module'
	},
	plugins: ['boundaries', 'import', '@tanstack/query'],
	settings: {
		'import/resolver': {
			'typescript': {
				'alwaysTryTypes': true
			}
		},
		'boundaries/include': ['src/**/*'],
		'boundaries/ignore': ['src/_old/**/*'],
		'boundaries/elements': [
			{
				type: 'app',
				pattern: 'app'
			},
			{
				type: 'pages',
				pattern: 'pages/*',
				capture: ['page']
			},
			{
				type: 'widgets',
				pattern: 'widgets/*',
				capture: ['widget']
			},
			{
				type: 'features',
				pattern: 'features/*',
				capture: ['feature']
			},
			{
				type: 'entities',
				pattern: 'entities/*',
				capture: ['entity']
			},
			{
				type: 'shared',
				pattern: 'shared/*',
				capture: ['segment']
			},
			{
				type: 'core',
				pattern: 'core/*',
				capture: ['core-segment']
			}
		]
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'semi': [2, 'never'],
		'no-tabs': [2, {allowIndentationTabs: true}],
		'max-len': [0, {code: 120}],
		'indent': ['error', 'tab', {SwitchCase: 1}],
		'jsx-quotes': [2, 'prefer-single'],
		'quotes': [2, 'single'],
		'object-curly-spacing': ['error', 'never'],
		'@typescript-eslint/consistent-type-imports': ['error', {
			fixStyle: 'separate-type-imports',
			prefer: 'type-imports'
		}],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unnecessary-type-constraint': 'off',
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {
			args: 'all',
			argsIgnorePattern: '^_',
			caughtErrors: 'all',
			caughtErrorsIgnorePattern: '^_',
			destructuredArrayIgnorePattern: '^_',
			varsIgnorePattern: '^_',
			ignoreRestSiblings: true
		}],
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

		// Import ordering
		'import/order': [2, {
			alphabetize: {
				order: 'asc',
				caseInsensitive: true
			},
			'newlines-between': 'always',
			pathGroups: FS_LAYERS.map((layer) => ({
				pattern: `@/${layer}{,/**}`,
				group: 'internal',
				position: 'after'
			})),
			pathGroupsExcludedImportTypes: ['builtin'],
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
		}],

		// FSD rules
		'boundaries/entry-point': [2, {
			default: 'disallow',
			rules: [
				// Shared
				{
					target: [['shared', {segment: 'lib'}]],
					allow: '**/*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: [['shared', {segment: 'assets'}]],
					allow: '*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: [['shared', {segment: 'config'}]],
					allow: '*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: [['shared', {segment: 'const'}]],
					allow: '*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: [['shared', {segment: 'types'}]],
					allow: '*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: [['shared', {segment: '(ui|api)'}]],
					allow: '**',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				// Core
				{
					target: [['core', {'core-segment': 'lib'}]],
					allow: '**/*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: [['core', {'core-segment': 'config'}]],
					allow: '*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: [['core', {'core-segment': 'api'}]],
					allow: '*.ts',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: ['app', 'pages', 'widgets', 'features', 'entities'],
					allow: 'index.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				},
				{
					target: ['app', 'pages', 'widgets', 'features', 'entities', 'core'],
					allow: '*.(ts|tsx)',
					disallow: ['**/_*/*.(ts|tsx)', '**/_*.(ts|tsx)']
				}
			]
		}],
		'boundaries/element-types': [2, {
			default: 'allow',
			message: '${file.type} is not allowed to import (${dependency.type})',
			rules: [
				{
					'from': ['core'],
					'disallow': ['app', 'pages', 'widgets', 'features', 'entities', 'shared'],
					'message': 'Core module must not import upper layers (${dependency.type})'
				},
				{
					'from': ['shared'],
					'disallow': ['app', 'pages', 'widgets', 'features', 'entities'],
					'message': 'Shared module must not import upper layers (${dependency.type})'
				},
				{
					'from': ['entities'],
					'message': 'Entity must not import upper layers (${dependency.type})',
					'disallow': ['app', 'pages', 'widgets', 'features']
				},
				{
					'from': ['entities'],
					'message': 'Entity must not import other entity',
					'disallow': [['entities', {'entity': '!${entity}'}]]
				},
				{
					'from': ['features'],
					'message': 'Feature must not import upper layers (${dependency.type})',
					'disallow': ['app', 'pages', 'widgets']
				},
				{
					'from': ['features'],
					'message': 'Feature must not import other feature',
					'disallow': [['features', {'feature': '!${feature}'}]]
				},
				{
					'from': ['widgets'],
					'message': 'Feature must not import upper layers (${dependency.type})',
					'disallow': ['app', 'pages']
				},
				{
					'from': ['widgets'],
					'message': 'Widget must not import other widget',
					'disallow': [['widgets', {'widget': '!${widget}'}]]
				},
				{
					'from': ['pages'],
					'message': 'Page must not import upper layers (${dependency.type})',
					'disallow': ['app']
				},
				{
					'from': ['pages'],
					'message': 'Page must not import other page',
					'disallow': [['pages', {'page': '!${page}'}]]
				}
			]
		}]
	}
}
