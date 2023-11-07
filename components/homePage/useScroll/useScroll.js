import styles from './useScroll.module.scss'
import { useRef } from 'react'
import HomeAlbumProductCard from '../card-content/card-content/card-content'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function CardWithParallaxEffect({ id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section>
      <div ref={ref}>
        <HomeAlbumProductCard />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  )
}

export default function UseScroll() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className={styles.albumProductCardContainer}>
      {[1, 2, 3].map((cardId) => (
        <CardWithParallaxEffect key={cardId} id={cardId} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  )
}
