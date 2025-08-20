import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Ban } from 'lucide-react';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <Ban className="w-16 h-16 text-[#1d4ed8] mb-2" />
        <h1 className="text-4xl font-bold text-[#1d4ed8] mb-2">404: Not Found</h1>
        <p className="mb-6 text-slate-600">Oops! The page you're looking for can't be found.<br />Let's get you back on track!</p>
        <Link to="/">
          <Button id="notfound-home" className="bg-[#1d4ed8] text-white font-bold px-8 py-3 hover:bg-[#2563eb]">Return to Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}
