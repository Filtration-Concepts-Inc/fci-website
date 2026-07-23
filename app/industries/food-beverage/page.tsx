'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { ShieldCheck, ClipboardList, Thermometer, Wind, Layers, Settings2, Clock } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Air Handling Unit — High Purity',
    label: 'FOOD & BEVERAGE',
    description: 'High-purity AHU configurations for operating rooms, isolation wards, and cleanroom pharmacies — delivering HEPA-filtered air to the most critical spaces in a healthcare facility. Three-stage progressive filtration meets ASHRAE 170 and Joint Commission requirements.',
    blueprintSrc: '/Industry Blueprint Images/Healthcare/Air Handling Unit High Purity.png',
    hotspots: [
      { id: 'fb-hp-1', xPct: 45, yPct: 64, stage: 'Stage 1 · Pre-Filter', product: 'Enduro Pleat', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8/9A', description: 'Durable pleated pre-filter captures coarse dust, pollen, and debris at the first stage — extending the life of downstream high-efficiency filters across commercial, industrial, and institutional HVAC applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Enduro Pleat.png' },
      { id: 'fb-hp-2', xPct: 55, yPct: 61, stage: 'Stage 2 · Main Filter', product: 'Viledon MV', category: 'HIGH EFFICIENCY', merv: 'MERV 12, 13 & 16', description: 'High-efficiency Viledon MV filter media delivers reliable mid-stage filtration with low pressure drop — capturing fine particulate and protecting downstream HEPA filters in food and beverage processing environments.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/Viledon MV.png' },
      { id: 'fb-hp-3', xPct: 70, yPct: 61, stage: 'Stage 3 · Final Filter', product: 'HV Series', category: 'HEPA FILTRATION', merv: 'MERV 17 / H14', description: 'High-velocity HEPA final filter delivers certified 99.97% efficiency at 0.3 micron — engineered for high-purity healthcare AHUs serving surgical suites, isolation rooms, and pharmacy cleanrooms meeting ASHRAE 170 standards.', href: '/products#hepa-filtration', image: '/FCI Website Product Images/HEPA FILTRATION/HV Series (2).png' },
    ],
  },
]

const benefits = [
  { icon: ShieldCheck, text: 'Prevents airborne contamination of product lines and packaging areas' },
  { icon: ClipboardList, text: 'Supports FDA, USDA, and HACCP air quality documentation' },
  { icon: Thermometer, text: 'Maintains stable temperature and humidity in controlled production zones' },
  { icon: Wind, text: 'Reduces particulate that can settle on equipment and food surfaces' },
]

export default function FoodBeveragePage() {
  return (
    <>
      <PageHero
        title="Food & Beverage"
        subtitle="Meet strict contamination standards with high-efficiency filtration for food processing and packaging facilities."
        breadcrumb="Industries"
        backgroundImage="/site-images/food & beverage.jpg"
        imagePosition="object-[center_45%]"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Food & Beverage</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Purity Starts With the Air</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Food and beverage facilities operate under strict contamination standards — and the air supply is a critical control point. Inadequate filtration can introduce airborne bacteria, mold spores, and particulate that compromise product safety and regulatory compliance.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI provides two-stage filtration solutions with filters rated for food-production environments, stocked at both Wisconsin locations and delivered directly to your facility on your schedule.</p>
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
                <Image src="/site-images/cheese photo.png" alt="Food and beverage production facility" fill className="object-cover object-center" />
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
              { icon: Layers, value: 'HACCP', label: 'Control Point', desc: 'Air filtration is a critical HACCP control point — FCI supplies filters rated for food-production environments to support FDA and USDA documentation.' },
              { icon: Settings2, value: '2 Systems', label: 'Covered', desc: 'Air compressor intake and kitchen exhaust filtration — two critical points where contamination enters or escapes food and beverage facilities.' },
              { icon: Clock, value: 'Custom', label: 'Change Schedules', desc: 'Filter service programs built around your production calendar — stocked at our Wisconsin locations and delivered on your timeline.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for food processing air compressors and kitchen exhaust systems.</p>
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
