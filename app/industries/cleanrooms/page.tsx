'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { FlaskConical, Shield, Microscope, Zap, Gauge, Filter, Layers } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Air Handling Unit — Ducted HEPAs',
    label: 'CLEANROOMS & LABS',
    description: 'Ducted HEPA configurations for pharmaceutical and research cleanrooms — delivering ISO-classified air quality at each terminal point. Progressive stages from pre-filter through HEPA ensure particle counts are maintained at every classification level.',
    blueprintSrc: '/Industry Blueprint Images/CleanRooms/Air Handling Unit Ducted HEPAs.png',
    hotspots: [
      { id: 'cr-ducted-1', xPct: 50, yPct: 45, stage: 'Terminal · HEPA Filter', product: 'Pharma-Replaceable Terminal Module', category: 'HEPA FILTRATION', merv: 'MERV 17 / H14', description: 'True HEPA captures 99.97% of particles ≥0.3 micron at terminal supply points — required for ISO 5–7 cleanrooms and pharmaceutical manufacturing environments.', href: '/products#hepa-filtration', image: '/FCI Website Product Images/HEPA FILTRATION/Pharma-Replaceable Terminal Module.png' },
      { id: 'cr-ducted-2', xPct: 62, yPct: 13, stage: 'Pre-Filter', product: 'Series 400', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8 & 10', description: 'Standard wireback pleat pre-filter captures coarse and mid-range particles at the first stage, protecting downstream HEPA filters and extending their service life in cleanroom and lab environments.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Series 400.png' },
      { id: 'cr-ducted-3', xPct: 74, yPct: 13, stage: 'Secondary Filter', product: 'Titan FP', category: 'HIGH EFFICIENCY', merv: 'MERV 13–15', description: 'High-capacity mini-pleat filter engineered for demanding HVAC environments — delivers superior dust-holding capacity and extended service life, capturing fine particulate and protecting downstream equipment.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Titan FP.png' },
    ],
  },
]

const benefits = [
  { icon: FlaskConical, text: 'Achieves ISO 14644 cleanroom classifications from Class 7 to Class 5' },
  { icon: Shield, text: '99.97% efficiency at 0.3 micron — protects sensitive processes from contamination' },
  { icon: Microscope, text: 'Suitable for pharmaceutical, biotech, semiconductor, and research labs' },
  { icon: Zap, text: 'Three-stage configuration maximizes HEPA filter life and total system efficiency' },
]

export default function CleanroomsPage() {
  return (
    <>
      <PageHero
        title="Cleanrooms & Labs"
        subtitle="Precision HEPA filtration for pharmaceutical, semiconductor, and research environments that demand near-zero contamination."
        breadcrumb="Industries"
        backgroundImage="/site-images/clean rooms.jpg"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Cleanrooms & Labs</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Zero Tolerance for Contamination</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Cleanrooms, pharmaceutical manufacturing suites, and research laboratories operate at the highest standard of air cleanliness. A single contamination event can compromise product batches, invalidate research, or trigger regulatory action.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI supplies the full three-stage filtration stack required for ISO-classified environments: high-efficiency pre-filtration, secondary V-bank protection filters, and certified terminal HEPA panels. We stock HEPA filters in standard and custom sizes and can support change-out scheduling for controlled environments.</p>
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
                <Image src="/site-images/clean-room-pic-2.png" alt="Cleanroom facility" fill className="object-cover object-center" />
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
              { icon: Gauge, value: 'ISO 5–8', label: 'Cleanroom Class', desc: 'Full three-stage filtration stack engineered to maintain ISO 5 through ISO 8 classifications — from pharmaceutical suites to research labs.' },
              { icon: Filter, value: '99.97%', label: 'HEPA at Terminal', desc: 'True HEPA terminal panels capture 99.97% of particles ≥0.3 micron — required for pharmaceutical manufacturing and research cleanrooms.' },
              { icon: Layers, value: '3-Stage', label: 'Full Stack', desc: 'Pre-filter, V-bank secondary, and HEPA terminal — the progressive stack that maximizes terminal filter life and ISO classification integrity.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for cleanrooms, labs, and pharmaceutical manufacturing environments.</p>
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
