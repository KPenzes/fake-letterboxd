export default function HomePage() {
  const appTitle = 'My Movie Library'
  const hasMoreMovies = true
  const displayTitle = true
  // const uppercaseTitle = false
  // const displayEndMessage = true
  const seeMoreDomain = 'www.themoviedb.org'

  const movies = [
    { id: 0, title: 'Indiana Jones and the Dial of Destiny' },
    { id: 1, title: 'Guardians of the Galaxy Vol. 3' },
    { id: 2, title: 'Mission: Impossible - Dead Reckoning Part One' },
    { id: 3, title: 'Spider-Man: Across the Spider-Verse', featured: true },
    { id: 4, title: 'The Super Mario Bros. Movie' },
  ]


  return (
    <main>

      <h1>{displayTitle && appTitle}</h1>
      <p>Here is a list of popular movies:</p>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className='featured'>{movie.title}</li>
        ))}
      </ul>

      <p>
        {hasMoreMovies ? (
          <a href="https://www.themoviedb.org/">See more</a>)
          : ('Nothing more to see here.')
        }
      </p>
    </main>
  )
}
