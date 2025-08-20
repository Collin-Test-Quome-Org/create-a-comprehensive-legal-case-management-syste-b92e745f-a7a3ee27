import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="relative bg-cover bg-center h-[32rem]"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-center"
          >
            <img src="/branding/assets/logo-0.png" className="mx-auto w-24 mb-4" />
            <h1 className="text-white text-5xl font-bold font-plex-sans mb-4">
              Welcome to LegalFlow Suite
            </h1>
            <p className="text-gray-200 text-xl mb-8 font-plex-sans">
              Your all-in-one, ultra-secure legal workspace for progressive law firms. 
              <br />
              <span className="text-blue-400">Collaborate.</span> <span className="text-slate-200">Organize.</span> <span className="text-blue-400">Win.</span>
            </p>
            <Button id="cta-get-started" asChild size="lg" className="text-lg px-8 py-6 font-bold shadow-lg">
              <a href="/signup" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <section className="flex-1 max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-3 gap-10">
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center"
          whileHover={{ scale: 1.04 }}
        >
          <span className="bg-blue-100 rounded-full p-3 mb-4">
            <svg width="32" height="32" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 17h8m0 0v-7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v7m16 0a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2"/></svg>
          </span>
          <h2 className="font-bold text-2xl mb-2 font-plex-sans">Case Management</h2>
          <p className="text-gray-600 mb-4">Track every matter, deadline, and document in a single, intuitive dashboard. Stay in the loop with real-time updates and reminders.</p>
          <Button id="learn-case-mgmt" variant="outline" asChild>
            <a href="/cases">View Cases</a>
          </Button>
        </motion.div>
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center"
          whileHover={{ scale: 1.04 }}
        >
          <span className="bg-blue-100 rounded-full p-3 mb-4">
            <svg width="32" height="32" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
          </span>
          <h2 className="font-bold text-2xl mb-2 font-plex-sans">Task &amp; Calendar</h2>
          <p className="text-gray-600 mb-4">Never miss a beat. Assign tasks, set court dates, manage deadlines and sync with your firm's calendar seamlessly.</p>
          <Button id="learn-tasks" variant="outline" asChild>
            <a href="/tasks">View Tasks</a>
          </Button>
        </motion.div>
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center"
          whileHover={{ scale: 1.04 }}
        >
          <span className="bg-blue-100 rounded-full p-3 mb-4">
            <svg width="32" height="32" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"/><path d="M17 21v-4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"/></svg>
          </span>
          <h2 className="font-bold text-2xl mb-2 font-plex-sans">Client Portal</h2>
          <p className="text-gray-600 mb-4">Give your clients a modern, secure way to communicate and collaborate. Share docs, updates, and invoices with confidence.</p>
          <Button id="learn-portal" variant="outline" asChild>
            <a href="/client-portal">Launch Portal</a>
          </Button>
        </motion.div>
      </section>
      <footer className="bg-white py-8 border-t mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src="/branding/assets/logo-0.png" className="w-8" />
            <span className="text-lg font-bold text-blue-900 font-plex-sans">LegalFlow Suite</span>
          </div>
          <nav className="flex gap-6 text-gray-500">
            <a href="/cases" className="hover:text-blue-600 font-plex-sans">Cases</a>
            <a href="/tasks" className="hover:text-blue-600 font-plex-sans">Tasks</a>
            <a href="/calendar" className="hover:text-blue-600 font-plex-sans">Calendar</a>
            <a href="/client-portal" className="hover:text-blue-600 font-plex-sans">Client Portal</a>
            <a href="/login" className="hover:text-blue-600 font-plex-sans">Login</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
