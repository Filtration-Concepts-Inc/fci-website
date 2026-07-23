'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import Link from 'next/link'
import { ClipboardList, Package, Truck, CheckCircle2 } from 'lucide-react'
import { HoverButton } from '@/components/ui/hover-glow-button'

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Submit Your Order',
    description: 'Tell us what you need — filter type, size, quantity. We keep your order profile on file so reordering is fast.',
  },
  {
    icon: Package,
    step: '02',
    title: 'We Pick & Pack',
    description: 'We pull your filters from stock, box them up, and label every package so your team knows exactly where each filter goes.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'We Deliver',
    description: 'Direct delivery to your facility on your schedule. No waiting on shipping carriers or tracking packages.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Done. Breathe Easy.',
    description: 'Your filters are in. Your system is running clean. We\'ll follow up when it\'s time to reorder.',
  },
]

const features = [
  'Custom order profiles saved for each customer',
  'Labeled and organized boxes per location',
  'Flexible delivery scheduling',
  'Account history and reorder reminders',
  'Dedicated account representative',
  'Emergency orders accommodated',
]

export default function AirTrackPage() {
  return (
    <>
      <PageHero
        title="AirTrack"
        subtitle="Streamlined ordering that keeps your filters stocked without the hassle."
        breadcrumb="AirTrack"
        darkMode
        cinematic
      />

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-[#1a1a1a]">How AirTrack Works</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Four simple steps from order to clean air.
            </p>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />

            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#CC0000]/20 flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={28} className="text-[#CC0000]" />
                  </div>
                  <span className="text-xs font-bold text-[#CC0000] uppercase tracking-widest mb-1">Step {step.step}</span>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
          <div className="flex flex-col items-center gap-3 mt-12">
            <Link href="#">
              <HoverButton backgroundColor="rgba(204,0,0,0.85)" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-10 py-3 text-base font-semibold shadow-lg border border-white/10">
                AirTrack Login →
              </HoverButton>
            </Link>
            <span className="text-sm text-gray-400 font-medium">or</span>
            <Link href="/contact" className="text-sm font-semibold text-[#CC0000] hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">Everything You Need, Nothing You Don&apos;t</h2>
              <div className="w-12 h-1 bg-[#CC0000] rounded mb-5" />
              <p className="text-gray-500 leading-relaxed mb-6">
                AirTrack is designed for facilities that need a consistent, reliable supply of filters without managing it themselves. We handle the logistics — you focus on your business.
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-[#CC0000] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 inline-block">
                <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-6 py-3 text-sm">
                  Get Set Up on AirTrack →
                </HoverButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#CC0000]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package size={28} className="text-[#CC0000]" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] text-lg">Ready to Get Started?</h3>
                <p className="text-sm text-gray-500 mt-1">Contact us to set up your AirTrack account.</p>
              </div>
              <div className="space-y-3">
                <div className="bg-[#f7f7f7] rounded-lg p-4 text-sm text-gray-600">
                  <span className="font-semibold text-[#1a1a1a]">Milwaukee / Lannon:</span><br />
                  (262) 251-3233
                </div>
                <div className="bg-[#f7f7f7] rounded-lg p-4 text-sm text-gray-600">
                  <span className="font-semibold text-[#1a1a1a]">Green Bay / Luxemburg:</span><br />
                  (920) 845-2449
                </div>
              </div>
              <Link href="/contact" className="mt-4 block">
                <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="w-full py-3 text-sm">
                  Contact Us →
                </HoverButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
