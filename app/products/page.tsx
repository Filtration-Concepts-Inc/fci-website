'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/home/CTABanner'
import { HoverButton } from '@/components/ui/hover-glow-button'
import { X, Download, Scissors } from 'lucide-react'

interface Product {
  name: string
  image: string | null
  pdf: string | null
}

const categories: { heading: string; id: string; products: Product[] }[] = [
  {
    heading: 'Medium Efficiency',
    id: 'medium-efficiency',
    products: [
      { name: 'Enduro Pleat', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Enduro Pleat.png', pdf: '/literature/enduro-pleat.pdf' },
      { name: 'Nova Pleat', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Nova Pleat.png', pdf: '/literature/nova-pleat.pdf' },
      { name: 'Poly Media', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Poly Media.png', pdf: '/literature/rigid-poly-media.pdf' },
      { name: 'Link & Cube Filters', image: '/FCI Website Product Images/MEDIUM EFFICIENCY/Link & Cube Filters.png', pdf: '/literature/heat-seal.pdf' },
    ],
  },
  {
    heading: 'High Efficiency',
    id: 'high-efficiency',
    products: [
      { name: 'FP Mini-Pleat', image: '/FCI Website Product Images/HIGH EFFICIENCY/FP Mini-Pleat.png', pdf: '/literature/fp-fps-minipleat.pdf' },
      { name: 'GeoPleat', image: '/FCI Website Product Images/HIGH EFFICIENCY/GeoPleat.png', pdf: '/literature/geopleat.pdf' },
      { name: 'Pocket Filter', image: '/FCI Website Product Images/HIGH EFFICIENCY/Pocket Filter.png', pdf: '/literature/rhino-pocket.pdf' },
      { name: 'Titan FP', image: '/FCI Website Product Images/HIGH EFFICIENCY/Titan FP.png', pdf: '/literature/titan-fp.pdf' },
    ],
  },
  {
    heading: 'HEPA Filtration',
    id: 'hepa-filtration',
    products: [
      { name: 'A Series HEPA', image: '/FCI Website Product Images/HEPA FILTRATION/A Series.png', pdf: '/literature/a-series-hepa.pdf' },
      { name: 'HV Series HEPA', image: '/FCI Website Product Images/HEPA FILTRATION/HV Series (2).png', pdf: '/literature/hv-series-hepa.pdf' },
      { name: 'M Series HEPA', image: '/FCI Website Product Images/HEPA FILTRATION/M Series.png', pdf: '/literature/m-series-hepa.pdf' },
      { name: 'Pharma RTM', image: '/FCI Website Product Images/HEPA FILTRATION/Pharma-Replaceable Terminal Module.png', pdf: '/literature/pharma-rtm.pdf' },
    ],
  },
  {
    heading: 'HVAC Belts & Hardware',
    id: 'hvac-hardware',
    products: [
      { name: 'HVAC Belt', image: '/FCI Website Product Images/HVAC BELTS & HARDWARE/HVAC Belt.png', pdf: null },
      { name: 'Bolt-Seal Housing', image: '/FCI Website Product Images/HVAC BELTS & HARDWARE/Hepa Bolt-Seal Housing.png', pdf: '/literature/bolt-seal-housing.pdf' },
      { name: 'Inner Seal Housing', image: '/FCI Website Product Images/HVAC BELTS & HARDWARE/Inner Seal Housing.png', pdf: '/literature/inner-seal-housing.pdf' },
      { name: 'Seal V-Bank Housing', image: '/FCI Website Product Images/HVAC BELTS & HARDWARE/Seal V-Bank Housing.png', pdf: '/literature/seal-v-bank-housing.pdf' },
    ],
  },
]

function LiteratureModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex flex-col overflow-hidden"
          style={{ height: '88vh' }}
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        >
          <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Product Literature</p>
              <h3 className="text-xl font-bold text-[#1a1a1a]">{product.name}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden p-6">
            {product.pdf ? (
              <iframe
                src={product.pdf}
                className="w-full h-full rounded-xl border border-gray-200"
                title={product.name}
              />
            ) : (
              <div className="text-center py-16">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="mx-auto mb-6 object-contain max-h-48 w-auto"
                  />
                )}
                <p className="text-gray-400 text-sm">Product literature coming soon.</p>
                <p className="text-gray-400 text-xs mt-1">Contact us for specifications and datasheets.</p>
              </div>
            )}
          </div>

          <div className="px-8 py-5 border-t border-gray-100 flex items-center justify-between">
            <p className="text-xs text-gray-400">Filtration Concepts Inc.</p>
            {product.pdf && (
              <a
                href={product.pdf}
                download
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#aa0000] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Download size={14} />
                Download PDF
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [14, -14]), { stiffness: 300, damping: 22 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-14, 14]), { stiffness: 300, damping: 22 })
  const scale = useSpring(hovered ? 1.06 : 1, { stiffness: 300, damping: 22 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rawX.set(x)
    rawY.set(y)
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
    setHovered(false)
  }

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      style={{ perspective: '800px' }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={cardRef}
        className="w-full h-52 flex items-center justify-center relative rounded-2xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          boxShadow: hovered
            ? '0 24px 60px rgba(204,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)'
            : 'none',
          transition: 'box-shadow 0.3s ease',
          background: 'transparent',
        }}
      >
        {/* Spotlight that follows cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(204,0,0,0.12) 0%, rgba(255,255,255,0) 65%)`,
          }}
        />

        {/* Red edge shimmer on hover */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            boxShadow: 'inset 0 0 0 1.5px rgba(204,0,0,0.25)',
          }}
        />

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="relative max-h-full w-auto object-contain p-4"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-2">
            <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </motion.div>

      <motion.p
        className="mt-3 text-sm font-medium text-center"
        animate={{ color: hovered ? '#CC0000' : '#374151' }}
        transition={{ duration: 0.2 }}
      >
        {product.name}
      </motion.p>
    </div>
  )
}

export default function ProductsPage() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <>
      <PageHero
        title="Products"
        subtitle="Over 1,000 air filtration products across all major filter types."
        breadcrumb="Products"
        backgroundImage="/site-images/warehouse pic.jpg"
              cinematic
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.heading}
              id={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">{cat.heading}</h2>
                <div className="mt-2 w-12 h-1 bg-[#CC0000] rounded" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {cat.products.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <ProductCard product={product} onClick={() => setSelected(product)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {selected && (
        <LiteratureModal product={selected} onClose={() => setSelected(null)} />
      )}

      {/* Custom Fabrication CTA */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#CC0000]/10 mb-6">
              <Scissors size={24} className="text-[#CC0000]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]">Don't see what you need?</h2>
            <div className="mt-4 w-12 h-1 bg-[#CC0000] rounded mx-auto" />
            <p className="mt-6 text-gray-500 leading-relaxed max-w-2xl mx-auto">
              FCI fabricates custom filters in-house at our Wisconsin locations. Non-standard sizes, unusual frame materials, specialty media — if it fits your HVAC system, we can build it. Our team cuts and assembles custom pleated panels, poly media rolls, and specialty configurations to match your exact equipment specs.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Tell us your dimensions, application, and efficiency requirements and we'll handle the rest.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <HoverButton backgroundColor="#CC0000" textColor="#ffffff" hoverTextColor="#ffffff" glowColor="#ff4444" className="px-8 py-3 text-sm">
                  Tell Us Your Specs →
                </HoverButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
