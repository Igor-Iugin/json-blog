'use client'

import {TimeInput as MTimeInput, type TimeInputProps as MTimeInputProps} from '@mantine/dates'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type TimeInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MTimeInputProps, 'value' | 'defaultValue'>

export function TimeInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: TimeInputProps<T>) {
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
		<MTimeInput
			error={fieldState.error?.message}
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