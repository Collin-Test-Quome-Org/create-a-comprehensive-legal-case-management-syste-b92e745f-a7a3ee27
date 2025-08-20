import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 items-center mb-10"
        >
          <img src="/branding/assets/logo-0.png" className="w-24 h-24 md:w-32 md:h-32" />
          <div>
            <h1 className="text-4xl font-bold text-[#1d4ed8] mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Meet LegalEase Case Manager
            </h1>
            <p className="text-slate-700 text-lg mb-2 font-[400]">
              Modern legal work deserves more than spreadsheets and email chains. LegalEase Case Manager is the all-in-one cloud platform designed to streamline your practice, empower your team, and protect your clients—so you can focus on what matters most: justice.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="prose prose-slate max-w-none text-slate-700 bg-white rounded-xl p-8 shadow"
        >
          <h2 className="text-[#1d4ed8] font-bold mb-2">Our Mission</h2>
          <p>
            LegalEase believes every law firm—big or small—deserves secure, intuitive, and powerful tools. We’re passionate about making legal operations seamless, so attorneys and staff can serve clients with confidence and clarity.
          </p>
          <h2 className="text-[#1d4ed8] font-bold mb-2 mt-8">What Makes Us Different?</h2>
          <ul className="list-disc pl-6">
            <li>
              <b>Human-Centric Design:</b> We obsess over details, ensuring every feature fits the real workflow of modern legal teams.
            </li>
            <li>
              <b>Bank-Grade Security:</b> Your data is protected at every layer, with encryption, strict access controls, and compliance you can trust.
            </li>
            <li>
              <b>Rapid, Reliable Support:</b> Our team is here for you—offering onboarding, live support, and ongoing training.
            </li>
          </ul>
          <h2 className="text-[#1d4ed8] font-bold mb-2 mt-8">Who We Serve</h2>
          <p>
            Law firms, solo practitioners, in-house legal teams, and their clients—all benefit from LegalEase’s collaborative, secure, and future-proof platform. Whether you’re handling high-stakes litigation or everyday legal matters, LegalEase is your partner for efficiency and peace of mind.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
