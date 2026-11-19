import { useState, useEffect } from 'react'

/**
 * useInView — fires once when the element enters the viewport.
 * Defaults: threshold 0, rootMargin '0px 0px -10% 0px'.
 * Falls back to visible=true if IntersectionObserver is unsupported.
 * Respects prefers-reduced-motion by firing immediately (skip animation delay).
 */
export function useInView(ref, options = {}) {
  // If IO is not supported, treat everything as in-view immediately.
  const ioSupported =
    typeof window !== 'undefined' && 'IntersectionObserver' in window

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [inView, setInView] = useState(!ioSupported || prefersReduced)

  useEffect(() => {
    if (!ioSupported || prefersReduced) {
      setInView(true)
      return
    }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px',
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref]) // eslint-disable-line react-hooks/exhaustive-deps

  return inView
}
