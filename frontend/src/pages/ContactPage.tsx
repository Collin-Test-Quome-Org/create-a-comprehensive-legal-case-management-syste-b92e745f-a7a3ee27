import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-xl mx-auto py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-[#1d4ed8] mb-6 text-center font-[700]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Contact LegalEase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-slate-700 text-center max-w-2xl mx-auto mb-8"
        >
          Questions? Need a demo? Our legal tech concierges are on standby—drop us a line and we'll respond swiftly (with confidentiality guaranteed).
        </motion.p>
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-white shadow-md rounded-xl p-8 flex flex-col gap-6 border-t-4 border-[#1d4ed8]"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="contact-name" className="block mb-1 font-semibold text-[#1d4ed8]">Your Name</label>
              <Input id="contact-name" required className="bg-slate-50" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block mb-1 font-semibold text-[#1d4ed8]">Email Address</label>
              <Input id="contact-email" type="email" required className="bg-slate-50" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block mb-1 font-semibold text-[#1d4ed8]">Message</label>
              <Textarea id="contact-message" required className="bg-slate-50 min-h-[100px]" />
            </div>
            <Button id="contact-submit-btn" type="submit" className="bg-[#1d4ed8] text-white font-bold text-lg mt-2">Send Message</Button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center border-t-4 border-[#1d4ed8]"
          >
            <span className="text-5xl mb-3">📨</span>
            <h2 className="font-bold text-2xl text-[#1d4ed8] mb-2">Thank you!</h2>
            <p className="text-slate-700 text-center">Your message has been received. We'll be in touch soon.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
