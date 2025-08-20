import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="flex items-center gap-4 mb-8">
          <Scale className="w-10 h-10 text-[#1d4ed8]" />
          <h1 className="text-3xl md:text-4xl font-bold text-[#1d4ed8]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            About CaseCollab
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-slate-700 mb-8 font-[400]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          CaseCollab is your trusted co-counsel in the digital age. We're built for the bold legal teams who demand more than just a case file: we deliver seamless collaboration, bank-grade security, and an interface that makes managing legal work as easy as a closing argument. Our platform is the product of countless hours spent with attorneys, paralegals, and legal operations professionals—crafted to fuel your efficiency, empower your team, and keep your firm ahead of the curve.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-xl shadow-md p-8 border-t-4 border-[#94a3b8]"
        >
          <h2 className="text-xl font-bold mb-4 text-[#1d4ed8]">Our Mission</h2>
          <p className="text-slate-700 text-base mb-4">
            At CaseCollab, we believe legal work should be collaborative, secure, and stress-free. Our mission is to modernize every aspect of legal case management—so you can focus on winning cases, not wrangling paperwork. We’re here to champion your productivity, protect your clients, and make your firm shine.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Empower legal professionals with intuitive, powerful software</li>
            <li>Ensure the highest standards of data protection and compliance</li>
            <li>Foster seamless teamwork and client communication</li>
            <li>Deliver insights and automation to streamline your workflow</li>
          </ul>
        </motion.div>
        <div className="mt-12 text-slate-500 text-center text-sm">
          Proudly built by legal tech enthusiasts who believe justice deserves brilliant software.
        </div>
      </div>
    </main>
  );
}
