'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { Zap, Shield, Wind, Activity, Paintbrush, Flame, Factory } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Assembly Plant Air Handling Unit',
    label: 'AUTOMOTIVE & EV',
    description: 'Multi-stage filtration for assembly plant AHUs — capturing metallic dust, welding fumes, and paint aerosols generated across production floors. Progressive filter stages protect equipment and maintain air quality for workers throughout the facility.',
    blueprintSrc: '/Industry Blueprint Images/Automotive & EV/Assembly Plant Air Handling Unit.png',
    hotspots: [
      { id: 'auto-ahu-1', xPct: 53, yPct: 57, stage: 'Stage 1 · Pre-Filter', product: 'Link & Cube Filters', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8', description: 'Rigid-frame cube and link-style filters capture heavy industrial and metallic particulate loads with long service life — designed for demanding manufacturing environments with elevated dust concentrations.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Link & Cube Filters.png' },
      { id: 'auto-ahu-2', xPct: 65, yPct: 57, stage: 'Stage 2 · Main Filter', product: 'Pocket Filter', category: 'HIGH EFFICIENCY', merv: 'MERV 13', description: 'High-capacity pocket filter delivers superior dust-holding capacity and low pressure drop — removing fine particulate for maximum air quality protection in commercial, industrial, and institutional HVAC systems.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Pocket Filter.png' },
      { id: 'auto-ahu-3', xPct: 75, yPct: 57, stage: 'Stage 3 · Final Filter', product: 'FP Mini-Pleat', category: 'HIGH EFFICIENCY', merv: 'MERV 11, 14, 15 & 16', description: 'High-efficiency mini-pleat filter captures fine particulate and allergens at the primary filtration stage — delivering low pressure drop and extended service life in commercial and institutional HVAC applications.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/FP Mini-Pleat.png' },
    ],
  },
  {
    num: '02',
    title: 'Paint Spray Booth — Crossdraft',
    label: 'AUTOMOTIVE & EV',
    description: 'Crossdraft spray booth filtration captures overspray at the exhaust wall. High-capacity filters remove paint particles before air is exhausted, protecting workers and preventing coating buildup on downstream equipment.',
    blueprintSrc: '/Industry Blueprint Images/Automotive & EV/Paint Spray Booth Crossdraft Booth.png',
    hotspots: [
      { id: 'auto-cross-0', xPct: 13, yPct: 42, stage: 'Intake · Supply Panel', product: 'Series 55 Intake Panel', category: 'PAINT OVERSPRAY', merv: 'G4', description: 'Series 55 intake panels filter incoming supply air on the intake wall of the crossdraft booth, delivering clean, uniform airflow over the vehicle for a contaminant-free paint environment.', href: '/contact', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Series 55 Intake Panel.png' },
    ],
  },
  {
    num: '03',
    title: 'Paint Spray Booth — Downdraft',
    label: 'AUTOMOTIVE & EV',
    description: 'Downdraft spray booth systems push clean air downward over the vehicle, capturing overspray through floor grates. Multi-stage filtration ensures consistent finish quality and protects recirculation equipment.',
    blueprintSrc: '/Industry Blueprint Images/Automotive & EV/Paint Spray Booth Downdraft Booth.png',
    hotspots: [
      { id: 'auto-down-1', xPct: 42, yPct: 30, stage: 'Supply · Ceiling Filter', product: 'Diffusion Media', category: 'PAINT OVERSPRAY', merv: 'G3', description: 'Diffusion media at the ceiling plenum evenly distributes supply air across the booth, eliminating turbulence and delivering uniform downdraft airflow for a flawless paint finish.', href: '/contact', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Diffusion Media.png' },
      { id: 'auto-down-2', xPct: 50, yPct: 62, stage: 'Exhaust · Floor Pit Pre-Filter', product: 'Paint Arrestor Media', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8', description: 'Paint arrestor media in the floor pit captures heavy paint overspray and wet particles before they reach downstream exhaust equipment, protecting fans and ductwork while extending service intervals.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Poly Media.png' },
      { id: 'auto-down-3', xPct: 65, yPct: 62, stage: 'Exhaust · Final Filter', product: 'Pocket Filter', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'High-capacity pocket filter delivers superior dust-holding capacity and low pressure drop — removing fine particulate for maximum air quality protection in commercial, industrial, and institutional HVAC systems.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Pocket Filter.png' },
    ],
  },
  {
    num: '04',
    title: 'Paint Spray Booth — Prep Station',
    label: 'AUTOMOTIVE & EV',
    description: 'Pre-paint preparation stations require clean air to prevent dust contamination before application. Filtration at prep stations captures sanding dust and airborne particles that would otherwise create surface defects.',
    blueprintSrc: '/Industry Blueprint Images/Automotive & EV/Paint Spray Booth Prep Station.png',
    hotspots: [
      { id: 'auto-prep-1', xPct: 19, yPct: 63, stage: 'Floor · Pre-Filter', product: 'Poly Media', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8', description: 'Lightweight synthetic poly media provides large surface area for capturing dust, insects, and particulate — ideal for high-volume intake applications requiring economical and effective pre-filtration.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Poly Media.png' },
      { id: 'auto-prep-2', xPct: 37, yPct: 22, stage: 'Supply · Ceiling Filter', product: 'Diffusion Media', category: 'PAINT OVERSPRAY', merv: 'G3', description: 'Diffusion media at the ceiling plenum evenly distributes supply air across the prep station, eliminating turbulence and delivering uniform airflow over the vehicle surface before paint application.', href: '/contact', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Diffusion Media.png' },
      { id: 'auto-prep-3', xPct: 85, yPct: 55, stage: 'Exhaust · Final Filter', product: 'Pocket Filter', category: 'HIGH EFFICIENCY', merv: 'MERV 14', description: 'High-capacity pocket filter delivers superior dust-holding capacity and low pressure drop — removing fine particulate for maximum air quality protection in commercial, industrial, and institutional HVAC systems.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Pocket Filter.png' },
    ],
  },
]

const benefits = [
  { icon: Zap, text: 'Protects sensitive EV battery assembly from metallic particle contamination' },
  { icon: Shield, text: 'Captures paint overspray, welding fumes, and grinding dust on production lines' },
  { icon: Wind, text: 'Maintains clean airflow in paint booths to ensure finish quality' },
  { icon: Activity, text: 'Reduces equipment maintenance downtime in high-particulate environments' },
]

export default function AutomotiveEVPage() {
  return (
    <>
      <PageHero
        title="Automotive & EV"
        subtitle="Precision filtration for paint booths, assembly lines, and electric vehicle battery manufacturing."
        breadcrumb="Industries"
        backgroundImage="/site-images/automotive banner photo.png"
              cinematic
      />

      {/* Intro — text left, photo right */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pr-8"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Automotive & EV</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Built for the Production Floor</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Automotive facilities generate some of the most demanding air quality challenges — paint overspray, metallic dust from grinding and stamping, welding fumes, and chemical aerosols from surface treatment processes.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">EV manufacturing adds a new layer of complexity: battery cell assembly demands near-cleanroom air quality to prevent contamination that degrades cell performance and safety. FCI provides the full filtration stack — from coarse pre-filters through high-efficiency final stages — for every zone of your facility.</p>
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

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Decorative red accent block behind image */}
              <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#CC0000]/8 rounded-3xl" />
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4]">
                <Image
                  src="/site-images/Painter Pic.png"
                  alt="Car being painted in automotive facility"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Icon stat cards */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                icon: Paintbrush,
                value: 'Paint Booths',
                label: 'Crossdraft & Downdraft',
                desc: 'Diffusion ceiling media, Series 55 intake panels, cube floor pit filters, and pocket exhaust stages — complete overspray capture for both booth types.',
              },
              {
                icon: Flame,
                value: 'Weld Fume',
                label: '& Metal Dust',
                desc: 'Assembly plant AHUs handle metallic grinding dust and welding aerosols with rigid cube pre-filters and high-efficiency pocket main filters.',
              },
              {
                icon: Factory,
                value: '4 Systems',
                label: 'Covered',
                desc: 'Assembly AHU, crossdraft booth, downdraft booth, and prep station — filtration for every zone in your facility.',
              },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-[#1a1a1a] flex flex-col items-center text-center px-10 py-12 group hover:bg-[#252525] transition-colors duration-300"
                >
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for automotive assembly plants, paint booths, and EV manufacturing facilities.</p>
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
