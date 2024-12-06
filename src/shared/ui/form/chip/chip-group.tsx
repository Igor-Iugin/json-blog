'use client'

import {ChipGroup as MChipGroup, type ChipGroupProps as MChipGroupProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type ChipGroupProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MChipGroupProps<boolean>, 'value' | 'defaultValue'>

export const ChipGroup = <T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	children,
	...props
}: ChipGroupProps<T>) => {
	const {
		field: {value, onChange: fieldOnChange, ...field},
	} = useController<T>({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	})

	return (
		<MChipGroup
			value={value}
			onChange={(e) => {
				fieldOnChange(e)
				onChange?.(e)
			}}
			{...field}
			{...props}
		>
			{children}
		</MChipGroup>
	)
}