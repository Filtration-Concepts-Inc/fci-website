'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import { Award, Heart, Users } from 'lucide-react'

const pillars = [
  {
    icon: Award,
    title: 'Purity',
    description: 'We supply only certified, high-quality filtration products that meet or exceed industry standards.',
  },
  {
    icon: Heart,
    title: 'Potency',
    description: 'From standard MERV filters to HEPA and specialty filtration — we stock what works.',
  },
  {
    icon: Users,
    title: 'Performance',
    description: 'Our service programs keep your systems performing at peak efficiency year-round.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About FCI"
        subtitle="Family-owned. Wisconsin-rooted. Built on clean air."
        breadcrumb="About Us"
        backgroundImage="/site-images/iStock-604367332.jpg"
              cinematic
      />

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">Our Story</span>
              <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a]">Since 1985</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">
                Filtration Concepts Inc. (FCI) was founded in 1985 with a simple mission: help Wisconsin businesses
                breathe cleaner air. What started as a small, family-run operation has grown into a trusted partner
                for contractors, facility managers, and businesses across the state.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We&apos;re proud to be 100% locally owned and operated. Our team brings decades of hands-on
                experience to every customer relationship — whether that&apos;s stocking a specific filter size,
                building a service program, or completing a full installation project.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                With two Wisconsin locations — in Lannon (Milwaukee area) and Luxemburg (Green Bay area) — we&apos;re
                always nearby and ready to help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100"
            >
              {/* Placeholder for team/warehouse photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#CC0000]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users size={28} className="text-[#CC0000]" />
                  </div>
                  <p className="text-sm text-gray-400">Team photo coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a1a1a]">What We Stand For</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-white rounded-2xl p-8 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#CC0000]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-[#CC0000]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
