import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const cur = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)
    let raf
    const loop = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.08
      cur.current.y += (pos.current.y - cur.current.y) * 0.08
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cur.current.x - 300}px, ${cur.current.y - 300}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div ref={glowRef} aria-hidden="true" style={{
      position: 'fixed', top: 0, left: 0,
      width: 600, height: 600,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 65%)',
      pointerEvents: 'none',
      zIndex: 9999,
    }} />
  )
}
