import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    CONTENTFUL_BASE_URL: z.string(),
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_PREVIEW_TOKEN: z.string(),
    CONTENTFUL_DELIVERY_TOKEN: z.string(),
    CONTENTFUL_MANAGEMENT_TOKEN: z.string()
  },
  server: {
    CONTENTFUL_BASE_URL: z.string(),
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_PREVIEW_TOKEN: z.string(),
    CONTENTFUL_DELIVERY_TOKEN: z.string(),
    CONTENTFUL_MANAGEMENT_TOKEN: z.string()
  },
  runtimeEnv: {
    CONTENTFUL_BASE_URL: process.env.CONTENTFUL_BASE_URL,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_MANAGEMENT_TOKEN: process.env.CONTENTFUL_MANAGEMENT_TOKEN
  }
})
