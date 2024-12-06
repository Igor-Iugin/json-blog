'use client'

import type {UseFormProps} from 'react-hook-form'
import {type FieldValues, useForm as useRHFForm, type UseFormReturn} from 'react-hook-form'


export const useForm = <
	TFieldValues extends FieldValues = FieldValues,
	TTransformedValues extends FieldValues | undefined = undefined,
	TContext = any
>(props?: UseFormProps<TFieldValues, TContext>): UseFormReturn<TFieldValues, TContext, TTransformedValues> => {
	return useRHFForm<TFieldValues, TContext, TTransformedValues>(props)
}
