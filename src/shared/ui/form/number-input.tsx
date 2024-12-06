'use client'

import {NumberInput as MNumberInput, type NumberInputProps as MNumberInputProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type NumberInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MNumberInputProps, 'value' | 'defaultValue'>;

export function NumberInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: NumberInputProps<T>) {
	const {
		field: {value, onChange: fieldOnChange, ...field},
		fieldState,
	} = useController<T>({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	})

	return (
		<MNumberInput
			value={value}
			onChange={(e) => {
				fieldOnChange(e)
				onChange?.(e)
			}}
			error={fieldState.error?.message}
			{...field}
			{...props}
		/>
	)
}