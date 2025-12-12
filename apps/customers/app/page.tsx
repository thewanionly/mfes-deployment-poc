import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Customers</h1>
        <Button appName='customers' className={styles.secondary}>
          Learn more here
        </Button>
      </main>
    </div>
  )
}
