import {z} from 'zod'


const envSchema = z.object({
	MODE: z.union([z.literal('development'), z.literal('production')]),
	DEV: z.boolean(),
	PROD: z.boolean(),
	BASE_URL: z.string(),
	API_ENDPOINT: z.string(),
})

export const env = envSchema.parse(import.meta.env)

