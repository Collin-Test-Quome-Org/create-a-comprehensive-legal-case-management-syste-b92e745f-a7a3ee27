import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-[#f8fafc] rounded-2xl shadow-lg p-12"
      >
        <h1 className="text-4xl font-bold text-[#1d4ed8] mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
          Meet CasePilot
        </h1>
        <p className="text-slate-700 mb-6 text-lg" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          We're CasePilot, your digital co-counsel for the modern law office. Our mission? To launch every legal team into a new era of productivity, transparency, and peace of mind. We believe every firm—big or small—deserves delightful tools that work as hard as you do.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-slate-700 text-lg">
          <li>Born from real-world legal ops pain points</li>
          <li>Obsessed with security, speed, and simplicity</li>
          <li>Driven by feedback from attorneys, paralegals, and clients</li>
          <li>Here to help you win, every day</li>
        </ul>
        <div className="mt-8 text-center">
          <span className="inline-block rounded-lg bg-[#1d4ed8] px-5 py-3 text-white font-bold text-lg shadow">
            CasePilot: Navigate your legal future with us
          </span>
        </div>
      </motion.div>
    </div>
  );
}
