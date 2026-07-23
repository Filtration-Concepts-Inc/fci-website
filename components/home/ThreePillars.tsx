'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Wrench, HardHat } from 'lucide-react'
import Link from 'next/link'

const pillars = [
  {
    icon: ShoppingCart,
    title: 'Sales',
    href: '/products',
    description:
      'We stock over 1,000 air filtration products across all major filter types — so you get exactly what you need, when you need it.',
  },
  {
    icon: Wrench,
    title: 'Service',
    href: '/services',
    description:
      'Our filter service programs keep your systems running clean. We schedule, supply, and change your filters on a regular basis.',
  },
  {
    icon: HardHat,
    title: 'Installation',
    href: '/installation',
    description:
      'From UV bulbs to cottonwood screens and rooftop unit installs — our team handles the full installation process.',
  },
]

export default function ThreePillars() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">What We Do</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Three simple service arms. One trusted partner.
          </p>
          <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link href={pillar.href} className="group block rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-[#CC0000]/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#CC0000]/10 flex items-center justify-center mb-5 group-hover:bg-[#CC0000] transition-colors">
                    <Icon size={22} className="text-[#CC0000] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{pillar.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{pillar.description}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
