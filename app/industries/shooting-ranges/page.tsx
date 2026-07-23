'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { Shield, Wind, Activity, AlertTriangle, Layers, Settings2, Clock } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Recirculating System — Long Lifecycle',
    label: 'SHOOTING RANGES',
    description: 'High-capacity recirculating filtration for ranges requiring extended filter service intervals — commercial and law enforcement ranges with high round counts. Deep-loading filter stages minimize maintenance frequency without compromising lead capture performance.',
    blueprintSrc: '/Industry Blueprint Images/Shooting Ranges/Recirculating System Long Lifecycle.png',
    hotspots: [
      { id: 'sr-recirc-ll-1', xPct: 32, yPct: 58, stage: 'Stage 1 · Pre-Filter', product: 'Nova Pleat', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8', description: 'Pleated pre-filter at chiller intake protects cooling coils and heat exchangers from particulate fouling, maintaining precise temperature control required for semiconductor process stability.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Nova Pleat.png' },
      { id: 'sr-recirc-ll-2', xPct: 50, yPct: 58, stage: 'Stage 2 · Main Filter', product: 'Fiberglass Pocket', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'High-capacity fiberglass pocket filter delivers deep-loading filtration in shooting range recirculating systems — capturing fine lead particulate and combustion byproducts for extended service intervals.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Pocket Filter.png' },
      { id: 'sr-recirc-ll-3', xPct: 65, yPct: 58, stage: 'Stage 3 · Final Filter', product: 'M Series', category: 'HEPA FILTRATION', merv: 'MERV 17 / H14', description: 'True HEPA final filtration captures 99.97% of particles ≥0.3 micron — required for surgical suites, bone marrow transplant units, and pharmacy cleanrooms meeting ASHRAE 170 standards.', href: '/products#hepa-filtration', image: '/FCI Website Product Images/HEPA FILTRATION/M Series.png' },
    ],
  },
  {
    num: '02',
    title: 'Recirculating System — Low Maintenance',
    label: 'SHOOTING RANGES',
    description: 'Low-maintenance recirculating system designed for small commercial and private ranges — simplified filter access, fewer change-out events, and easy-to-source replacement media reduce the operational burden of maintaining code-compliant lead filtration.',
    blueprintSrc: '/Industry Blueprint Images/Shooting Ranges/Reecirculating System Low Maintenance.png',
    hotspots: [
      { id: 'sr-recirc-lm-1', xPct: 35, yPct: 55, stage: 'Stage 1 · Main Filter', product: 'Fiberglass Pocket', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'High-capacity fiberglass pocket filter delivers deep-loading filtration in shooting range recirculating systems — capturing fine lead particulate and combustion byproducts for extended service intervals.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Pocket Filter.png' },
      { id: 'sr-recirc-lm-2', xPct: 62, yPct: 55, stage: 'Stage 2 · Final Filter', product: 'M Series', category: 'HEPA FILTRATION', merv: 'MERV 17 / H14', description: 'True HEPA final filtration captures 99.97% of particles ≥0.3 micron — required for surgical suites, bone marrow transplant units, and pharmacy cleanrooms meeting ASHRAE 170 standards.', href: '/products#hepa-filtration', image: '/FCI Website Product Images/HEPA FILTRATION/M Series.png' },
    ],
  },
]

const benefits = [
  { icon: AlertTriangle, text: 'HEPA filtration captures lead aerosols to meet OSHA PEL requirements for indoor ranges' },
  { icon: Shield, text: 'Protects shooters, instructors, and staff from chronic lead and heavy metal exposure' },
  { icon: Wind, text: 'Engineered airflow patterns move contaminated air away from firing line occupants' },
  { icon: Activity, text: 'Reduces lead settling on surfaces — lowering housekeeping costs and liability' },
]

export default function ShootingRangesPage() {
  return (
    <>
      <PageHero
        title="Shooting Ranges"
        subtitle="HEPA-grade filtration systems that capture lead aerosols and protect range occupants from toxic exposure."
        breadcrumb="Industries"
        backgroundImage="/site-images/Shooting Range Banner Photo.png"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Shooting Ranges</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Lead Control. Compliance. Safety.</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Indoor shooting ranges generate some of the most hazardous airborne contaminants in any commercial environment. Every round fired releases lead particulate, lead aerosols, and combustion byproducts that accumulate rapidly without proper ventilation and filtration.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI provides the three-stage filtration systems required to meet OSHA lead exposure standards — from bulk lead capture through HEPA-grade final filtration. Protect your shooters, instructors, and staff while reducing your liability and housekeeping burden.</p>
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
                <Image src="/site-images/Shooting Range Portrait.png" alt="Indoor shooting range" fill className="object-cover object-center" />
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
              { icon: Layers, value: 'Lead', label: 'Aerosol Capture', desc: 'HEPA-grade exhaust filtration captures lead aerosols generated at every firing position — the primary exposure pathway for shooters and instructors.' },
              { icon: Settings2, value: 'OSHA', label: 'PEL Compliant', desc: 'Filtration systems engineered to maintain lead concentrations below OSHA\'s Action Level and PEL for continuously occupied indoor ranges.' },
              { icon: Clock, value: '4 Configs', label: 'Covered', desc: 'Exhaust-only, full HVAC, long-lifecycle recirculating, and low-maintenance recirculating — systems for every range size and round count.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for indoor shooting range exhaust, HVAC, and recirculating ventilation systems.</p>
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
