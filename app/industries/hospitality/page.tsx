'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { Star, Wind, Users, Zap, Layers, Settings2, Clock } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Air Handling Unit',
    label: 'HOSPITALITY & GAMING',
    description: 'Two-stage AHU filtration for hotel guest floors and casino areas — removes smoke particles, VOCs, and fine dust to deliver consistently fresh, odor-free air to occupied spaces.',
    blueprintSrc: '/Industry Blueprint Images/Commercial Buildings/Air Handling Unit.png',
    hotspots: [
      { id: 'hosp-ahu-1', xPct: 28, yPct: 52, stage: 'Stage 1 · Pre-Filter', product: 'Series 400', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8 & 10', description: 'Standard wireback pleat pre-filter captures coarse dust and debris at the first stage — extending the life of downstream high-efficiency filters in commercial AHU applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Series 400.png' },
      { id: 'hosp-ahu-2', xPct: 46, yPct: 52, stage: 'Stage 2 · Main Filter', product: 'DPX Carbon', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'Carbon-enhanced high-efficiency filter captures fine particulate while neutralizing odors and VOCs — ideal for hotel and casino environments where guest air quality and odor control are essential.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/DPX Carbon.png' },
      { id: 'hosp-ahu-3', xPct: 60, yPct: 52, stage: 'Stage 3 · Final Filter', product: 'FP Mini-Pleat', category: 'HIGH EFFICIENCY', merv: 'MERV 11, 14, 15 & 16', description: 'High-efficiency mini-pleat filter captures fine particulate and allergens at the primary filtration stage — delivering low pressure drop and extended service life in commercial and institutional HVAC applications.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/FP Mini-Pleat.png' },
    ],
  },
]

const benefits = [
  { icon: Star, text: 'Odor-free, fresh air in guest rooms, lobbies, and casino floors' },
  { icon: Wind, text: 'Removes smoke, VOCs, and fine particulate from high-occupancy spaces' },
  { icon: Users, text: 'Supports guest satisfaction and positive reviews related to air quality' },
  { icon: Zap, text: 'MERV 13 filtration per CDC/ASHRAE guidance for occupied spaces' },
]

export default function HospitalityPage() {
  return (
    <>
      <PageHero
        title="Hospitality & Gaming"
        subtitle="Deliver exceptional guest experiences with clean, odor-free air in hotels, resorts, and casino floors."
        breadcrumb="Industries"
        backgroundImage="/site-images/hospitality and gaming.jpg"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Hospitality & Gaming</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Air Quality Is a Guest Experience</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">In hospitality and gaming, the guest experience is everything — and nothing signals a poorly maintained property faster than stale or smoky air. Hotels, resorts, and casino floors operate 24 hours a day, putting their HVAC systems under constant stress.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI provides MERV 8 to MERV 13 filtration solutions that keep guest spaces smelling fresh and particulate-free. Our service programs ensure filters are changed on schedule — even in facilities that operate around the clock.</p>
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
                <Image src="/site-images/Hotel Lobby.png" alt="Hospitality facility" fill className="object-cover object-center" />
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
              { icon: Layers, value: 'Smoke', label: '& Odor Control', desc: 'MERV 13 filtration on casino floors and hotel common areas captures smoke particles and odor-carrying aerosols before they reach guest spaces.' },
              { icon: Settings2, value: '3 Systems', label: 'Covered', desc: 'AHU, rooftop unit, and fan wall configurations — filtration for every hotel wing, casino floor, and event space HVAC system type.' },
              { icon: Clock, value: '24/7', label: 'Always On', desc: 'Scheduled filter programs for properties that never close — service on your timeline so your team stays focused on guests, not maintenance.' },
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
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">How We Can Improve Your Facility</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Filtration Solutions in Action</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for hotel, resort, and casino HVAC systems.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <IndustryBlueprintDiagrams tabs={BLUEPRINT_TABS} />
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
