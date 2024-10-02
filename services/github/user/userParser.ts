export interface UserParsed {
  avatar_url: string
  url: string
  name: string
}

export default function userParser(user): UserParsed {
  return {
    name: user.login,
    url: user.url,
    avatar_url: user.avatar_url,
  }
}
