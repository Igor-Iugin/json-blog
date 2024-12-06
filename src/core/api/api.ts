'use client'

import ky from 'ky'

import {env} from '@/core/config/env'


export const api = ky.create({
	prefixUrl: env.API_ENDPOINT,
	retry: 1,
})
