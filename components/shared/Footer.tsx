import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/Logo's/FCI-logo-badge.png"
              alt="FCI Logo"
              width={56}
              height={56}
              className="object-contain mb-3"
            />
            <p className="text-sm text-gray-400 leading-relaxed mt-2">
              Helping You Breathe a Little Easier. Wisconsin&apos;s trusted air filtration partner since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                { href: '/services', label: 'Services' },
                { href: '/airtrack', label: 'AirTrack' },
                { href: '/locations', label: 'Locations' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Filter Sales',
                'Filter Service Programs',
                'Cottonwood Screens',
                'UV Bulb Installation',
                'Rooftop Unit Installation',
                'AirTrack Ordering',
              ].map((s) => (
                <li key={s} className="text-sm text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#CC0000]" />
                <span>19806 W Main St<br />Lannon, WI 53046</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="shrink-0 text-[#CC0000]" />
                <a href="tel:2622513233" className="hover:text-white transition-colors">(262) 251-3233</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400 mt-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#CC0000]" />
                <span>142 Enterprise Rd<br />Luxemburg, WI 54217</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="shrink-0 text-[#CC0000]" />
                <a href="tel:9208452449" className="hover:text-white transition-colors">(920) 845-2449</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400 mt-3">
                <Mail size={14} className="shrink-0 text-[#CC0000]" />
                <span>sales@fciwisconsin.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Filtration Concepts Inc. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Wisconsin Owned &amp; Operated Since 1985
          </p>
        </div>
      </div>
    </footer>
  )
}
