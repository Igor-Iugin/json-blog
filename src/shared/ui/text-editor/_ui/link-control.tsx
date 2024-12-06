'use client'

import {Link, LinkSlash} from '@gravity-ui/icons'
import {
	Button,
	type Factory,
	factory,
	Popover,
	PopoverDropdown,
	PopoverTarget,
	rem,
	TextInput,
	Tooltip,
	UnstyledButton,
	useProps,
	useResolvedStylesApi,
} from '@mantine/core'
import {useDisclosure, useInputState, useWindowEvent} from '@mantine/hooks'
import {
	type RichTextEditorLinkControlProps,
	type RichTextEditorStylesNames,
	useRichTextEditorContext,
} from '@mantine/tiptap'
import {useState} from 'react'

import {ControlBase, createControl} from './control-base'


export const UnlinkControl = createControl({
	label: 'unlinkControlLabel',
	icon: (props) => <LinkSlash {...props} />,
	operation: {name: 'unsetLink'},
})

type RichTextEditorLinkControlFactory = Factory<{
	props: RichTextEditorLinkControlProps
	ref: HTMLButtonElement
	stylesNames: RichTextEditorStylesNames
	compound: true
}>

const defaultProps: Partial<RichTextEditorLinkControlProps> = {}

export const LinkControl = factory<RichTextEditorLinkControlFactory>(
	(_props, ref) => {
		const props = useProps('RichTextEditorLinkControl', defaultProps, _props)
		const {
			classNames,
			className,
			style,
			styles,
			vars,
			icon,
			popoverProps,
			disableTooltips,
			initialExternal,
			...others
		} = props

		const ctx = useRichTextEditorContext()

		const stylesApiProps = {classNames, styles}

		const [url, setUrl] = useInputState('')
		const [external, setExternal] = useState(initialExternal)
		const [opened, {open, close}] = useDisclosure(false)

		const handleOpen = () => {
			open()
			const linkData = ctx.editor?.getAttributes('link')
			setUrl(linkData?.href || '')
			setExternal(linkData?.href ? linkData?.target === '_blank' : initialExternal)
		}

		const handleClose = () => {
			close()
			setUrl('')
			setExternal(initialExternal)
		}

		const setLink = () => {
			handleClose()
			url === ''
				? ctx.editor?.chain().focus().extendMarkRange('link').unsetLink().run()
				: ctx.editor
					?.chain()
					.focus()
					.extendMarkRange('link')
					.setLink({href: url, target: external ? '_blank' : null})
					.run()
		}

		const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter') {
				event.preventDefault()
				setLink()
			}
		}

		useWindowEvent('edit-link', handleOpen, false)

		const {resolvedClassNames, resolvedStyles} =
			useResolvedStylesApi<RichTextEditorLinkControlFactory>({classNames, styles, props})

		return (
			<Popover
				trapFocus
				shadow='md'
				withinPortal
				opened={opened}
				onChange={(_opened) => !_opened && handleClose()}
				offset={-44}
				zIndex={10000}
				{...popoverProps}
			>
				<PopoverTarget>
					<ControlBase
						icon={p => <Link {...p}/>}
						{...others}
						aria-label={ctx.labels.linkControlLabel}
						title={ctx.labels.linkControlLabel}
						onClick={handleOpen}
						active={ctx.editor?.isActive('link')}
						ref={ref}
						classNames={resolvedClassNames}
						styles={resolvedStyles}
						className={className}
						style={style}
					/>
				</PopoverTarget>

				<PopoverDropdown {...ctx.getStyles('linkEditorDropdown', stylesApiProps)}>
					<div {...ctx.getStyles('linkEditor', stylesApiProps)}>
						<TextInput
							placeholder={ctx.labels.linkEditorInputPlaceholder}
							aria-label={ctx.labels.linkEditorInputLabel}
							type='url'
							value={url}
							onChange={setUrl}
							classNames={{input: ctx.getStyles('linkEditorInput', stylesApiProps).className}}
							onKeyDown={handleInputKeydown}
							rightSection={
								<Tooltip
									label={
										external ? ctx.labels.linkEditorExternalLink : ctx.labels.linkEditorInternalLink
									}
									events={{hover: true, focus: true, touch: true}}
									withinPortal
									withArrow
									disabled={disableTooltips}
									zIndex={10000}
								>
									<UnstyledButton
										onClick={() => setExternal((e) => !e)}
										data-active={external || undefined}
										{...ctx.getStyles('linkEditorExternalControl', stylesApiProps)}
									>
										<LinkSlash style={{width: rem(14), height: rem(14)}}/>
									</UnstyledButton>
								</Tooltip>
							}
						/>

						<Button
							variant='default'
							onClick={setLink}
							{...ctx.getStyles('linkEditorSave', stylesApiProps)}
						>
							{ctx.labels.linkEditorSave}
						</Button>
					</div>
				</PopoverDropdown>
			</Popover>
		)
	},
)