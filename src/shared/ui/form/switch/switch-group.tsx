'use client'

import {SwitchGroup as MSwitchGroup, type SwitchGroupProps as MSwitchGroupProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type SwitchGroupProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MSwitchGroupProps, 'value' | 'checked' | 'defaultValue'>;

export function SwitchGroup<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: SwitchGroupProps<T>) {
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
		<MSwitchGroup
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