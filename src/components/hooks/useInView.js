import { useState, useEffect } from 'react'

/**
 * Returns true once the target element enters the viewport.
 * Stays true after first intersection (one-shot animation trigger).
 */
export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // one-shot
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options.threshold])

  return inView
}
