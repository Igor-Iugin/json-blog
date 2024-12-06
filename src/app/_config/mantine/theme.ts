import {createTheme, DEFAULT_THEME, mergeMantineTheme} from '@mantine/core'

import {breakpoints} from './breakpoints'
import {colors} from './colors'
import {components} from './components'


const override = createTheme({
	colors,
	cursorType: 'pointer',
	breakpoints,
	components,
})

export const theme = mergeMantineTheme(DEFAULT_THEME, override)
