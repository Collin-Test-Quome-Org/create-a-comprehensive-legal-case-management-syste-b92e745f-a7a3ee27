import { motion } from 'framer-motion';

export function About() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <motion.h1
          className="text-4xl font-bold text-[#1d4ed8] font-ibm-plex-sans"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About LexiFlow
        </motion.h1>
        <motion.p
          className="text-lg text-slate-700 font-ibm-plex-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          LexiFlow is on a mission to empower law firms and legal teams with the world's most secure, collaborative, and intuitive workflow platform. Our founders are legal tech veterans and former attorneys who understand the unique rhythm of the modern law practice: the need for bulletproof security, effortless teamwork, and absolute control over every detail.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <h2 className="text-xl font-semibold mb-2 text-[#1d4ed8]">Our Vision</h2>
            <p className="text-slate-600">To make legal work simpler, safer, and more collaborative—so attorneys can focus on advocacy, not admin. We build tools that take the friction out of your day, so your team can deliver justice with confidence.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <h2 className="text-xl font-semibold mb-2 text-[#1d4ed8]">Who We Serve</h2>
            <p className="text-slate-600">LexiFlow is designed for modern legal professionals: solo practitioners, law firms, paralegals, and legal ops teams who demand uncompromising security and seamless collaboration—without the complexity.</p>
          </div>
        </motion.div>
        <div className="mt-12">
          <motion.h3
            className="text-2xl font-bold text-[#1d4ed8] mb-4 font-ibm-plex-sans"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Built by Legal Professionals, for Legal Professionals
          </motion.h3>
          <motion.p
            className="text-slate-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            LexiFlow is more than software—it's your new legal partner. Join the next generation of legal teams revolutionizing the way they work.
          </motion.p>
        </div>
      </div>
    </main>
  );
}
