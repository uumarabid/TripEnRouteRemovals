import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MotionSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionSection({ children, className = '', delay = 0 }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
