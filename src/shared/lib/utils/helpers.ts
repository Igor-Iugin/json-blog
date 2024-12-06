import clsx from 'clsx'


export const sort = <T extends number>(a: T, b: T) => a > b ? 1 : a < b ? -1 : 0

export const getPercentage = (part: number, whole: number) => Math.round(part / whole * 100)

/** clsx wrapper */
export const cn = clsx
