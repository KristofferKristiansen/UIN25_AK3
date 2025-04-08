import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '44qy4uuy',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v2025-04-08',
})
