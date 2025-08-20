import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[34rem] w-full"
      >
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6 font-[700]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Collaborate. Secure. Win.<br />Legal Workflow, Reinvented.
            </h1>
            <p className="text-lg font-normal mb-8 font-[400]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Welcome to CaseCollab, your legal team's digital command center. Effortless case management, seamless teamwork, client trust. All in one secure platform.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-[#1d4ed8] text-white hover:bg-[#1e40af] px-7 py-5 text-lg font-bold" id="get-started-btn">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#1d4ed8] px-7 py-5 text-lg font-bold" id="learn-more-btn">
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
