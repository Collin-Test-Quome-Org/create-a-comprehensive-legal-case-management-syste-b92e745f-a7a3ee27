import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3200);
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="w-full bg-[#1d4ed8] bg-gradient-to-br from-[#1d4ed8] to-[#94a3b8] text-white py-20 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact CaseCollab
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-4 text-slate-100 opacity-95"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            Got questions about legal case management? The CaseCollab team is here to help you bring order to your legal world.
          </motion.p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 flex flex-col gap-8">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 border-[#1d4ed8]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="flex-1 flex flex-col justify-center gap-2 mb-8 md:mb-0">
              <div className="flex items-center gap-2 text-[#1d4ed8] font-semibold mb-1">
                <Mail className="w-5 h-5" /> info@casecollab.legal
              </div>
              <div className="flex items-center gap-2 text-[#1d4ed8] font-semibold">
                <Phone className="w-5 h-5" /> (800) 555-CASE
              </div>
            </div>
            <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input id="contact-name" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <Input id="contact-email" name="email" placeholder="Your Email" type="email" value={form.email} onChange={handleChange} required />
              <Textarea id="contact-message" name="message" placeholder="How can we help you?" rows={4} value={form.message} onChange={handleChange} required />
              <Button id="contact-submit" type="submit" className="bg-[#1d4ed8] text-white mt-2 font-bold">Send Message</Button>
              {submitted && (
                <motion.div
                  className="text-green-600 mt-2 font-semibold text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you! We'll reach out soon.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
