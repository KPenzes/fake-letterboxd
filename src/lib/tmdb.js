export async function fetchPopularMovies() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  try {
    const res = await fetch(url)

    // Case 2 - the status code is different from 200
    if (res.status !== 200) return null

    const data = await res.json()
    return data.results
  } catch (err) {
    // Case 1 - the API couldn’t be reached
    console.error(err)
    return null
  }
}

export async function fetchMovie(movieId) {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  try {
    const res = await fetch(url)
    if (res.status !== 200) return null
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function fetchPopularPersons() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`

  try {
    const res = await fetch(url)

    if (res.status !== 200) return null

    const data = await res.json()
    return data.results
  } catch (err) {
    console.error(err)
    return null
  }
}
