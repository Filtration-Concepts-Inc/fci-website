'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Shared particle colour vocabulary with MervCaptureChart
const PTYPES = {
  dust:    { label: 'Dust / Pollen',    fill: '#94a3b8', r: 9 },
  mold:    { label: 'Mold Spores',      fill: '#f59e0b', r: 6.5 },
  fumes:   { label: 'Welding Fumes',    fill: '#8b5cf6', r: 4.5 },
  bacteria:{ label: 'Bacteria / Smoke', fill: '#CC0000', r: 3 },
}

type Level = 'MERV 8' | 'MERV 11' | 'MERV 13'

// Pre-defined incoming particles (left side)
const INCOMING = [
  { id: 'i1', type: 'dust',     x: 60,  y: 45  },
  { id: 'i2', type: 'dust',     x: 130, y: 105 },
  { id: 'i3', type: 'dust',     x: 70,  y: 165 },
  { id: 'i4', type: 'mold',     x: 100, y: 70  },
  { id: 'i5', type: 'mold',     x: 155, y: 140 },
  { id: 'i6', type: 'mold',     x: 90,  y: 210 },
  { id: 'i7', type: 'fumes',    x: 120, y: 30  },
  { id: 'i8', type: 'fumes',    x: 50,  y: 125 },
  { id: 'i9', type: 'fumes',    x: 145, y: 185 },
  { id: 'i10',type: 'bacteria', x: 80,  y: 55  },
  { id: 'i11',type: 'bacteria', x: 140, y: 95  },
  { id: 'i12',type: 'bacteria', x: 65,  y: 155 },
  { id: 'i13',type: 'bacteria', x: 115, y: 230 },
] as const

// Trapped particles (cluster at filter face, right of incoming, left of filter)
const TRAPPED: Record<Level, { id: string; type: keyof typeof PTYPES; x: number; y: number }[]> = {
  'MERV 8': [
    { id: 't1', type: 'dust',  x: 218, y: 50  },
    { id: 't2', type: 'dust',  x: 222, y: 108 },
    { id: 't3', type: 'dust',  x: 216, y: 168 },
    { id: 't4', type: 'mold',  x: 224, y: 78  },
    { id: 't5', type: 'mold',  x: 220, y: 138 },
    { id: 't6', type: 'mold',  x: 218, y: 208 },
  ],
  'MERV 11': [
    { id: 't1', type: 'dust',  x: 218, y: 50  },
    { id: 't2', type: 'dust',  x: 222, y: 108 },
    { id: 't3', type: 'dust',  x: 216, y: 168 },
    { id: 't4', type: 'mold',  x: 224, y: 78  },
    { id: 't5', type: 'mold',  x: 220, y: 138 },
    { id: 't6', type: 'mold',  x: 218, y: 208 },
    { id: 't7', type: 'fumes', x: 222, y: 35  },
    { id: 't8', type: 'fumes', x: 220, y: 122 },
    { id: 't9', type: 'fumes', x: 224, y: 185 },
  ],
  'MERV 13': [
    { id: 't1',  type: 'dust',     x: 218, y: 50  },
    { id: 't2',  type: 'dust',     x: 222, y: 108 },
    { id: 't3',  type: 'dust',     x: 216, y: 168 },
    { id: 't4',  type: 'mold',     x: 224, y: 78  },
    { id: 't5',  type: 'mold',     x: 220, y: 138 },
    { id: 't6',  type: 'mold',     x: 218, y: 208 },
    { id: 't7',  type: 'fumes',    x: 222, y: 35  },
    { id: 't8',  type: 'fumes',    x: 220, y: 122 },
    { id: 't9',  type: 'fumes',    x: 224, y: 185 },
    { id: 't10', type: 'bacteria', x: 220, y: 60  },
    { id: 't11', type: 'bacteria', x: 222, y: 100 },
    { id: 't12', type: 'bacteria', x: 218, y: 148 },
    { id: 't13', type: 'bacteria', x: 224, y: 220 },
  ],
}

// Particles that pass through (right side)
const PASSED: Record<Level, { id: string; type: keyof typeof PTYPES; x: number; y: number }[]> = {
  'MERV 8': [
    { id: 'p1', type: 'fumes',    x: 340, y: 55  },
    { id: 'p2', type: 'fumes',    x: 420, y: 130 },
    { id: 'p3', type: 'fumes',    x: 370, y: 195 },
    { id: 'p4', type: 'bacteria', x: 360, y: 85  },
    { id: 'p5', type: 'bacteria', x: 450, y: 50  },
    { id: 'p6', type: 'bacteria', x: 400, y: 160 },
    { id: 'p7', type: 'bacteria', x: 480, y: 215 },
    { id: 'p8', type: 'bacteria', x: 510, y: 95  },
  ],
  'MERV 11': [
    { id: 'p4', type: 'bacteria', x: 370, y: 80  },
    { id: 'p5', type: 'bacteria', x: 440, y: 50  },
    { id: 'p6', type: 'bacteria', x: 400, y: 155 },
    { id: 'p7', type: 'bacteria', x: 480, y: 215 },
  ],
  'MERV 13': [
    { id: 'p5', type: 'bacteria', x: 420, y: 90  },
    { id: 'p7', type: 'bacteria', x: 490, y: 170 },
  ],
}

const READOUT: Record<Level, string> = {
  'MERV 8':  'MERV 8 catches dust and mold spores — the workhorse for standard commercial buildings.',
  'MERV 11': 'MERV 11 adds welding fumes and fine particulate — common in offices, schools, and light industrial.',
  'MERV 13': 'MERV 13 stops bacteria- and smoke-sized particles — required in food processing and healthcare.',
}

// Pleat filter zigzag path
const filterPath = () => {
  const x1 = 234; const x2 = 252
  const steps = [0, 30, 60, 90, 120, 150, 180, 210, 240]
  let d = `M ${x1} 0`
  steps.forEach((y, i) => {
    d += ` L ${i % 2 === 0 ? x2 : x1} ${y + 30}`
  })
  d += ` L ${x1} 270`
  return d
}

// Airflow arrows (motion lines on right side)
const ARROWS = [30, 90, 150, 210].map((y, i) => ({ id: i, y }))

export default function FilterCrossSection() {
  const [level, setLevel] = useState<Level>('MERV 8')

  const trapped = TRAPPED[level]
  const passed  = PASSED[level]

  return (
    <div className="w-full">
      {/* MERV selector buttons */}
      <div className="flex gap-2 justify-center mb-6" role="group" aria-label="Select MERV level">
        {(['MERV 8', 'MERV 11', 'MERV 13'] as Level[]).map(l => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            aria-pressed={level === l}
            className={`px-5 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 ${
              level === l
                ? 'bg-[#CC0000] text-white border-[#CC0000] shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#CC0000] hover:text-[#CC0000]'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Diagram */}
      <div className="relative w-full overflow-x-auto rounded-xl border border-gray-100 bg-gray-50">
        <svg
          viewBox="0 0 560 270"
          className="w-full h-auto min-w-[320px]"
          role="img"
          aria-label={`Filter cross-section diagram at ${level}`}
        >
          {/* Zone labels */}
          <text x={110} y={16} textAnchor="middle" fontSize={10} fill="#9ca3af" fontFamily="inherit">Incoming air</text>
          <text x={243} y={16} textAnchor="middle" fontSize={10} fill="#6b7280" fontFamily="inherit" fontWeight={600}>Filter</text>
          <text x={410} y={16} textAnchor="middle" fontSize={10} fill="#9ca3af" fontFamily="inherit">Air after filter</text>

          {/* Zone dividers */}
          <rect x={0}   y={22} width={220} height={248} fill="#f8fafc" rx={4} />
          <rect x={230} y={22} width={30}  height={248} fill="#e5e7eb" />
          <rect x={260} y={22} width={300} height={248} fill="#f0fdf4" rx={4} />

          {/* Airflow arrows (left side) */}
          {[40, 110, 180].map((y, i) => (
            <g key={i}>
              <line x1={10} y1={y} x2={190} y2={y} stroke="#94a3b8" strokeWidth={1} strokeDasharray="4 3" />
              <polygon points={`195,${y} 185,${y-4} 185,${y+4}`} fill="#94a3b8" />
            </g>
          ))}

          {/* Airflow arrows (right side) — always visible, showing clean air */}
          {ARROWS.map(a => (
            <g key={a.id}>
              <line x1={265} y1={a.y} x2={540} y2={a.y} stroke="#6ee7b7" strokeWidth={1} strokeDasharray="4 3" opacity={0.6} />
              <polygon points={`545,${a.y} 535,${a.y - 3.5} 535,${a.y + 3.5}`} fill="#6ee7b7" opacity={0.6} />
            </g>
          ))}

          {/* Pleated filter */}
          <path
            d={filterPath()}
            stroke="#4b5563"
            strokeWidth={4}
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Incoming particles (always shown, left side) */}
          {INCOMING.map(p => {
            const pt = PTYPES[p.type as keyof typeof PTYPES]
            return (
              <circle key={p.id} cx={p.x} cy={p.y + 26} r={pt.r} fill={pt.fill} opacity={0.85} />
            )
          })}

          {/* Trapped particles (animate in/out on filter face) */}
          <AnimatePresence>
            {trapped.map(p => {
              const pt = PTYPES[p.type]
              return (
                <motion.circle
                  key={p.id}
                  cx={p.x}
                  cy={p.y}
                  r={pt.r}
                  fill={pt.fill}
                  initial={{ opacity: 0, cx: p.x - 20 }}
                  animate={{ opacity: 0.9, cx: p.x }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )
            })}
          </AnimatePresence>

          {/* Passed-through particles (right side) */}
          <AnimatePresence>
            {passed.map(p => {
              const pt = PTYPES[p.type]
              return (
                <motion.circle
                  key={p.id}
                  cx={p.x}
                  cy={p.y}
                  r={pt.r}
                  fill={pt.fill}
                  opacity={0.7}
                  initial={{ opacity: 0, cx: 265 }}
                  animate={{ opacity: 0.7, cx: p.x }}
                  exit={{ opacity: 0, cx: 560 }}
                  transition={{ duration: 0.4 }}
                />
              )
            })}
          </AnimatePresence>

          {/* Legend */}
          {Object.entries(PTYPES).map(([key, pt], i) => (
            <g key={key}>
              <circle cx={12} cy={235 + i * 14} r={pt.r * 0.75} fill={pt.fill} />
              <text x={22} y={239 + i * 14} fontSize={8.5} fill="#6b7280" fontFamily="inherit">{pt.label}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Readout */}
      <p
        className="mt-4 text-center text-sm text-gray-600 font-medium min-h-[2.5rem]"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={level}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            {READOUT[level]}
          </motion.span>
        </AnimatePresence>
      </p>

      {/* Particle key */}
      <div className="mt-3 flex flex-wrap justify-center gap-4">
        {Object.entries(PTYPES).map(([key, pt]) => (
          <div key={key} className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="inline-block rounded-full" style={{ width: pt.r * 2, height: pt.r * 2, background: pt.fill }} />
            {pt.label}
          </div>
        ))}
      </div>
    </div>
  )
}
