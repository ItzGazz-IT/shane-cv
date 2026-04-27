import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const cur = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    let raf
    const loop = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.1
      cur.current.y += (pos.current.y - cur.current.y) * 0.1
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cur.current.x - 200}px, ${cur.current.y - 200}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div ref={glowRef} aria-hidden="true" style={{
      position: 'fixed', top: 0, left: 0,
      width: 400, height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(16,185,129,0.09) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: 9999,
    }} />
  )
}
