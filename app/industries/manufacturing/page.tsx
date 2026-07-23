'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { Wrench, Users, Factory, Zap, Layers, Settings2, Clock } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Assembly Plant Air Handling Unit',
    label: 'MANUFACTURING',
    description: 'Heavy-duty AHU filtration for production floor air handlers — pre-filter and main filter stages capture metal dust, grinding particles, and chemical aerosols before they damage coils and equipment.',
    blueprintSrc: '/Industry Blueprint Images/Automotive & EV/Assembly Plant Air Handling Unit.png',
    hotspots: [
      { id: 'mfg-ahu-1', xPct: 50, yPct: 45, stage: 'Stage 1 · Pre-Filter', product: 'Link & Cube Filters', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8', description: 'Rigid-frame cube and link-style filters capture heavy industrial and metallic particulate loads with long service life — designed for demanding manufacturing environments with elevated dust concentrations.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Link & Cube Filters.png' },
      { id: 'mfg-ahu-2', xPct: 62, yPct: 45, stage: 'Stage 2 · Main Filter', product: 'Soniq Pocket', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'High-performance pocket filter engineered for demanding data center AHUs — delivers exceptional dust-holding capacity and low pressure drop, protecting sensitive IT equipment from sub-micron particles in mission-critical environments.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Soniq Pocket.png' },
    ],
  },
]

const benefits = [
  { icon: Factory, text: 'Handles heavy particulate loads from cutting, welding, and machining operations' },
  { icon: Wrench, text: 'Extends equipment life by keeping HVAC coils and components clean' },
  { icon: Users, text: 'Maintains OSHA-compliant air quality for production floor workers' },
  { icon: Zap, text: 'Mark & Tag service keeps every unit properly labeled for maintenance teams' },
]

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Manufacturing"
        subtitle="Durable filtration that handles heavy industrial particulate loads and protects equipment and workers."
        breadcrumb="Industries"
        backgroundImage="/site-images/Manufacturing Banner Photo.png"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Manufacturing</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Built for Industrial Environments</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Manufacturing floors generate some of the highest airborne particulate loads of any environment — metal dust, fibers, smoke, and chemical vapors all put enormous strain on HVAC systems. Under-filtered systems fail faster, consume more energy, and expose workers to avoidable air quality risk.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI stocks heavy-duty filter types designed for industrial applications, including rigid cube filters, rollout poly media, and custom-fabricated pleated panels cut to non-standard sizes in-house at our Wisconsin locations.</p>
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
                <Image src="/site-images/Manufacturing Photo Portrait.png" alt="Manufacturing facility" fill className="object-cover object-center" />
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
              { icon: Layers, value: 'Metal Dust', label: '& Weld Fume', desc: 'Rigid cube filters and rollout poly media built for the highest industrial particulate loads — grinding particles, metallic fines, and chemical aerosols.' },
              { icon: Settings2, value: 'Custom Cut', label: 'In-House Fab', desc: 'Non-standard filter sizes fabricated at our Wisconsin locations — cut to your exact equipment dimensions with no minimum order.' },
              { icon: Clock, value: 'OSHA', label: 'Air Quality', desc: 'Production floor filtration engineered to maintain compliant air quality for workers in machining, stamping, and fabrication environments.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for manufacturing facility air handlers and production floor systems.</p>
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
