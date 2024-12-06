'use client'

import {Radio as MRadio, type RadioProps as MRadioProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'

import {RadioGroup} from './radio-group'


export type RadioProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MRadioProps, 'value' | 'defaultValue'>;

export function Radio<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: RadioProps<T>) {
	const {
		field: {value, onChange: fieldOnChange, ...field},
	} = useController<T>({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	})

	return (
		<MRadio
			value={value}
			onChange={(e) => {
				fieldOnChange(e)
				onChange?.(e)
			}}
			{...field}
			{...props}
		/>
	)
}

Radio.Group = RadioGroup
Radio.Item = MRadio