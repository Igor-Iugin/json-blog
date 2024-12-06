// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = (value: any): value is Function =>
	typeof value === 'function'

export const runIfFn = <T, U>(
	valueOrFn: T | ((...fnArgs: U[]) => T),
	...args: U[]
): T => isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn