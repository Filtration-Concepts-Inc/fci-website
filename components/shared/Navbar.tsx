'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HoverButton } from '@/components/ui/hover-glow-button'
import { FloatingPaths } from '@/components/ui/background-paths'
import { ChevronDown, Building2, Heart, UtensilsCrossed, Factory, GraduationCap, Plane, Star, FlaskConical, Car, Server, Target, Menu, X } from 'lucide-react'

type NavChild = { href: string; label: string; icon?: React.ElementType }
type NavLink = { href: string; label: string; children?: NavChild[] }

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  {
    href: '/products',
    label: 'Sales',
    children: [
      { href: '/products#medium-efficiency', label: 'Medium Efficiency' },
      { href: '/products#high-efficiency', label: 'High Efficiency' },
      { href: '/products#hepa-filtration', label: 'HEPA Filtration' },
      { href: '/products#hvac-hardware', label: 'HVAC Belts & Hardware' },
    ],
  },
  { href: '/services', label: 'Service' },
  { href: '/installation', label: 'Installation' },
  {
    href: '/industries',
    label: 'Industries',
    children: [
      { href: '/industries/airports', label: 'Airports', icon: Plane },
      { href: '/industries/healthcare', label: 'Healthcare', icon: Heart },
      { href: '/industries/automotive-ev', label: 'Automotive & EV', icon: Car },
      { href: '/industries/hospitality', label: 'Hospitality & Gaming', icon: Star },
      { href: '/industries/cleanrooms', label: 'Cleanrooms & Labs', icon: FlaskConical },
      { href: '/industries/manufacturing', label: 'Manufacturing', icon: Factory },
      { href: '/industries/commercial', label: 'Commercial Buildings', icon: Building2 },
      { href: '/industries/data-centers', label: 'Data Centers', icon: Server },
      { href: '/industries/education', label: 'Education', icon: GraduationCap },
      { href: '/industries/shooting-ranges', label: 'Shooting Ranges', icon: Target },
      { href: '/industries/food-beverage', label: 'Food & Beverage', icon: UtensilsCrossed },
    ],
  },
  { href: '/airtrack', label: 'AirTrack' },
  { href: '/locations', label: 'Locations' },
]

function NavItem({
  link,
  pathname,
  activeDropdown,
  setActiveDropdown,
}: {
  link: NavLink
  pathname: string
  activeDropdown: string | null
  setActiveDropdown: (label: string | null) => void
}) {
  const ref = useRef<HTMLLIElement>(null)
  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
  const isDropdownOpen = activeDropdown === link.label
  const isIndustries = link.label === 'Industries'

  return (
    <li
      ref={ref}
      onMouseEnter={() => setActiveDropdown(link.children ? link.label : null)}
      onMouseLeave={() => setActiveDropdown(null)}
      className="relative list-none"
    >
      <Link
        href={link.href}
        className={`flex items-center gap-1 px-4 py-2 text-base font-semibold transition-colors duration-150 whitespace-nowrap rounded-md hover:bg-white/10 ${
          isActive ? 'text-[#CC0000]' : 'text-white'
        }`}
      >
        {link.label}
        {link.children && (
          <motion.span
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <ChevronDown size={13} strokeWidth={2.5} />
          </motion.span>
        )}
      </Link>

      <AnimatePresence>
        {isDropdownOpen && link.children && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onMouseEnter={() => setActiveDropdown(link.label)}
            onMouseLeave={() => setActiveDropdown(null)}
            className={`absolute top-full left-0 mt-1 rounded-xl overflow-hidden shadow-2xl border border-white/15 z-50 ${isIndustries ? 'grid grid-cols-2 min-w-[380px]' : 'min-w-52'}`}
            style={{
              background: 'rgba(10,10,10,0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {link.children.map((child) => {
              const Icon = child.icon
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                >
                  {Icon && <Icon size={14} className="text-[#CC0000] shrink-0" />}
                  {child.label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function MobileDrawer({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => { setExpanded(null) }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-72 bg-[#1a1a1a] z-50 flex flex-col shadow-2xl"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <img src="/Logo's/FCI white logo.png" alt="FCI" style={{ height: '38px', width: 'auto' }} />
              <button onClick={onClose} className="text-white/70 hover:text-white p-1">
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                const isExpanded = expanded === link.label

                if (link.children) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setExpanded(isExpanded ? null : link.label)}
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-base font-semibold transition-colors ${isActive ? 'text-[#CC0000]' : 'text-white/90'} hover:text-white hover:bg-white/5`}
                      >
                        {link.label}
                        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-flex">
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-black/20"
                          >
                            {link.children.map((child) => {
                              const Icon = child.icon
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2.5 px-8 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                >
                                  {Icon && <Icon size={13} className="text-[#CC0000] shrink-0" />}
                                  {child.label}
                                </Link>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center px-5 py-3.5 text-base font-semibold transition-colors border-b border-white/5 ${isActive ? 'text-[#CC0000]' : 'text-white/90'} hover:text-white hover:bg-white/5`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Get a Quote */}
            <div className="px-5 py-5 border-t border-white/10">
              <Link href="/contact" onClick={onClose}>
                <HoverButton
                  backgroundColor="#CC0000"
                  textColor="#ffffff"
                  hoverTextColor="#ffffff"
                  glowColor="#ff4444"
                  className="w-full py-3 text-base font-semibold"
                >
                  Get a Quote
                </HoverButton>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// 'A' = sweeps right-to-left  |  'B' = pulls down from top
const SCROLL_BANNER: 'A' | 'B' = 'B'

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [bgOpacity, setBgOpacity] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const isHome = pathname === '/'
    const NAV_H = (document.querySelector('header') as HTMLElement)?.offsetHeight ?? 90
    const getEnd = () => {
      if (isHome) return window.innerHeight
      const hero = document.querySelector('section') as HTMLElement | null
      return hero ? Math.max(100, hero.offsetHeight - NAV_H) : 310
    }
    const onScroll = () => {
      const end = getEnd()
      setBgOpacity(Math.min(1, Math.max(0, window.scrollY / end)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: 'calc(90px + env(safe-area-inset-top))',
          paddingTop: 'env(safe-area-inset-top)',
        }}
      >
        {/* Black + red paths — Scroll Banner A: right→left | Scroll Banner B: top→down */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            clipPath: SCROLL_BANNER === 'A'
              ? `inset(0 0 0 ${(1 - bgOpacity) * 100}% round 0 0 12px 12px)`
              : `inset(0 0 ${(1 - bgOpacity) * 100}% 0 round 0 0 12px 12px)`,
            transition: 'none',
          }}
        >
          <div className="absolute inset-0" style={{ background: '#1a1a1a' }} />
          <FloatingPaths position={2} color="rgba(204,0,0," />
          <FloatingPaths position={1} color="rgba(180,0,0," />
          <FloatingPaths position={-1} color="rgba(204,0,0," />
          <FloatingPaths position={-2} color="rgba(160,0,0," />
        </div>

        <div className="relative flex items-center justify-between h-full px-5 sm:px-8 md:px-14 w-full" style={{ zIndex: 1 }}>

          {/* ── Full Logo (left) ── */}
          <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo's/FCI white logo.png"
              alt="Filtration Concepts, Inc."
              style={{ height: '52px', width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))' }}
            />
          </Link>

          {/* ── Nav links (center) — desktop only ── */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <NavItem
                key={link.href + link.label}
                link={link}
                pathname={pathname}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
          </ul>

          {/* ── Get a Quote (right) — desktop only ── */}
          <Link href="/contact" className="hidden md:block shrink-0">
            <HoverButton
              backgroundColor="rgba(204,0,0,0.85)"
              textColor="#ffffff"
              hoverTextColor="#ffffff"
              glowColor="#ff4444"
              className="px-7 py-3 text-base font-semibold backdrop-blur-md shadow-lg border border-white/10"
            >
              Get a Quote
            </HoverButton>
          </Link>

          {/* ── Hamburger (mobile only) ── */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>

        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  )
}
