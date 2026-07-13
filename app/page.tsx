'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Star, Smartphone, Monitor, Menu, X, Calendar, Mail } from 'lucide-react'
import styles from './page.module.css'

const NAV_ITEMS = [
  { label: 'Components', href: '#components' },
  { label: 'Sponsorships', href: '#' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={styles.page}>
      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <span className={styles.logoText}>SandUI</span>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={styles.navLink}
                whileHover={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <span>{item.label}</span>
              </motion.a>
            ))}
            <motion.a
              href="#"
              className={styles.navGithub}
              whileHover={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Github size={16} />
              <span>Star</span>
              <span className={styles.githubBadge}>
                <Star size={12} />
                <span>17</span>
              </span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className={styles.mobileNav}
              initial={{ maxHeight: 0, opacity: 0 }}
              animate={{ maxHeight: 400, opacity: 1 }}
              exit={{ maxHeight: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
            <div className={styles.mobileNavInner}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </a>
              ))}
              <div className={styles.mobileNavDivider} />
              <a href="#" className={styles.mobileNavGithub}>
                <Github size={16} />
                <span>Star on GitHub</span>
                <span className={styles.mobileGithubBadge}>
                  <Star size={12} />
                  <span>17</span>
                </span>
              </a>
            </div>
          </motion.nav>
        )}
        </AnimatePresence>
      </motion.header>

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className={styles.badgeDot} />
              Free & Open Source
            </motion.div>

            <h1 className={styles.heroTitle}>
              The motion toolkit for{' '}
              <span className={styles.heroHighlight}>Next.js</span>
              {' '}&{' '}
              <span className={styles.heroHighlight}>React Native</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Copy-paste animated components built on{' '}
              <strong>Framer Motion</strong> and <strong>Animated</strong>.
              Free and open source.
            </p>

            {/* Platform Toggle */}
            <motion.div
              className={styles.toggleWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className={styles.toggleLabel}>Choose your platform</span>
              <div className={styles.toggle}>
                <motion.div
                  className={styles.toggleBg}
                  animate={{ x: activeTab === 'web' ? 0 : '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.8 }}
                />
                <button
                  className={`${styles.toggleBtn} ${activeTab === 'web' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setActiveTab('web')}
                >
                  <Monitor size={18} />
                  <span>Web</span>
                </button>
                <button
                  className={`${styles.toggleBtn} ${activeTab === 'mobile' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setActiveTab('mobile')}
                >
                  <Smartphone size={18} />
                  <span>Mobile</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Work With Me */}
        <section className={styles.workSection}>
          <motion.div
            className={styles.workInner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.workTitle}>Work with me</h2>
            <p className={styles.workDesc}>
              Need components built for your product?<br />
              Custom motion components and frontend systems, built to spec.{' '}
              Book a call or drop a line, whichever&apos;s easier.
            </p>
            <div className={styles.workButtons}>
              <motion.a
                href="#"
                className={styles.workBtnPrimary}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={18} />
                Book a call
              </motion.a>
              <motion.a
                href="mailto:hello@sandui.dev"
                className={styles.workBtnSecondary}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Email me
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>SandUI</span>
            <p className={styles.footerTagline}>
              The motion toolkit for Next.js &amp; React Native.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Product</h4>
              <a href="#" className={styles.footerLink}>Components</a>
              <a href="#" className={styles.footerLink}>Sponsorships</a>
              <a href="#" className={styles.footerLink}>GitHub</a>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Connect</h4>
              <a href="mailto:hello@sandui.dev" className={styles.footerLink}>Email</a>
              <a href="#" className={styles.footerLink}>Twitter / X</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} SandUI. Free and open source.</p>
          <div className={styles.footerBottomLinks}>
            <a href="#">License</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
