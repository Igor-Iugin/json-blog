import type {TextEditorLabels} from '../_domain'


export const labels: TextEditorLabels = {
	// Controls labels
	paragraph: 'Текст',
	linkControlLabel: 'Ссылка',
	unlinkControlLabel: 'Удалить ссылку',
	colorPickerControlLabel: 'Цвет текста',
	highlightControlLabel: 'Выделенный',
	colorControlLabel: color => `${color}`,
	boldControlLabel: 'Жирный',
	italicControlLabel: 'Курсив',
	underlineControlLabel: 'Подчёркивание',
	strikeControlLabel: 'Зачеркивание',
	clearFormattingControlLabel: 'Очистить форматирование',
	bulletListControlLabel: 'Маркированный список',
	orderedListControlLabel: 'Нумерованный список',
	h1ControlLabel: 'Заголовок 1',
	h2ControlLabel: 'Заголовок 2',
	h3ControlLabel: 'Заголовок 3',
	h4ControlLabel: 'Заголовок 4',
	h5ControlLabel: 'Заголовок 5',
	h6ControlLabel: 'Заголовок 6',
	blockquoteControlLabel: 'Цитата',
	alignLeftControlLabel: 'Align text: left',
	alignCenterControlLabel: 'Align text: center',
	alignRightControlLabel: 'Align text: right',
	alignJustifyControlLabel: 'Align text: justify',
	codeControlLabel: 'Код в тексте',
	codeBlockControlLabel: 'Блок кода',
	subscriptControlLabel: 'Subscript',
	superscriptControlLabel: 'Superscript',
	unsetColorControlLabel: 'Unset color',
	hrControlLabel: 'Разделитель',
	undoControlLabel: 'Отменить',
	redoControlLabel: 'Повторить',

	// Task list
	tasksControlLabel: 'Task list',
	tasksSinkLabel: 'Decrease task level',
	tasksLiftLabel: 'Increase task level',

	// Link editor
	linkEditorInputLabel: 'Введите url',
	linkEditorInputPlaceholder: 'https://example.com/',
	linkEditorExternalLink: 'Открыть ссылку в новой вкладке',
	linkEditorInternalLink: 'Открыть ссылку в текущей вкладке',
	linkEditorSave: 'Сохранить',

	// Color picker control
	colorPickerCancel: 'Отмена',
	colorPickerClear: 'Clear color',
	colorPickerColorPicker: 'Color picker',
	colorPickerPalette: 'Color palette',
	colorPickerSave: 'Save',
	colorPickerColorLabel: (color) => `${color}`,
}