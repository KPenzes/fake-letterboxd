import Link from 'next/link';

export default function NavMenu() {
  return (
    <main>
      <p>Hello from NavMenu</p>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/movies">movies</Link>
      <Link href="/people">people</Link>
    </main>
  )
}
