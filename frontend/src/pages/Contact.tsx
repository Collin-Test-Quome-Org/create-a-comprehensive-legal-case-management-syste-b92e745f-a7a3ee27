import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true); // fake successful submit
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-[#f8fafc]">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 border-t-4 border-[#1d4ed8]">
        <motion.h1
          className="text-4xl font-bold mb-4 text-[#1d4ed8] font-plex-sans flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Mail className="w-8 h-8" /> Contact LexiSuite
        </motion.h1>
        <p className="text-slate-600 mb-8">Questions? Feedback? The LexiSuite team is here to help. Drop us a message and our friendly legal tech specialists will respond promptly!</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-slate-700 font-semibold">Name</label>
              <Input id="contact-name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-slate-700 font-semibold">Email</label>
              <Input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@lawfirm.com" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-slate-700 font-semibold">Message</label>
              <Textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required placeholder="How can we help you?" rows={5} />
            </div>
            <Button id="contact-submit" type="submit" className="bg-[#1d4ed8] text-white font-bold text-lg py-3 hover:bg-[#2563eb]">Send Message</Button>
          </form>
        ) : (
          <motion.div
            className="flex flex-col items-center gap-2 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-green-600 font-bold text-xl">Thank you!</span>
            <span className="text-slate-700">Your message has been sent. We'll be in touch soon.</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
