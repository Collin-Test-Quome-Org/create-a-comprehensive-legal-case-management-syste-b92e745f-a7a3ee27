import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc]">
      <section
        className="relative h-[32rem] flex items-center justify-center"
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <img src="/branding/assets/logo-0.png" className="mx-auto mb-6 w-24 h-24" />
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-4 font-heading tracking-tight drop-shadow-lg" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
            Welcome to JustiFlow
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Where legal professionals & clients unite to manage cases, tasks, and communication. Secure. Streamlined. Powerful.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" id="cta-get-started" className="bg-[#1d4ed8] text-white text-lg hover:bg-blue-800 transition">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" id="cta-demo" className="text-white border-white text-lg hover:bg-white/10 hover:text-white transition">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration: 0.7}} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d4ed8] font-heading">Built for Modern Law Firms & Clients</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">JustiFlow is your secure, collaborative legal workflow hub. Organize cases, schedule deadlines, message securely, track time, and keep clients in the loop—all from one intuitive dashboard.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: 0.1}} className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center">
            <span className="mb-4 text-blue-700">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m9-9H3"/></svg>
            </span>
            <h3 className="font-bold text-xl mb-2">Case Collaboration</h3>
            <p className="text-slate-600">Share docs, assign tasks, and track progress—keep your team and clients aligned at every step.</p>
          </motion.div>
          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: 0.2}} className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center">
            <span className="mb-4 text-blue-700">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </span>
            <h3 className="font-bold text-xl mb-2">Deadline Management</h3>
            <p className="text-slate-600">Never miss a court date or filing—automated reminders and integrated calendar keep you on track.</p>
          </motion.div>
          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: 0.3}} className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center">
            <span className="mb-4 text-blue-700">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M16 3h-8a2 2 0 0 0-2 2v6h12V5a2 2 0 0 0-2-2z"/></svg>
            </span>
            <h3 className="font-bold text-xl mb-2">Secure Messaging</h3>
            <p className="text-slate-600">Communicate in confidence with encrypted, centralized chat for attorneys, staff, and clients.</p>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#1d4ed8] py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="mb-8 md:mb-0 md:mr-8 flex-1">
            <h2 className="text-white text-3xl font-bold mb-3 font-heading">Ready to modernize your legal workflow?</h2>
            <p className="text-slate-200 mb-6">Join JustiFlow today and give your law practice the power of clarity, security, and trust. The future of legal collaboration is here.</p>
            <Button asChild size="lg" id="cta-get-started-footer" className="bg-white text-[#1d4ed8] font-bold text-lg hover:bg-slate-100">
              <Link to="/signup">Create Your Account</Link>
            </Button>
          </div>
          <img src="/branding/assets/logo-2.png" className="w-32 h-32 flex-1" />
        </div>
      </section>
    </main>
  );
}
