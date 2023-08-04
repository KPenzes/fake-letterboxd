import { MovieList } from '../components/movie-list';
import { PeopleList } from '../components/people-list';

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
    { id: 4, title: 'The Super Mario Bros. Movie' }
  ]
  const people = [
    { id: 0, name: 'Gabriel Guevara' },
    { id: 1, name: 'Gary Coleman' },
    { id: 2, name: 'Angeli Khang' },
    { id: 3, name: 'Katherine LaNasa' },
    { id: 4, name: 'Rebecca Ferguson' }
  ]

  return (
    <main>
      <h1>{displayTitle && appTitle}</h1>
      <p>Here is a list of popular movies:</p>
      <MovieList movies={movies}/>
      <p>
        {hasMoreMovies ? (
          <a href="https://www.themoviedb.org/">See more</a>)
          : ('Nothing more to see here.')
        }
      </p>
      <PeopleList people={people}/>
    </main>
  )
}
