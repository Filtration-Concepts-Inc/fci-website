"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HoverButton } from "@/components/ui/hover-glow-button";

// Exported so PageHero and inner pages can reuse the animated paths overlay
export function FloatingPaths({ position, color = "rgba(15,23,42," }: { position: number; color?: string }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 1.2 + i * 0.08,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" preserveAspectRatio="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`${color}${0.35 + path.id * 0.018})`}
            strokeWidth={path.width}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
            transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({ title = "Helping You Breathe a Little Easier", variant = 'A', wordsVariant = 'A' }: { title?: string; variant?: 'A' | 'B'; wordsVariant?: 'A' | 'B' | 'C' | 'D' }) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" style={variant === 'B' ? { background: '#000' } : undefined}>

      {/* ── VARIANT A: Blue sky + ken burns ── */}
      {variant === 'A' && (
        <>
          {/* Layer 1: Static base — full photo, ground never moves */}
          <Image
            src="/site-images/iStock-604367332.jpg"
            alt="Blue sky"
            fill
            className="object-cover object-bottom"
            priority
          />

          {/* Layer 2: Ken Burns sky pan — masked to sky only, ground shows through from layer 1 */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              zIndex: 2,
              maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 88%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 88%)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-6%',
                backgroundImage: 'url(/site-images/iStock-604367332.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%',
                animation: 'sky-drift 22s ease-in-out infinite',
              }}
            />
          </div>

          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/5" style={{ zIndex: 3 }} />
        </>
      )}

      {/* ── VARIANT B: Black + red floating paths + badge logo ── */}
      {variant === 'B' && (
        <>
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
            <FloatingPaths position={2} color="rgba(204,0,0," />
            <FloatingPaths position={1} color="rgba(180,0,0," />
            <FloatingPaths position={-1} color="rgba(204,0,0," />
            <FloatingPaths position={-2} color="rgba(160,0,0," />
          </div>
        </>
      )}

      {/* ── Hero content ── */}
      <div className="relative container mx-auto px-6 md:px-12" style={{ zIndex: 10 }}>

        {/* ── WORDS A: Original letter-by-letter ── */}
        {wordsVariant === 'A' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight py-2">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 32, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + wordIndex * 0.1 + letterIndex * 0.03, type: "spring", stiffness: 150, damping: 25 }}
                      className="inline-block text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-white/90 text-lg mb-10 max-w-xl mx-auto drop-shadow"
            >
              Air filtration products, service programs, and installation — family-owned in Wisconsin.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff6666" className="px-8 py-4 text-base shadow-xl">Get a Quote →</HoverButton>
              </Link>
              <Link href="/products">
                <HoverButton backgroundColor="rgba(255,255,255,0.18)" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="rgba(255,255,255,0.6)" className="px-8 py-4 text-base border border-white/40 backdrop-blur-sm shadow-lg">Browse Products →</HoverButton>
              </Link>
            </motion.div>
          </motion.div>
        )}

        {/* ── WORDS B: Mixed-size left-aligned ── */}
        {wordsVariant === 'B' && (
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-sm font-bold uppercase tracking-[0.2em]">Wisconsin-Based · Since 1985</span>
            </motion.div>
            <h1 className="font-black leading-none tracking-tight mb-8">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, type: 'spring', stiffness: 120, damping: 20 }} className="block text-white text-5xl sm:text-7xl md:text-8xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]">Helping You</motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 120, damping: 20 }} className="block text-[#CC0000] text-6xl sm:text-8xl md:text-[10rem] drop-shadow-[0_4px_32px_rgba(204,0,0,0.5)]" style={{ lineHeight: 0.9 }}>Breathe</motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65, type: 'spring', stiffness: 120, damping: 20 }} className="block text-white text-3xl sm:text-5xl md:text-6xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]">a Little Easier.</motion.div>
            </h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="text-white/75 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Air filtration products, service programs, and installation — family-owned in Wisconsin.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"><HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff6666" className="px-9 py-4 text-base font-bold shadow-xl">Get a Quote →</HoverButton></Link>
              <Link href="/products"><HoverButton backgroundColor="rgba(255,255,255,0.12)" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="rgba(255,255,255,0.5)" className="px-9 py-4 text-base font-bold border border-white/30 backdrop-blur-sm">Browse Products →</HoverButton></Link>
            </motion.div>
          </div>
        )}

        {/* ── WORDS C: Centered, stacked, giant outline "BREATHE" behind solid text ── */}
        {wordsVariant === 'C' && (
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative">

            {/* Giant ghost word behind everything */}
            <motion.div
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.1, ease: 'easeOut' }}
              className="absolute select-none pointer-events-none"
              style={{
                fontSize: 'clamp(100px, 22vw, 280px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.08)',
                color: 'transparent',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -54%)',
                whiteSpace: 'nowrap',
              }}
            >
              BREATHE
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-[#CC0000]" />
              <span className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.25em]">Wisconsin · Since 1985</span>
              <div className="h-px w-8 bg-[#CC0000]" />
            </motion.div>

            {/* Main headline */}
            <h1 className="relative font-black tracking-tight leading-none mb-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, type: 'spring', stiffness: 140, damping: 18 }}
                className="block text-white"
                style={{ fontSize: 'clamp(42px, 7vw, 96px)' }}
              >
                Helping You
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 140, damping: 18 }}
                className="block text-[#CC0000]"
                style={{ fontSize: 'clamp(56px, 10vw, 136px)', lineHeight: 0.88, textShadow: '0 0 80px rgba(204,0,0,0.5)' }}
              >
                Breathe Easier.
              </motion.div>
            </h1>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
              className="w-24 h-0.5 bg-[#CC0000] mb-6 origin-left"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="text-white/70 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            >
              Air filtration products, service programs, and installation — family-owned in Wisconsin.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff6666" className="px-10 py-4 text-base font-bold shadow-2xl">
                  Get a Quote →
                </HoverButton>
              </Link>
              <Link href="/products">
                <HoverButton backgroundColor="rgba(255,255,255,0.1)" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="rgba(255,255,255,0.5)" className="px-10 py-4 text-base font-bold border border-white/25 backdrop-blur-sm">
                  Browse Products →
                </HoverButton>
              </Link>
            </motion.div>
          </div>
        )}

        {/* ── WORDS D: Split layout — stat counters left, manifesto right ── */}
        {wordsVariant === 'D' && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left — giant stat stack */}
            <div className="flex flex-col gap-6">
              {[
                { num: '39', label: 'Years in Business', delay: 0.2 },
                { num: '1K+', label: 'Filter Products', delay: 0.35 },
                { num: '2', label: 'Wisconsin Locations', delay: 0.5 },
              ].map(({ num, label, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay, type: 'spring', stiffness: 120, damping: 18 }}
                  className="flex items-baseline gap-4 border-b border-white/10 pb-5"
                >
                  <span className="font-black text-[#CC0000] leading-none" style={{ fontSize: 'clamp(52px, 8vw, 100px)', textShadow: '0 0 60px rgba(204,0,0,0.4)' }}>
                    {num}
                  </span>
                  <span className="text-white/50 text-base font-semibold uppercase tracking-widest">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Right — manifesto */}
            <div className="flex flex-col">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-[#CC0000] text-xs font-bold uppercase tracking-[0.3em] mb-5"
              >
                Filtration Concepts, Inc.
              </motion.p>

              <h1 className="font-black leading-none tracking-tight mb-8">
                {['Clean Air.', 'Every Time.', 'Guaranteed.'].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 32, skewY: 4 }}
                    animate={{ opacity: 1, y: 0, skewY: 0 }}
                    transition={{ duration: 0.65, delay: 0.3 + i * 0.15, type: 'spring', stiffness: 130, damping: 18 }}
                  >
                    <span className={i === 2 ? 'text-[#CC0000]' : 'text-white'} style={{ fontSize: 'clamp(36px, 5.5vw, 76px)', display: 'block' }}>
                      {line}
                    </span>
                  </motion.div>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="text-white/60 text-base leading-relaxed mb-8 max-w-sm"
              >
                Air filtration products, service programs, and installation — family-owned in Wisconsin since 1985.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link href="/contact">
                  <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff6666" className="px-8 py-4 text-sm font-bold tracking-wide shadow-xl uppercase">Get a Quote →</HoverButton>
                </Link>
                <Link href="/products">
                  <HoverButton backgroundColor="rgba(255,255,255,0.08)" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="rgba(255,255,255,0.4)" className="px-8 py-4 text-sm font-bold tracking-wide border border-white/20 backdrop-blur-sm uppercase">Browse Products →</HoverButton>
                </Link>
              </motion.div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
