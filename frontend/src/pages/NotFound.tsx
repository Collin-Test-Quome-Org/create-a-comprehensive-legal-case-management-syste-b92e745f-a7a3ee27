import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#e0e7ef] px-6">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <img src="/branding/assets/logo-2.png" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="font-bold text-5xl text-[#1d4ed8] mb-2 font-heading">404</h1>
        <p className="text-xl text-slate-600 mb-6">Lost in legal limbo? This page doesn’t exist.</p>
        <Button asChild id="return-home" className="bg-[#1d4ed8] text-white text-lg hover:bg-blue-800">
          <Link to="/">Back to Home</Link>
        </Button>
      </motion.div>
    </main>
  );
}
