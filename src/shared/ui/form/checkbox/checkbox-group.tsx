'use client'

import {CheckboxGroup as MCheckboxGroup, type CheckboxGroupProps as MCheckboxGroupProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type CheckboxGroupProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MCheckboxGroupProps, 'checked' | 'defaultValue'>;

export const CheckboxGroup = <T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: CheckboxGroupProps<T>) => {
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
		<MCheckboxGroup
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