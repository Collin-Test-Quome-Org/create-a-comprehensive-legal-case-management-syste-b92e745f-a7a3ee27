import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }} className="bg-cover bg-center h-[32rem] relative">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
              Welcome to CaseFlow
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Legal workflow, reimagined. Secure, collaborative, and always on your side.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#1d4ed8] text-white font-bold px-8 py-6 text-lg shadow-md" id="cta-get-started">
                <Link to="/signup">Get Started for Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white font-bold px-8 py-6 text-lg shadow-md hover:bg-white/10" id="cta-learn-more">
                <Link to="/cases">See Case Management</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#1d4ed8] mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
            Why Choose CaseFlow?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Tailored for modern legal pros: CaseFlow streamlines your every day, protects your data, and empowers your team to focus on what matters most—your clients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border-t-4 border-[#1d4ed8]">
              <span className="text-[#1d4ed8] mb-2"><i className="lucide lucide-shield-check w-12 h-12"></i></span>
              <h3 className="font-semibold text-xl mb-2">Security First</h3>
              <p className="text-slate-700 text-center">Bank-grade encryption and compliance so your case files never leave your safe hands.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border-t-4 border-[#1d4ed8]">
              <span className="text-[#1d4ed8] mb-2"><i className="lucide lucide-users w-12 h-12"></i></span>
              <h3 className="font-semibold text-xl mb-2">True Collaboration</h3>
              <p className="text-slate-700 text-center">Attorneys, paralegals, and clients unite on one platform, with role-based access and real-time updates.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border-t-4 border-[#1d4ed8]">
              <span className="text-[#1d4ed8] mb-2"><i className="lucide lucide-bar-chart-3 w-12 h-12"></i></span>
              <h3 className="font-semibold text-xl mb-2">Productivity Unleashed</h3>
              <p className="text-slate-700 text-center">Automate deadlines, track time, and manage documents—all with a few clicks.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
