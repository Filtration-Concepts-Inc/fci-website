'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const certs = [
  'NSF Certified',
  'ASHRAE Compliant',
  'Science & Lab Purity',
  'Wisconsin Owned',
  'Eco-Conscious',
]

export default function CertificationRibbon() {
  return (
    <section className="py-10 bg-[#f7f7f7] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 text-sm font-medium text-gray-600"
            >
              <ShieldCheck size={16} className="text-[#CC0000]" />
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
