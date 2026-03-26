'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface VideoPlayerProps {
  src: string
  webmSrc?: string
  poster?: string
}

export default function VideoPlayer({ src, webmSrc, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.load()
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="video-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <video
        ref={videoRef}
        controls
        preload="none"
        poster={poster}
        playsInline
        className="w-full rounded-xl"
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}
