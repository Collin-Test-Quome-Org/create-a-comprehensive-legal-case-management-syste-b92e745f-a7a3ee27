import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function About() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-900 mb-6 font-plex-sans"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
        >
          Meet LawBridge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-xl text-slate-700 mb-8 font-plex-sans"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          LawBridge is the digital command center for legal professionals who demand more from their workspace. Our company is built on a foundation of trust, clarity, and a relentless pursuit of making the legal process smoother, more transparent, and more secure for everyone—attorneys, paralegals, clients, and beyond.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h1v4h1" /></svg>
              </span>
              <p className="text-lg text-slate-700">Founded by legal tech enthusiasts and former attorneys, we know the challenges you face—because we've lived them.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2" /></svg>
              </span>
              <p className="text-lg text-slate-700">Our mission: Deliver a platform where security, collaboration, and productivity intersect.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </span>
              <p className="text-lg text-slate-700">Every feature is designed for real workflows: from case intake to final invoice.</p>
            </li>
          </ul>
        </motion.div>
        <Button asChild id="about-back-home">
          <Link to="/">Back Home</Link>
        </Button>
      </div>
    </div>
  )
}
