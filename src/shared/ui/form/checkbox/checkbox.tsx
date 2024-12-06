'use client'

import {Checkbox as MCheckbox, type CheckboxProps as MCheckboxProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'

import {CheckboxGroup} from './checkbox-group'


export type CheckboxProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MCheckboxProps, 'checked' | 'defaultValue'>;

export const Checkbox = <T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: CheckboxProps<T>) => {
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
		<MCheckbox
			error={fieldState.error?.message}
			value={value}
			checked={value}
			onChange={(e) => {
				fieldOnChange(e)
				onChange?.(e)
			}}
			{...field}
			{...props}
		/>
	)
}

Checkbox.Group = CheckboxGroup
Checkbox.Item = MCheckbox