import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-16 px-2">
      <motion.div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-10 border-t-4 border-[#1d4ed8]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold mb-3 text-[#1d4ed8] text-center">Contact LegalEase</h1>
        <p className="mb-6 text-slate-600 text-center">Have a question, feedback, or want a demo? Our team is ready to help!</p>
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-green-600 text-center text-lg font-semibold py-8"
          >
            Thank you for reaching out! We'll be in touch soon.
          </motion.div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="block text-slate-700 font-semibold mb-1">Name</label>
              <Input id="contact-name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-slate-700 font-semibold mb-1">Email</label>
              <Input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-slate-700 font-semibold mb-1">Message</label>
              <Textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required placeholder="How can we help?" rows={4} />
            </div>
            <Button type="submit" id="contact-send-btn" className="bg-[#1d4ed8] text-white font-bold hover:bg-[#1e40af]">Send Message</Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
