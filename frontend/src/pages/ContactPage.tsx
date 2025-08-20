import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-xl mx-auto px-4 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-8 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Contact CaseCollab
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-slate-700 text-center mb-8 font-[400]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Got questions? Want a demo? Our team is always ready to help your firm work smarter. Reach out and we’ll get back to you within one business day.
        </motion.p>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 border-t-4 border-[#1d4ed8] flex flex-col gap-4 mt-5">
          <label htmlFor="contact-name" className="font-semibold text-slate-700">Name</label>
          <Input id="contact-name" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" />
          <label htmlFor="contact-email" className="font-semibold text-slate-700">Email</label>
          <Input id="contact-email" name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@lawfirm.com" />
          <label htmlFor="contact-message" className="font-semibold text-slate-700">Message</label>
          <Textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="How can we help your team?" />
          <Button type="submit" className="bg-[#1d4ed8] text-white mt-4" id="contact-submit-btn">Send Message</Button>
        </form>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded text-center"
          >
            Thank you! We’ve received your message and will be in touch soon.
          </motion.div>
        )}
      </div>
    </main>
  );
}
