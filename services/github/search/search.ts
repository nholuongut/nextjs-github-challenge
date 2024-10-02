import getClient from '@/services/github/github'
import searchResParser, { SearchResParsed } from '@/services/github/search/searchResultParser'

export default async function search({ query }: { query: string }): Promise<SearchResParsed[]> {
  const results = await getClient().search({ q: query }).forRepositories()
  return results.data.map(searchResParser)
}
