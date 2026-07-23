'use client'

import Image from 'next/image'
import { FloatingPaths } from '@/components/ui/background-paths'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
  backgroundImage?: string
  imagePosition?: string
  bgSize?: string
  darkMode?: boolean
  glassText?: boolean
  cinematic?: boolean
}

export default function PageHero({ title, subtitle, breadcrumb, backgroundImage, imagePosition = 'object-center', bgSize, darkMode, glassText, cinematic }: PageHeroProps) {
  return (
    <section
      className={`relative text-white overflow-hidden ${cinematic ? 'pt-40 pb-24' : 'pt-36 pb-16'}`}
      style={darkMode ? { background: '#1a1a1a' } : bgSize ? { background: '#111' } : undefined}
    >
      {/* Background photo */}
      {!darkMode && backgroundImage && bgSize && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: bgSize,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      {!darkMode && backgroundImage && !bgSize && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className={`object-cover ${imagePosition}`}
          priority
        />
      )}

      {/* Overlay — cinematic left gradient or standard uniform */}
      {!darkMode && !cinematic && <div className="absolute inset-0 bg-black/30" />}
      {!darkMode && cinematic && (
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)' }} />
      )}
      {darkMode && cinematic && (
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(204,0,0,0.12) 0%, transparent 60%)' }} />
      )}

      {/* FloatingPaths */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={darkMode ? { opacity: 1 } : {
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
          opacity: cinematic ? 0.25 : 0.45,
        }}
      >
        <FloatingPaths position={2} color={darkMode ? 'rgba(204,0,0,' : 'rgba(255,255,255,'} />
        <FloatingPaths position={-2} color={darkMode ? 'rgba(180,0,0,' : 'rgba(255,255,255,'} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {cinematic ? (
          <>
            {breadcrumb && (
              <p className="text-xs font-bold text-white/50 mb-3 uppercase tracking-widest">{breadcrumb}</p>
            )}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl">{title}</h1>
            <div className="mt-5 w-16 h-1 bg-[#CC0000] rounded" />
            {subtitle && (
              <p className="mt-5 text-white/75 text-lg max-w-xl leading-relaxed">{subtitle}</p>
            )}
          </>
        ) : glassText ? (
          <div className="inline-block rounded-2xl px-8 py-7 border border-white/10"
            style={{ background: 'rgba(0,0,0,0.28)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            {breadcrumb && (
              <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">{breadcrumb}</p>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
            {subtitle && (
              <p className="mt-3 text-white/80 text-lg max-w-2xl">{subtitle}</p>
            )}
            <div className="mt-4 w-16 h-1 bg-[#CC0000] rounded" />
          </div>
        ) : (
          <>
            {breadcrumb && (
              <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">{breadcrumb}</p>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
            {subtitle && (
              <p className="mt-3 text-white/80 text-lg max-w-2xl">{subtitle}</p>
            )}
            <div className="mt-4 w-16 h-1 bg-[#CC0000] rounded" />
          </>
        )}
      </div>
    </section>
  )
}
