'use client'

import {Switch as MSwitch, type SwitchProps as MSwitchProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'

import {SwitchGroup} from './switch-group'


export type SwitchProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MSwitchProps, 'value' | 'checked' | 'defaultValue'>;

export function Switch<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: SwitchProps<T>) {
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
		<MSwitch
			value={value}
			checked={value}
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

Switch.Item = MSwitch
Switch.Group = SwitchGroup