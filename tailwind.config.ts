import tailwindPresetMantine from 'tailwind-preset-mantine'
import type {Config} from 'tailwindcss'

import {breakpoints as mantineBreakpoints} from './src/app/_config/mantine/breakpoints'
import {colors as mantineColors} from './src/app/_config/mantine/colors'


const config: Config = {
	content: [
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {},
	},
	presets: [
		tailwindPresetMantine({mantineBreakpoints, mantineColors}),
	],
}

export default config
