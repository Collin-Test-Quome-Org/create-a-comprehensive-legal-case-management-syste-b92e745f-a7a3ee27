import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-96 relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
              Welcome to CaseLink
            </h1>
            <p className="text-slate-200 text-lg max-w-xl mx-auto mb-6" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Where legal minds connect. Streamline task management, deadlines, and collaboration for your law practice — all in one secure hub.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild id="cta-signup" className="bg-blue-700 text-white text-lg px-8 py-4 font-bold shadow-lg hover:bg-blue-800">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" id="cta-demo" className="text-white border-white text-lg px-8 py-4 bg-transparent hover:bg-blue-700 hover:border-blue-800">
                <Link to="/login">Demo Login</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
            Effortless Legal Collaboration
          </h2>
          <p className="text-slate-700 text-lg mb-8 max-w-2xl" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            CaseLink is your digital workspace for modern legal teams. Assign tasks, share documents securely, track deadlines, and keep communication confidential — all in a platform built for the rhythm of legal life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="bg-blue-100 rounded-full p-3 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              </span>
              <strong className="text-xl mb-1">Task Boards</strong>
              <p className="text-slate-600 text-center">Visualize and manage team workload with drag-and-drop Kanban boards tailored for legal workflow.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="bg-blue-100 rounded-full p-3 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M16 3v4a2 2 0 0 0 2 2h4"></path></svg>
              </span>
              <strong className="text-xl mb-1">Court Deadlines</strong>
              <p className="text-slate-600 text-center">Never miss a critical date. Sync, track, and get reminders for all your deadlines, hearings, and filings.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="bg-blue-100 rounded-full p-3 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M22 7V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2"></path></svg>
              </span>
              <strong className="text-xl mb-1">Confidential Messaging</strong>
              <p className="text-slate-600 text-center">Keep every conversation secure. Built-in encrypted chat ensures privacy for every case.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
