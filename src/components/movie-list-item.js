import styles from './movie-list-item.module.css';
import Link from 'next/'

export function MovieListItem({ movie }) {
  return (
    <li className={styles.movieListItem}>
    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  )
}
