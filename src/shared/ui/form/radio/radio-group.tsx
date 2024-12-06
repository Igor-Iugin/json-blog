'use client'

import {RadioGroup as MRadioGroup, type RadioGroupProps as MRadioGroupProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type RadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MRadioGroupProps, 'value' | 'defaultValue'>;

export function RadioGroup<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: RadioGroupProps<T>) {
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
		<MRadioGroup
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