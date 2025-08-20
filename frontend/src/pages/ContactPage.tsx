import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-12 px-4">
      <motion.h1
        className="text-4xl font-bold text-[#1d4ed8] mb-4 font-[700]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        Connect with CaseCollab
      </motion.h1>
      <motion.p
        className="text-lg text-slate-700 mb-8 max-w-xl text-center font-[400]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        Have a burning question, need support, or want to schedule a personalized demo? Our legal tech specialists are ready to help you supercharge your practice!
      </motion.p>
      <form
        className="bg-white rounded-xl shadow-md p-8 w-full max-w-md flex flex-col gap-5 border border-slate-100"
        onSubmit={e => { e.preventDefault(); alert('Thank you for reaching out! We will respond soon.'); }}
        aria-label="Contact form"
      >
        <label htmlFor="contact-name" className="font-semibold text-slate-700">
          Name
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full border border-slate-200 rounded-md py-2 px-3 focus:ring-[#1d4ed8] focus:border-[#1d4ed8]"
            aria-required="true"
          />
        </label>
        <label htmlFor="contact-email" className="font-semibold text-slate-700">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full border border-slate-200 rounded-md py-2 px-3 focus:ring-[#1d4ed8] focus:border-[#1d4ed8]"
            aria-required="true"
          />
        </label>
        <label htmlFor="contact-message" className="font-semibold text-slate-700">
          Message
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full border border-slate-200 rounded-md py-2 px-3 focus:ring-[#1d4ed8] focus:border-[#1d4ed8]"
            aria-required="true"
          />
        </label>
        <Button id="contact-submit-btn" type="submit" className="bg-[#1d4ed8] text-white font-bold py-2">
          Send Message
        </Button>
      </form>
    </main>
  );
}
