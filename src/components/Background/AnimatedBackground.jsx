import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const glow1 = useRef(null)
  const glow2 = useRef(null)

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      if (glow1.current) {
        gsap.to(glow1.current, {
          x: 40,
          y: -30,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
      if (glow2.current) {
        gsap.to(glow2.current, {
          x: -30,
          y: 20,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
  }, [])

  return (
    <div className="animated-bg fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="animated-bg__effects absolute inset-0 pointer-events-none">
        <div
          ref={glow1}
          className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.18] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 65%)' }}
        />
        <div
          ref={glow2}
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.14] blur-[110px]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-[40%] right-[30%] w-[350px] h-[350px] rounded-full opacity-[0.08] blur-[90px]"
          style={{ background: 'radial-gradient(circle, #22c55e 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(6,11,24,0.6) 100%)' }}
        />
        <div className="absolute top-0 left-[55%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/8 to-transparent" />
        <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      </div>

      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="animated-bg__stars absolute rounded-full bg-white pointer-events-none"
          style={{
            width: Math.random() * 2 + 0.5,
            height: Math.random() * 2 + 0.5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.05,
          }}
        />
      ))}
    </div>
  )
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="flex flex-col items-center gap-1.5 pt-4 pb-2"
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="w-[22px] h-[34px] rounded-full border-2 border-blue-500/30 flex items-start justify-center pt-1.5"
      >
        <div className="w-1 h-2 bg-blue-400/80 rounded-full" />
      </motion.div>
      <span className="text-[11px] text-theme-muted tracking-widest uppercase">Scroll Down</span>
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" className="text-theme-muted">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
