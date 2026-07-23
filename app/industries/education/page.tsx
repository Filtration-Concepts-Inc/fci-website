'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { Users, DollarSign, Calendar, Wind, Layers, Settings2, Clock } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Air Handling Unit',
    label: 'EDUCATION',
    description: 'Standard AHU filtration for school and university buildings — two-stage configuration capturing allergens, pollen, and fine particulate before air reaches classrooms and shared spaces.',
    blueprintSrc: '/Industry Blueprint Images/Data Centers/Remote Management Console.png',
    hotspots: [
      { id: 'edu-ahu-1', xPct: 34, yPct: 56, stage: 'Stage 1 · Pre-Filter', product: 'Nova Pleat', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8', description: 'Pleated pre-filter at chiller intake protects cooling coils and heat exchangers from particulate fouling, maintaining precise temperature control required for semiconductor process stability.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Nova Pleat.png' },
      { id: 'edu-ahu-2', xPct: 46, yPct: 49, stage: 'Stage 2 · Main Filter', product: 'GeoPleat', category: 'HIGH EFFICIENCY', merv: 'MERV 13', description: 'Geometric pleat construction delivers high-efficiency filtration with low pressure drop — removing fine particulate and allergens for cleaner indoor air across commercial and institutional HVAC applications.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/GeoPleat.png' },
    ],
  },
  {
    num: '02',
    title: 'Rooftop Unit',
    label: 'EDUCATION',
    description: 'Rooftop unit filtration for classrooms, gymnasiums, and portable buildings — captures seasonal pollen, dust, and airborne pathogens common in high-occupancy school environments.',
    blueprintSrc: '/Industry Blueprint Images/Rooftop Unit 2.png',
    hotspots: [
      { id: 'edu-rtu-1', xPct: 15, yPct: 67, stage: 'Stage 1 · Inlet Screen', product: 'Cottonwood Screen', category: 'COTTONWOOD SCREENS', merv: 'Coarse Screen', description: 'Cottonwood screen blocks seeds, debris, and insects at the outdoor air intake — protecting downstream filters and HVAC equipment from coarse contamination and extending service life.', href: '/contact', image: '/Cottonwood Screen Blueprints/Cottonwood Screen Product Photo.jpg' },
      { id: 'edu-rtu-2', xPct: 30, yPct: 67, stage: 'Stage 2 · Pre-Filter', product: 'Series 1100', category: 'MEDIUM EFFICIENCY', merv: 'MERV 11', description: 'MERV 11 wireback pleat captures coarse and mid-range particulate at the pre-filter stage — delivering reliable performance and extended service life in rooftop unit applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Series 1100.png' },
    ],
  },
]

const benefits = [
  { icon: Users, text: 'Better air quality linked to improved student focus and reduced absenteeism' },
  { icon: Wind, text: 'Captures allergens, pollen, and airborne pathogens common in school environments' },
  { icon: DollarSign, text: 'Budget-friendly filter programs fit education facility constraints' },
  { icon: Calendar, text: 'Scheduled service programs — no burden on already-stretched maintenance staff' },
]

export default function EducationPage() {
  return (
    <>
      <PageHero
        title="Education"
        subtitle="Reliable, cost-effective filtration that keeps students and staff breathing clean air every day."
        breadcrumb="Industries"
        backgroundImage="/site-images/education.jpg"
        imagePosition="object-[center_35%]"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Education</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Healthier Schools Start With Cleaner Air</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Schools and universities house hundreds to thousands of occupants in shared spaces every day. Poor indoor air quality contributes to absenteeism, reduced cognitive performance, and increased spread of seasonal illness — all preventable with the right filtration.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI works with school districts and universities across Wisconsin to build affordable filter programs. We stock customer-specific filters at our two locations, mark and tag every box for your maintenance team, and offer scheduled service so filters never get missed.</p>
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
                <Image src="/site-images/School Photo 2.png" alt="School facility" fill className="object-cover object-center" />
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
              { icon: Layers, value: 'MERV 8–13', label: 'Classroom Range', desc: 'From pre-filters in gymnasiums to MERV 13 main filters in classrooms — covering every school HVAC configuration from K-12 to university.' },
              { icon: Settings2, value: 'CDC', label: 'Guidance', desc: 'MERV 13 filtration aligned with CDC and ASHRAE recommendations for reducing airborne pathogen transmission in occupied school buildings.' },
              { icon: Clock, value: 'Mark & Tag', label: 'Every Box', desc: 'Every filter stocked and labeled for your maintenance team — scheduled service available so nothing gets missed between school breaks.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for school and university HVAC systems.</p>
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
