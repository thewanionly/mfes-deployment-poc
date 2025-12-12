import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Content</h1>
        <Button appName='content' className={styles.secondary}>
          Learn more here
        </Button>
      </main>
    </div>
  )
}
