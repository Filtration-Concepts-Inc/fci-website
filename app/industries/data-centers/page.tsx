'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { Server, Zap, Thermometer, Shield, Layers, Settings2, Clock } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Rack & Air Handling Unit',
    label: 'DATA CENTERS',
    description: 'Rack-level and AHU filtration for high-density compute environments — capturing airborne particulate at both the room level and directly at server intake to prevent corrosion, electrostatic discharge, and thermal failure.',
    blueprintSrc: '/Industry Blueprint Images/Data Centers/Rack & Air Handling Unit.png',
    hotspots: [
      { id: 'dc-rack-1', xPct: 36, yPct: 54, stage: 'Stage 1 · Pre-Filter', product: 'Series 400', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8 & 10', description: 'Standard wireback pleat pre-filter captures coarse dust and debris at the first stage of the AHU — extending the life of downstream high-efficiency filters in data center air handling applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Series 400.png' },
      { id: 'dc-rack-2', xPct: 50, yPct: 52, stage: 'Stage 2 · Main Filter', product: 'Titan FP', category: 'HIGH EFFICIENCY', merv: 'MERV 13', description: 'High-capacity mini-pleat filter engineered for demanding HVAC environments — delivers superior dust-holding capacity and extended service life, capturing fine particulate and protecting downstream equipment.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Titan FP.png' },
      { id: 'dc-rack-3', xPct: 65, yPct: 48, stage: 'Stage 3 · Final Filter', product: 'Soniq Pocket', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'High-performance pocket filter engineered for demanding data center AHUs — delivers exceptional dust-holding capacity and low pressure drop, protecting sensitive IT equipment from sub-micron particles in mission-critical environments.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Soniq Pocket.png' },
    ],
  },
]

const benefits = [
  { icon: Server, text: 'Prevents dust accumulation on server hardware that causes overheating and failure' },
  { icon: Zap, text: 'Maintains optimal airflow to maximize cooling efficiency and reduce energy costs' },
  { icon: Thermometer, text: 'Protects cooling coils from fouling — extending equipment life and uptime' },
  { icon: Shield, text: 'Supports ISO 14644 cleanliness standards for critical IT environments' },
]

export default function DataCentersPage() {
  return (
    <>
      <PageHero
        title="Data Centers"
        subtitle="Clean air filtration that protects critical IT infrastructure and maximizes cooling efficiency."
        breadcrumb="Industries"
        backgroundImage="/site-images/Data Center Banner Photo.png"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Data Centers</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Uptime Starts with Clean Air</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Data centers run 24/7 and cannot afford downtime. Airborne dust and particulate are among the leading causes of premature hardware failure — clogging server fans, depositing on circuit boards, and fouling the cooling coils that keep temperatures in check.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI provides multi-stage filtration solutions for data center CRAC units, perimeter cooling, and outdoor air economizer systems — keeping your hardware clean, your coils efficient, and your PUE optimized.</p>
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
                <Image src="/site-images/Data Center Second Image.png" alt="Data center" fill className="object-cover object-center" />
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
              { icon: Layers, value: '4 Systems', label: 'Covered', desc: 'Chiller, fan wall, server AHU, and management console filtration — every critical airside system in your data center.' },
              { icon: Settings2, value: 'PUE', label: 'Optimized', desc: 'Clean cooling coils and unrestricted airflow reduce Power Usage Effectiveness — filtration that pays for itself in energy savings.' },
              { icon: Clock, value: 'MERV 13+', label: 'Server Protection', desc: 'High-efficiency filtration prevents dust accumulation on circuit boards and server fans — the leading cause of premature hardware failure.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for data center chillers, fan walls, server AHUs, and management consoles.</p>
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
