import type { Easing } from 'framer-motion'

export const EASE_OUT: Easing = [0.16, 1, 0.3, 1]

export const SPRING_LAYOUT = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
  mass: 0.8,
}
