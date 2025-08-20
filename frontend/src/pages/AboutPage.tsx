import { motion } from 'framer-motion';
import { Users, ShieldCheck, Lightbulb } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-[#1d4ed8] text-center mb-8"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
        >
          About LegalEase Case Manager
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-slate-700 mb-8 text-lg text-center max-w-2xl mx-auto"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          At LegalEase, we're on a mission to empower law firms to serve their clients with greater efficiency, security, and peace of mind. Our platform is designed by legal professionals, for legal professionals—bringing every case, client, and deadline into perfect focus.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AboutCard
            icon={<Users className="w-10 h-10 text-[#1d4ed8] mx-auto" />}
            title="For Modern Law Firms"
            text="Built for teams who value productivity and collaboration. Streamline your workflow, empower staff, and deliver results."
          />
          <AboutCard
            icon={<ShieldCheck className="w-10 h-10 text-[#1d4ed8] mx-auto" />}
            title="Ironclad Privacy"
            text="We prioritize client confidentiality. Our security is woven into every layer—ensuring compliance and trust."
          />
          <AboutCard
            icon={<Lightbulb className="w-10 h-10 text-[#1d4ed8] mx-auto" />}
            title="Relentless Innovation"
            text="LegalEase is always evolving. We listen to our users and continuously deliver features that make a difference."
          />
        </div>
        <div className="mt-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#1d4ed8] mb-4"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
          >
            Our Company Voice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-xl mx-auto"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            <span className="italic">"At LegalEase, we believe that justice should run like clockwork—efficient, secure, and always client-focused. We exist to take the burden of administration off your plate, so your legal team can do what it does best: win for your clients. Welcome to a new era of legal case management—built for trust, built for speed, built for you."</span>
          </motion.p>
        </div>
      </section>
    </div>
  );
}

function AboutCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-center border-t-4 border-[#1d4ed8] hover:shadow-xl transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-center" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>{title}</h3>
      <p className="text-slate-600 text-center" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{text}</p>
    </motion.div>
  );
}
