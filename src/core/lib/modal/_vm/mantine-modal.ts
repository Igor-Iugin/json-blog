import type {NiceModalHandler} from '@ebay/nice-modal-react'


export const mantineModal = ({hide, remove, resolveHide, visible, reject, keepMounted}: NiceModalHandler) => ({
	onClose: () => {
		hide()
		reject()
		resolveHide()
		!keepMounted && remove()
	},
	opened: visible,
})
