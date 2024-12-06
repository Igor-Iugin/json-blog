import type {AnchorProps as MAnchorProps, ButtonProps} from '@mantine/core'
import {Anchor as MAnchor, Button} from '@mantine/core'
import type {Ref} from 'react'


export const LinkButton = ({children, ref, ...rest}: ButtonProps & MAnchorProps & { ref?: Ref<HTMLAnchorElement> }) => (
	<Button component={MAnchor} {...rest} ref={ref}>{children}</Button>
)
