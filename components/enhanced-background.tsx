"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function EnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Enhanced particle system with GSAP
    const createParticles = () => {
      particlesRef.current = []

      for (let i = 0; i < 60; i++) {
        const particle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
          element: document.createElement("div"),
        }

        // Use GSAP for smooth particle movement
        gsap.to(particle, {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          duration: Math.random() * 10 + 5,
          ease: "none",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2,
        })

        // Pulsing opacity animation
        gsap.to(particle, {
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 3 + 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2,
        })

        particlesRef.current.push(particle)
      }
    }

    createParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Draw particle with enhanced glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3)
        gradient.addColorStop(0, `hsla(${200 + Math.random() * 60}, 70%, 60%, ${particle.opacity})`)
        gradient.addColorStop(1, `hsla(${200 + Math.random() * 60}, 70%, 60%, 0)`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Enhanced connection lines with gradient
        particlesRef.current.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const lineGradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
            const alpha = 0.15 * (1 - distance / 120)
            lineGradient.addColorStop(0, `hsla(200, 70%, 60%, ${alpha * particle.opacity})`)
            lineGradient.addColorStop(1, `hsla(220, 70%, 60%, ${alpha * otherParticle.opacity})`)

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      // Kill all GSAP animations for particles
      particlesRef.current.forEach((particle) => {
        gsap.killTweensOf(particle)
      })
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-25"
      style={{ zIndex: -1 }}
    />
  )
}
