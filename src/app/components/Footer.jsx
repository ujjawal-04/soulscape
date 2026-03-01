// app/components/Footer.jsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { href: '/', label: 'Home' },
      { href: '/destinations', label: 'Destinations' },
      { href: '#about', label: 'About Us' },
    ],
    support: [
      { href: '#contact', label: 'Contact' },
      { href: '#', label: 'FAQs' },
      { href: '#', label: 'Terms & Conditions' },
    ],
    social: [
      { icon: Facebook, href: '#', label: 'Facebook' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Instagram, href: '#', label: 'Instagram' },
    ],
  }

  const contactInfo = [
    { icon: MapPin, text: 'India' },
    { icon: Mail, text: 'info@soulscape.com' },
    { icon: Phone, text: '+91 XXX XXX XXXX' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400">
              Soulscape
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Discover the wonders of India. Your gateway to unforgettable experiences and cultural treasures.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-500 dark:to-blue-500 text-white hover:from-teal-700 hover:to-blue-700 dark:hover:from-teal-600 dark:hover:to-blue-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-teal-700 dark:text-teal-300">
              Explore
            </h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-teal-700 dark:text-teal-300">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-teal-700 dark:text-teal-300">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <item.icon className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Soulscape. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
