'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import { Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react'
import { HoverButton } from '@/components/ui/hover-glow-button'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [toast, setToast] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      serviceAddress: (form.elements.namedItem('serviceAddress') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      state: (form.elements.namedItem('state') as HTMLInputElement).value,
      zip: (form.elements.namedItem('zip') as HTMLInputElement).value,
      serviceArea: (form.elements.namedItem('serviceArea') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setLoading(false)
    if (res.ok) {
      form.reset()
      setToast(true)
      setTimeout(() => setToast(false), 5000)
    } else {
      setError(true)
    }
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
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
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
                      name="company"
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@acme.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(262) 555-1234"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Service Address</label>
                    <input
                      type="text"
                      name="serviceAddress"
                      placeholder="409 Swan Rd"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Lannon"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">State</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="Wisconsin"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Zip Code</label>
                      <input
                        type="text"
                        name="zip"
                        placeholder="53046"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">Requested Service</label>
                    <select name="serviceArea" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#CC0000] transition-colors bg-white">
                      <option value="">Select a service</option>
                      <option>Cottonwood Screen Installation</option>
                      <option>UV Installation</option>
                      <option>Filter Changing Service</option>
                      <option>Filter Quote</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-1.5">How can we help?</label>
                    <textarea
                      name="message"
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
                  {error && (
                    <p className="text-sm text-red-600 text-center">Something went wrong. Please try again or call us directly.</p>
                  )}
                </form>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#1a1a1a] text-white px-6 py-4 rounded-2xl shadow-2xl"
          >
            <CheckCircle2 size={20} className="text-green-400 shrink-0" />
            <p className="text-sm font-medium">Thanks for reaching out — someone from our team will get back to you within one business day.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
