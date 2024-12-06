'use client'

import {ChevronDown, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Text} from '@gravity-ui/icons'
import {Button, Menu, MenuDropdown, MenuItem, MenuTarget} from '@mantine/core'
import {useRichTextEditorContext} from '@mantine/tiptap'
import type {ReactNode} from 'react'

import {cn} from '@/shared/lib/utils'

import css from '../styles/text-editor.module.css'

import {type CreateControlProps, useTextEditorControl} from './control-base'


type HeadingItemProps = Omit<Required<CreateControlProps>, 'icon' | 'isDisabled'> & { icon: ReactNode }

const controls: HeadingItemProps[] = [
	{
		label: 'paragraph',
		icon: <Text/>,
		isActive: {name: 'paragraph'},
		operation: {name: 'setParagraph'},
	},
	{
		label: 'h1ControlLabel',
		icon: <Heading1/>,
		isActive: {name: 'heading', attributes: {level: 1}},
		operation: {name: 'toggleHeading', attributes: {level: 1}},
	},
	{
		label: 'h2ControlLabel',
		icon: <Heading2/>,
		isActive: {name: 'heading', attributes: {level: 2}},
		operation: {name: 'toggleHeading', attributes: {level: 2}},
	},
	{
		label: 'h3ControlLabel',
		icon: <Heading3/>,
		isActive: {name: 'heading', attributes: {level: 3}},
		operation: {name: 'toggleHeading', attributes: {level: 3}},
	},
	{
		label: 'h4ControlLabel',
		icon: <Heading4/>,
		isActive: {name: 'heading', attributes: {level: 4}},
		operation: {name: 'toggleHeading', attributes: {level: 4}},
	},
	{
		label: 'h5ControlLabel',
		icon: <Heading5/>,
		isActive: {name: 'heading', attributes: {level: 5}},
		operation: {name: 'toggleHeading', attributes: {level: 5}},
	},
	{
		label: 'h6ControlLabel',
		icon: <Heading6/>,
		isActive: {name: 'heading', attributes: {level: 6}},
		operation: {name: 'toggleHeading', attributes: {level: 6}},
	},
]

const slicedControls = controls.slice(1)

const HeadingControlItem = ({icon, ...props}: HeadingItemProps) => {
	const {label, active, ...rest} = useTextEditorControl(props)

	return (
		<MenuItem
			{...rest}
			data-active={active || undefined}
			className={cn(css.control, css.controlButton)}
			leftSection={icon}
		>
			{label}
		</MenuItem>
	)
}


export const HeadingControl = () => {
	const {editor} = useRichTextEditorContext()
	const isActive = slicedControls.some(({isActive}) => editor?.isActive(isActive.name, isActive.attributes))

	return (
		<Menu>
			<MenuTarget>
				<Button
					leftSection={<Heading/>}
					variant='outline'
					color='gray'
					c='#000000d9'
					px='6px'
					data-active={isActive || undefined}
					classNames={{section: 'me-0', root: css.control}}
				>
					<ChevronDown/>
				</Button>
			</MenuTarget>
			<MenuDropdown>
				{controls.map(control => <HeadingControlItem key={control.label} {...control}/>)}
			</MenuDropdown>
		</Menu>
	)
}