'use client'

import {QueryClientProvider} from '@tanstack/react-query'
import type {ReactNode} from 'react'

import {getQueryClient} from '@/shared/api/query-client'


export const QueryProvider = ({children}: { children: ReactNode }) => {
	const client = getQueryClient()

	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	)
}
