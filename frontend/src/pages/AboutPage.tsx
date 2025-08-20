import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <section className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-[#1d4ed8] text-center" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who is CaseCollab?
        </motion.h1>
        <motion.p
          className="text-lg text-slate-700 text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          CaseCollab is your firm’s digital command center. We’re the friendly but fiercely secure legal tech partner designed to make your cases—and your team—run like clockwork. Our platform is built by legal professionals for legal professionals, with a mission to make legal work less stressful, more organized, and always compliant.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 flex-1 border-t-4 border-[#1d4ed8]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="font-semibold text-xl mb-2 text-[#1d4ed8]">Our Mission</h2>
            <p className="text-slate-600">We empower law firms of all sizes to serve clients better, work smarter, and stay ahead of deadlines—without sacrificing security or control.</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 flex-1 border-t-4 border-[#94a3b8]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="font-semibold text-xl mb-2 text-[#1d4ed8]">Our Voice</h2>
            <p className="text-slate-600">Professional, efficient, and welcoming. We believe legal tech should work for you—never against you. We cut the jargon and bring a human touch to every pixel.</p>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <span className="inline-block bg-[#e0e7ff] text-[#1d4ed8] font-mono px-4 py-2 rounded-full text-sm font-semibold">CaseCollab: Where Security Meets Simplicity</span>
        </div>
      </section>
    </main>
  );
}
