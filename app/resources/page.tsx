import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import { BookOpen, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources – Air Filtration Guides | FCI',
  description: 'Practical guides from Wisconsin\'s filtration experts since 1985. MERV ratings, filter selection, service schedules, and more.',
}

const guides = [
  {
    href: '/resources/merv-ratings',
    title: 'MERV Ratings Explained',
    desc: 'What MERV rating does your facility need? Compare MERV 1–16 and get recommendations by industry.',
    tag: 'Filter Selection',
  },
  // Future guides go here
]

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Practical filtration guides from Wisconsin's air quality experts."
        breadcrumb="Resources"
        backgroundImage="/site-images/Resources Banner Photo.png"
        cinematic
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">Knowledge Base</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Filtration Guides</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
            <p className="mt-4 text-gray-500 leading-relaxed max-w-xl">
              Straightforward answers to common filtration questions — written by the team that specs and services filters across Wisconsin every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map(g => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CC0000]/30 transition-all duration-200 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-[#CC0000]/10 flex items-center justify-center mb-4">
                  <BookOpen size={18} className="text-[#CC0000]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-2">{g.tag}</span>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#CC0000] transition-colors">{g.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{g.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#CC0000]">
                  Read guide <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
