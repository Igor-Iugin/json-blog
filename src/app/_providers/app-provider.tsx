import type {ReactNode} from 'react'

import {ModalProvider} from '@/core/lib/modal'

import {QueryProvider} from './_query-provider'
import {UiProvider} from './_ui-provider'


export const AppProvider = ({children}: { children: ReactNode }) => (
	<QueryProvider>
		<UiProvider>
			<ModalProvider>
				{children}
			</ModalProvider>
		</UiProvider>
	</QueryProvider>
)
