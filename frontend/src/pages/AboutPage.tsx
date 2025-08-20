import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#1d4ed8] mb-4 font-[700]"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        The CaseCollab Story
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg text-slate-700 mb-6 font-[400]"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        CaseCollab is powered by a team of passionate legal technologists and ex-practitioners who believe in making law firm operations as smooth as silk. Our mission is to empower law firms with secure, collaborative, and ultra-efficient tools—so you can focus on advocacy, not admin.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-8 border border-slate-100 mb-6"
      >
        <h2 className="font-bold text-2xl mb-3 text-[#1d4ed8]">Our Values</h2>
        <ul className="space-y-2 text-slate-700 list-disc ml-6">
          <li>Privacy and security above all else</li>
          <li>Collaboration breeds success</li>
          <li>Modern, elegant, and accessible design</li>
          <li>Compliance, transparency, and trust</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="rounded-lg p-6 bg-[#1d4ed8] bg-opacity-5"
      >
        <h3 className="font-bold text-lg text-[#1d4ed8] mb-2">Our Promise</h3>
        <p className="text-slate-700">
          From solo attorneys to global firms, we pledge to deliver tools that are intuitive, reliable, and above all—secure. At CaseCollab, your clients' trust is our foundation, and your productivity is our passion.
        </p>
      </motion.div>
    </main>
  );
}
