'use client'

import {Button, type ButtonProps, type PolymorphicComponentProps} from '@mantine/core'
import {forwardRef} from 'react'
import {useFormContext} from 'react-hook-form'


interface SubmitButtonProps extends PolymorphicComponentProps<'button', ButtonProps> {
	/**
	 * Disable the submit button if the form is untouched.
	 *
	 * Change the default behavior by updating
	 * `SubmitButton.disableIfUntouched`
	 */
	disableIfUntouched?: boolean
	/**
	 * Disable the submit button if the form is invalid.
	 *
	 * Change the default behavior by updating
	 * `SubmitButton.disableIfInvalid`
	 */
	disableIfInvalid?: boolean
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(({
	disableIfInvalid,
	disableIfUntouched,
	disabled,
	loading,
	children = 'Сохранить',
	...rest
}, ref) => {
	const {formState} = useFormContext()

	const isDisabled =
		(disableIfUntouched && !formState.isDirty) ||
		(disableIfInvalid && !formState.isValid) ||
		disabled

	return (
		<Button
			type='submit'
			{...rest}
			ref={ref}
			loading={loading ?? formState.isSubmitting}
			disabled={isDisabled}
		>
			{children}
		</Button>
	)
})
