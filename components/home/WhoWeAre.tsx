'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Warehouse, Package, Tag, Scissors, Truck, Zap } from 'lucide-react'

const differentiators = [
  { icon: Warehouse, title: 'Two Wisconsin Locations', description: 'Lannon (Milwaukee) and Luxemburg (Green Bay) — stocked and ready to serve.' },
  { icon: Package, title: 'Customer-Driven Stocking', description: 'We stock what our customers need, not just what sells.' },
  { icon: Tag, title: 'Mark & Tag Boxes', description: 'Every filter is labeled so your team always knows exactly what goes where.' },
  { icon: Scissors, title: 'Custom Fabrication', description: 'Need a non-standard size? We fabricate custom pleated filters in-house.' },
  { icon: Truck, title: 'FCI Delivery', description: 'Direct delivery to your facility — no waiting on shipping carriers.' },
  { icon: Zap, title: 'AirTrack Ordering', description: 'Our streamlined system makes reordering fast, easy, and consistent.' },
]

const markets = [
  'Commercial Buildings', 'Healthcare & Hospitals', 'Food & Pharmaceutical',
  'Manufacturing', 'Education', 'Airports & Transit', 'Hospitality & Gaming', 'Cleanrooms & Labs',
]

export default function WhoWeAre() {
  return (
    <>
      {/* ── Who We Are ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">Who We Are</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Family-Owned Since 1985</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed text-base">
                Filtration Concepts Inc. (FCI) was founded in 1985 with a simple mission: help Wisconsin businesses breathe cleaner air. What started as a small, family-run operation has grown into a trusted partner for contractors, facility managers, and businesses across the state.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed text-base">
                We're 100% locally owned and operated. Our team brings decades of hands-on experience to every relationship — whether that's sourcing a specific filter size, building a service program, or completing a full installation project.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#CC0000]/8 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/site-images/FCI Building Photo.png"
                  alt="HVAC facility"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">What Sets Us Apart</h2>
            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
              We don't just sell filters — we make sure they're working.
            </p>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#CC0000]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
