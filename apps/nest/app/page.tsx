import { Button } from '@repo/ui/button'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Bird’s Nest</h1>
        <p>
          A nest is a bird’s handmade shelter, built to protect eggs and chicks from weather and
          predators. Most birds gather local materials—twigs, grass, leaves, mud, feathers—and weave
          or press them into a sturdy cup or cavity. They choose a secure spot (tree fork, ledge,
          burrow, or hollow) and layer coarse pieces first for structure, then softer lining for
          insulation. Some species add mud or saliva as “glue,” and many repair or rebuild the nest
          each season to keep it safe and clean.
        </p>
        <Button appName='nest' className={styles.secondary}>
          Learn more about Bird’s Nest
        </Button>
      </main>
    </div>
  )
}
