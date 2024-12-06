'use client'

import {Rating as MRating, type RatingProps as MRatingProps} from '@mantine/core'
import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'


export type RatingProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<MRatingProps, 'value' | 'defaultValue'>;

export function Rating<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	...props
}: RatingProps<T>) {
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
		<MRating
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