import { useEffect, useRef, useState } from "react"

export function Reveal({ children, className = "" }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            break
          }
        }
      },
      { root: null, threshold: 0.12, rootMargin: "80px 0px -20px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const classes = ["pReveal", visible ? "isVisible" : "", className]
    .filter(Boolean)
    .join(" ")

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

