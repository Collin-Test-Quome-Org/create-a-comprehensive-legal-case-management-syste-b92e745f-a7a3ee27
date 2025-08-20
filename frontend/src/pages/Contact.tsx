import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-[#1d4ed8] mb-8 font-ibm-plex-sans"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact LexiFlow
      </motion.h1>
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col gap-6">
        {submitted ? (
          <motion.div
            className="flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-3xl text-[#1d4ed8]">
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-check"><path d="m2 6 10 7 10-7"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="m16 19 2 2 4-4"/></svg>
            </span>
            <p className="text-lg font-semibold text-[#1d4ed8]">Thank you for reaching out!<br />
            Our team will get back to you soon.</p>
          </motion.div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="contact-name" className="font-semibold mb-1 text-[#1d4ed8]">Name</label>
            <Input id="contact-name" name="name" type="text" required className="mb-4" />
            <label htmlFor="contact-email" className="font-semibold mb-1 text-[#1d4ed8]">Email</label>
            <Input id="contact-email" name="email" type="email" required className="mb-4" />
            <label htmlFor="contact-message" className="font-semibold mb-1 text-[#1d4ed8]">Message</label>
            <Textarea id="contact-message" name="message" required rows={5} className="mb-4" />
            <Button id="contact-submit" type="submit" className="bg-[#1d4ed8] text-white font-bold hover:bg-[#2563eb] mt-2">Send Message</Button>
          </form>
        )}
      </div>
    </main>
  );
}
