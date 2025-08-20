import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="min-h-[60vh] bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#1d4ed8] mb-6 font-[700]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          About LegalEase Case Manager
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-slate-700 mb-6"
        >
          LegalEase Case Manager is your trusted partner in legal operations. Designed by legal professionals, for legal professionals, our platform empowers attorneys, paralegals, and staff to deliver excellence to their clients with security, efficiency, and peace of mind. We believe in the power of collaboration, transparency, and technology to move your firm forward—all while protecting the sanctity of attorney-client privilege.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="bg-white rounded-xl shadow p-8 border-t-4 border-[#1d4ed8]"
        >
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-slate-700">
            To streamline legal case management through secure, intuitive, and collaborative technology—helping law firms of all sizes serve their clients and uphold the highest standards of legal practice.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
