import {format} from 'date-fns/fp'
import {z} from 'zod'

import {DATE_FORMAT, DATE_TIME_FORMAT} from '@/shared/const/date'


/** Transform date to string date format */
export const dateTransform = (value: Date | null) => value && format(DATE_FORMAT)(value)

/** Transform date to string date-time format */
export const dateTimeTransform = (value: Date) => format(DATE_TIME_FORMAT)(value)


export const selectOptionSchema = <T>(schema: z.Schema<T> = z.string() as unknown as z.Schema<T>) => z.object({
	value: schema,
	label: z.string(),
	disabled: z.boolean().optional(),
	icon: z.any().optional(),
})
