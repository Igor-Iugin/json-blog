'use client'

import {PinInput as MPinInput, type PinInputProps as MPinInputProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type PinInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MPinInputProps, 'value' | 'defaultValue'>;

export function PinInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: PinInputProps<T>) {
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
		<MPinInput
			value={value}
			onChange={(e) => {
				fieldOnChange(e)
				onChange?.(e)
			}}
			error={!(fieldState.error?.message == null)}
			{...field}
			{...props}
		/>
	)
}