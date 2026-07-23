'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HoverButton } from '@/components/ui/hover-glow-button'

export default function CTABanner() {
  return (
    <section className="py-16 bg-[#CC0000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Breathe Easier?
          </h2>
          <p className="mt-3 text-red-100 text-lg max-w-xl mx-auto">
            Contact us today to get a quote, set up a service program, or ask about our products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <HoverButton
                backgroundColor="#ffffff"
                textColor="#CC0000"
                hoverTextColor="#CC0000"
                glowColor="#CC0000"
                className="px-8 py-3.5 text-base"
              >
                Get a Quote
              </HoverButton>
            </Link>
            <Link href="/products">
              <HoverButton
                backgroundColor="transparent"
                textColor="#ffffff"
                hoverTextColor="#ffffff"
                glowColor="#ffffff"
                className="px-8 py-3.5 text-base border-2 border-white"
              >
                Browse Products
              </HoverButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
