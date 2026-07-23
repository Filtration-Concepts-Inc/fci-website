'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { Shield, Heart, Activity, AlertTriangle, Layers, Settings2, Clock } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Air Handling Unit — Traditional',
    label: 'HEALTHCARE',
    description: 'Standard healthcare AHU filtration for patient rooms, corridors, and administrative spaces — two to three progressive stages providing reliable protection against airborne pathogens and fine particulate.',
    blueprintSrc: '/Industry Blueprint Images/Healthcare/Air Handling Unit Traditional.png',
    hotspots: [
      { id: 'hc-trad-1', xPct: 40, yPct: 63, stage: 'Stage 1 · Pre-Filter', product: 'Enduro Pleat', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8/9A', description: 'Durable pleated pre-filter captures coarse dust, pollen, and debris at the first stage — extending the life of downstream high-efficiency filters across commercial, industrial, and institutional HVAC applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Enduro Pleat.png' },
      { id: 'hc-trad-2', xPct: 52, yPct: 60, stage: 'Stage 2 · Main Filter', product: 'FP Mini-Pleat', category: 'HIGH EFFICIENCY', merv: 'MERV 11, 14, 15 & 16', description: 'High-efficiency mini-pleat filter captures fine particulate and allergens at the primary filtration stage — delivering low pressure drop and extended service life in commercial and institutional HVAC applications.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/FP Mini-Pleat.png' },
    ],
  },
  {
    num: '02',
    title: 'Air Handling Unit — High Purity',
    label: 'HEALTHCARE',
    description: 'High-purity AHU configurations for operating rooms, isolation wards, and cleanroom pharmacies — delivering HEPA-filtered air to the most critical spaces in a healthcare facility. Three-stage progressive filtration meets ASHRAE 170 and Joint Commission requirements.',
    blueprintSrc: '/Industry Blueprint Images/Healthcare/Air Handling Unit High Purity.png',
    hotspots: [
      { id: 'hc-hp-1', xPct: 45, yPct: 64, stage: 'Stage 1 · Pre-Filter', product: 'Enduro Pleat', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8/9A', description: 'Durable pleated pre-filter captures coarse dust, pollen, and debris at the first stage — extending the life of downstream high-efficiency filters across commercial, industrial, and institutional HVAC applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Enduro Pleat.png' },
      { id: 'hc-hp-2', xPct: 55, yPct: 61, stage: 'Stage 2 · Main Filter', product: 'GeoPleat', category: 'HIGH EFFICIENCY', merv: 'MERV 13', description: 'Geometric pleat construction delivers high-efficiency filtration with low pressure drop — removing fine particulate and allergens for cleaner indoor air across commercial and institutional HVAC applications.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/GeoPleat.png' },
      { id: 'hc-hp-3', xPct: 70, yPct: 61, stage: 'Stage 3 · Final Filter', product: 'HV Series', category: 'HEPA FILTRATION', merv: 'MERV 17 / H14', description: 'High-velocity HEPA final filter delivers certified 99.97% efficiency at 0.3 micron — engineered for high-purity healthcare AHUs serving surgical suites, isolation rooms, and pharmacy cleanrooms meeting ASHRAE 170 standards.', href: '/products#hepa-filtration', image: '/FCI Website Product Images/HEPA FILTRATION/HV Series (2).png' },
    ],
  },
  {
    num: '03',
    title: 'Air Intakes Near Helipad',
    label: 'HEALTHCARE',
    description: 'Specialized filtration when outdoor air intakes are located near exhaust stacks — a common challenge in hospital campus design. Filters remove re-entrained exhaust contaminants before air enters occupied spaces.',
    blueprintSrc: '/Industry Blueprint Images/Healthcare/Air Intakes Near Exhaust.png',
    hotspots: [
      { id: 'hc-exhaust-2', xPct: 68, yPct: 60, stage: 'Stage 1 · Pre-Filter', product: 'Enduro Pleat', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8/9A', description: 'Durable pleated pre-filter captures coarse dust, pollen, and debris at the first stage — extending the life of downstream high-efficiency filters across commercial, industrial, and institutional HVAC applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Enduro Pleat.png' },
      { id: 'hc-exhaust-3', xPct: 73, yPct: 60, stage: 'Stage 2 · Main Filter', product: 'DPX Carbon', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'Carbon-enhanced high-efficiency filter captures fine particulate while neutralizing odors and VOCs — ideal for hotel and casino environments where guest air quality and odor control are essential.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/DPX Carbon.png' },
    ],
  },
  {
    num: '04',
    title: 'Cooling Towers',
    label: 'HEALTHCARE',
    description: 'Cooling tower drift eliminators and intake filtration for hospital mechanical plants — preventing Legionella risk and protecting HVAC equipment from biological contamination in the condenser water loop.',
    blueprintSrc: '/Industry Blueprint Images/Healthcare/Cooling Towers.png',
    hotspots: [
      { id: 'hc-ct-1', xPct: 50, yPct: 45, stage: 'Intake · Cottonwood Screen', product: 'Cottonwood Screen', category: 'COTTONWOOD SCREENS', merv: 'Coarse Screen', description: 'Cottonwood screen blocks seeds, debris, and insects at the outdoor air intake — protecting downstream filters and HVAC equipment from coarse contamination and extending service life.', href: '/contact', image: '/Cottonwood Screen Blueprints/Cottonwood Screen Product Photo.jpg' },
    ],
  },
]

const benefits = [
  { icon: Shield, text: 'Three-stage filtration removes bacteria, viruses, and fine particulate' },
  { icon: Heart, text: 'Protects immunocompromised patients and critical care spaces' },
  { icon: Activity, text: 'Meets ASHRAE 170 and Joint Commission air quality requirements' },
  { icon: AlertTriangle, text: 'Reduces hospital-acquired infection risk from airborne pathogens' },
]

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        title="Healthcare"
        subtitle="High-efficiency and HEPA filtration built to protect patients, staff, and critical care environments."
        breadcrumb="Industries"
        backgroundImage="/site-images/health care.jpg"
        imagePosition="object-[center_30%]"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Healthcare</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Air Quality That Protects Lives</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Healthcare facilities carry one of the highest air quality burdens of any building type. Operating rooms, isolation wards, pharmacies, and patient rooms each require different filtration specifications — and any failure has real consequences.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI supplies three-stage filtration systems for healthcare AHUs — from MERV 11 pre-filters through true HEPA terminal filtration. We stock the sizes you need and can service the change schedule so your team stays focused on patient care.</p>
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
                <Image src="/site-images/operating room.png" alt="Healthcare facility" fill className="object-cover object-center" />
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
              { icon: Layers, value: 'ASHRAE', label: '170 Compliant', desc: 'Filtration systems engineered to meet ASHRAE 170 and Joint Commission requirements across surgical suites, patient rooms, and pharmacy cleanrooms.' },
              { icon: Settings2, value: '99.97%', label: 'HEPA at Terminal', desc: 'True HEPA at operating room and isolation ward supply points — capturing 99.97% of particles ≥0.3 micron to protect immunocompromised patients.' },
              { icon: Clock, value: '4 Systems', label: 'Covered', desc: 'High-purity AHU, traditional AHU, exhaust re-entrainment, and cooling tower filtration — every critical system in your hospital campus.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for healthcare AHUs, high-purity spaces, and hospital cooling systems.</p>
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
