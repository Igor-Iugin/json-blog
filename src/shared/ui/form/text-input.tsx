'use client'

import {TextInput as MTextInput, type TextInputProps as MTextInputProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type TextInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MTextInputProps, 'value' | 'defaultValue'>;

export function TextInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: TextInputProps<T>) {
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
		<MTextInput
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