'use client'

import {MantineProvider} from '@mantine/core'
import {Notifications} from '@mantine/notifications'
import type {ReactNode} from 'react'

import {MantineDatesProvider} from '@/shared/ui/date-input'

import {theme} from '../_config/mantine/theme'

import '@mantine/core/styles.css'
import '@mantine/tiptap/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'

import '../_config/global.css'


export const UiProvider = ({children}: { children: ReactNode }) => (
	<MantineProvider theme={theme}>
		<MantineDatesProvider>
			{children}
		</MantineDatesProvider>
		<Notifications/>
	</MantineProvider>
)
