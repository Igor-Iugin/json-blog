'use client'

import {At} from '@gravity-ui/icons'
import type {FieldValues} from 'react-hook-form'

import {TextInput, type TextInputProps} from './text-input'


export const EmailInput = <T extends FieldValues>(props: TextInputProps<T>) => (
	<TextInput leftSection={<At width={20}/>} type='email' {...props}/>
)
