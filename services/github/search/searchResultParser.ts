import userParser, { UserParsed } from '@/services/github/user/userParser'

export interface SearchResParsed {
  id: string
  full_name: string
  url: string
  owner: UserParsed
}

export default function searchResParser(result): SearchResParsed {
  return {
    id: result.id,
    full_name: result.full_name,
    url: result.url,
    owner: userParser(result.owner),
  }
}
