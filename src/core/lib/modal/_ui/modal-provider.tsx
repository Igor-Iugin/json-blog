'use client'

import {Provider as NiceModalProvider} from '@ebay/nice-modal-react'
import type {ReactNode} from 'react'


export const ModalProvider = ({children}: { children: ReactNode }) => (
	<NiceModalProvider>
		{children}
	</NiceModalProvider>
)