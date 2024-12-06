'use client'

import {Link, RichTextEditor} from '@mantine/tiptap'
import CharCounter from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import {useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {labels} from './_constants/labels'
import {
	AlignCenterControl,
	AlignJustifyControl,
	AlignLeftControl,
	AlignRightControl,
	BlockquoteControl,
	BoldControl,
	BulletListControl,
	CodeControl,
	HighlightControl,
	HrControl,
	ItalicControl,
	OrderedListControl,
	RedoControl,
	StrikeThroughControl,
	UnderlineControl,
	UndoControl,
} from './_ui/controls'
import {HeadingControl} from './_ui/heading-control'
import {LinkControl, UnlinkControl} from './_ui/link-control'


export function TextEditor({content}: {
	content: string
}) {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Link,
			TextAlign.configure({types: ['heading', 'paragraph']}),
			CharCounter,
			Highlight,
			Underline,
		],
		content,
	})

	return (
		<RichTextEditor editor={editor} labels={labels}>
			<RichTextEditor.Toolbar sticky stickyOffset={52}>
				<RichTextEditor.ControlsGroup>
					<UndoControl/>
					<RedoControl/>
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<BoldControl/>
					<ItalicControl/>
					<UnderlineControl/>
					<StrikeThroughControl/>
					<HighlightControl/>
					<CodeControl/>
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<HeadingControl/>
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<BlockquoteControl/>
					<HrControl/>
					<BulletListControl/>
					<OrderedListControl/>
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<LinkControl/>
					<UnlinkControl/>
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<AlignLeftControl/>
					<AlignCenterControl/>
					<AlignJustifyControl/>
					<AlignRightControl/>
				</RichTextEditor.ControlsGroup>
			</RichTextEditor.Toolbar>

			<RichTextEditor.Content/>
		</RichTextEditor>
	)
}