import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#1d4ed8] mb-6"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
      >
        About CaseFlow
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-slate-700 mb-8"
      >
        CaseFlow is your modern legal assistant—dedicated to making legal practice as smooth and secure as possible. Our mission: empower attorneys, paralegals, and clients with seamless collaboration and robust digital tools, all under one trusted roof.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#1d4ed8]"
      >
        <h2 className="text-2xl font-bold mb-2">Our Company Voice</h2>
        <p className="text-lg text-slate-600 mb-2">
          "CaseFlow speaks with clarity, confidence, and a dash of legal wit. We're your reassuring digital advocate, always focused on efficiency, security, and putting your legal team first. Our platform is trustworthy, approachable, and designed to make your work shine."
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Who We Serve</h3>
        <ul className="list-disc pl-6 text-slate-600">
          <li>Attorneys looking to modernize their workflow</li>
          <li>Paralegals managing complex cases</li>
          <li>Clients who value transparency and security</li>
        </ul>
      </motion.div>
    </div>
  );
}
