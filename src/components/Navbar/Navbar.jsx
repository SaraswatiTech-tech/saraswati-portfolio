import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

import { navLinks, resumeFile } from '../../data/portfolioData'

import useActiveSection from '../../hooks/useActiveSection'

import ThemeToggle from '../UI/ThemeToggle'



const sectionIds = navLinks.map((l) => l.id).filter(Boolean)



function Logo({ onNavigate }) {

  return (

    <a

      href="#home"

      onClick={() => onNavigate('home')}

      className="flex items-center gap-3 shrink-0 min-w-0"

    >

      <div className="relative w-10 h-10 shrink-0" aria-hidden="true">

        <svg viewBox="0 0 40 40" className="w-full h-full">

          <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="rgba(59,130,246,0.12)" stroke="url(#logoGrad)" strokeWidth="1.5" />

          <defs>

            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">

              <stop offset="0%" stopColor="#3b82f6" />

              <stop offset="100%" stopColor="#8b5cf6" />

            </linearGradient>

          </defs>

          <text x="20" y="26" textAnchor="middle" fontSize="16" fontWeight="bold" fill="url(#logoGrad)" fontFamily="Inter, sans-serif">S</text>

        </svg>

      </div>

      <div className="min-w-0">

        <span className="text-theme-primary font-semibold text-sm leading-tight block truncate">Saraswati</span>

        <span className="text-xs text-theme-secondary truncate block">Software Test Engineer</span>

      </div>

    </a>

  )

}



function NavLink({ label, href, id, isActive, onClick }) {

  return (

    <a

      href={href}

      onClick={() => onClick(id)}

      className={`relative text-sm font-medium pb-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${

        isActive ? 'text-blue-400' : 'text-theme-secondary hover:text-theme-primary'

      }`}

      aria-current={isActive ? 'page' : undefined}

    >

      {label}

      {isActive && (

        <motion.span

          layoutId="nav-underline"

          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-blue-500"

          transition={{ type: 'spring', stiffness: 380, damping: 30 }}

        />

      )}

    </a>

  )

}



export default function Navbar() {

  const [open, setOpen] = useState(false)

  const { active, setActiveSection } = useActiveSection(sectionIds)



  const handleNavigate = (id) => {

    setActiveSection(id)

    setOpen(false)

  }



  return (

    <motion.header

      initial={{ y: -20, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.35 }}

      className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-md border-b border-theme-border"

      style={{ background: 'var(--theme-nav-bg)' }}

    >

      <div className="page-container h-full flex items-center">

        <div className="flex flex-1 items-center min-w-0">

          <Logo onNavigate={handleNavigate} />

        </div>



        <nav className="hidden lg:flex items-center justify-center shrink-0" aria-label="Main navigation">

          <ul className="flex items-center gap-8 xl:gap-10">

            {navLinks.map((link) => (

              <li key={link.label}>

                <NavLink

                  {...link}

                  isActive={active === link.id}

                  onClick={handleNavigate}

                />

              </li>

            ))}

          </ul>

        </nav>



        <div className="flex flex-1 items-center justify-end gap-3 min-w-0">

          <ThemeToggle className="hidden sm:flex" />

          <motion.a

            href={resumeFile.path}

            download={resumeFile.downloadName}

            whileHover={{ scale: 1.02 }}

            whileTap={{ scale: 0.98 }}

            className="btn-primary hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-medium shrink-0"

          >

            <FiDownload className="w-4 h-4" aria-hidden="true" />

            Download Resume

          </motion.a>

          <button

            type="button"

            className="nav-menu-btn lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"

            onClick={() => setOpen(!open)}

            aria-label={open ? 'Close menu' : 'Open menu'}

            aria-expanded={open}

          >

            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}

          </button>

        </div>

      </div>



      <AnimatePresence>

        {open && (

          <motion.div

            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: 'auto' }}

            exit={{ opacity: 0, height: 0 }}

            className="lg:hidden border-t border-theme-border bg-theme-mobile-menu backdrop-blur-md overflow-hidden"

          >

            <nav className="page-container py-4" aria-label="Mobile navigation">

              <ul className="flex flex-col gap-1">

                {navLinks.map((link) => (

                  <li key={link.label}>

                    <a

                      href={link.href}

                      onClick={() => handleNavigate(link.id)}

                      className={`block py-3 px-2 text-sm font-medium rounded-lg transition-colors ${

                        active === link.id ? 'text-blue-400 bg-blue-500/10' : 'text-theme-secondary hover:text-theme-primary'

                      }`}

                    >

                      {link.label}

                    </a>

                  </li>

                ))}

                <li className="flex justify-center py-2">
                  <ThemeToggle />
                </li>

                <li className="pt-2">

                  <a href={resumeFile.path} download={resumeFile.downloadName} onClick={() => setOpen(false)} className="btn-primary flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-medium">

                    <FiDownload className="w-4 h-4" /> Download Resume

                  </a>

                </li>

              </ul>

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>

  )

}

