'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
import { HoverButton } from '@/components/ui/hover-glow-button'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Hotspot {
  id: string
  // position as percentage of image width/height (0–100)
  xPct: number
  yPct: number
  stage: string
  product: string
  category: string
  merv: string
  description: string
  href: string
  image: string
}

interface TabData {
  num: string
  title: string
  label: string
  description: string
  blueprintSrc: string
  hotspots: Hotspot[]
}

// ─── Tab Data ─────────────────────────────────────────────────────────────────
// xPct / yPct are % positions on each blueprint image.
// Diagram 01 (Standard): 2 filters visible — pleated panels left, pocket filter right
// Diagram 02 (Odor & Gas): 3 filters — mesh pre, bag mid, pleated final
// Diagram 03 (High Moisture): 3 filters — pleated pre, bag mid, final

const TABS: TabData[] = [
  {
    num: '01',
    title: 'Air Handling Unit (Standard)',
    label: 'AIRPORTS & TRANSIT',
    description:
      'Standard filtration for terminal HVAC systems — from outdoor air pre-screening through three progressive filter stages. Each stage removes progressively finer particles, protecting equipment and maintaining passenger comfort across high-volume airport environments.',
    blueprintSrc: '/Industry Blueprint Images/Airport/Air Handling Unit Standard 2.png',
    hotspots: [
      {
        id: 'cottonwood1',
        xPct: 14, yPct: 14,
        stage: 'Outdoor Air Screen',
        product: 'Cottonwood Screen',
        category: 'OUTDOOR PROTECTION',
        merv: 'Pre-Filter',
        description:
          'Installed at the outdoor air intake, cottonwood screens block insects, cottonwood seeds, leaves, and large debris before they enter the HVAC system.',
        href: '/installation#cottonwood-screens',
        image: '/Cottonwood Screen Blueprints/Cottonwood Screen Product Photo.jpg',
      },
      {
        id: 'stage1',
        xPct: 32, yPct: 60,
        stage: 'Stage 1 · Pre-Filter',
        product: 'Enduro Pleat',
        category: 'MEDIUM EFFICIENCY',
        merv: 'MERV 8',
        description:
          'High-capacity pleated panel filter captures coarse dust, pollen, and tarmac debris. Extended surface area maximizes service intervals in high-traffic terminal environments.',
        href: '/products#medium-efficiency',
        image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Enduro Pleat.png',
      },
      {
        id: 'stage2',
        xPct: 45, yPct: 56,
        stage: 'Stage 2 · Main Filter',
        product: 'FP Mini-Pleat',
        category: 'HIGH EFFICIENCY',
        merv: 'MERV 13',
        description:
          'Rigid mini-pleat construction offers a large media area in a compact depth, capturing fine dust, smoke particles, and aerosols from busy terminal air streams.',
        href: '/products#high-efficiency',
        image: '/FCI Website Product Images/HIGH EFFICIENCY/FP Mini-Pleat.png',
      },
      {
        id: 'stage3',
        xPct: 57, yPct: 51,
        stage: 'Stage 3 · Final Filter',
        product: 'Pocket Filter',
        category: 'HIGH EFFICIENCY',
        merv: 'MERV 14',
        description:
          'Deep-loading pocket filter provides final-stage efficiency — ideal for 24/7 airport operations with high air volumes and continuous occupancy loads.',
        href: '/products#high-efficiency',
        image: '/FCI Website Product Images/HIGH EFFICIENCY/Pocket Filter.png',
      },
    ],
  },
  {
    num: '02',
    title: 'Air Handling Unit (Odor & Gas Removal)',
    label: 'AIRPORTS & TRANSIT',
    description:
      'Three-stage system engineered for terminals with heavy vehicle traffic, jet exhaust, and fuel odor infiltration. The combination of particulate and carbon filtration eliminates gases and odors that standard filters cannot address, keeping concourses fresh.',
    blueprintSrc: '/Industry Blueprint Images/Airport/Air Handling Unit Odor & Gas Removal 2.png',
    hotspots: [
      {
        id: 'cottonwood2',
        xPct: 14, yPct: 14,
        stage: 'Outdoor Air Screen',
        product: 'Cottonwood Screen',
        category: 'OUTDOOR PROTECTION',
        merv: 'Pre-Filter',
        description:
          'Installed at the outdoor air intake, cottonwood screens block insects, cottonwood seeds, leaves, and large debris before they enter the HVAC system.',
        href: '/installation#cottonwood-screens',
        image: '/Cottonwood Screen Blueprints/Cottonwood Screen Product Photo.jpg',
      },
      {
        id: 'stage1-2',
        xPct: 32, yPct: 60,
        stage: 'Stage 1 · Pre-Filter',
        product: 'Enduro Pleat',
        category: 'MEDIUM EFFICIENCY',
        merv: 'MERV 8',
        description:
          'High-capacity pleated panel filter captures coarse dust, pollen, and tarmac debris. Extended surface area maximizes service intervals in high-traffic terminal environments.',
        href: '/products#medium-efficiency',
        image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Enduro Pleat.png',
      },
      {
        id: 'stage2-2',
        xPct: 45, yPct: 56,
        stage: 'Stage 2 · Main Filter',
        product: 'DPX Carbon',
        category: 'HIGH EFFICIENCY',
        merv: 'MERV 14',
        description:
          'Carbon-enhanced high-efficiency filter captures fine particulate while neutralizing odors and VOCs — ideal for hotel and casino environments where guest air quality and odor control are essential.',
        href: '/products#high-efficiency',
        image: '/FCI Website Product Images/HIGH EFFICIENCY/DPX Carbon.png',
      },
    ],
  },
  {
    num: '03',
    title: 'Air Handling Unit (High Moisture)',
    label: 'AIRPORTS & TRANSIT',
    description:
      'High-efficiency three-stage configuration for large international terminals and transit hubs requiring superior air quality. Delivers near-HEPA performance across every zone of the facility — from ticketing to gates.',
    blueprintSrc: '/Industry Blueprint Images/Airport/Airport AHU High Moisture.png',
    hotspots: [
      {
        id: 'cottonwood3',
        xPct: 14, yPct: 14,
        stage: 'Outdoor Air Screen',
        product: 'Cottonwood Screen',
        category: 'OUTDOOR PROTECTION',
        merv: 'Pre-Filter',
        description:
          'Installed at the outdoor air intake, cottonwood screens block insects, cottonwood seeds, leaves, and large debris before they enter the HVAC system.',
        href: '/installation#cottonwood-screens',
        image: '/Cottonwood Screen Blueprints/Cottonwood Screen Product Photo.jpg',
      },
      {
        id: 'stage1-3',
        xPct: 38, yPct: 60,
        stage: 'Stage 1 · Pre-Filter',
        product: 'Link & Cube Filters',
        category: 'MEDIUM EFFICIENCY',
        merv: 'MERV 8',
        description:
          'Rigid link and cube panel filters provide a durable first stage of filtration, capturing coarse particles and protecting downstream media in moisture-heavy environments.',
        href: '/products#medium-efficiency',
        image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Link & Cube Filters.png',
      },
      {
        id: 'stage2-3',
        xPct: 54, yPct: 54,
        stage: 'Stage 2 · Final Filter',
        product: 'GeoPleat',
        category: 'HIGH EFFICIENCY',
        merv: 'MERV 13',
        description:
          'Geometric pleat design maximizes media area while resisting moisture-related degradation — ideal for high-humidity airport environments near water features or coastal locations.',
        href: '/products#high-efficiency',
        image: '/FCI Website Product Images/HIGH EFFICIENCY/GeoPleat.png',
      },
    ],
  },
]

// ─── Hotspot Pin (rendered in HTML over the image) ────────────────────────────

function Pin({ hotspot, activeId, onToggle }: {
  hotspot: Hotspot
  activeId: string | null
  onToggle: (id: string) => void
}) {
  const active = activeId === hotspot.id

  return (
    <div
      className="absolute"
      style={{
        left: `${hotspot.xPct}%`,
        top: `${hotspot.yPct}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 20,
      }}
    >
      {/* Pulse rings */}
      {!active && (
        <>
          <motion.div
            className="absolute rounded-full border border-[#CC0000]"
            style={{ width: 40, height: 40, top: -4, left: -4 }}
            animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute rounded-full border border-[#CC0000]"
            style={{ width: 40, height: 40, top: -4, left: -4 }}
            animate={{ scale: [1, 1.7], opacity: [0.35, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 1 }}
          />
        </>
      )}

      {/* Button */}
      <motion.button
        onClick={() => onToggle(hotspot.id)}
        className="relative w-8 h-8 rounded-full bg-[#CC0000] border-2 border-white shadow-lg flex items-center justify-center cursor-pointer"
        animate={{ scale: active ? 1.2 : 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        aria-label={`Show ${hotspot.product}`}
      >
        <motion.div
          animate={{ rotate: active ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          <span className="block w-3.5 h-0.5 bg-white absolute" />
          <span className="block w-0.5 h-3.5 bg-white absolute" />
        </motion.div>
      </motion.button>
    </div>
  )
}

// ─── Product Card Popup ───────────────────────────────────────────────────────

function ProductCard({ hotspot, onClose, xPct, yPct }: {
  hotspot: Hotspot
  onClose: () => void
  xPct: number
  yPct: number
}) {
  const flipLeft = xPct > 55
  const flipUp = yPct > 60

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.18 }}
      className="absolute z-30 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden pointer-events-auto"
      style={{
        left: flipLeft ? `calc(${xPct}% - 240px)` : `calc(${xPct}% + 24px)`,
        top: flipUp ? `calc(${yPct}% - 260px)` : `calc(${yPct}% - 20px)`,
      }}
    >
      {/* Product image */}
      <div className="relative bg-[#f5f7fa] flex items-center justify-center h-36 px-4">
        <Image
          src={hotspot.image}
          alt={hotspot.product}
          width={160}
          height={120}
          className="object-contain max-h-28 w-auto"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
        >
          <X size={11} className="text-gray-500" />
        </button>
      </div>

      {/* Info */}
      <div className="px-4 py-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-[#CC0000] mb-1 leading-none">
          {hotspot.stage}
        </p>
        <p className="font-bold text-[#1a1a1a] text-sm leading-snug">{hotspot.product}</p>
        <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
          {hotspot.category} · {hotspot.merv}
        </p>
        <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">{hotspot.description}</p>
        <Link
          href={hotspot.href}
          className="mt-3 flex items-center gap-0.5 text-[11px] font-bold text-[#CC0000] hover:gap-1.5 transition-all duration-150"
        >
          View Product <ChevronRight size={11} />
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Single Blueprint Diagram ─────────────────────────────────────────────────

function BlueprintDiagram({ tab, activeId, onToggle }: {
  tab: TabData
  activeId: string | null
  onToggle: (id: string) => void
}) {
  return (
    <div className="relative w-full rounded-xl overflow-visible select-none">
      {/* Blueprint image */}
      <div className="relative w-full rounded-xl overflow-hidden">
        <Image
          src={tab.blueprintSrc}
          alt={tab.title}
          width={1130}
          height={880}
          className="w-full h-auto block"
          priority
        />

        {/* Hotspot pins overlaid on image */}
        {tab.hotspots.map(h => (
          <Pin key={h.id} hotspot={h} activeId={activeId} onToggle={onToggle} />
        ))}
      </div>

      {/* Popup cards — rendered outside the overflow:hidden container */}
      <AnimatePresence>
        {tab.hotspots
          .filter(h => h.id === activeId)
          .map(h => (
            <ProductCard
              key={h.id}
              hotspot={h}
              onClose={() => onToggle(h.id)}
              xPct={h.xPct}
              yPct={h.yPct}
            />
          ))}
      </AnimatePresence>
    </div>
  )
}

// ─── Main Exported Component ──────────────────────────────────────────────────

const WINDOW_SIZE = 3

export default function AirportsDiagrams() {
  const [activeTab, setActiveTab] = useState(0)
  const [windowStart, setWindowStart] = useState(0)
  const [slideDir, setSlideDir] = useState<1 | -1>(1)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const tab = TABS[activeTab]

  const visible = Math.min(WINDOW_SIZE, TABS.length)
  const maxStart = Math.max(0, TABS.length - visible)

  const goTo = (i: number) => { setActiveTab(i); setActiveHotspot(null) }

  const shiftWindow = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(windowStart + dir, maxStart))
    if (next === windowStart) return
    setSlideDir(dir)
    setWindowStart(next)
  }

  const visibleTabs = TABS.slice(windowStart, windowStart + visible)

  return (
    <div className="w-full">
      {activeHotspot && (
        <div className="fixed inset-0 z-[19]" onClick={() => setActiveHotspot(null)} />
      )}

      {/* ── Numbered tab pills ── */}
      <div className="relative flex items-center justify-center mb-8 px-12">
        <button
          onClick={() => shiftWindow(-1)}
          disabled={windowStart === 0}
          className="absolute left-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#CC0000] hover:text-[#CC0000] transition-colors shrink-0 disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="overflow-hidden py-2 px-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={windowStart}
              exit={{ opacity: 0, x: -slideDir * 28, scale: 0.94, transition: { duration: 0.13, ease: 'easeIn' } }}
              className="flex items-center gap-2"
            >
              {visibleTabs.map((t, i) => {
                const idx = windowStart + i
                return (
                  <motion.div
                    key={t.num}
                    initial={{ opacity: 0, x: slideDir * 64, scale: 0.82, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{
                      type: 'spring',
                      stiffness: 520,
                      damping: 22,
                      mass: 0.75,
                      delay: i * 0.07,
                      filter: { duration: 0.18, delay: i * 0.07 },
                    }}
                  >
                    <button
                      key={t.num}
                      onClick={() => goTo(idx)}
                      className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                        idx === activeTab
                          ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                          : 'bg-white text-[#4a5a6a] border-gray-300 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                      }`}
                    >
                      <span className={`text-base font-bold ${idx === activeTab ? 'text-white/50' : 'text-gray-300'}`}>
                        {t.num}
                      </span>
                      {t.title}
                    </button>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => shiftWindow(1)}
          disabled={windowStart >= maxStart}
          className="absolute right-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#CC0000] hover:text-[#CC0000] transition-colors shrink-0 disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Tab content ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {/* Label + heading + description */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">
              {tab.label}
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#1a1a1a]">{tab.title}</h2>
            <div className="mt-3 w-10 h-1 bg-[#CC0000] rounded" />
            <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl text-sm">{tab.description}</p>
            <p className="mt-3 text-gray-400 text-xs">
              Tap the{' '}
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#CC0000] text-white text-[10px] font-bold mx-0.5">+</span>
              {' '}pins on the diagram to see FCI&apos;s recommended filters for each stage.
            </p>
            <div className="mt-5">
              <Link href="/contact">
                <HoverButton
                  backgroundColor="#CC0000"
                  textColor="#ffffff"
                  hoverTextColor="#ffffff"
                  glowColor="#ff4444"
                  className="px-6 py-2.5 text-sm"
                >
                  Get a Quote →
                </HoverButton>
              </Link>
            </div>
          </div>

          {/* Blueprint diagram */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 pt-6">
            <BlueprintDiagram
              tab={tab}
              activeId={activeHotspot}
              onToggle={(id) => setActiveHotspot(p => p === id ? null : id)}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
