// About page for LexiFlow
import { motion } from 'framer-motion';

export function About() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 flex flex-col items-center"
      >
        <img src="/branding/assets/logo-2.png" className="w-20 h-20 mb-4" />
        <h1 className="text-4xl font-bold text-blue-700 mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
          About LexiFlow
        </h1>
        <p className="text-xl text-slate-600 text-center max-w-2xl">
          LexiFlow is where modern law meets seamless workflow. We believe legal teams deserve tools as sharp as their minds—so we built a portal that’s secure, intuitive, and, dare we say, a little fun.
        </p>
      </motion.header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <motion.div 
          whileHover={{ y: -4, boxShadow: '0 4px 32px 0 rgba(30,64,175,0.08)' }}
          className="bg-white rounded-xl shadow p-8 border-l-4 border-blue-700 flex flex-col"
        >
          <h2 className="text-lg font-semibold mb-3 text-blue-700">Our Mission</h2>
          <p className="text-slate-700">
            To empower legal professionals with a platform that does the heavy lifting—so you can focus on winning cases, not chasing paperwork. We’re dedicated to making law practice more collaborative, organized, and delightfully efficient.
          </p>
        </motion.div>
        <motion.div 
          whileHover={{ y: -4, boxShadow: '0 4px 32px 0 rgba(30,64,175,0.08)' }}
          className="bg-white rounded-xl shadow p-8 border-l-4 border-blue-700 flex flex-col"
        >
          <h2 className="text-lg font-semibold mb-3 text-blue-700">Who We Serve</h2>
          <p className="text-slate-700">
            LexiFlow is built for law firms, legal departments, and solo practitioners who demand excellence, security, and a touch of style in their digital tools.
          </p>
        </motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Meet the LexiFlow Crew</h2>
        <p className="text-slate-600 mb-6">Friendly faces, sharp minds, and a penchant for puns—our team is here to help you succeed!</p>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col items-center bg-slate-50 p-6 rounded-xl shadow w-56">
            <span className="mb-2">
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7 7 0 0 1 13 0"/></svg>
            </span>
            <span className="font-semibold text-blue-700">Jordan</span>
            <span className="text-slate-600 text-sm">Lead Counsel & Visionary</span>
          </div>
          <div className="flex flex-col items-center bg-slate-50 p-6 rounded-xl shadow w-56">
            <span className="mb-2">
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>
            </span>
            <span className="font-semibold text-blue-700">Taylor</span>
            <span className="text-slate-600 text-sm">Operations Maestro</span>
          </div>
          <div className="flex flex-col items-center bg-slate-50 p-6 rounded-xl shadow w-56">
            <span className="mb-2">
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </span>
            <span className="font-semibold text-blue-700">Morgan</span>
            <span className="text-slate-600 text-sm">Chief Tech Whisperer</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
