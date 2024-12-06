'use client'

import {
	SegmentedControl as MSegmentedControl,
	type SegmentedControlProps as MSegmentedControlProps,
} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type SegmentedControlProps<T extends FieldValues> =
	UseControllerProps<T> &
	Omit<MSegmentedControlProps, 'values' | 'defaultValues'>;

export function SegmentedControl<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: SegmentedControlProps<T>) {
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
		<MSegmentedControl
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