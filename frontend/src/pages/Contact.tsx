import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto bg-[#f8fafc] rounded-2xl shadow-lg p-10"
      >
        <h1 className="text-4xl font-bold text-[#1d4ed8] mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>
          Contact CasePilot
        </h1>
        <p className="mb-6 text-slate-700 text-lg" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          Have a question, feature request, or want to chat? The CasePilot team is standing by to help you chart a course to legal excellence.
        </p>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <div className="flex justify-center mb-4">
              <svg width="48" height="48" fill="none" stroke="#1d4ed8" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1d4ed8] mb-2">Thank you!</h2>
            <p className="text-slate-700">We'll follow up soon. Meanwhile, keep those cases moving!</p>
          </motion.div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
            autoComplete="off"
          >
            <div>
              <label htmlFor="contact-name" className="font-semibold mb-1 block text-[#1d4ed8]">Your Name</label>
              <Input id="contact-name" type="text" required placeholder="e.g. Jordan Kim" className="bg-white" />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-semibold mb-1 block text-[#1d4ed8]">Email Address</label>
              <Input id="contact-email" type="email" required placeholder="e.g. jordan@email.com" className="bg-white" />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-semibold mb-1 block text-[#1d4ed8]">Message</label>
              <Textarea id="contact-message" required placeholder="How can we help?" className="bg-white min-h-[100px]" />
            </div>
            <Button id="contact-submit" type="submit" className="bg-[#1d4ed8] text-lg px-8 py-6 w-full font-bold mt-2 hover:bg-blue-800">
              Send Message
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
