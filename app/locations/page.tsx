'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHero from '@/components/shared/PageHero'
import { MapPin, Phone, Clock } from 'lucide-react'

const locations = [
  {
    name: 'Milwaukee / Lannon',
    address: '19806 W Main St',
    city: 'Lannon, WI 53046',
    phone: '(262) 251-3233',
    phoneHref: 'tel:2622513233',
    hours: 'Mon–Fri: 7:30am – 5:00pm',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.0!2d-88.16!3d43.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA4JzI0LjAiTiA4OMKwMDknMzYuMCJX!5e0!3m2!1sen!2sus!4v1617000000000!5m2!1sen!2sus',
  },
  {
    name: 'Green Bay / Luxemburg',
    address: '142 Enterprise Rd',
    city: 'Luxemburg, WI 54217',
    phone: '(920) 845-2449',
    phoneHref: 'tel:9208452449',
    hours: 'Mon–Fri: 7:30am – 5:00pm',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.0!2d-87.71!3d44.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDMyJzI0LjAiTiA4N8KwNDInMzYuMCJX!5e0!3m2!1sen!2sus!4v1617000000000!5m2!1sen!2sus',
  },
]

export default function LocationsPage() {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({})

  return (
    <>
      <PageHero
        title="Locations"
        subtitle="Two Wisconsin locations serving the state from Milwaukee to Green Bay."
        breadcrumb="Locations"
        backgroundImage="/site-images/iStock-522894215.jpg"
              cinematic
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                {/* Map */}
                <div className="relative h-56 bg-gray-100">
                  {!loaded[loc.name] && (
                    <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                      <MapPin size={28} className="text-gray-300" />
                    </div>
                  )}
                  <iframe
                    src={loc.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, opacity: loaded[loc.name] ? 1 : 0, transition: 'opacity 0.4s ease' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${loc.name}`}
                    onLoad={() => setLoaded(prev => ({ ...prev, [loc.name]: true }))}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">{loc.name}</h2>
                  <div className="w-10 h-1 bg-[#CC0000] rounded mb-4" />
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                      <MapPin size={16} className="text-[#CC0000] mt-0.5 shrink-0" />
                      <span>{loc.address}<br />{loc.city}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone size={16} className="text-[#CC0000] shrink-0" />
                      <a href={loc.phoneHref} className="hover:text-[#CC0000] transition-colors font-medium">
                        {loc.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock size={16} className="text-[#CC0000] shrink-0" />
                      <span>{loc.hours}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
