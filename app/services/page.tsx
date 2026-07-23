'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { Calendar, ClipboardList, Zap, ShieldCheck, DollarSign, Wrench, PhoneCall, MapPin, Trash2 } from 'lucide-react'
import { HoverButton } from '@/components/ui/hover-glow-button'
import ServiceDiagram from '@/components/services/ServiceDiagram'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Better Air Quality',
    description: 'Clean filters capture dust, allergens, and contaminants before they circulate through your building.',
  },
  {
    icon: Zap,
    title: 'Lower Energy Bills',
    description: 'A clogged filter makes your HVAC system work harder. Clean filters reduce energy consumption by up to 15%.',
  },
  {
    icon: Wrench,
    title: 'Longer Equipment Life',
    description: 'Dirty filters strain motors and coils. Regular changes reduce wear and extend the life of costly HVAC equipment.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: "A $20 filter changed on schedule beats a $2,000 coil cleaning. Prevention is always cheaper than repair.",
  },
  {
    icon: ClipboardList,
    title: 'Full Service Records',
    description: 'We document every visit — what was changed, when, and by who. Your records are always up to date.',
  },
  {
    icon: Calendar,
    title: 'Hands-Off Scheduling',
    description: "Set it and forget it. We show up on schedule so your team doesn't have to track filter changes.",
  },
]

const steps = [
  { number: '01', icon: MapPin, title: 'Site Assessment', description: 'We walk your facility, catalog every air handler, and note all filter sizes and quantities needed.' },
  { number: '02', icon: Calendar, title: 'Custom Schedule', description: "We build a change schedule based on your building's usage, occupancy, and manufacturer recommendations." },
  { number: '03', icon: Wrench, title: 'We Show Up', description: 'Our technicians arrive, change every filter, and leave your records updated — no coordination required from you.' },
  { number: '04', icon: Trash2, title: 'Offsite Disposal', description: "We haul away all used filters when we're done — no filling your dumpsters. Disposal is handled offsite so your facility stays clean and your waste capacity stays yours." },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Filter Service Programs"
        subtitle="We handle the filters so your team doesn't have to think about them."
        breadcrumb="Service"
        backgroundImage="/site-images/iStock-869980894.jpg"
        cinematic
      />

      {/* ── Main pitch ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">Why It Matters</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Never Miss a Filter Change Again</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">
                Most facilities miss filter changes — not because nobody cares, but because it falls through the cracks. Maintenance teams are stretched thin, schedules slip, and before long filters are running months past their service date.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                FCI's filter service program takes it off your plate entirely. We assess your facility, build a custom change schedule, stock the right filters, and show up when we're supposed to. Your HVAC runs cleaner, your team stays focused, and your records are always current.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  { icon: Calendar, text: 'We show up on your schedule — no reminders or coordination needed' },
                  { icon: ClipboardList, text: 'Full service records documented and left after every visit' },
                  { icon: Zap, text: 'Reduces energy consumption by up to 15% compared to clogged filters' },
                  { icon: ShieldCheck, text: 'Right filters, right sizes stocked and installed before they fail' },
                ].map(b => {
                  const Icon = b.icon
                  return (
                    <li key={b.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={14} className="text-[#CC0000]" />
                      </div>
                      <span className="text-sm text-gray-600 leading-relaxed">{b.text}</span>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-8">
                <Link href="/contact">
                  <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-7 py-3 text-sm">Get a Service Quote →</HoverButton>
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
                  src="/site-images/service pic.jpg"
                  alt="FCI service technician"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">How It Works</h2>
            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
              Four steps and you never think about filters again.
            </p>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#CC0000]/40 tracking-widest">{step.number}</span>
                    <div className="w-24 h-24 rounded-2xl bg-[#CC0000]/10 flex items-center justify-center">
                      <Icon size={48} className="text-[#CC0000]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-gray-200 text-2xl">→</div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Service Diagram ── */}
      <section className="py-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceDiagram />
        </div>
      </section>

      {/* ── Benefits grid ── */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">The Benefits Are Clear</h2>
            <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
              Regular filter maintenance pays for itself — many times over.
            </p>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#CC0000]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Cost callout ── */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest mb-3">The Bottom Line</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              A $20 filter changed on time beats a $2,000 coil cleaning every time.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Deferred filter maintenance doesn't save money — it shifts costs downstream into equipment repairs, emergency service calls, and shortened system life. FCI's service program is the most cost-effective thing you can do for your HVAC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <HoverButton
                  backgroundColor="#CC0000"
                  textColor="#ffffff"
                  hoverTextColor="#ffffff"
                  glowColor="#ff6666"
                  className="px-8 py-4 text-base"
                >
                  Get a Service Quote →
                </HoverButton>
              </Link>
              <Link href="/contact">
                <HoverButton
                  backgroundColor="rgba(255,255,255,0.08)"
                  textColor="#ffffff"
                  hoverTextColor="#ffffff"
                  glowColor="rgba(255,255,255,0.3)"
                  className="px-8 py-4 text-base border border-white/20"
                >
                  <span className="flex items-center gap-2"><PhoneCall size={16} /> Talk to Our Team</span>
                </HoverButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
