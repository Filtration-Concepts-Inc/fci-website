import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import MervCaptureChart from '@/components/resources/MervCaptureChart'
import FilterCrossSection from '@/components/resources/FilterCrossSection'
import { HoverButton } from '@/components/ui/hover-glow-button'
import { AlertTriangle, Zap, Calendar, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MERV Ratings Explained: A Guide for Wisconsin Facilities | FCI',
  description:
    'What MERV rating does your facility need? Compare MERV 1–16 filter ratings and get recommendations by industry from Wisconsin\'s filtration experts since 1985.',
}

const faqItems = [
  {
    q: 'What MERV rating should I use for my facility?',
    a: 'For most commercial and light industrial buildings, MERV 8 is the baseline and MERV 11–13 is the upgrade path for better air quality. Regulated environments (food, healthcare) typically need MERV 13 or higher. When in doubt, check your equipment specs — or ask us.',
  },
  {
    q: 'Will a higher MERV filter hurt my HVAC system?',
    a: 'It can, if the system wasn\'t designed for the added resistance. The most common fix is moving to a deeper filter (2" or 4") at the same rating, which raises efficiency without choking airflow.',
  },
  {
    q: "What's the difference between MERV, MPR, and FPR?",
    a: 'MPR (3M) and FPR (Home Depot) are proprietary retail rating systems aimed at homeowners. MERV is the ASHRAE industry standard and the only one used in commercial specifications. Roughly: MPR 600 ≈ MERV 8, MPR 1000–1200 ≈ MERV 11, MPR 1500+ ≈ MERV 13.',
  },
  {
    q: 'How often should filters be changed?',
    a: 'It depends on the environment, filter type, and rating — anywhere from monthly to twice a year. This is exactly what our filter service programs handle: we schedule, supply, and change filters so it never falls off anyone\'s to-do list.',
  },
  {
    q: 'Do you stock high-MERV filters, or is there a lead time?',
    a: 'We stock over 1,000 products across our Lannon and Luxemburg locations, including MERV 13+ and specialty filters. Need a non-standard size? We fabricate custom pleated filters in-house.',
  },
]

const industries = [
  {
    title: 'Manufacturing & Industrial',
    range: 'MERV 8–13',
    body: 'General manufacturing usually runs MERV 8 pleated filters, stepping up to MERV 11–13 where processes generate welding fumes, oil mist, or fine particulate — or where finished products are sensitive to dust. Many plants pair a lower-MERV pre-filter with a higher-MERV final filter to extend filter life and control costs.',
  },
  {
    title: 'Food & Beverage Processing',
    range: 'MERV 13–14+',
    body: 'Food safety audits (SQF, BRC, and similar) increasingly expect documented air filtration in production and packaging areas. MERV 13+ captures the mold spores and bacteria-carrying particles auditors care about. Filtration is often tiered by zone — higher ratings over exposed product, moderate ratings in warehousing.',
  },
  {
    title: 'Healthcare & Senior Living',
    range: 'MERV 13–16, HEPA in critical areas',
    body: 'ASHRAE 170 sets minimum filtration requirements for healthcare occupancies — patient care areas typically require MERV 14 final filters, with HEPA in surgical suites and protective environment rooms. Senior living facilities generally run MERV 11–13 for resident air quality.',
  },
  {
    title: 'Schools & Commercial Offices',
    range: 'MERV 8–13',
    body: 'MERV 8 remains the workhorse for standard commercial buildings. Since 2020, many districts and building owners have moved to MERV 11–13 for improved indoor air quality — worth confirming your air handlers can handle the added pressure drop before upgrading.',
  },
  {
    title: 'Data Centers & Electronics',
    range: 'MERV 8–13',
    body: 'Fine dust is the enemy of electronics. MERV 8 pre-filters with MERV 11–13 finals keep conductive and corrosive particles off equipment while managing the airflow these high-volume systems demand.',
  },
]

const warnings = [
  {
    icon: AlertTriangle,
    title: 'Static Pressure',
    body: 'Higher-MERV filters resist airflow more. If your air handler wasn\'t designed for it, you\'ll see reduced airflow, hot/cold spots, and strained motors. Sometimes the fix is a deeper filter — a 4" MERV 13 often has less pressure drop than a 1" MERV 8.',
  },
  {
    icon: Calendar,
    title: 'Change Frequency',
    body: 'A high-efficiency filter loads up faster in a dirty environment. A structured service program matters more as ratings go up — a fully loaded MERV 13 can perform worse than a clean MERV 8.',
  },
  {
    icon: Layers,
    title: 'Pre-Filter Strategy',
    body: 'In dusty environments, an inexpensive MERV 8 pre-filter protecting a MERV 13+ final filter usually costs less over a year than running the high-efficiency filter alone.',
  },
]

const mervRows = [
  { rating: '1–4',   captures: 'Particles larger than 10 microns: pollen, dust mites, carpet fibers, sanding dust', filters: 'Fiberglass panels, washable metal mesh', apps: 'Equipment protection only; pre-filters' },
  { rating: '5–8',   captures: '3–10 micron particles: mold spores, cement dust, hair spray, finer dust',           filters: 'Pleated filters, cube filters',           apps: 'Offices, light commercial, general manufacturing' },
  { rating: '9–12',  captures: '1–3 micron particles: lead dust, flour, auto emissions, welding fumes',             filters: 'High-capacity pleated, box filters',       apps: 'Better commercial buildings, light industrial, schools' },
  { rating: '13–16', captures: '0.3–1 micron particles: bacteria, smoke, sneeze droplets',                          filters: 'Rigid cell, V-bank, mini-pleat',           apps: 'Healthcare, food processing, labs, clean manufacturing' },
  { rating: 'HEPA',  captures: '99.97% of 0.3 micron particles',                                                    filters: 'HEPA/ULPA',                               apps: 'Hospitals, cleanrooms, pharmaceutical' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function MervRatingsPage() {
  return (
    <>
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title="What MERV Rating Does Your Facility Need?"
        subtitle="The MERV scale explained — what each range captures and what we typically recommend for the industries we serve across Wisconsin."
        breadcrumb="Resources / MERV Ratings"
        backgroundImage="/site-images/Merv rating banner photo.png"
        cinematic
      />

      {/* ── 1. What Is a MERV Rating ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">The Basics</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">What Is a MERV Rating?</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">
                MERV stands for <strong className="text-[#1a1a1a]">Minimum Efficiency Reporting Value</strong>. It's the industry-standard scale (defined by ASHRAE Standard 52.2) for measuring how effectively an air filter captures airborne particles between 0.3 and 10 microns — things like dust, pollen, mold spores, welding fumes, bacteria, and smoke.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                The scale runs from 1 to 16. The higher the number, the smaller the particles the filter can capture.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Higher isn't automatically better, though. A filter that's too restrictive for your air handling equipment increases static pressure, drives up energy costs, and shortens equipment life. The right choice balances air quality requirements against what your HVAC system is built to handle — and that's exactly the conversation we have with customers every day.
              </p>
            </div>

            {/* ASHRAE definition card */}
            <div className="rounded-2xl border border-gray-100 bg-[#f8f8f8] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#CC0000] mb-4">Quick Reference</p>
              <div className="space-y-4">
                {[
                  { range: 'MERV 1–4',   label: 'Equipment protection',  color: '#fee2e2' },
                  { range: 'MERV 5–8',   label: 'General commercial',    color: '#fca5a5' },
                  { range: 'MERV 9–12',  label: 'Better commercial',     color: '#f87171' },
                  { range: 'MERV 13–16', label: 'Healthcare & regulated',color: '#CC0000' },
                  { range: 'HEPA',       label: 'Cleanrooms & hospitals', color: '#1a1a1a' },
                ].map(r => (
                  <div key={r.range} className="flex items-center gap-3">
                    <span
                      className="w-24 shrink-0 text-center text-xs font-bold rounded-md px-2 py-1"
                      style={{ background: r.color, color: r.color === '#CC0000' || r.color === '#1a1a1a' ? '#fff' : '#7f1d1d' }}
                    >
                      {r.range}
                    </span>
                    <span className="text-sm text-gray-600">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MERV Chart + Visual 1 ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">The Scale</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">The MERV Rating Chart</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </div>

          {/* Scrollable table */}
          <div className="overflow-x-auto rounded-xl shadow-sm mb-12">
            <table className="w-full text-sm bg-white border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-left">
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider w-24">MERV</th>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">Captures</th>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">Filter Types</th>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">Common Applications</th>
                </tr>
              </thead>
              <tbody>
                {mervRows.map((row, i) => (
                  <tr key={row.rating} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]'}>
                    <td className="px-4 py-3 font-bold text-[#CC0000]">{row.rating}</td>
                    <td className="px-4 py-3 text-gray-600 leading-relaxed">{row.captures}</td>
                    <td className="px-4 py-3 text-gray-600">{row.filters}</td>
                    <td className="px-4 py-3 text-gray-600">{row.apps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Visual 1 — MERV Capture Range Chart */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">Capture Range by MERV Tier</h3>
            <p className="text-sm text-gray-500 mb-6">Each bar shows how small a particle the filter can capture. Longer bar = catches smaller particles.</p>
            <MervCaptureChart />
          </div>
        </div>
      </section>

      {/* ── 3. Industry Recommendations ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">By Industry</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Recommended MERV Ratings by Industry</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">Every facility is different, but here's where most of our customers land.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(ind => (
              <div key={ind.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="inline-block bg-[#CC0000]/10 text-[#CC0000] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {ind.range}
                </div>
                <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{ind.body}</p>
              </div>
            ))}

            {/* CTA card */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-[#CC0000] text-xs font-bold uppercase tracking-widest mb-2">Not Sure?</p>
                <p className="text-white text-base font-semibold mb-3">We'll spec the right rating for your facility.</p>
                <p className="text-gray-400 text-sm leading-relaxed">Tell us about your building, processes, and equipment — we'll do the rest.</p>
              </div>
              <Link href="/contact" className="mt-6 inline-block">
                <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-6 py-3 text-sm w-full">
                  Contact Us →
                </HoverButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Higher MERV Isn't Always Better + Visual 2 ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">Watch Out</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Higher MERV Isn't Always Better</h2>
              <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded" />
              <p className="mt-6 text-gray-500 leading-relaxed">
                Before you upgrade every filter in the building to MERV 13, three things to check:
              </p>
              <div className="mt-8 space-y-6">
                {warnings.map((w, i) => {
                  const Icon = w.icon
                  return (
                    <div key={w.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} className="text-[#CC0000]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a1a1a] mb-1">{i + 1}. {w.title}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{w.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="mt-8 text-sm text-gray-500 leading-relaxed italic">
                This is the kind of thing we work through when we set up a filter service program — the right rating, the right change schedule, and every box marked and tagged so your team knows exactly what goes where.
              </p>
            </div>

            {/* Visual 2 — Filter Cross-Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-base font-bold text-[#1a1a1a] mb-1">What Gets Through at Each MERV Level</h3>
              <p className="text-sm text-gray-500 mb-6">Select a MERV rating to see which particles a filter captures vs. passes through.</p>
              <FilterCrossSection />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#CC0000]">FAQ</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1a1a1a]">MERV Rating FAQs</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
          </div>

          <div className="divide-y divide-gray-100">
            {faqItems.map(f => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                  <span className="font-semibold text-[#1a1a1a] leading-snug">{f.q}</span>
                  <span className="mt-0.5 shrink-0 text-[#CC0000] transition-transform duration-200 group-open:rotate-45 text-xl font-light select-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest mb-3">Ready to Spec It</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get the Right Filter — Without the Guesswork</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Tell us about your facility, and we'll recommend the right MERV rating, set up a service program, and keep your systems running clean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff6666" className="px-8 py-4 text-base">
                Get a Quote →
              </HoverButton>
            </Link>
            <Link href="/products">
              <HoverButton backgroundColor="rgba(255,255,255,0.08)" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="rgba(255,255,255,0.3)" className="px-8 py-4 text-base border border-white/20">
                Browse Products →
              </HoverButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
