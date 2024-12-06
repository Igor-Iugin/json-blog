'use client'

import {type NiceModalHandler, useModal as useNiceModal} from '@ebay/nice-modal-react'
import {useMemo} from 'react'

import {mantineModal} from './mantine-modal'


interface useModalReturn extends Omit<NiceModalHandler, 'visible'> {
	opened: boolean
	/* close and remove modal with reject */
	onClose: () => void
	/* close and remove modal with resolve */
	closeResolve: (resolve?: unknown) => void
}

export const useModal = (): useModalReturn => {
	const {visible, ...handlers} = useNiceModal()
	return useMemo(() => ({
		...handlers,
		...mantineModal({visible, ...handlers}),
		closeResolve: resolve => {
			handlers.hide()
			handlers.resolve(resolve)
			!handlers.keepMounted && handlers.remove()
		},
	}), [handlers, visible])
}
