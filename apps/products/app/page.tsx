import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Products</h1>
        <Button appName='products' className={styles.secondary}>
          Learn more
        </Button>
      </main>
    </div>
  )
}
