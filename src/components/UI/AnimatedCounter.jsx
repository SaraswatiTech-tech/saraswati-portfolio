import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1.8, decimals = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()
    const end = value

    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * end
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(decimals > 0 ? parseFloat(end.toFixed(decimals)) : end)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, duration, decimals])

  const display = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      {display}{suffix}
    </span>
  )
}
