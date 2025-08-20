import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img src="/branding/assets/logo-1.png" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-6xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>404</h1>
        <p className="text-2xl text-slate-700 mb-6">Lost in litigation? This page does not exist.</p>
        <Button asChild id="notfound-home" className="bg-blue-700 text-white px-6 py-3 text-lg">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </motion.div>
    </div>
  );
};
