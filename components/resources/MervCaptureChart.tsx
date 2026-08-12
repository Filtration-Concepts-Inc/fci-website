'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

// Shared particle vocabulary — same colours used in FilterCrossSection
export const PARTICLE_TYPES = [
  { label: 'Dust / Pollen',    size: '10 µm',  cx: 0,   r: 16, fill: '#94a3b8' },
  { label: 'Mold Spores',      size: '3 µm',   cx: 178, r: 11, fill: '#f59e0b' },
  { label: 'Welding Fumes',    size: '1 µm',   cx: 328, r: 7,  fill: '#8b5cf6' },
  { label: 'Bacteria / Smoke', size: '0.3 µm', cx: 462, r: 4,  fill: '#CC0000' },
]

const TIERS = [
  { label: 'MERV 1–4',  barW: 138, fill: '#fee2e2', textFill: '#991b1b', desc: 'Large particles only'          },
  { label: 'MERV 5–8',  barW: 210, fill: '#fca5a5', textFill: '#7f1d1d', desc: 'Mold spores & coarse dust'     },
  { label: 'MERV 9–12', barW: 358, fill: '#f87171', textFill: '#fff',    desc: 'Fine dust & welding fumes'     },
  { label: 'MERV 13–16',barW: 488, fill: '#CC0000', textFill: '#fff',    desc: 'Bacteria, smoke & fine aerosols'},
  { label: 'HEPA',      barW: 508, fill: '#1a1a1a', textFill: '#fff',    desc: '99.97% of 0.3 µm particles'   },
]

const CHART_X   = 116   // x where bars + axis begin
const CHART_W   = 510   // max bar width
const BAR_H     = 28
const BAR_GAP   = 10
const BAR_Y0    = 108   // y of first bar top
const SVG_W     = CHART_X + CHART_W + 12
const SVG_H     = BAR_Y0 + TIERS.length * (BAR_H + BAR_GAP) + 30

// Gridline x positions (absolute SVG coords)
const GRIDLINES = PARTICLE_TYPES.map(p => ({ x: CHART_X + p.cx, size: p.size }))

export default function MervCaptureChart() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <figure className="w-full" aria-label="MERV Capture Range Chart">
      <svg
        ref={ref}
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Horizontal bar chart showing that higher MERV ratings capture progressively smaller airborne particles"
      >
        <title>MERV Capture Range Chart</title>
        <desc>
          MERV 1–4 captures particles larger than 10 microns. MERV 5–8 down to 3 microns.
          MERV 9–12 down to 1 micron. MERV 13–16 down to 0.3 microns. HEPA captures 99.97%
          of 0.3-micron particles.
        </desc>

        {/* ── Dashed gridlines ── */}
        {GRIDLINES.map(g => (
          <line
            key={g.size}
            x1={g.x} y1={0}
            x2={g.x} y2={SVG_H - 24}
            stroke="#e5e7eb"
            strokeWidth={1}
            strokeDasharray="4 3"
          />
        ))}

        {/* ── Particle circles + labels along top axis ── */}
        {PARTICLE_TYPES.map(p => {
          const svgX = CHART_X + p.cx
          return (
            <g key={p.size}>
              {/* circle */}
              <circle cx={svgX} cy={p.r + 4} r={p.r} fill={p.fill} opacity={0.9} />
              {/* size label */}
              <text x={svgX} y={p.r * 2 + 14} textAnchor="middle" fontSize={9} fill="#6b7280" fontFamily="inherit">
                {p.size}
              </text>
              {/* particle name — two lines if long */}
              {p.label.split(' / ').map((word, wi) => (
                <text key={wi} x={svgX} y={p.r * 2 + 24 + wi * 10} textAnchor="middle" fontSize={8} fill="#9ca3af" fontFamily="inherit">
                  {word}
                </text>
              ))}
            </g>
          )
        })}

        {/* ── Axis label ── */}
        <text x={CHART_X} y={SVG_H - 8} fontSize={9} fill="#9ca3af" fontFamily="inherit">
          ← Large particles (easy to capture)
        </text>
        <text x={CHART_X + CHART_W} y={SVG_H - 8} textAnchor="end" fontSize={9} fill="#9ca3af" fontFamily="inherit">
          Small particles (hard to capture) →
        </text>

        {/* ── Bars ── */}
        {TIERS.map((tier, i) => {
          const y = BAR_Y0 + i * (BAR_H + BAR_GAP)
          return (
            <g key={tier.label}>
              {/* Tier label */}
              <text
                x={CHART_X - 6}
                y={y + BAR_H / 2 + 4}
                textAnchor="end"
                fontSize={11}
                fontWeight={600}
                fill="#374151"
                fontFamily="inherit"
              >
                {tier.label}
              </text>

              {/* Background track */}
              <rect
                x={CHART_X}
                y={y}
                width={CHART_W}
                height={BAR_H}
                rx={4}
                fill="#f3f4f6"
              />

              {/* Animated bar */}
              <motion.rect
                x={CHART_X}
                y={y}
                width={inView || reduced ? tier.barW : 0}
                height={BAR_H}
                rx={4}
                fill={tier.fill}
                initial={{ width: 0 }}
                animate={{ width: inView || reduced ? tier.barW : 0 }}
                transition={{
                  duration: reduced ? 0 : 0.8,
                  delay: reduced ? 0 : i * 0.12,
                  ease: 'easeOut',
                }}
              />

              {/* Bar description label */}
              {tier.barW > 80 && (
                <motion.text
                  x={CHART_X + 8}
                  y={y + BAR_H / 2 + 4}
                  fontSize={10}
                  fill={tier.textFill}
                  fontFamily="inherit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView || reduced ? 1 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.12 + 0.5 }}
                >
                  {tier.desc}
                </motion.text>
              )}
            </g>
          )
        })}
      </svg>

      <figcaption className="mt-2 text-center text-xs text-gray-400">
        Longer bar = captures smaller particles. HEPA sits outside the MERV scale but is shown for reference.
      </figcaption>
    </figure>
  )
}
