'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'
import IndustryBlueprintDiagrams, { BlueprintTab } from '@/components/industries/IndustryBlueprintDiagrams'
import { CheckCircle2, Zap, DollarSign, Wind, Users, TrendingDown, Building2 } from 'lucide-react'

const BLUEPRINT_TABS: BlueprintTab[] = [
  {
    num: '01',
    title: 'Air Handling Unit',
    label: 'COMMERCIAL BUILDINGS',
    description: 'Filtration for network operations centers and remote management console rooms — maintaining ISO-equivalent cleanliness for sensitive operator workstations and display equipment in always-on environments.',
    blueprintSrc: '/Industry Blueprint Images/Data Centers/Remote Management Console.png',
    hotspots: [
      { id: 'cb-rmc-1', xPct: 39, yPct: 52, stage: 'Stage 1 · Pre-Filter', product: 'Series 400', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8 & 10', description: 'Standard wireback pleat pre-filter captures coarse dust and debris at the first stage — extending the life of downstream high-efficiency filters in commercial AHU applications.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Series 400.png' },
      { id: 'cb-rmc-2', xPct: 50, yPct: 52, stage: 'Stage 2 · Main Filter', product: 'GeoPleat', category: 'HIGH EFFICIENCY', merv: 'MERV 13', description: 'Geometric pleat construction delivers high-efficiency filtration with low pressure drop — removing fine particulate and allergens for cleaner indoor air across commercial and institutional HVAC applications.', href: '/products#high-efficiency', image: '/FCI Website Product Images/HIGH EFFICIENCY/GeoPleat.png' },
    ],
  },
  {
    num: '02',
    title: 'VAV Box',
    label: 'COMMERCIAL BUILDINGS',
    description: 'Variable Air Volume (VAV) box filtration for commercial buildings — maintaining consistent air quality at the zone level while adapting to changing occupancy and load conditions throughout the facility.',
    blueprintSrc: '/Industry Blueprint Images/Commercial Buildings/V A V Box.png',
    hotspots: [
      { id: 'cb-vav-1', xPct: 82, yPct: 50, stage: 'Stage 1 · Pre-Filter', product: 'Series 400', category: 'MEDIUM EFFICIENCY', merv: 'MERV 8 & 10', description: 'Standard wireback pleat filter maintains clean airflow through the VAV box — capturing dust and particulate at the zone level to protect downstream components and maintain consistent indoor air quality.', href: '/products#medium-efficiency', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Series 400.png' },
    ],
  },
]

const benefits = [
  { icon: Wind, text: 'Cleaner air for tenants, employees, and visitors' },
  { icon: Zap, text: 'Reduced energy draw — clean filters move air more efficiently' },
  { icon: DollarSign, text: 'Mark & Tag service keeps your maintenance team organized' },
  { icon: CheckCircle2, text: 'Service programs available — we handle the change schedule' },
]

export default function CommercialPage() {
  return (
    <>
      <PageHero
        title="Commercial Buildings"
        subtitle="Energy-efficient filtration for offices, retail, and mixed-use facilities across Wisconsin."
        breadcrumb="Industries"
        backgroundImage="/site-images/commercial buildings.jpg"
              cinematic
      />

      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">Commercial Buildings</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Clean Air, Lower Operating Costs</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">Commercial buildings cycle thousands of cubic feet of air every hour. The filters in your air handlers are the last line of defense against dust, particulate, and allergens that affect tenant comfort, HVAC efficiency, and long-term equipment life.</p>
              <p className="mt-4 text-gray-500 leading-relaxed">FCI stocks the full range of commercial filter types — from MERV 8 pre-filters to MERV 13 high-efficiency units — and can build a service program tailored to your building's change schedule and budget.</p>
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
                <Image src="/site-images/commercial buildings 2.jpg" alt="Commercial building" fill className="object-cover object-center" />
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
              { icon: Users, value: 'Healthier Tenants', label: 'Indoor Air Quality', desc: 'Filters engineered to reduce allergens, dust, and airborne particles — keeping tenants, employees, and visitors breathing clean air year-round.' },
              { icon: TrendingDown, value: 'Up to 15%', label: 'Energy Savings', desc: 'Clean filters maintain optimal airflow and reduce HVAC energy draw — lowering operating costs across your commercial property portfolio.' },
              { icon: Building2, value: 'Every Floor', label: 'Full System Coverage', desc: 'AHU, DOAS, fan wall, and rooftop unit configurations covered — the right filter at every stage for every commercial HVAC system in your building.' },
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
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Explore FCI&apos;s recommended filtration configurations for commercial AHUs, DOAS units, fan walls, and rooftop systems.</p>
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
