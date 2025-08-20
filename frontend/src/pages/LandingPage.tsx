import { Hero } from '@/components/Hero';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-[#1d4ed8] text-center font-[700]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Why Choose CaseCollab?
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg flex-1 p-8 flex flex-col items-center text-center border-t-4 border-[#1d4ed8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl mb-4">📁</span>
            <h3 className="font-bold text-xl mb-2">Effortless Collaboration</h3>
            <p className="text-slate-600 mb-2">Share, review, and comment on case files in real-time. Everyone on the same page, always.</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-lg flex-1 p-8 flex flex-col items-center text-center border-t-4 border-[#94a3b8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl mb-4">🔒</span>
            <h3 className="font-bold text-xl mb-2">Ironclad Security</h3>
            <p className="text-slate-600 mb-2">Your clients' privacy is sacred. Bank-grade security, encrypted communications, and compliance built-in.</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-lg flex-1 p-8 flex flex-col items-center text-center border-t-4 border-[#1d4ed8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl mb-4">⚡</span>
            <h3 className="font-bold text-xl mb-2">Lightning Fast</h3>
            <p className="text-slate-600 mb-2">From case intake to closing arguments—CaseCollab keeps your team moving at the speed of justice.</p>
          </motion.div>
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="bg-[#1d4ed8] text-white px-8 py-5 text-lg font-bold shadow-xl" id="cta-start-btn">
            <Link to="/signup">Start Collaborating Now</Link>
          </Button>
        </div>
      </section>
      <footer className="w-full border-t border-slate-200 bg-white py-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
          <div className="flex items-center gap-2">
            <img src="/branding/assets/logo-2.png" className="h-8 w-8" />
            <span className="text-[#1d4ed8] font-bold text-lg">CaseCollab</span>
          </div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <Link to="/about" className="hover:text-[#1d4ed8]">About</Link>
            <Link to="/features" className="hover:text-[#1d4ed8]">Features</Link>
            <Link to="/contact" className="hover:text-[#1d4ed8]">Contact</Link>
            <Link to="/login" className="hover:text-[#1d4ed8]">Login</Link>
            <Link to="/signup" className="hover:text-[#1d4ed8]">Sign Up</Link>
          </div>
        </div>
        <div className="text-center text-slate-400 text-xs mt-4">© {new Date().getFullYear()} CaseCollab. All rights reserved.</div>
      </footer>
    </div>
  );
}
