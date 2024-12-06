'use client'

import {Box, Button, type ButtonProps, Group, type GroupProps, Modal, type ModalProps} from '@mantine/core'
import type {ComponentPropsWithoutRef, MouseEvent, ReactNode} from 'react'

import {createModal} from '../_vm/create-modal'
import {useModal} from '../_vm/use-modal'


type ConfirmLabels = Record<'confirm' | 'cancel', ReactNode>

const defaultLabels: ConfirmLabels = {
	cancel: 'Нет',
	confirm: 'Да',
}

interface ConfirmModalProps extends Omit<ModalProps, 'opened' | 'onClose'> {
	title: string
	children?: ReactNode
	onCancel?: () => void
	onConfirm?: () => void
	closeOnConfirm?: boolean
	closeOnCancel?: boolean
	cancelProps?: Omit<ButtonProps & ComponentPropsWithoutRef<'button'>, 'children'>;
	confirmProps?: Omit<ButtonProps & ComponentPropsWithoutRef<'button'>, 'children'>;
	footerProps?: GroupProps
	labels?: ConfirmLabels
}

const ConfirmModal = ({
	labels = defaultLabels,
	children,
	cancelProps,
	confirmProps,
	footerProps,
	onCancel,
	onConfirm,
	closeOnCancel = true,
	closeOnConfirm = true,
	...modalProps
}: ConfirmModalProps) => {
	const {opened, onClose, closeResolve} = useModal()

	const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
		cancelProps?.onClick?.(event)
		onCancel?.()
		closeOnCancel && onClose()
	}

	const handleConfirm = (event: MouseEvent<HTMLButtonElement>) => {
		confirmProps?.onClick?.(event)
		onConfirm?.()
		closeOnConfirm && closeResolve()
	}

	return (
		<Modal {...modalProps} opened={opened} centered onClose={onClose}>
			{children && <Box mb='md'>{children}</Box>}

			<Group mt={children ? 0 : 'md'} justify='flex-end' {...footerProps}>
				<Button variant='light' color='gray' {...cancelProps} onClick={handleCancel}>
					{labels?.cancel || defaultLabels.cancel}
				</Button>

				<Button color='brand' {...confirmProps} onClick={handleConfirm}>
					{labels?.confirm || defaultLabels.confirm}
				</Button>
			</Group>
		</Modal>
	)
}

export const openConfirmModal = createModal('confirm-v', ConfirmModal)
