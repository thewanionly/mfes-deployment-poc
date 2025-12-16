import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint dicta aliquid ipsum magni
          facilis sapiente fugit dolor eveniet enim ratione eaque nostrum, in perferendis placeat
          eligendi inventore. Products! dfsads
        </p>
        <Button appName='products' className={styles.secondary}>
          Learn more
        </Button>
      </main>
    </div>
  )
}
