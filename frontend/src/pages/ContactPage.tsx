import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <section className="max-w-xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-[#1d4ed8] mb-7 text-center" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact CaseCollab
        </motion.h1>
        <motion.p className="text-lg text-slate-700 text-center mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          We’re here to help! Whether you’re ready for a demo or just have questions, our legal tech team is on standby.
        </motion.p>
        <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <Input id="contact-name" required placeholder="Your Name" className="text-base" />
          <Input id="contact-email" required type="email" placeholder="Your Email" className="text-base" />
          <Textarea id="contact-message" required placeholder="How can we help you?" rows={4} className="text-base" />
          <Button type="submit" id="contact-submit" className="bg-[#1d4ed8] text-white font-bold hover:bg-[#1e40af] text-base py-2">
            {sent ? 'Message Sent!' : 'Send Message'}
          </Button>
        </form>
        {sent && (
          <div className="mt-6 text-center text-green-600 font-semibold">
            Thank you for reaching out! Our team will contact you shortly.
          </div>
        )}
      </section>
    </main>
  );
}
