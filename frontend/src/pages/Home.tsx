import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[30rem] relative"
      >
        <div className="bg-black/60 h-full flex flex-col items-center justify-center gap-8">
          <motion.h1 
            className="text-white text-5xl font-bold tracking-tight mb-4 font-ibm-plex-sans"
            initial={{ opacity: 0, y: 60 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to LexiFlow
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mb-4 font-ibm-plex-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Your all-in-one legal workflow platform for secure, efficient, and collaborative case management. Empowering modern law firms and legal teams to work smarter, together.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button id="cta-get-started" asChild className="text-lg px-8 py-6 font-bold shadow-lg bg-[#1d4ed8] hover:bg-[#2563eb]">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button id="cta-demo" variant="outline" asChild className="text-lg px-8 py-6 font-bold border-white/60 bg-white/20 text-white hover:bg-white/30 hover:text-white">
              <Link to="/login">See Demo</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col gap-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#1d4ed8] text-center font-ibm-plex-sans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Legal Teams Love LexiFlow
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:shadow-xl transition"
            whileHover={{ scale: 1.04 }}
          >
            <div className="text-[#1d4ed8] mb-4">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Case Management</h3>
            <p className="text-slate-600 text-center">Organize, track, and collaborate on cases with confidence. Stay on top of deadlines, evidence, and communications—all in one place.</p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:shadow-xl transition"
            whileHover={{ scale: 1.04 }}
          >
            <div className="text-[#1d4ed8] mb-4">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Bank-Grade Security</h3>
            <p className="text-slate-600 text-center">Your data is protected with industry-leading encryption and secure access controls. Trust and privacy are our utmost priorities.</p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-slate-100 hover:shadow-xl transition"
            whileHover={{ scale: 1.04 }}
          >
            <div className="text-[#1d4ed8] mb-4">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Collaboration Without Compromise</h3>
            <p className="text-slate-600 text-center">Work seamlessly with your team and clients. Share documents, assign tasks, and communicate securely in real time.</p>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#1d4ed8] py-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h4 className="text-white text-2xl font-semibold text-center font-ibm-plex-sans">Ready to streamline your legal workflow?</h4>
          <Button id="cta-join-today" asChild className="text-lg px-8 py-6 font-bold shadow-md bg-white text-[#1d4ed8] hover:bg-slate-100">
            <Link to="/signup">Join LexiFlow Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
