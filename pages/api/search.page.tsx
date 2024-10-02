import type { NextApiRequest, NextApiResponse } from 'next'
import search from '@/services/github/search/search'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { q } = req.body
  const searchRes = await search({ query: q })
  return res.json({ result: searchRes })
}
