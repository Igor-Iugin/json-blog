import {format} from 'date-fns/fp'


export const DATE_FORMAT = 'yyyy-MM-dd'
export const TIME_FORMAT = 'HH:mm'
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`
export const DOTTED_FORMAT = 'dd.MM.yyyy'

export const TODAY = new Date()
export const TODAY_DATE = format(DATE_FORMAT)(TODAY)
