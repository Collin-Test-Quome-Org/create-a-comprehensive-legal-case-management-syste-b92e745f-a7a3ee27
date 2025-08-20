import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-start py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl bg-white rounded-2xl shadow-xl p-10 border-t-4 border-[#1d4ed8]"
      >
        <div className="flex items-center gap-3 mb-6">
          <img src="/branding/assets/logo-0.png" className="w-12 h-12" />
          <span className="text-3xl font-extrabold text-[#1d4ed8] font-['IBM Plex Sans']">LegalEase Case Manager</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h1>
        <p className="mb-5 text-slate-700 text-lg">
          At LegalEase, our mission is to empower attorneys and legal staff to practice law—not chase paperwork. We believe legal professionals deserve tools that are as secure as your clients' secrets and as sharp as your cross-examination.
        </p>
        <h2 className="text-xl font-bold mb-2 mt-8">Who We Serve</h2>
        <p className="mb-5 text-slate-700">
          Whether you're a solo practitioner, midsize firm, or large legal team, LegalEase Case Manager adapts to your needs. We designed our platform in partnership with attorneys, paralegals, and clients to ensure it's as intuitive as it is robust.
        </p>
        <h2 className="text-xl font-bold mb-2 mt-8">What Sets Us Apart</h2>
        <ul className="mb-5 text-slate-700 list-disc pl-6">
          <li>Security-first, with end-to-end encryption and granular role controls</li>
          <li>Intuitive collaboration—never miss a deadline or document again</li>
          <li>Transparent billing, calendar, and workflow management</li>
        </ul>
        <p className="text-slate-600 mt-8 italic">
          LegalEase—where your practice meets peace of mind.
        </p>
      </motion.div>
    </div>
  );
}
