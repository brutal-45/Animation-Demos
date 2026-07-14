'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Star, Menu, X, ArrowUpRight, Heart } from 'lucide-react'
import styles from './page.module.css'

const NAV_ITEMS = [
  { label: 'Components', href: '#components' },
  { label: 'Sponsorships', href: 'https://github.com/sponsors/sandeepannandi', external: true },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

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
            <img src="/icon.png" alt="" className={styles.logoIcon} />
            <span className={styles.logoText}>SandUI</span>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={styles.navLink}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                whileHover={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <span>{item.label}</span>
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/sandeepannandi/Design-Experiments"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navGithub}
              whileHover={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Github size={16} />
              <span>GitHub</span>
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
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </a>
              ))}
              <div className={styles.mobileNavDivider} />
              <a href="https://github.com/sandeepannandi/Design-Experiments" target="_blank" rel="noopener noreferrer" className={styles.mobileNavGithub}>
                <Github size={16} />
                <span>GitHub</span>
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
              Free & Open Source
            </motion.div>

            <h1 className={styles.heroTitle}>
              The motion toolkit for{' '}
              <span>Next.js</span>
              {' '}&{' '}
              <span>React Native</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Copy-paste animated components built on{' '}
              <strong>Framer Motion</strong> and <strong>Animated</strong>.
              <br />Free and open source.
            </p>

            {/* Platform Toggle */}
            <motion.div
              className={styles.toggleWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
                  Web
                </button>
                <button
                  className={`${styles.toggleBtn} ${activeTab === 'mobile' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setActiveTab('mobile')}
                >
                  Mobile
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
            <motion.div
              className={styles.workBadge}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Work with me
            </motion.div>

            <h2 className={styles.workTitle}>
              Let's build something
              <br />
              <span className={styles.workHighlight}>great together</span>
            </h2>

            <p className={styles.workDesc}>
              I design and build custom motion components, design systems,
              and frontend architecture for your project. Polished,
              production-ready UI to your spec, on your timeline.
            </p>

            <div className={styles.workButtons}>
              <motion.a
                href="https://cal.com/sandeepannandi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.workBtnPrimary}
              >
                Book a call
              </motion.a>
              <motion.button
                type="button"
                className={styles.workBtnSecondary}
                onClick={() => {
                  navigator.clipboard.writeText('sandipannandi9825@gmail.com')
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }}
              >
                {copied ? 'Copied!' : 'Email me'}
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>SandUI</span>
            <p className={styles.footerTagline}>
              The motion toolkit for Next.js &amp; React Native.
              <br />
              Free and open source.
            </p>
            
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Product</h4>
              <a href="#components" className={styles.footerLink}>
                <span className={styles.footerLinkText}>Components</span>
              </a>
              <motion.a
                href="https://github.com/sponsors/sandeepannandi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <span className={styles.footerLinkText}>Sponsorships</span>
                <ArrowUpRight size={12} className={styles.linkIcon} />
              </motion.a>
              <motion.a
                href="https://github.com/sandeepannandi/Design-Experiments"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <span className={styles.footerLinkText}>GitHub</span>
                <ArrowUpRight size={12} className={styles.linkIcon} />
              </motion.a>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Connect</h4>
              <motion.button
                type="button"
                className={styles.footerLink}
                whileHover={{ x: 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onClick={() => {
                  navigator.clipboard.writeText('sandipannandi9825@gmail.com')
                  setCopiedEmail(true)
                  setTimeout(() => setCopiedEmail(false), 2000)
                }}
              >
                <span className={styles.footerLinkText}>{copiedEmail ? 'Copied!' : 'Email'}</span>
              </motion.button>
              <motion.a
                href="https://x.com/SandeepanNandi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <span className={styles.footerLinkText}>Twitter / X</span>
                <ArrowUpRight size={12} className={styles.linkIcon} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} SandUI.
          </p>
          <div className={styles.footerBottomLinks}>
            <a target="_blank" rel="noopener noreferrer">MIT License</a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
