import { fetchPopularPersons } from '../../lib/tmdb'
import { PeopleList } from '../../components/people-list'

export const metadata = {
  title: 'People',
}

export default async function PeoplePage() {
  const people = await fetchPopularPersons()
  return (
    <>
      <h1>Hi from Peoples Page</h1>
      <PeopleList people={people} />
    </>
  )
}
