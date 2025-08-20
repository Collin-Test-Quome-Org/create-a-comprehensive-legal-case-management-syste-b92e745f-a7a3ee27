import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto pt-20 pb-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 mb-6 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
        >
          About CaseLink
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-slate-700 mb-6 text-center max-w-2xl mx-auto"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Welcome to CaseLink — the digital command center for the legal profession. We're passionate about empowering attorneys, paralegals, and clients to collaborate securely, manage complexity, and focus on what matters: winning cases and serving justice. Our platform is shaped by the needs of modern legal teams, with a bold voice and a commitment to trustworthiness, efficiency, and clarity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-10 justify-center items-center mt-10"
        >
          <div className="flex-1 text-center">
            <img src="/branding/assets/logo-2.png" className="w-32 h-32 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h2>
            <p className="text-slate-700">To deliver accessible, secure, and collaborative tools that help legal professionals thrive — from solo practitioners to full-service law firms.</p>
          </div>
          <div className="flex-1 text-center">
            <img src="/branding/assets/logo-0.png" className="w-32 h-32 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Values</h2>
            <ul className="text-slate-700 list-disc list-inside">
              <li>Confidentiality is our foundation</li>
              <li>Collaboration is our catalyst</li>
              <li>Clarity is our compass</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
