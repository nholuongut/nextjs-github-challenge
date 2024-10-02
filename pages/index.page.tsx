import { ReactElement, useState } from 'react'

export default function Home(): ReactElement {
  const [results, setResults] = useState([])

  const search = async (e) => {
    e.preventDefault()
    const q = e.target.search.value

    const res = await fetch('/api/search', {
      body: JSON.stringify({
        q,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()

    setResults(result)
  }

  return (
    <div>
      <form onSubmit={search}>
        <input name="search" />
        <input type="submit" />
      </form>
      {JSON.stringify(results)}
    </div>
  )
}
