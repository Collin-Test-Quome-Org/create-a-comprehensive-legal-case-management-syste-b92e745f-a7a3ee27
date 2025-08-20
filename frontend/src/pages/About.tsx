import { motion } from 'framer-motion'

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl shadow-xl p-10"
      >
        <div className="flex items-center gap-4 mb-5">
          <img src="/branding/assets/logo-1.png" className="w-14" />
          <h1 className="text-3xl font-bold font-plex-sans text-blue-900">About LegalFlow Suite</h1>
        </div>
        <p className="text-gray-700 text-lg mb-4 font-plex-sans">
          <span className="font-bold text-blue-800">LegalFlow Suite</span> is your trusted partner in the digital transformation of legal practice. Built by legal tech enthusiasts for ambitious law firms, we blend security, collaboration, and agility into one seamless platform. Our mission is to empower your team to focus on high-impact legal work—while we handle the workflows, scheduling, and client communications.
        </p>
        <ul className="list-disc ml-8 text-gray-600 mb-6">
          <li>Ultra-secure, cloud-first architecture</li>
          <li>Effortless case, task, and document management</li>
          <li>Modern client collaboration tools</li>
          <li>Real-time notifications and deadline tracking</li>
          <li>Billing, time tracking, and expense automation</li>
        </ul>
        <p className="text-gray-700 font-plex-sans">
          Our company voice: <span className="font-semibold text-blue-700">"Let us sweat the details, so you can win the bigger battles."</span> <br/>
          LegalFlow Suite—Where your practice flows, brilliantly.
        </p>
      </motion.div>
    </div>
  )
}
