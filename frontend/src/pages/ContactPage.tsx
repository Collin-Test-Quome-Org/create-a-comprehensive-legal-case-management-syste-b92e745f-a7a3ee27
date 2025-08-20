import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

export function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTimeout(() => setStatus('sent'), 800);
  }

  return (
    <div className="min-h-[60vh] bg-slate-50 py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white shadow-lg rounded-lg p-10 border-t-4 border-[#1d4ed8]"
      >
        <h1 className="text-3xl font-bold mb-6 text-[#1d4ed8] font-[700]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          Contact LegalEase Support
        </h1>
        {status === 'sent' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-700 bg-green-50 border border-green-200 rounded p-4 text-center font-semibold"
          >
            Thank you for reaching out! Our legal tech support team will be in touch.
          </motion.div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label htmlFor="contact-name" className="font-semibold">Name</label>
            <Input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Your Name" />
            <label htmlFor="contact-email" className="font-semibold">Email</label>
            <Input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@firm.com" />
            <label htmlFor="contact-message" className="font-semibold">Message</label>
            <Textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required placeholder="How can we help?" rows={5} />
            <Button id="contact-submit" className="bg-[#1d4ed8] text-white font-bold text-lg mt-2" type="submit">Send Message</Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
