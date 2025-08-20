import { motion } from 'framer-motion';
export function About() {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-[#e0e7ef] via-white to-[#e0e7ef]">
      <section className="max-w-3xl mx-auto py-20 px-4">
        <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}}>
          <h1 className="font-bold text-4xl text-[#1d4ed8] mb-4 font-heading" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>About JustiFlow</h1>
          <p className="text-lg text-slate-700 mb-10">JustiFlow is the digital command center for modern legal professionals and their clients. We believe managing legal work should be secure, collaborative, and—dare we say—enjoyable. Built by a team of legal tech enthusiasts with a penchant for pixel-perfect UX, we’re here to streamline your firm’s workflow while keeping it friendly and approachable.</p>
          <div className="flex flex-col md:flex-row gap-10 mt-8">
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="/branding/assets/logo-1.png" className="w-14 h-14 mx-auto mb-3" />
              <h2 className="font-bold text-xl mb-2">Our Mission</h2>
              <p className="text-slate-600">Empower law firms and clients with tools that foster transparency, trust, and efficiency—without sacrificing security or user experience.</p>
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="/branding/assets/logo-0.png" className="w-14 h-14 mx-auto mb-3" />
              <h2 className="font-bold text-xl mb-2">Our Voice</h2>
              <p className="text-slate-600">Professional, warm, and always rooting for your success. We speak your language—whether you’re a seasoned partner, a busy paralegal, or a client eager for clarity.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
