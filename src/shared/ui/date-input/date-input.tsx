'use client'

import {Calendar} from '@gravity-ui/icons'
import type {DatePickerInputProps as MDatePickerInputProps, DatesRangeValue, DateValue} from '@mantine/dates'
import {DatePickerInput as MDatePickerInput, type DatePickerType} from '@mantine/dates'
import {forwardRef} from 'react'


type DateInputValue = string | DateValue | Date[] | DatesRangeValue

export interface DateInputProps extends Omit<MDatePickerInputProps<DatePickerType>, 'value' | 'defaultValue'> {
	value?: DateInputValue
	defaultValue?: DateInputValue
}

const parseValue = (v?: DateInputValue) => typeof v === 'string' ? new Date(v) : v

const dateFormat = 'DD.MM.YYYY'

export const DateInput = forwardRef<HTMLButtonElement, DateInputProps>(({
	value,
	defaultValue,
	valueFormat,
	...props
}, ref) => (
	<MDatePickerInput
		value={parseValue(value)}
		defaultValue={parseValue(defaultValue)}
		valueFormat={valueFormat || dateFormat}
		leftSection={<Calendar width={20}/>}
		leftSectionPointerEvents='none'
		{...props}
		ref={ref}
	/>
))
