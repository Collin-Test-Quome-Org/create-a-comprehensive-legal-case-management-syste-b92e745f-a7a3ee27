import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="w-full bg-[#1d4ed8] bg-gradient-to-br from-[#1d4ed8] to-[#94a3b8] text-white py-20 mb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About CaseCollab
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-4 text-slate-100 opacity-95"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            LegalEase Case Manager is your firm's virtual partner—built for legal professionals, by legal professionals.
          </motion.p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 flex flex-col gap-8">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 border-[#1d4ed8]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ShieldCheck className="w-12 h-12 text-[#1d4ed8] mb-4" />
          <h2 className="font-bold text-2xl mb-3" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Our Mission
          </h2>
          <p className="text-slate-600 text-lg text-center mb-2">
            At CaseCollab, we believe the law should work for you. Our mission is to empower attorneys and staff to focus on what truly matters—advocacy and client service—by streamlining every aspect of legal case management.
          </p>
          <h3 className="font-semibold text-xl mt-7 mb-2 text-[#1d4ed8]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Our Values</h3>
          <ul className="list-disc text-slate-600 text-base ml-8 text-left">
            <li>Security & Trust: Ironclad protection for privileged information</li>
            <li>Efficiency: Automate the busywork, empower your team</li>
            <li>Compliance: Built to meet legal industry regulations</li>
            <li>Collaboration: Seamless teamwork across roles and practice areas</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
