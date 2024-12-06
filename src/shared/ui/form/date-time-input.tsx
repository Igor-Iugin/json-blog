'use client'

import {DateTimePicker as MDateTimePicker, type DateTimePickerProps as MDateTimePickerProps} from '@mantine/dates'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type DateTimeInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MDateTimePickerProps, 'value' | 'defaultValue'>;

export function DateTimeInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: DateTimeInputProps<T>) {
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
		<MDateTimePicker
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