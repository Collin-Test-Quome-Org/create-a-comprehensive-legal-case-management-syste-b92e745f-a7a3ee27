// Home page for LexiFlow
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative w-full h-[480px] flex items-center justify-center"
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          className="relative z-10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="/branding/assets/logo-0.png" className="w-24 h-24 mb-6" />
          <h1
            className="text-white text-5xl font-bold mb-3 tracking-tight"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
          >
            LexiFlow
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-xl">
            Welcome to LexiFlow — the modern legal operations portal designed for law practices that mean business.
            Secure, smart, and stunningly simple. Let's get your team working like clockwork!
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" id="cta-get-started" className="bg-blue-700 hover:bg-blue-900 text-white text-lg shadow-lg">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" id="cta-login" className="border-white text-white text-lg bg-transparent hover:bg-slate-800/80">
              <Link to="/login">Log In</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      {/* Features Section */}
      <section className="flex flex-col md:flex-row justify-around gap-10 my-16 max-w-5xl mx-auto w-full animate-fade-in">
        <motion.div 
          whileHover={{ scale: 1.04 }}
          className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-8 border-blue-700"
        >
          <span className="mb-4 text-blue-700">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 3v4a2 2 0 0 0 2 2h4"/></svg>
          </span>
          <h2 className="font-bold text-xl mb-2" style={{fontFamily:'IBM Plex Sans'}}>All Cases, One Dashboard</h2>
          <p className="text-slate-600 leading-relaxed">
            Centralize your legal matters, deadlines, and documents—all accessible in one polished, secure portal. Never miss a beat or a brief.
          </p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.04 }}
          className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-8 border-blue-700"
        >
          <span className="mb-4 text-blue-700">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </span>
          <h2 className="font-bold text-xl mb-2" style={{fontFamily:'IBM Plex Sans'}}>Deadlines Made Easy</h2>
          <p className="text-slate-600 leading-relaxed">
            Our smart calendar & reminders keep you ahead of court dates, filings, and client meetings. Because the only surprises you want are winning your case!
          </p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.04 }}
          className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-8 border-blue-700"
        >
          <span className="mb-4 text-blue-700">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>
          </span>
          <h2 className="font-bold text-xl mb-2" style={{fontFamily:'IBM Plex Sans'}}>Secure Collaboration</h2>
          <p className="text-slate-600 leading-relaxed">
            Share files, assign tasks, and chat with clients or paralegals—all in a safe, encrypted environment. LexiFlow is security with style.
          </p>
        </motion.div>
      </section>
      {/* CTA Section */}
      <motion.section 
        className="bg-blue-700 py-14 flex flex-col items-center justify-center text-center gap-6 mt-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="text-white text-3xl font-bold" style={{fontFamily:'IBM Plex Sans'}}>Ready to transform your law practice?</h2>
        <p className="text-white/80 text-lg mb-4">Sign up for LexiFlow and take control of your legal workflow. Because your time deserves justice.</p>
        <Button asChild size="lg" id="cta-signup-footer" className="bg-slate-100 text-blue-700 hover:bg-blue-900 hover:text-white text-lg font-semibold">
          <Link to="/signup">Start Your Free Trial</Link>
        </Button>
      </motion.section>
    </main>
  );
}
