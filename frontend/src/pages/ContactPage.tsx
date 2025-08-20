import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-[60vh] bg-slate-50 py-16 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-10 border-t-4 border-[#1d4ed8]">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#1d4ed8] mb-4 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Contact LegalEase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base text-center text-slate-600 mb-6"
        >
          Questions? Curious about LegalEase? Drop us a note and our legal tech wizards will be in touch.
        </motion.p>
        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center text-green-600 font-semibold py-8"
          >
            Thank you! We'll get back to you soon.
          </motion.div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <Input id="contact-name" name="name" required placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <Input id="contact-email" name="email" type="email" required placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <Textarea id="contact-message" name="message" required placeholder="How can we help?" rows={4} />
            </div>
            <Button id="contact-submit-btn" type="submit" className="w-full bg-[#1d4ed8] text-white font-bold py-2 px-6">Send Message</Button>
          </form>
        )}
      </div>
    </div>
  );
}
