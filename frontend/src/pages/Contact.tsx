// Contact page for LexiFlow
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="max-w-lg mx-auto py-16 px-6">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 flex flex-col items-center"
      >
        <img src="/branding/assets/logo-1.png" className="w-16 h-16 mb-3" />
        <h1 className="text-3xl font-bold text-blue-700 mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          Contact LexiFlow
        </h1>
        <p className="text-slate-600 text-center">
          Questions? Suggestions? Legal puns? Drop us a note—our team responds faster than you can say "objection!"
        </p>
      </motion.header>
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="bg-white shadow-xl rounded-xl p-8 flex flex-col gap-5 border-t-4 border-blue-700"
        onSubmit={onSubmit}
      >
        {submitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-blue-700">
            <h2 className="text-xl font-bold mb-2">Thank you for reaching out!</h2>
            <p>We'll get back to you soon. Until then, stay legally awesome.</p>
          </motion.div>
        ) : (
          <>
            <label htmlFor="contact-name" className="font-semibold text-blue-700">
              Name
            </label>
            <Input id="contact-name" name="name" value={form.name} onChange={onChange} required />

            <label htmlFor="contact-email" className="font-semibold text-blue-700">
              Email
            </label>
            <Input id="contact-email" name="email" type="email" value={form.email} onChange={onChange} required />

            <label htmlFor="contact-message" className="font-semibold text-blue-700">
              Message
            </label>
            <Textarea id="contact-message" name="message" value={form.message} onChange={onChange} required rows={4} />

            <Button id="contact-submit" type="submit" className="mt-4 bg-blue-700 text-white hover:bg-blue-900">
              Send Message
            </Button>
          </>
        )}
      </motion.form>
    </main>
  );
}
