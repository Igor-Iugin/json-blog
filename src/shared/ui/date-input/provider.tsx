'use client'

import {DatesProvider, type DatesProviderSettings} from '@mantine/dates'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type {ReactNode} from 'react'

import 'dayjs/locale/ru'


dayjs.extend(customParseFormat)

const config: DatesProviderSettings = {
	locale: 'ru',
	firstDayOfWeek: 1,
}

export function MantineDatesProvider({children}: { children: ReactNode }) {
	return (
		<DatesProvider settings={config}>
			{children}
		</DatesProvider>
	)
}