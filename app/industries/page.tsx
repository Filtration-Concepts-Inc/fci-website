'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'

const industries = [
  {
    href: '/industries/airports',
    title: 'Airports',
    description: 'High-capacity filtration for terminals and concourses serving thousands daily.',
    image: '/site-images/airports pic.jpg',
  },
  {
    href: '/industries/automotive-ev',
    title: 'Automotive & EV',
    description: 'Precision filtration for paint booths, assembly lines, and EV battery manufacturing.',
    image: '/site-images/warehouse pic.jpg',
  },
  {
    href: '/industries/cleanrooms',
    title: 'Cleanrooms & Labs',
    description: 'HEPA and ULPA filtration for pharmaceutical and research environments.',
    image: '/site-images/clean rooms.jpg',
  },
  {
    href: '/industries/commercial',
    title: 'Commercial Buildings',
    description: 'Energy-efficient filtration for offices, retail, and mixed-use facilities.',
    image: '/site-images/commercial buildings.jpg',
  },
  {
    href: '/industries/data-centers',
    title: 'Data Centers',
    description: 'Clean air filtration that protects critical IT infrastructure and maximizes uptime.',
    image: '/site-images/data-centers.jpg',
  },
  {
    href: '/industries/education',
    title: 'Education',
    description: 'Reliable, cost-effective filtration programs for schools and universities.',
    image: '/site-images/education.jpg',
  },
  {
    href: '/industries/food-beverage',
    title: 'Food & Beverage',
    description: 'Air quality solutions that meet strict contamination standards in food processing.',
    image: '/site-images/food & beverage.jpg',
  },
  {
    href: '/industries/healthcare',
    title: 'Healthcare',
    description: 'High-efficiency and HEPA filtration built for patients, staff, and critical spaces.',
    image: '/site-images/health care.jpg',
  },
  {
    href: '/industries/hospitality',
    title: 'Hospitality & Gaming',
    description: 'Clean, odor-free air for hotels, resorts, and casino floors.',
    image: '/site-images/hospitality and gaming.jpg',
  },
  {
    href: '/industries/manufacturing',
    title: 'Manufacturing',
    description: 'Reduce particulate buildup and maintain safe air quality on the production floor.',
    image: '/site-images/warehouse pic.jpg',
  },
  {
    href: '/industries/shooting-ranges',
    title: 'Shooting Ranges',
    description: 'HEPA-grade filtration that captures lead aerosols and protects range occupants.',
    image: '/site-images/iStock-869980894.jpg',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="From hospitals to gaming floors — if it has air, we filter it."
        breadcrumb="Industries"
        backgroundImage="/site-images/commercial buildings 2.jpg"
              cinematic
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Filtration for Every Environment</h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
              FCI works with contractors and facility managers across Wisconsin. Select your industry to see the right filtration solution.
            </p>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={ind.href} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-[#CC0000]/20 hover:shadow-xl transition-all duration-300 h-full bg-white">
                  {/* Photo */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-white font-bold text-base drop-shadow">{ind.title}</h3>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="p-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{ind.description}</p>
                    <p className="mt-3 text-xs font-semibold text-[#CC0000] group-hover:translate-x-1 transition-transform duration-200">
                      View solutions →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
