
import Link from 'next/link'
import Login from './components/Login'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div>
        <Login />
        <Link className={styles.tosButton} href='/terms'>Read our terms of service</Link>
      </div>

    </main>
  )
}
