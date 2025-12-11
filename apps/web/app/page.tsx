import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Spider’s Web</h1>
        <p>
          A spider’s web is a silk structure spun to trap prey and provide shelter. Using spinnerets
          at the tip of its abdomen, the spider extrudes liquid silk that hardens in air, anchoring
          a first line between surfaces. It then builds a frame and radial spokes, finally adding
          sticky spiral threads to capture insects. The design balances strength, flexibility, and
          minimal material, letting the spider hunt efficiently with little energy.
        </p>
        <Button appName='web' className={styles.secondary}>
          Learn more
        </Button>
      </main>
    </div>
  )
}
