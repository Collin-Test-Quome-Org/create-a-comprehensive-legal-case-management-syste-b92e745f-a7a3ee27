import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center py-20">
      <motion.h1
        className="text-7xl font-bold text-[#1d4ed8] mb-4 font-[700]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg text-slate-700 mb-8 text-center font-[400]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        Oops! The page you're looking for does not exist.<br />
        Need help finding your way back to security and collaboration?
      </motion.p>
      <Button asChild id="notfound-home-btn" className="bg-[#1d4ed8] text-white font-bold px-8 py-2">
        <Link to="/">Go Home</Link>
      </Button>
    </main>
  );
}
