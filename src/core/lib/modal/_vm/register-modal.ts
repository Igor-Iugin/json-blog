'use client'

import {register} from '@ebay/nice-modal-react'
import type {FC} from 'react'


/**
 * Function for registration modal id
 * */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerModal = <T extends FC<any>>(
	id: string,
	comp: T,
) => register(id, comp)
