import {defaultShouldDehydrateQuery, isServer, QueryClient} from '@tanstack/react-query'


function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5 * 60 * 1000,
				retry: 1,
			},
			dehydrate: {
				shouldDehydrateQuery: query =>
					defaultShouldDehydrateQuery(query)
					|| query.state.status === 'pending',
			},
		},
	})
}

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
	if (isServer)
		return makeQueryClient()
	else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}