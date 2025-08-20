import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-[#1d4ed8]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Contact LegalEase
              </CardTitle>
              <p className="text-slate-600 mt-1">Our support team is standing by to help your firm thrive.</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-slate-700 font-semibold mb-1">Name</label>
                  <Input id="contact-name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-slate-700 font-semibold mb-1">Email</label>
                  <Input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-slate-700 font-semibold mb-1">Message</label>
                  <Textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange} required />
                </div>
                <Button type="submit" id="contact-submit-btn" className="bg-[#1d4ed8] text-white font-bold w-full py-2 mt-3 hover:bg-[#1e40af]">
                  Send Message
                </Button>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-green-600 font-semibold text-center mt-2"
                  >
                    Message sent! We'll be in touch soon.
                  </motion.div>
                )}
              </form>
              <div className="mt-8 text-slate-500 text-xs text-center">
                Or email us anytime: <span className="text-[#1d4ed8]">support@legaleaseapp.com</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
