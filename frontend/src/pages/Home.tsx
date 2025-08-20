import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex flex-col">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="relative bg-cover bg-center h-[32rem] w-full"
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-6xl font-bold mb-4 tracking-tight font-plex-sans"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
          >
            Welcome to LawBridge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-200 text-xl md:text-2xl max-w-xl text-center mb-8 font-plex-sans"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            The all-in-one workspace for modern legal teams. Secure. Efficient. Collaborative. Where every case is your best case.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button asChild id="cta-get-started" className="text-lg px-8 py-5 font-bold">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" id="cta-learn-more" className="text-lg px-8 py-5 border-white border-2 text-white hover:text-blue-800 hover:bg-white">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Feature Highlights */}
      <section className="py-16 px-4 max-w-screen-xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center font-plex-sans"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
        >
          Built for Legal Professionals
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition"
            whileHover={{ scale: 1.04 }}
          >
            <span className="mb-4 p-3 rounded-full bg-blue-100 text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-4 4a4 4 0 100-8 4 4 0 000 8zm8-4v-2a8 8 0 10-16 0v2a2 2 0 002 2h12a2 2 0 002-2z" /></svg>
            </span>
            <h3 className="text-xl font-semibold mb-2">Case Management</h3>
            <p className="text-slate-600 text-center">Organize every file, deadline, and note. Never lose track of a client or case detail again.</p>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition"
            whileHover={{ scale: 1.04 }}
          >
            <span className="mb-4 p-3 rounded-full bg-blue-100 text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
            <h3 className="text-xl font-semibold mb-2">Smart Calendar</h3>
            <p className="text-slate-600 text-center">Court dates, client meetings, and deadlines in one beautiful, unified calendar.</p>
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition"
            whileHover={{ scale: 1.04 }}
          >
            <span className="mb-4 p-3 rounded-full bg-blue-100 text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h.01M19 12a7 7 0 11-14 0 7 7 0 0114 0zm-7 4v.01" /></svg>
            </span>
            <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
            <p className="text-slate-600 text-center">Confidential, encrypted chat between your team and clients—because trust is everything.</p>
          </motion.div>
        </div>
      </section>
      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full py-10 flex flex-col items-center bg-gradient-to-r from-blue-800 to-blue-600"
      >
        <h3 className="text-white text-2xl font-bold mb-4 font-plex-sans" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
          Ready to elevate your legal practice?
        </h3>
        <Button asChild id="cta-signup-footer" className="text-lg px-8 py-5 font-bold">
          <Link to="/signup">Get Started Free</Link>
        </Button>
      </motion.section>
      <div className="flex-1" />
    </div>
  )
}
