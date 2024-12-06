'use client'

import {FileInput as MFileInput, type FileInputProps as MFileInputProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type FileInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MFileInputProps, 'value' | 'defaultValue' | 'onChange'>;

export function FileInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	...props
}: FileInputProps<T>) {
	const {
		field: {value, ...field},
		fieldState,
	} = useController<T>({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	})

	return (
		<MFileInput
			value={value}
			error={fieldState.error?.message}
			{...field}
			{...props}
		/>
	)
}