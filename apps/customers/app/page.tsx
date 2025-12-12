import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button appName='customers' className={styles.secondary}>
          Customers
        </Button>
      </main>
    </div>
  )
}
