import {create, show} from '@ebay/nice-modal-react'
import type {ComponentType} from 'react'

import {registerModal} from './register-modal'


export const createModal = <T extends object, R extends unknown>(
	id: string,
	modalFactory: ComponentType<T>,
) => {
	const modal = create(modalFactory)
	registerModal(id, modal)

	// show modal handler
	return (props: T) => show<R, T>(id, props)
}