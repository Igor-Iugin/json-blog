'use client'

import {Check} from '@gravity-ui/icons'
import {
	type ComboboxData,
	type ComboboxItem,
	type ComboboxItemGroup,
	type ComboboxLikeRenderOptionInput,
	Group,
	Loader,
	type ScrollAreaAutosizeProps,
	Select as MSelect,
	type SelectProps as MSelectProps,
} from '@mantine/core'
import {type FC, forwardRef, type ReactNode, type Ref, type SVGProps, useMemo} from 'react'

import {runIfFn} from '@/shared/lib/react'


export type SelectOption<T extends string = string, U extends object = object> = Omit<ComboboxItem, 'value'> & {
	icon?: FC<SVGProps<SVGSVGElement>> | ReactNode
	value: T
} & U

export interface SelectProps<S extends string = string, R extends object = object>
	extends Omit<MSelectProps, 'value' | 'onChange' | 'renderOption'> {
	value?: SelectOption<S, R> | null
	onScrollToBottom?: () => void
	isLoading?: boolean
	onChange?: (value: string, item: SelectOption<S, R>) => void
	renderOption?: (item: ComboboxLikeRenderOptionInput<SelectOption<S, R>>) => ReactNode
}

const castValue = (item: ComboboxItem | null): ComboboxItem | null =>
	item && item?.value ? ({...item, value: item?.value?.toString()}) : null

const parseData = (data: ComboboxData | undefined, value: ComboboxItem | null): ComboboxData | undefined => {
	if (!value || !value?.value) return data
	if (data && data.some(d => !!(d as ComboboxItemGroup)?.group)) return data

	const casted = castValue(value) as ComboboxItem

	if (data && data.length >= 1) {
		if (data.find(item => (item as ComboboxItem).value === casted?.value))
			return data
		else
			return [casted, ...data]
	} else {
		return [casted]
	}
}


export const SelectCheckIcon = () => (
	<Check style={{marginInlineStart: 'auto'}}/>
)

const renderSelectOption = <S extends string = string, R extends object = object>({
	option: {icon: Icon, label},
	checked,
}: ComboboxLikeRenderOptionInput<SelectOption<S, R>>) => (
		<Group flex='1' gap='xs' wrap='nowrap'>
			{Icon && runIfFn(Icon)}
			{label}
			{checked && <SelectCheckIcon/>}
		</Group>
	)

export const Select = forwardRef(<S extends string = string, R extends object = object>(
	{
		data,
		onScrollToBottom,
		scrollAreaProps,
		isLoading,
		rightSection,
		value = null,
		leftSection,
		...props
	}: SelectProps<S, R>,
	ref: Ref<HTMLInputElement>,
) => {
	const _data = useMemo(() => parseData(data, value), [data, value])
	const areaProps = useMemo<ScrollAreaAutosizeProps>(() => ({
		...scrollAreaProps,
		viewportProps: {
			...scrollAreaProps?.viewportProps,
			onScroll: e => {
				const {scrollTop, scrollHeight, clientHeight} = e.currentTarget
				const calc = scrollTop - (scrollHeight - clientHeight)
				if (calc < 1 && calc > -1) {
					onScrollToBottom?.()
				}
			},
		},
	}), [onScrollToBottom, scrollAreaProps])

	return (
		<MSelect
			// @ts-ignore
			renderOption={renderSelectOption<S, R>}
			{...props}
			data={_data}
			value={!!value?.value ? value.value : null}
			scrollAreaProps={areaProps}
			leftSection={leftSection || value?.icon && runIfFn(value?.icon, {width: 20}) || undefined}
			rightSection={isLoading ? <Loader size={18}/> : rightSection}
			ref={ref}
		/>
	)
}) as unknown as <S extends string = string, R extends object = object>(props: SelectProps<S, R>) => ReactNode
