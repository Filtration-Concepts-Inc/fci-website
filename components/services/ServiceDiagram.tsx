'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X, ChevronRight } from 'lucide-react'

// ─── Hotspot Pin ──────────────────────────────────────────────────────────────

function Pin({ active, onToggle }: { active: boolean; onToggle: () => void }) {
  return (
    <div
      className="absolute"
      style={{
        left: '50%',
        top: '45%',
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
        onClick={onToggle}
        className="relative w-8 h-8 rounded-full bg-[#CC0000] border-2 border-white shadow-lg flex items-center justify-center cursor-pointer"
        animate={{ scale: active ? 1.2 : 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        aria-label="Show filter service info"
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

function ServiceCard({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.18 }}
      className="absolute z-30 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden pointer-events-auto"
      style={{ left: 'calc(50% + 24px)', top: 'calc(45% - 20px)' }}
    >
      <div className="relative bg-[#f5f7fa] flex items-center justify-center h-36 px-4">
        <Image
          src="/site-images/service pic.jpg"
          alt="FCI Filter Service"
          width={160}
          height={120}
          className="object-cover w-full h-full absolute inset-0"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors z-10"
        >
          <X size={11} className="text-gray-500" />
        </button>
      </div>

      <div className="px-4 py-3">
        <p className="text-[9px] font-bold uppercase tracking-widest text-[#CC0000] mb-1 leading-none">
          Filter Service Program
        </p>
        <p className="font-bold text-[#1a1a1a] text-sm leading-snug">Scheduled Filter Changes</p>
        <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
          FCI SERVICE · Wisconsin-Based
        </p>
        <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
          FCI technicians handle every filter change on schedule — right filters, right time, full documentation.
        </p>
        <Link
          href="/contact"
          className="mt-3 flex items-center gap-0.5 text-[11px] font-bold text-[#CC0000] hover:gap-1.5 transition-all duration-150"
        >
          Get a Quote <ChevronRight size={11} />
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function ServiceDiagram() {
  const [active, setActive] = useState(false)

  return (
    <div className="w-full">
      {active && (
        <div className="fixed inset-0 z-[19]" onClick={() => setActive(false)} />
      )}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#CC0000]">
          FCI SERVICE
        </span>
        <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#1a1a1a]">Filter Service Program</h3>
        <div className="mt-3 w-10 h-1 bg-[#CC0000] rounded" />
        <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl text-sm">
          Our technicians service HVAC systems across Wisconsin — arriving on schedule, changing every filter, and leaving your records current. No coordination required from your team.
        </p>
        <p className="mt-3 text-gray-400 text-xs">
          Tap the{' '}
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#CC0000] text-white text-[10px] font-bold mx-0.5">+</span>
          {' '}pin to learn more about FCI&apos;s service program.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 pt-6">
        <div className="relative w-full rounded-xl overflow-visible select-none">
          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src="/Cottonwood Screen Blueprints/Service blueprint photo.png"
              alt="FCI Service Blueprint"
              width={1130}
              height={880}
              className="w-full h-auto block"
              priority
            />
            <Pin active={active} onToggle={() => setActive(p => !p)} />
          </div>

          <AnimatePresence>
            {active && <ServiceCard onClose={() => setActive(false)} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
