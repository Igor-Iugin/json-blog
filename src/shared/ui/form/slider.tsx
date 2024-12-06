'use client'

import {Slider as MSlider, type SliderProps as MSliderProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type SliderProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MSliderProps, 'value' | 'defaultValue'>;

export function Slider<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: SliderProps<T>) {
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
		<MSlider
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