import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }} className="bg-cover bg-center h-[420px] w-full relative">
      <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl font-[700]"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            LegalEase Case Manager
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-white text-lg md:text-xl mb-6 font-[400] drop-shadow-lg"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            The all-in-one platform for case tracking, deadline management, secure client portals, and legal team collaboration.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
            <Button asChild size="lg" className="bg-[#1d4ed8] text-white px-8 py-5 text-lg font-bold shadow-xl" id="hero-cta-btn">
              <Link to="/signup">Get Started for Free</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
