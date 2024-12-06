'use client'

import {MultiSelect as MMultiSelect, type MultiSelectProps as MMultiSelectProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type MultiSelectProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MMultiSelectProps, 'value' | 'defaultValue'>;

export function MultiSelect<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: MultiSelectProps<T>) {
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
		<MMultiSelect
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