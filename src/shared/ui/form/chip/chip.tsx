'use client'

import {Chip as MChip, type ChipProps as MChipProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'

import {ChipGroup} from './chip-group'


export type ChipProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MChipProps, 'value' | 'defaultValue'>

export const Chip = <T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	children,
	...props
}: ChipProps<T>) => {
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
		<MChip
			value={value}
			checked={value}
			onChange={(e) => {
				fieldOnChange(e)
				onChange?.(e)
			}}
			{...field}
			{...props}
		>
			{children}
		</MChip>
	)
}

Chip.Group = ChipGroup
Chip.Item = MChip