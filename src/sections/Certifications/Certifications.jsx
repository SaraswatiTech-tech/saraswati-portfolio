import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiDownload, FiFileText, FiX, FiExternalLink } from 'react-icons/fi'
import Section from '../../components/Layout/Section'
import SectionHeader from '../../components/UI/SectionHeader'
import { certifications } from '../../data/portfolioData'

function CertificatePreview({ cert, onOpen }) {
  if (cert.image) {
    return (
      <button
        type="button"
        onClick={() => onOpen(cert)}
        className="cert-image-wrap group w-full aspect-[4/3] rounded-xl overflow-hidden border border-theme-border mb-4 relative cursor-pointer"
        aria-label={`View ${cert.name} certificate`}
      >
        <img
          src={cert.image}
          alt={`${cert.name} certificate`}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-white bg-black/50 px-3 py-1.5 rounded-lg">
            View Certificate
          </span>
        </div>
      </button>
    )
  }

  return (
    <div
      className="cert-image-wrap w-full aspect-[4/3] rounded-xl overflow-hidden border border-theme-border mb-4 flex flex-col items-center justify-center gap-3"
      style={{ background: `linear-gradient(135deg, ${cert.color}12, ${cert.color}05)` }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10"
        style={{ background: `${cert.color}18`, color: cert.color }}
      >
        <FiFileText className="w-7 h-7" aria-hidden="true" />
      </div>
      <p className="text-[10px] text-theme-muted uppercase tracking-wider">Certificate Document</p>
      <a
        href={cert.downloadUrl}
        download
        className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
      >
        <FiDownload className="w-3.5 h-3.5" />
        Download {cert.fileType?.toUpperCase() ?? 'File'}
      </a>
    </div>
  )
}

function CertificateModal({ cert, onClose }) {
  if (!cert?.image) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${cert.name} certificate preview`}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-slate-900 border border-white/10 p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg bg-black/60 flex items-center justify-center text-white hover:bg-black/80"
            aria-label="Close preview"
          >
            <FiX className="w-5 h-5" />
          </button>
          <img
            src={cert.image}
            alt={`${cert.name} certificate full view`}
            className="w-full h-auto rounded-xl"
          />
          <div className="flex flex-wrap gap-3 p-4">
            <a
              href={cert.downloadUrl}
              download
              className="btn-primary flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium"
            >
              <FiDownload className="w-4 h-4" />
              Download
            </a>
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 px-4 py-2 rounded-lg text-theme-primary text-sm font-medium"
            >
              <FiExternalLink className="w-4 h-4" />
              Open in New Tab
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function CertificateCard({ cert, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="glass-card cert-card p-5 sm:p-6 h-full flex flex-col"
    >
      <CertificatePreview cert={cert} onOpen={onOpen} />

      <div className="flex items-start gap-2 mb-2">
        <FiAward className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
        <h3 className="text-sm font-bold text-theme-primary leading-snug">{cert.name}</h3>
      </div>
      <p className="text-[11px] text-theme-muted mb-2 leading-relaxed">{cert.issuer}</p>
      <span
        className="text-xs font-semibold mt-auto"
        style={{ color: cert.color }}
      >
        {cert.year}
      </span>

      {cert.image && (
        <a
          href={cert.downloadUrl}
          download
          className="mt-3 flex items-center gap-1.5 text-[11px] text-blue-400 font-medium hover:text-blue-300 transition-colors"
        >
          <FiDownload className="w-3.5 h-3.5" />
          Download Certificate
        </a>
      )}
    </motion.article>
  )
}

export default function Certifications() {
  const [preview, setPreview] = useState(null)

  return (
    <Section id="certifications">
      <SectionHeader
        label="Credentials"
        title="Certifications"
        subtitle="Professional certifications in QA automation, full-stack development, and generative AI"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} onOpen={setPreview} />
        ))}
      </div>

      <p className="text-center text-xs text-theme-muted mt-8">
        Software Development Engineer in Testing (SDET) certificate — coming soon
      </p>

      {preview && (
        <CertificateModal cert={preview} onClose={() => setPreview(null)} />
      )}
    </Section>
  )
}
