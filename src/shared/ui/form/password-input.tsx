'use client'

import {PasswordInput as MPasswordInput, type PasswordInputProps as MPasswordInputProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type PasswordInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MPasswordInputProps, 'value' | 'defaultValue'>;

export function PasswordInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: PasswordInputProps<T>) {
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
		<MPasswordInput
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