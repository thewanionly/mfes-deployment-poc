import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button appName='orders' className={styles.secondary}>
          Orders
        </Button>
      </main>
    </div>
  )
}
