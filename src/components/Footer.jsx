import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      category: 'Navigation',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      category: 'Resources',
      links: [
        { label: 'Blog', path: '#' },
        { label: 'Docs', path: '#' },
        { label: 'Tools', path: '#' },
        { label: 'Archive', path: '#' },
      ],
    },
    {
      category: 'Social',
      links: [
        { label: 'GitHub', path: '#' },
        { label: 'LinkedIn', path: '#' },
        { label: 'Twitter', path: '#' },
        { label: 'Instagram', path: '#' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950 backdrop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block">
              <div className="font-space font-bold text-lg mb-4">
                <span className="gradient-text">Shreyas</span>
                <span className="text-accent-cyan ml-1">D</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm font-inter">
              Ultra-modern creative developer crafting immersive digital experiences.
            </p>
          </motion.div>

          {/* Link Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-space font-bold text-sm mb-4 text-accent-cyan">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-neutral-400 hover:text-accent-lime text-sm font-inter transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-neutral-500 text-sm font-inter">
              © {currentYear} Shreyas D. All rights reserved.
            </p>

            {/* Quick Actions */}
            <div className="flex gap-6">
              <motion.a
                href="#top"
                className="text-neutral-400 hover:text-accent-cyan text-sm font-inter transition-colors flex items-center gap-2"
                whileHover={{ x: -5 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Back to Top
              </motion.a>

              <motion.a
                href="mailto:hello@shreyas.dev"
                className="text-neutral-400 hover:text-accent-lime text-sm font-inter transition-colors flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-lime to-transparent opacity-20" />
      </div>
    </footer>
  );
}
