import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="max-w-xl mx-auto pt-20 pb-10 px-4 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-900 mb-6 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
        >
          Contact CaseLink
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-slate-700 mb-7 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Our team of legal technology experts is ready to answer your questions, offer a demo, or discuss your law firm's needs. Reach out and we'll respond faster than a judge's gavel!
        </motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="contact-name" className="block mb-1 text-blue-800 font-semibold">Name</label>
            <Input id="contact-name" required className="" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="contact-email" className="block mb-1 text-blue-800 font-semibold">Email</label>
            <Input id="contact-email" required type="email" placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="contact-message" className="block mb-1 text-blue-800 font-semibold">Message</label>
            <Textarea id="contact-message" required rows={5} placeholder="How can we help you?" />
          </div>
          <Button id="contact-submit" className="bg-blue-700 text-white px-6 py-3 text-lg" type="submit">
            Send Message
          </Button>
          {sent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-700 text-center font-semibold mt-2"
            >
              Message sent! We'll be in touch soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  );
};
