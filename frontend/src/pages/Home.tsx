import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[430px] w-full relative"
      >
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <motion.div 
            className="text-center px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
              Welcome to CasePilot
            </h1>
            <p className="text-xl text-slate-100 max-w-xl mx-auto mb-8" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Effortless case management, secure collaboration, and smart automation for modern law practices. From intake to verdict, CasePilot's got your back.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild id="cta-get-started" className="text-lg px-8 py-6 bg-[#1d4ed8] hover:bg-blue-800">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild id="cta-demo" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:text-[#1d4ed8] hover:bg-white bg-transparent">
                <Link to="/login">Live Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <main className="flex-grow bg-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#1d4ed8]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
            Your Law Practice, Streamlined
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8fafc] rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="rounded-full bg-[#1d4ed8] p-4 mb-4">
                <svg width="32" height="32" stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 3v4a1 1 0 0 0 1 1h4"/></svg>
              </div>
              <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>Case Dashboard</h3>
              <p className="text-slate-600 text-center">View, track, and organize all your cases in one intuitive dashboard, so you never miss a detail.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="rounded-full bg-[#1d4ed8] p-4 mb-4">
                <svg width="32" height="32" stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>Smart Deadlines</h3>
              <p className="text-slate-600 text-center">Automated reminders and scheduling keep your court dates, filings, and meetings on track and on time.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="rounded-full bg-[#1d4ed8] p-4 mb-4">
                <svg width="32" height="32" stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-1a2 2 0 0 0-2 2v2h5V5a2 2 0 0 0-2-2z"/></svg>
              </div>
              <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>Secure Messaging</h3>
              <p className="text-slate-600 text-center">Collaborate with your team and clients securely, with encrypted messaging and document sharing.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 mt-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#1d4ed8]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
            Why Choose CasePilot?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-xl bg-[#e0e7ef] p-8 shadow flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <svg width="24" height="24" className="text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                <span className="font-semibold text-lg">Effortless Onboarding</span>
              </div>
              <p className="text-slate-700">Get started in minutes. Our guided setup helps you import your cases and invite your team with zero headaches.</p>
            </div>
            <div className="rounded-xl bg-[#e0e7ef] p-8 shadow flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <svg width="24" height="24" className="text-[#1d4ed8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 9h16"/><path d="M9 4v16"/></svg>
                <span className="font-semibold text-lg">Security First</span>
              </div>
              <p className="text-slate-700">Military-grade encryption ensures your sensitive data stays private, always. Compliance and protection, built in.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
