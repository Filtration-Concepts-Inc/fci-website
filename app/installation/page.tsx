'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { Leaf, Sun, Wind, ThermometerSun, Bug, Shield, MapPin, Ruler, Wrench, ShieldCheck } from 'lucide-react'
import { HoverButton } from '@/components/ui/hover-glow-button'
import CottonwoodDiagrams from '@/components/installation/CottonwoodDiagrams'
import UVDiagrams from '@/components/installation/UVDiagrams'

const uvBenefits = [
  { icon: Bug, text: 'Kills bacteria, mold, and viruses on coils and in airstream' },
  { icon: Wind, text: 'Improves air quality without chemicals or filters' },
  { icon: ThermometerSun, text: 'Keeps coils clean — improves heat transfer and efficiency' },
  { icon: Shield, text: 'Reduces sick days in offices, schools, and healthcare facilities' },
]

const cottonwoodBenefits = [
  { icon: Leaf, text: 'Blocks cottonwood, seed pods, and airborne debris before they reach coils' },
  { icon: Wind, text: 'Maintains airflow — unlike clogged coils, screens stay serviceable' },
  { icon: ThermometerSun, text: 'Prevents coil choking that causes system shutdowns in peak season' },
  { icon: Shield, text: 'Custom-fit to any rooftop unit — no gaps, full coverage' },
]

export default function InstallationPage() {
  return (
    <>
      <PageHero
        title="Installation Services"
        subtitle="UV germicidal systems and cottonwood screens — installed right, by people who know HVAC."
        breadcrumb="Installation"
        backgroundImage="/site-images/installation banner photo.png"
              cinematic
      />

      {/* ── Cottonwood Screens ── */}
      <section id="cottonwood-screens" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">Installation</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Cottonwood Screens</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">
                Every spring, cottonwood fluff, seed pods, and airborne debris blanket rooftop HVAC units across Wisconsin. Within days, condenser coils can be completely choked — reducing airflow, spiking energy use, and in severe cases, shutting down cooling entirely.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                FCI supplies and installs custom-fit cottonwood screens that wrap your rooftop units before the season hits. Your coils stay clean, your system keeps running, and you never have to think about it.
              </p>

              <ul className="mt-8 space-y-3">
                {cottonwoodBenefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <li key={b.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} className="text-[#CC0000]" />
                      </div>
                      <span className="text-sm text-gray-600 leading-relaxed">{b.text}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8">
                <Link href="/contact">
                  <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-6 py-3 text-sm">
                    Schedule Screen Installation →
                  </HoverButton>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#CC0000]/8 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/site-images/Skyscraper rooftop.png"
                  alt="Cottonwood screen on rooftop HVAC unit"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">How It Works</h2>
            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">Three steps and your coils are protected before the season hits.</p>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', icon: MapPin, title: 'Site Visit', description: 'We come to your facility, measure every rooftop unit, and assess intake areas to determine the right screen configuration.' },
              { number: '02', icon: Ruler, title: 'Custom Fabrication', description: 'Screens are cut to exact dimensions for your specific units — no gaps, no guessing, full coverage from edge to edge.' },
              { number: '03', icon: Wrench, title: 'Installation Day', description: "We install everything before cottonwood season starts. Your coils are covered and you don't have to think about it again." },
              { number: '04', icon: ShieldCheck, title: '10-Year Warranty', description: 'Every screen installation is backed by a 10-year warranty. If anything is damaged or breaks, all parts and materials are fully covered — no questions asked.' },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div key={step.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#CC0000]/40 tracking-widest">{step.number}</span>
                    <div className="w-24 h-24 rounded-2xl bg-[#CC0000]/10 flex items-center justify-center">
                      <Icon size={48} className="text-[#CC0000]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  {i < 3 && <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-gray-200 text-2xl">→</div>}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Cottonwood Diagrams ── */}
      <section className="py-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CottonwoodDiagrams />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px bg-gray-100 max-w-7xl mx-auto" />

      {/* ── UV Germicidal ── */}
      <section id="uv" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-[#CC0000]/8 rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/Cottonwood Screen Blueprints/UV website image.png"
                  alt="UV germicidal HVAC installation"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">Installation</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">UV Germicidal Systems</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">
                UV-C germicidal lamps installed inside your air handling units continuously irradiate coils and drain pans — eliminating the mold, bacteria, and biofilm that standard filters can't catch. The result is cleaner air, cleaner coils, and a system that runs more efficiently year-round.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                FCI handles the full installation — sizing the right lamps for your unit, positioning them for maximum germicidal coverage, and replacing bulbs on a regular maintenance schedule so the system never lapses.
              </p>

              <ul className="mt-8 space-y-3">
                {uvBenefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <li key={b.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} className="text-[#CC0000]" />
                      </div>
                      <span className="text-sm text-gray-600 leading-relaxed">{b.text}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8">
                <Link href="/contact">
                  <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-6 py-3 text-sm">
                    Get a UV Installation Quote →
                  </HoverButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UV Diagrams ── */}
      <section className="py-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <UVDiagrams />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
