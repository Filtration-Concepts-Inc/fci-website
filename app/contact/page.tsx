'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import { Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react'
import { HoverButton } from '@/components/ui/hover-glow-button'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or ready to get started? We'd love to hear from you."
        breadcrumb="Contact"
        darkMode
        cinematic
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Get in Touch</h2>
              <div className="w-10 h-1 bg-[#CC0000] rounded mb-6" />

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Milwaukee / Lannon</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <MapPin size={15} className="text-[#CC0000] mt-0.5 shrink-0" />
                      19806 W Main St, Lannon, WI 53046
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <Phone size={15} className="text-[#CC0000] shrink-0" />
                      <a href="tel:2622513233" className="hover:text-[#CC0000] transition-colors">(262) 251-3233</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Green Bay / Luxemburg</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <MapPin size={15} className="text-[#CC0000] mt-0.5 shrink-0" />
                      142 Enterprise Rd, Luxemburg, WI 54217
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <Phone size={15} className="text-[#CC0000] shrink-0" />
                      <a href="tel:9208452449" className="hover:text-[#CC0000] transition-colors">(920) 845-2449</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Email</h3>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Mail size={15} className="text-[#CC0000] shrink-0" />
                    sales@fciwisconsin.com
                  </div>
                </div>

                <div className="bg-[#f7f7f7] rounded-xl p-4">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1 text-sm">Office Hours</h3>
                  <p className="text-sm text-gray-500">Monday – Friday: 7:30am – 5:00pm</p>
                  <p className="text-sm text-gray-500">Saturday – Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">First Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Last Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@acme.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Phone</label>
                      <input
                        type="tel"
                        placeholder="(262) 555-1234"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Service Area</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors bg-white">
                      <option value="">Select your area</option>
                      <option>Milwaukee / Lannon Area</option>
                      <option>Green Bay / Luxemburg Area</option>
                      <option>Other Wisconsin</option>
                      <option>Outside Wisconsin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">How can we help?</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your filtration needs..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors resize-none"
                    />
                  </div>

                  <HoverButton
                    onClick={() => {}}
                    disabled={loading}
                    backgroundColor="#CC0000"
                    textColor="#ffffff"
                    hoverTextColor="#ffffff"
                    glowColor="#ff4444"
                    className="w-full py-3.5 text-base"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </HoverButton>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
