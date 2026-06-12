import { useCallback, useEffect, useRef, useState } from 'react'

function getNavbarOffset() {
  const header = document.querySelector('header')
  return header?.offsetHeight ?? 80
}

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? '')
  const clickLockRef = useRef(null)
  const clickLockTimerRef = useRef(null)
  const ratiosRef = useRef(new Map())

  const pickActiveFromRatios = useCallback(() => {
    if (!sectionIds.length) return

    if (clickLockRef.current && sectionIds.includes(clickLockRef.current)) {
      setActive(clickLockRef.current)
      return
    }

    const scrollY = window.scrollY
    const viewportBottom = scrollY + window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (viewportBottom >= documentHeight - 100) {
      setActive(sectionIds[sectionIds.length - 1])
      return
    }

    let bestId = sectionIds[0]
    let bestRatio = -1

    for (const id of sectionIds) {
      const ratio = ratiosRef.current.get(id) ?? 0
      if (ratio > bestRatio) {
        bestRatio = ratio
        bestId = id
      }
    }

    if (bestRatio <= 0) {
      const offset = getNavbarOffset()
      const marker = scrollY + offset
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + scrollY
        if (top <= marker) bestId = id
      }
    }

    setActive(bestId)
  }, [sectionIds])

  const setActiveSection = useCallback(
    (id) => {
      if (!sectionIds.includes(id)) return
      setActive(id)
      clickLockRef.current = id
      if (clickLockTimerRef.current) clearTimeout(clickLockTimerRef.current)
      clickLockTimerRef.current = setTimeout(() => {
        clickLockRef.current = null
        pickActiveFromRatios()
      }, 1200)
    },
    [sectionIds, pickActiveFromRatios],
  )

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const offset = getNavbarOffset()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(entry.target.id, entry.intersectionRatio)
        })
        pickActiveFromRatios()
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -45% 0px`,
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    pickActiveFromRatios()

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          pickActiveFromRatios()
          ticking = false
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', pickActiveFromRatios)
    window.addEventListener('hashchange', pickActiveFromRatios)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', pickActiveFromRatios)
      window.removeEventListener('hashchange', pickActiveFromRatios)
      if (clickLockTimerRef.current) clearTimeout(clickLockTimerRef.current)
    }
  }, [sectionIds, pickActiveFromRatios])

  return { active, setActiveSection }
}
