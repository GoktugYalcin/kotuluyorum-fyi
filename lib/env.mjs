import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    CONTENTFUL_BASE_URL: z.string().url(),
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_PREVIEW_TOKEN: z.string(),
    CONTENTFUL_DELIVERY_TOKEN: z.string(),
    CONTENTFUL_MANAGEMENT_TOKEN: z.string()
  },
  server: {
    CONTENTFUL_BASE_URL: z.string().url(),
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_PREVIEW_TOKEN: z.string(),
    CONTENTFUL_DELIVERY_TOKEN: z.string(),
    CONTENTFUL_MANAGEMENT_TOKEN: z.string()
  },
  runtimeEnv: {
    CONTENTFUL_BASE_URL: z.string().url(),
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_PREVIEW_TOKEN: z.string(),
    CONTENTFUL_DELIVERY_TOKEN: z.string(),
    CONTENTFUL_MANAGEMENT_TOKEN: z.string()
  }
})
