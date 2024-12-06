'use client'

import {
	ArrowUturnCcwLeft,
	ArrowUturnCwRight,
	Bold,
	Code,
	FileCode,
	FontCursor,
	Italic,
	ListOl,
	ListUl,
	Minus,
	QuoteClose,
	Strikethrough,
	TextAlignCenter,
	TextAlignJustify,
	TextAlignLeft,
	TextAlignRight,
	Underline,
} from '@gravity-ui/icons'

import {createControl} from './control-base'


export const BoldControl = createControl({
	label: 'boldControlLabel',
	icon: (props) => <Bold {...props} />,
	isActive: {name: 'bold'},
	operation: {name: 'toggleBold'},
})

export const ItalicControl = createControl({
	label: 'italicControlLabel',
	icon: (props) => <Italic {...props} />,
	isActive: {name: 'italic'},
	operation: {name: 'toggleItalic'},
})

export const UnderlineControl = createControl({
	label: 'underlineControlLabel',
	icon: (props) => <Underline {...props} />,
	isActive: {name: 'underline'},
	operation: {name: 'toggleUnderline'},
})

export const StrikeThroughControl = createControl({
	label: 'strikeControlLabel',
	icon: (props) => <Strikethrough {...props} />,
	isActive: {name: 'strike'},
	operation: {name: 'toggleStrike'},
})

export const BulletListControl = createControl({
	label: 'bulletListControlLabel',
	icon: (props) => <ListUl {...props} />,
	isActive: {name: 'bulletList'},
	operation: {name: 'toggleBulletList'},
})

export const OrderedListControl = createControl({
	label: 'orderedListControlLabel',
	icon: (props) => <ListOl {...props} />,
	isActive: {name: 'orderedList'},
	operation: {name: 'toggleOrderedList'},
})

export const BlockquoteControl = createControl({
	label: 'blockquoteControlLabel',
	icon: (props) => <QuoteClose {...props} />,
	isActive: {name: 'blockquote'},
	operation: {name: 'toggleBlockquote'},
})

export const AlignLeftControl = createControl({
	label: 'alignLeftControlLabel',
	icon: (props) => <TextAlignLeft {...props} />,
	operation: {name: 'setTextAlign', attributes: 'left'},
})

export const AlignRightControl = createControl({
	label: 'alignRightControlLabel',
	icon: (props) => <TextAlignRight {...props} />,
	operation: {name: 'setTextAlign', attributes: 'right'},
})

export const AlignCenterControl = createControl({
	label: 'alignCenterControlLabel',
	icon: (props) => <TextAlignCenter {...props} />,
	operation: {name: 'setTextAlign', attributes: 'center'},
})

export const AlignJustifyControl = createControl({
	label: 'alignJustifyControlLabel',
	icon: (props) => <TextAlignJustify {...props} />,
	operation: {name: 'setTextAlign', attributes: 'justify'},
})

export const CodeControl = createControl({
	label: 'codeControlLabel',
	icon: (props) => <Code {...props} />,
	isActive: {name: 'code'},
	operation: {name: 'toggleCode'},
})

export const CodeBlockControl = createControl({
	label: 'codeBlockControlLabel',
	icon: (props) => <FileCode {...props} />,
	isActive: {name: 'codeBlock'},
	operation: {name: 'toggleCodeBlock'},
})

export const HighlightControl = createControl({
	label: 'highlightControlLabel',
	icon: (props) => <FontCursor {...props} />,
	isActive: {name: 'highlight'},
	operation: {name: 'toggleHighlight'},
})

export const HrControl = createControl({
	label: 'hrControlLabel',
	icon: (props) => <Minus {...props} />,
	operation: {name: 'setHorizontalRule'},
})

export const UndoControl = createControl({
	label: 'undoControlLabel',
	icon: (props) => <ArrowUturnCcwLeft {...props} />,
	isDisabled: (editor) => !editor?.can().undo(),
	operation: {name: 'undo'},
})

export const RedoControl = createControl({
	label: 'redoControlLabel',
	icon: (props) => <ArrowUturnCwRight {...props} />,
	isDisabled: (editor) => !editor?.can().redo(),
	operation: {name: 'redo'},
})
