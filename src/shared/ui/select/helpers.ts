import type {SelectOption} from './select'


type TypeOrStr<T extends string | number> = T extends string ? T : string

export function toOption<T extends string | number>(
	value: T,
	label: string | undefined,
	props?: Omit<SelectOption<TypeOrStr<T>>, 'value' | 'label'> & { [p: string]: any },
): SelectOption<TypeOrStr<T>>

export function toOption<T extends string | number = string>(
	value: T | undefined | null,
	label: string | undefined,
	props?: Omit<SelectOption<TypeOrStr<T>>, 'value' | 'label'> & { [p: string]: any },
): SelectOption<TypeOrStr<T>> | null

export function toOption<T extends string | number = string>(
	value: T | undefined | null,
	label: string | undefined,
	props?: Omit<SelectOption<TypeOrStr<T>>, 'value' | 'label'> & { [p: string]: any },
): SelectOption<TypeOrStr<T>> | null {
	if (value) {
		return {
			...props,
			value: typeof value === 'string' ? value : value.toString(),
			label,
		} as SelectOption<TypeOrStr<T>>
	}

	return null
}