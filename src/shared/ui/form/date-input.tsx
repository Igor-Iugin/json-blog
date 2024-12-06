'use client'

import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'

import type {DateInputProps as IDateInputProps} from '@/shared/ui/date-input'
import {DateInput as IDateInput} from '@/shared/ui/date-input'


export type DateInputProps<T extends FieldValues> = UseControllerProps<T> & IDateInputProps

export const DateInput = <T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: DateInputProps<T>) => {
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
		<IDateInput
			value={value}
			onChange={v => {
				fieldOnChange(v)
				onChange?.(v)
			}}
			error={fieldState.error?.message}
			{...field}
			{...props}
		/>
	)
}