import { PeopleListItem } from './people-list-item';
import styles from './people-list.module.css';

export function PeopleList({ people }) {
  return (
    <ul className={styles.peopleList}>
      {people.map((people) => (
        <PeopleListItem key={people.id} people={people} />
      ))}
    </ul>
  )
}
