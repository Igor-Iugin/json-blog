'use client'

import {ActionIcon, type Factory, factory, rem, useProps} from '@mantine/core'
import {type RichTextEditorControlProps, useRichTextEditorContext} from '@mantine/tiptap'
import {type CSSProperties, type FC, forwardRef} from 'react'

import type {TextEditorLabels} from '../_domain'
import css from '../styles/text-editor.module.css'


export type RichTextEditorControlStylesNames = 'control'

export type RichTextEditorControlFactory = Factory<{
	props: RichTextEditorControlProps
	ref: HTMLButtonElement
	stylesNames: RichTextEditorControlStylesNames
	compound: true
}>

const defaultProps: Partial<RichTextEditorControlProps> = {
	interactive: true,
}

const ControlFactory = factory<RichTextEditorControlFactory>((_props, ref) => {
	const props = useProps('RichTextEditorControl', defaultProps, _props)
	const {
		classNames,
		className,
		style,
		styles,
		vars,
		interactive,
		active,
		onMouseDown,
		disabled,
		...others
	} = props

	return (
		<ActionIcon
			{...others}
			className={css.control}
			disabled={disabled}
			data-rich-text-editor-control
			tabIndex={interactive ? 0 : -1}
			data-interactive={interactive || undefined}
			aria-pressed={(active && interactive) || undefined}
			aria-hidden={!interactive || undefined}
			data-active={active || undefined}
			ref={ref}
			size='md'
			c='#000000d9'
			onMouseDown={(event) => {
				event.preventDefault()
				onMouseDown?.(event)
			}}
		/>
	)
})

export interface RichTextEditorControlBaseProps extends RichTextEditorControlProps {
	icon?: FC<{ style: CSSProperties }>;
}

export const ControlBase = forwardRef<
	HTMLButtonElement,
	RichTextEditorControlBaseProps
>(({className, icon: Icon, ...others}: any, ref) => (
	<ControlFactory ref={ref} {...others}>
		<Icon style={{width: rem(16), height: rem(16)}}/>
	</ControlFactory>
))

ControlBase.displayName = 'text-editor/control-base'

export interface CreateControlProps {
	label: keyof TextEditorLabels
	icon: FC<{ style: CSSProperties }>
	isActive?: { name: string; attributes?: Record<string, any> | string }
	isDisabled?: (editor: any) => boolean
	operation: { name: string; attributes?: Record<string, any> | string }
}

export const useTextEditorControl = ({
	label,
	operation,
	isActive,
	isDisabled,
}: Omit<CreateControlProps, 'icon'>) => {
	const {labels, editor} = useRichTextEditorContext()

	return ({
		onClick: () => (editor as any)?.chain().focus()[operation.name](operation.attributes).run(),
		active: isActive?.name ? editor?.isActive(isActive.name, isActive.attributes) : false,
		disabled: isDisabled?.(editor) || false,
		label: (labels as TextEditorLabels)[label] as string,
	})
}

export function createControl({icon, ...rest}: CreateControlProps) {
	const Control = forwardRef<HTMLButtonElement, RichTextEditorControlBaseProps>((props, ref) => {
		const {label, ...params} = useTextEditorControl(rest)
		return (
			<ControlBase
				{...props}
				aria-label={label}
				title={label}
				ref={ref}
				icon={props.icon || icon}
				{...params}
			/>
		)
	})

	Control.displayName = `text-editor/${rest.label}`

	return Control
}