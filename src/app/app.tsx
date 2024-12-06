import {Router} from './router'
import {AppProvider} from '@/app/_providers/app-provider'

import '@mantine/core/styles.css'


export default function App() {
	return (
		<AppProvider>
			<Router/>
		</AppProvider>
	)
}
