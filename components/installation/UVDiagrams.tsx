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

// ─── Tab Data ─────────────────────────────────────────────────────────────────

const TABS: TabData[] = [
  {
    num: '01',
    title: 'UV System',
    label: 'UV GERMICIDAL SYSTEMS',
    description:
      'UV-C germicidal lamps installed inside air handling units continuously irradiate coils, drain pans, and the airstream — eliminating mold, bacteria, and biofilm that standard filters cannot catch. Properly positioned lamps deliver maximum germicidal coverage across the coil face and downstream supply air.',
    blueprintSrc: '/Cottonwood Screen Blueprints/UV Blueprint Image.png',
    hotspots: [
      {
        id: 'uv-1',
        xPct: 18,
        yPct: 48,
        stage: 'Germicidal · UV-C Lamp',
        product: 'UV-C Germicidal System',
        category: 'UV GERMICIDAL',
        merv: 'UV-C 254nm',
        description:
          'High-output UV-C lamps mounted across the coil face continuously irradiate surfaces and passing air — killing mold, bacteria, and viruses without chemicals or replacement media.',
        href: '/contact',
        image: '/Cottonwood Screen Blueprints/UV website image.png',
      },
    ],
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

// ─── Single Blueprint Diagram ─────────────────────────────────────────────────

function BlueprintDiagram({ tab, activeId, onToggle, uvActive, overlayKey }: {
  tab: TabData
  activeId: string | null
  onToggle: (id: string) => void
  uvActive?: boolean
  overlayKey?: number
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
        {uvActive && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={overlayKey}
            src={`/Cottonwood Screen Blueprints/uv-light-overlay.svg?v=${overlayKey}`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            alt=""
          />
        )}
        {tab.hotspots.map(h => (
          <Pin key={h.id} hotspot={h} activeId={activeId} onToggle={onToggle} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {tab.hotspots
          .filter(h => h.id === activeId)
          .map(h => (
            <ProductCard
              key={`${h.id}-${overlayKey}`}
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

export default function UVDiagrams() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [uvActive, setUvActive] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const tab = TABS[activeTab]

  const goTo = (i: number) => {
    setActiveTab(i)
    setActiveHotspot(null)
    setUvActive(false)
  }

  const handleToggle = (id: string) => {
    const next = activeHotspot === id ? null : id
    setActiveHotspot(next)
    const newActive = next !== null
    setUvActive(newActive)
    if (newActive) setAnimKey(k => k + 1)
  }

  return (
    <div className="w-full">
      {activeHotspot && (
        <div className="fixed inset-0 z-[19]" onClick={() => { setActiveHotspot(null); setUvActive(false) }} />
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
              {' '}pin on the diagram to learn more about this UV germicidal system.
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
                  Get a UV Installation Quote →
                </HoverButton>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 pt-6">
            <BlueprintDiagram
              tab={tab}
              activeId={activeHotspot}
              onToggle={handleToggle}
              uvActive={uvActive}
              overlayKey={animKey}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
