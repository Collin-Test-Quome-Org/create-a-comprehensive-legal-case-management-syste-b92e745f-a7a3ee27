import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e5e9f8] to-[#f8fafc]">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="relative bg-cover bg-center h-[32rem] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-extrabold text-5xl md:text-6xl mb-6 font-plex-sans">
            Empowering Legal Teams, <span className="text-[#1d4ed8]">Effortlessly.</span>
          </h1>
          <p className="text-slate-200 text-xl mb-8 max-w-2xl mx-auto">
            Welcome to <span className="font-bold">LexiSuite</span> – the all-in-one law firm productivity platform. Streamline cases, collaborate securely, delight clients, and never miss a deadline. Your legal operations, reimagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button id="hero-cta-signup" size="lg" className="bg-[#1d4ed8] hover:bg-[#2563eb] text-white text-lg font-bold px-8 py-6 shadow-lg">
                Get Started Free <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button id="hero-cta-login" variant="outline" size="lg" className="text-white border-white text-lg px-8 py-6 bg-transparent hover:bg-white/10">
                Log In
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-3 gap-10">
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center border-t-4 border-[#1d4ed8]"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #1d4ed833' }}
        >
          <div className="bg-[#1d4ed8]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#1d4ed8]" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 2v6a2 2 0 002 2h6" /><rect x="2" y="8" width="20" height="14" rx="2" /><path d="M18 22V12" /></svg>
          </div>
          <h3 className="font-bold text-xl mb-2 text-slate-900">Case Management</h3>
          <p className="text-slate-600 text-center">Track, organize, and search all your cases from a single secure dashboard. Assign roles, set permissions, and never lose sight of what's next.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center border-t-4 border-[#1d4ed8]"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #1d4ed833' }}
        >
          <div className="bg-[#1d4ed8]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#1d4ed8]" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M12 4h9" /><path d="M4 9V7a2 2 0 012-2h8a2 2 0 012 2v2" /><rect x="4" y="13" width="16" height="6" rx="2" /><path d="M6 17v-2" /></svg>
          </div>
          <h3 className="font-bold text-xl mb-2 text-slate-900">Document Vault</h3>
          <p className="text-slate-600 text-center">Securely upload, organize, and share legal documents. Version control, e-signatures, and ultra-fast search built in.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center border-t-4 border-[#1d4ed8]"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #1d4ed833' }}
        >
          <div className="bg-[#1d4ed8]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#1d4ed8]" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 19v-4a4 4 0 018 0v4" /><rect x="5" y="11" width="14" height="7" rx="2" /><path d="M15 7a2 2 0 01-2-2V5a2 2 0 112 2z" /></svg>
          </div>
          <h3 className="font-bold text-xl mb-2 text-slate-900">Client Portal</h3>
          <p className="text-slate-600 text-center">Delight your clients with a secure portal for updates, messaging, and document exchange. Transparency and trust, delivered.</p>
        </motion.div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#1d4ed8] py-16 text-center text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 font-plex-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to transform your legal workflow?
        </motion.h2>
        <p className="text-lg mb-8 text-white/80">Join the LexiSuite community and experience the future of legal operations today.</p>
        <Link to="/signup">
          <Button id="cta-bottom-signup" className="bg-white text-[#1d4ed8] font-bold text-lg px-10 py-6 shadow-lg hover:bg-[#f1f5f9]">
            Start Free Trial
          </Button>
        </Link>
      </section>
    </div>
  );
}
