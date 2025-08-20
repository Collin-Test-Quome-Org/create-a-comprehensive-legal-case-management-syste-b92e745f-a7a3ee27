import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      formRef.current?.reset();
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex items-center justify-center">
      <section className="bg-white rounded-xl shadow-xl p-10 max-w-lg w-full mt-12 mb-16 border-t-4 border-[#1d4ed8]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-[#1d4ed8] mb-6 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
        >
          Contact LegalEase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-600 text-center mb-8"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Have questions, suggestions, or want to schedule a demo? We're here to help!
        </motion.p>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-[#1d4ed8] text-lg font-semibold mt-10 mb-10"
          >
            Thank you for reaching out! Our team will get back to you soon.
          </motion.div>
        ) : (
          <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-slate-700 font-medium mb-1">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#1d4ed8]"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-700 font-medium mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#1d4ed8]"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#1d4ed8]"
              />
            </div>
            <Button
              type="submit"
              id="contact-submit-btn"
              className="bg-[#1d4ed8] text-white font-bold text-lg mt-4 hover:bg-[#1e40af]"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </section>
    </div>
  );
}
