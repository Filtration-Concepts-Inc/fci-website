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

// ─── Shared product info for cottonwood screen popup ─────────────────────────

const cottonwoodHotspot = (id: string, xPct: number, yPct: number): Hotspot => ({
  id,
  xPct,
  yPct,
  stage: 'Outdoor Air Screen',
  product: 'Cottonwood Screen',
  category: 'OUTDOOR PROTECTION',
  merv: 'Pre-Filter',
  description:
    'Custom-fit cottonwood screen blocks seasonal fluff, seed pods, insects, and debris before they can choke condenser coils or enter the HVAC system.',
  href: '/contact',
  image: '/Cottonwood Screen Blueprints/Cottonwood Screen Product Photo.jpg',
})

// ─── Tab Data ─────────────────────────────────────────────────────────────────

const TABS: TabData[] = [
  {
    num: '01',
    title: 'Chiller',
    label: 'COTTONWOOD SCREENS',
    description:
      'Chiller systems are especially vulnerable to cottonwood and airborne debris clogging condenser coils during peak cooling season. A custom-fit cottonwood screen on the outdoor intake prevents fouling before it starts — keeping the chiller running at full efficiency all summer.',
    blueprintSrc: '/Cottonwood Screen Blueprints/Cottonwood Screen-Chiller.png',
    hotspots: [cottonwoodHotspot('chiller-1', 22, 45)],
  },
  {
    num: '02',
    title: 'Chiller Pulley System',
    label: 'COTTONWOOD SCREENS',
    description:
      'FCI installs cottonwood screens on chiller systems using a patented pulley mount — heavy-duty galvanized track brackets and a stainless steel guide cable let the screen raise and lower like a flag. Seasonal installation becomes a one-person job: pull the rope at the start of cottonwood season, snap it secure, and lower it clean when the season ends. No ladders, no complicated rigging.',
    blueprintSrc: '/Cottonwood Screen Blueprints/Cottonwood Screen-Chiller.png',
    hotspots: [cottonwoodHotspot('chiller-pulley-1', 22, 45)],
  },
  {
    num: '03',
    title: 'Rooftop Unit',
    label: 'COTTONWOOD SCREENS',
    description:
      'Rooftop units are among the most vulnerable HVAC systems during cottonwood season. Mounted on the roof with no protection from seasonal debris, their coils can choke within days. Custom-fit cottonwood screens wrap the unit intake and keep coils clear all season long.',
    blueprintSrc: '/Industry Blueprint Images/Rooftop Unit 2.png',
    hotspots: [cottonwoodHotspot('rooftop-1', 14, 68)],
  },
  {
    num: '04',
    title: 'Air Compressor',
    label: 'COTTONWOOD SCREENS',
    description:
      'Air compressors pull in large volumes of ambient air — and during cottonwood season, that means seeds, fluff, and debris get drawn directly into the intake. Cottonwood screens fitted to the compressor air intake keep contaminants out and protect internal components from premature wear.',
    blueprintSrc: '/Cottonwood Screen Blueprints/Air Compressor.png',
    hotspots: [cottonwoodHotspot('compressor-1', 50, 50)],
  },
  {
    num: '05',
    title: 'Cooling Tower',
    label: 'COTTONWOOD SCREENS',
    description:
      'Cooling towers draw massive volumes of outdoor air — and with it, all the cottonwood, insects, and debris that Wisconsin spring brings. Cottonwood screens mounted at the air inlet keep the fill media and basin clean, reducing biological growth and extending service intervals.',
    blueprintSrc: '/Cottonwood Screen Blueprints/Cottonwood Screen Cooling Tower.png',
    hotspots: [cottonwoodHotspot('tower-1', 57, 68)],
  },
  {
    num: '06',
    title: 'Pedway',
    label: 'COTTONWOOD SCREENS',
    description:
      'Enclosed pedway HVAC units face unique debris challenges — seasonal cottonwood, leaves, and urban airborne material can pack intakes quickly. Cottonwood screens provide a low-maintenance first line of defense, protecting the equipment behind the wall from coil-choking buildup.',
    blueprintSrc: '/Cottonwood Screen Blueprints/Cottonwood Screen Pedway.png',
    hotspots: [cottonwoodHotspot('pedway-1', 50, 22)],
  },
]

// ─── Hotspot Pin ──────────────────────────────────────────────────────────────

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
  const flipLeft = xPct > 72
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
          Learn More <ChevronRight size={11} />
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Screen Overlay (animated inline SVG) ────────────────────────────────────

function ScreenOverlay() {
  const LINE_START = 0.85
  const VERT_COUNT = 56
  const VERT_STEP = 0.04
  const HORIZ_START = LINE_START + VERT_COUNT * VERT_STEP
  const HORIZ_COUNT = 81
  const HORIZ_STEP = 0.025
  const LINE_DUR = 0.12

  const vertLines = Array.from({ length: VERT_COUNT }, (_, i) => {
    const x = 548 + i * 6
    const t = (i * 6) / 334
    const y1 = 104 + 85 * t
    const y2 = 598 - 90 * t
    return { x, y1, y2, delay: LINE_START + i * VERT_STEP }
  })

  const horizLines = Array.from({ length: HORIZ_COUNT }, (_, i) => ({
    x1: 548,
    y1: 110 + i * 6.025,
    x2: 882,
    y2: 192.9 + i * 3.89,
    delay: HORIZ_START + i * HORIZ_STEP,
  }))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1142 738"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <defs>
        <clipPath id="screen-clip">
          <polygon points="548,104 882,189 882,508 548,598" />
        </clipPath>
      </defs>

      <g clipPath="url(#screen-clip)" stroke="#0a0a0a" strokeWidth="0.7" strokeLinecap="butt">
        {vertLines.map(({ x, y1, y2, delay }, i) => (
          <line
            key={`v${i}`}
            x1={x} y1={y1} x2={x} y2={y2}
            style={{
              strokeDasharray: 600,
              strokeDashoffset: 600,
              animation: `draw-screen-line ${LINE_DUR}s linear ${delay}s forwards`,
            }}
          />
        ))}
        {horizLines.map(({ x1, y1, x2, y2, delay }, i) => (
          <line
            key={`h${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            style={{
              strokeDasharray: 600,
              strokeDashoffset: 600,
              animation: `draw-screen-line ${LINE_DUR}s linear ${delay}s forwards`,
            }}
          />
        ))}
      </g>

      <polygon
        points="548,104 882,189 882,508 548,598"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="10"
        strokeLinejoin="miter"
        style={{
          strokeDasharray: 1510,
          strokeDashoffset: 1510,
          animation: `draw-screen-border 0.8s ease-out 0s forwards`,
        }}
      />
    </svg>
  )
}

// ─── Single Blueprint Diagram ─────────────────────────────────────────────────

function BlueprintDiagram({ tab, activeId, onToggle, showOverlay, screenActive, overlayKey, overlayVariant, overlaySrc }: {
  tab: TabData
  activeId: string | null
  onToggle: (id: string) => void
  showOverlay?: boolean
  screenActive?: boolean
  overlayKey?: number
  overlayVariant?: 'draw' | 'img'
  overlaySrc?: string
}) {
  return (
    <div className="relative w-full rounded-xl overflow-visible select-none">
      <div className="relative w-full rounded-xl overflow-hidden">
        <Image
          src={tab.blueprintSrc}
          alt={tab.title}
          width={1130}
          height={880}
          className="w-full h-auto block"
          priority
        />
        {showOverlay && screenActive && overlayVariant === 'draw' && (
          <ScreenOverlay key={overlayKey} />
        )}
        {showOverlay && screenActive && overlayVariant === 'img' && overlaySrc && (
          <img
            key={overlayKey}
            src={overlaySrc}
            className="absolute inset-0 w-full h-full pointer-events-none"
            alt=""
          />
        )}
        {tab.hotspots.map(h => (
          <Pin key={h.id} hotspot={h} activeId={activeId} onToggle={onToggle} />
        ))}
      </div>

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

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function CottonwoodDiagrams() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [screenActive, setScreenActive] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const tab = TABS[activeTab]

  const goTo = (i: number) => {
    setActiveTab(i)
    setActiveHotspot(null)
    setScreenActive(false)
  }

  const handleToggle = (id: string) => {
    const next = activeHotspot === id ? null : id
    setActiveHotspot(next)
    if (activeTab === 0 || activeTab === 1 || activeTab === 3 || activeTab === 4) {
      const newActive = next !== null
      setScreenActive(newActive)
      if (newActive) setAnimKey(k => k + 1)
    }
  }

  return (
    <div className="w-full">
      {activeHotspot && (
        <div className="fixed inset-0 z-[19]" onClick={() => { setActiveHotspot(null); setScreenActive(false) }} />
      )}

      {/* ── Numbered tab pills ── */}
      <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
        <button
          onClick={() => goTo((activeTab - 1 + TABS.length) % TABS.length)}
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#CC0000] hover:text-[#CC0000] transition-colors shrink-0"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        {TABS.map((t, i) => (
          <button
            key={t.num}
            onClick={() => goTo(i)}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              i === activeTab
                ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                : 'bg-white text-[#4a5a6a] border-gray-300 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
            }`}
          >
            <span className={`text-base font-bold ${i === activeTab ? 'text-white/50' : 'text-gray-300'}`}>
              {t.num}
            </span>
            {t.title}
          </button>
        ))}

        <button
          onClick={() => goTo((activeTab + 1) % TABS.length)}
          className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#CC0000] hover:text-[#CC0000] transition-colors shrink-0"
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
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">
              {tab.label}
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#1a1a1a]">{tab.title}</h3>
            <div className="mt-3 w-10 h-1 bg-[#CC0000] rounded" />
            <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl text-sm">{tab.description}</p>
            <p className="mt-3 text-gray-400 text-xs">
              Tap the{' '}
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#CC0000] text-white text-[10px] font-bold mx-0.5">+</span>
              {' '}pin on the diagram to see the cottonwood screen in this application.
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
                  Schedule Installation →
                </HoverButton>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 pt-6">
            <BlueprintDiagram
              tab={tab}
              activeId={activeHotspot}
              onToggle={handleToggle}
              showOverlay={activeTab === 0 || activeTab === 1 || activeTab === 3 || activeTab === 4}
              screenActive={screenActive}
              overlayKey={animKey}
              overlayVariant={activeTab === 0 ? 'draw' : 'img'}
              overlaySrc={
                activeTab === 1
                  ? '/Cottonwood Screen Blueprints/cottonwood-screen-overlay-v7.svg'
                  : activeTab === 3
                  ? '/Cottonwood Screen Blueprints/air-compressor-screen-overlay.svg'
                  : activeTab === 4
                  ? '/Cottonwood Screen Blueprints/cooling-tower-screen-overlay.svg'
                  : undefined
              }
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
