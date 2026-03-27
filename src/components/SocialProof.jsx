import { motion } from 'framer-motion'

const logos = [
  'Google', 'Microsoft', 'Amazon', 'Salesforce', 'Goldman Sachs',
  'McKinsey & Co.', 'Deloitte', 'Apple', 'Meta', 'JPMorgan',
]

export default function SocialProof() {
  return (
    <div
      className="py-10 border-y overflow-hidden"
      style={{ borderColor: '#e5e7eb', background: '#ffffff' }}
    >
      <p
        className="text-center text-xs font-semibold tracking-widest uppercase mb-6"
        style={{ color: '#9ca3af' }}
      >
        Leaders from these organizations have transformed with MJ
      </p>

      {/* Infinite scroll ticker */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-base font-semibold tracking-wide"
              style={{ color: '#d1d5db' }}
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
