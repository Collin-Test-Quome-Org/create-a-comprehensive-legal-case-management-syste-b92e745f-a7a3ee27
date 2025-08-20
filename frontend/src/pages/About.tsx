import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen py-16 px-4 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-6 text-[#1d4ed8] font-plex-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About LexiSuite
        </motion.h1>
        <motion.p
          className="text-slate-700 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          LexiSuite is on a mission to empower legal professionals with cutting-edge, collaborative technology. We believe law firms of all sizes deserve modern, secure, and joyful tools. Our platform is designed by legal minds for legal teams who demand efficiency, trust, and peace of mind.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
          <motion.div 
            className="bg-white rounded-xl p-8 shadow border-t-4 border-[#1d4ed8] flex-1"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="font-bold text-xl mb-2 text-[#1d4ed8]">Our Vision</h2>
            <p className="text-slate-600">To set the gold standard for secure, collaborative, and intuitive legal practice management worldwide.</p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl p-8 shadow border-t-4 border-[#1d4ed8] flex-1"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="font-bold text-xl mb-2 text-[#1d4ed8]">Why LexiSuite?</h2>
            <ul className="text-slate-600 text-left list-disc list-inside">
              <li>Best-in-class security</li>
              <li>Intuitive, role-based interface</li>
              <li>Lightning-fast onboarding</li>
              <li>World-class client experience</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
