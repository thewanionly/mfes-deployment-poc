import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button appName='products' className={styles.secondary}>
          Products
        </Button>
      </main>
    </div>
  )
}
