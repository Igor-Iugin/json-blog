import {Input} from '@mantine/core'


export const InputWrapper = Input.Wrapper.extend({
	defaultProps: {
		inputWrapperOrder: ['label', 'input', 'description', 'error'],
	},
})