import styles from './people-list-item.module.css';

export function PeopleListItem({ people }){
  return <li className={styles.peopleListItem}>{people.name}</li>
}
