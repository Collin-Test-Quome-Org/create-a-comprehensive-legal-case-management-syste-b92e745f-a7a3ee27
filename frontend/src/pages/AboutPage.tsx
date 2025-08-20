import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="min-h-[60vh] bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#1d4ed8] mb-6"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          About LegalEase Case Manager
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-slate-700 mb-4"
        >
          Welcome to LegalEase Case Manager, your all-in-one legal operations command center. We believe in empowering law firms of all sizes to focus on what matters most—delivering results for clients—while we take care of efficiency, compliance, and security.
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: {}, visible: {} }}
          className="list-disc pl-8 text-base text-slate-600 space-y-2"
        >
          <motion.li initial={{ x: -8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>Comprehensive case and document management</motion.li>
          <motion.li initial={{ x: -8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>Secure client portals for collaboration</motion.li>
          <motion.li initial={{ x: -8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>Billing, time-tracking, and expense management</motion.li>
          <motion.li initial={{ x: -8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>Automated calendar, reminders, and conflict checking</motion.li>
          <motion.li initial={{ x: -8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}>Encrypted storage and role-based controls</motion.li>
        </motion.ul>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-8 text-slate-500"
        >
          LegalEase is built by a team of passionate legal techies who know what it takes to keep your practice running smoothly. Welcome to the future of legal management—crafted for collaboration, security, and peace of mind.
        </motion.p>
      </div>
    </div>
  );
}
