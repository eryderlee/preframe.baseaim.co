'use client'

import { motion } from 'framer-motion'

interface VideoPlayerProps {
  src: string
  poster?: string
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  return (
    <motion.div
      className="video-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <video
        controls
        preload="metadata"
        poster={poster}
        playsInline
        className="w-full rounded-xl"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}
