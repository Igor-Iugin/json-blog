import type {AnchorProps as MAnchorProps} from '@mantine/core'
import {Anchor as MAnchor} from '@mantine/core'
import type {Ref} from 'react'


export const Link = (props: MAnchorProps & { ref?: Ref<HTMLAnchorElement> }) => (
	<MAnchor {...props} />
)
