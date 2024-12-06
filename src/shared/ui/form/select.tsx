'use client'

import {type FieldValues, useController, type UseControllerProps} from 'react-hook-form'

import type {SelectOption, SelectProps as ISelectProps} from '@/shared/ui/select'
import {Select as ISelect} from '@/shared/ui/select'


export interface SelectProps<
	S extends string = string,
	R extends object = object,
	T extends FieldValues = FieldValues,
> extends UseControllerProps<T>,
	Omit<ISelectProps, 'value' | 'defaultValue' | 'error' | 'name' | 'onChange'> {
	onChange?: (value: SelectOption<S, R> | null) => void
	onScrollToBottom?: () => void
	isLoading?: boolean
	hideRightSection?: boolean
}

/**
 * Component adopted for use in ChakraForm context
 * */
export function Select<
	S extends string = string,
	R extends object = object,
	T extends FieldValues = FieldValues,
>({
	name,
	control,
	defaultValue,
	rules,
	shouldUnregister,
	onChange,
	rightSection,
	...props
}: SelectProps<S, R, T>) {
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
		<ISelect<S, R>
			value={value}
			onChange={(_, option) => {
				fieldOnChange(option)
				onChange?.(option)
			}}
			error={fieldState.error?.message}
			{...props}
			{...field}
			rightSection={rightSection && value ? rightSection : undefined}
		/>
	)
}