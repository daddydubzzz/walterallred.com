import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'

const StarField = memo(() => {
  const stars = useMemo(() => 
    Array.from({ length: 50 }).map(() => ({
      id: Math.random(),
      style: {
        position: 'absolute' as const,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: Math.random() < 0.3 ? '3px' : '2px',
        height: Math.random() < 0.3 ? '3px' : '2px',
      },
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 4,
      glow: Math.random() < 0.3
    })), []
  )

  return (
    <div className="fixed inset-0 z-[41] pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={star.style}
          initial={{ opacity: 0.1, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          className={`
            rounded-full
            ${star.glow ? 'bg-white shadow-[0_0_3px_rgba(255,255,255,0.5)]' : 'bg-white/80'}
          `}
        />
      ))}
    </div>
  )
})

StarField.displayName = 'StarField'

export default StarField 