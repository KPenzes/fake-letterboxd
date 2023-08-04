import { PeopleListItem } from './people-list-item';

export function PeopleList({ people }) {
  return (
    <ul className="people-list">
      {people.map((people) => (
        <PeopleListItem key={people.id} people={people} />
      ))}
    </ul>
  )
}
