'use client'

import { motion } from 'framer-motion'

const expectations = [
  {
    title: 'Your Current Situation',
    description:
      "We'll review your firm, a few key numbers, and what you're aiming to change over the next six months.",
  },
  {
    title: 'Honest Assessment',
    description:
      "We'll decide together whether it makes sense for us to work together — no pressure either way.",
  },
  {
    title: 'Clear Next Steps',
    description:
      "If we're a good fit, we'll outline exactly what it takes to get started and move forward straight away.",
  },
]

export default function ExpectationsList() {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {expectations.map((item, index) => (
        <motion.div
          key={index}
          className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <div className="w-10 h-10 rounded-full bg-primary-blue/10 text-primary-blue font-semibold flex items-center justify-center mx-auto mb-3 text-sm">
            {index + 1}
          </div>
          <h3 className="font-montserrat font-semibold text-text-charcoal text-lg mb-2">
            {item.title}
          </h3>
          <p className="text-text-light-gray text-sm leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
