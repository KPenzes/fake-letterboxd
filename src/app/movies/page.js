import { MovieList } from '../../components/movie-list'
import { fetchPopularMovies } from '../../lib/tmdb'
import { Suspense } from 'react'

export const metadata = {
  title: 'Popular Movies',
}

export default function MoviesPage() {

  return (
    <>
      <h1>Popular Movies</h1>
      <Suspense fallback={<p>Loading movies...</p>}>
        <PopularMovies />
      </Suspense>
        <p>
          <a href="https://www.themoviedb.org/">See more</a>
        </p>
    </>
  )
}

async function PopularMovies() {
  const movies = await fetchPopularMovies()

  if (movies === null) {
    return <p>An error occured 🙁</p>
  }

  return <MovieList movies={movies} />
}
