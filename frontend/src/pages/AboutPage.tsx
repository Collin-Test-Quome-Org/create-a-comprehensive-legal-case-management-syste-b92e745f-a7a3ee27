import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-5xl mx-auto py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-[#1d4ed8] mb-6 text-center font-[700]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Meet LegalEase Case Manager
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-slate-700 text-center max-w-2xl mx-auto mb-8"
        >
          At LegalEase, we empower legal professionals to do their best work. Our all-in-one platform is built by legal tech experts who understand the chaos of modern practice—and believe teams deserve clarity, security, and speed. 
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="bg-white shadow-md rounded-xl p-8 text-center mt-6 border-t-4 border-[#1d4ed8]"
        >
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-slate-600 mb-2">
            We champion legal teams with secure, intuitive technology—making efficiency the new standard, without sacrificing compliance or collaboration.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Who We Serve</h3>
          <ul className="text-slate-600 mb-2 list-disc pl-6 text-left inline-block">
            <li>Attorneys & Law Firms</li>
            <li>Paralegals & Legal Staff</li>
            <li>Clients who demand transparency and security</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex justify-center mt-12"
        >
          <img src="/branding/assets/logo-2.png" className="h-16 w-16" />
        </motion.div>
      </section>
    </div>
  );
}
