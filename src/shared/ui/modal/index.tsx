import type {ModalRootProps} from '@mantine/core'
import {ModalRoot as MantineModalRoot} from '@mantine/core'
import type {Ref} from 'react'
import {forwardRef} from 'react'

import css from './modal.module.css'


export const ModalRoot = forwardRef(({children, classNames, ...rest}: ModalRootProps, ref: Ref<HTMLDivElement>) => (
	<MantineModalRoot {...rest} classNames={{...css, ...classNames}} ref={ref}>
		{children}
	</MantineModalRoot>
))
