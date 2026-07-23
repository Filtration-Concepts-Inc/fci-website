'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import AirportsDiagrams from '@/components/industries/AirportsDiagrams'
import { Users, Wind, Shield, Zap, Plane, Flame, BookOpen } from 'lucide-react'

const benefits = [
  { icon: Users, text: 'Handles high-occupancy terminal air with thousands of people cycling through daily' },
  { icon: Wind, text: 'Maintains ASHRAE 62.1 ventilation standards for public transportation facilities' },
  { icon: Shield, text: 'Reduces airborne pathogens, allergens, and fine particulate in passenger spaces' },
  { icon: Zap, text: 'Energy-efficient filter configurations reduce operating costs in 24/7 terminal HVAC' },
]

export default function AirportsPage() {
  return (
    <>
      <PageHero
        title="Airports"
        subtitle="High-capacity filtration for terminals and transit hubs that serve thousands of people every day."
        breadcrumb="Industries"
        backgroundImage="/site-images/airports pic.jpg"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Airports</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Clean Air for Every Passenger</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Airport terminals are among the highest-occupancy public spaces in the world — cycling thousands of travelers through each day while HVAC systems work around the clock to maintain air quality and comfort. Jet fuel exhaust, vehicle emissions, and dense foot traffic create a demanding filtration environment.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI supplies multi-stage filtration solutions for terminal AHUs, gate areas, baggage halls, and international concourses — from standard MERV 8 pre-filters to MERV 13 high-efficiency units that reduce airborne pathogens in high-traffic spaces.</p>
              <ul className="mt-8 space-y-3">
                {benefits.map(b => {
                  const Icon = b.icon
                  return (
                    <li key={b.text} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5"><Icon size={14} className="text-[#CC0000]" /></div>
                      <span className="text-sm text-gray-600 leading-relaxed">{b.text}</span>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-10">
                <Link href="/contact"><HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-7 py-3 text-sm">Get a Quote →</HoverButton></Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#CC0000]/8 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4]">
                <Image src="/site-images/Airplane Takeoff.png" alt="Airplane taking off" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              { icon: Plane, value: 'High Cap.', label: 'Terminal Load', desc: 'Thousands of passengers cycling through daily — high-capacity media handles the constant biological and particulate load in terminal HVAC systems.' },
              { icon: Flame, value: 'Jet Fuel', label: 'Exhaust Capture', desc: 'Outdoor air intakes near apron areas capture diesel and jet fuel combustion particles before they enter terminal air supply systems.' },
              { icon: BookOpen, value: 'ASHRAE', label: '62.1 Ventilation', desc: 'Filtration designed around ASHRAE 62.1 outdoor air fraction requirements — maintaining compliant IAQ in high-occupancy public transit spaces.' },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="bg-[#1a1a1a] flex flex-col items-center text-center px-10 py-12 group hover:bg-[#252525] transition-colors duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#CC0000]/15 border border-[#CC0000]/30 flex items-center justify-center mb-6 group-hover:bg-[#CC0000]/25 transition-colors duration-300">
                    <Icon size={28} className="text-[#CC0000]" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">{s.value}</span>
                  <span className="mt-3 text-[#CC0000] font-bold uppercase tracking-widest text-xs">{s.label}</span>
                  <span className="mt-3 text-white/45 text-sm max-w-[220px] leading-relaxed">{s.desc}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">How We Can Improve Your Airport Facility</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Filtration Solutions in Action</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">From standard terminal HVAC to high-efficiency international halls, explore FCI&apos;s recommended filtration configurations for airports and transit facilities.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AirportsDiagrams />
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
