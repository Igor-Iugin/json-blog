'use client'

import type {FormEventHandler, FormHTMLAttributes} from 'react'
import type {FieldValues, UseFormReturn} from 'react-hook-form'
import {FormProvider} from 'react-hook-form'


interface FormProps<
	TFieldValues extends FieldValues,
	TContext = object,
	TTransformedValues extends FieldValues | undefined = undefined,
> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
	form: UseFormReturn<TFieldValues, TContext, TTransformedValues>
	onSubmit: FormEventHandler<HTMLFormElement>
}

export function Form<
	TFieldValues extends FieldValues = FieldValues,
	TContext = object,
	TTransformedValues extends FieldValues | undefined = undefined,
>({
	form,
	children,
	onSubmit,
	...rest
}: FormProps<TFieldValues, TContext, TTransformedValues>) {
	return (
		<FormProvider {...form}>
			<form onSubmit={onSubmit} {...rest}>
				{children}
			</form>
		</FormProvider>
	)
}
