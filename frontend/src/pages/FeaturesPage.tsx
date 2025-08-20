import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, FileText, Users, MessageCircle, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption, role-based access, and compliance-first architecture keep your firm and clients protected.'
  },
  {
    icon: <Calendar className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Calendar & Deadlines',
    desc: 'Never miss a court date or deadline again. Automated reminders and firm-wide scheduling at your fingertips.'
  },
  {
    icon: <FileText className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Document Management',
    desc: 'Secure uploads, versioning, sharing, and audit trails for every case. Keep discovery organized and accessible.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Team Collaboration',
    desc: 'Assign tasks, track workflow, and work in tandem with paralegals, admins, and clients—all in one place.'
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Secure Messaging',
    desc: 'Keep client communication confidential with built-in encrypted messaging and logs.'
  },
  {
    icon: <Clock className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Time Tracking & Billing',
    desc: 'Integrated time entry, expenses, and invoice generation. Bill with confidence and clarity.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Expense & Invoice Management',
    desc: 'Track expenses, generate branded invoices, and keep your cashflow transparent and efficient.'
  },
];

export function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-14 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-[700] text-[#1d4ed8] mb-5 text-center"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        Explore the Features of CaseCollab
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-slate-700 mb-12 text-center font-[400]"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        Designed for legal professionals who demand the best in security, collaboration, and productivity. CaseCollab elevates your firm with every click.
      </motion.p>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="bg-white rounded-xl shadow-md border-t-4 border-[#1d4ed8] p-6 flex flex-col items-center text-center min-h-[220px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-[#1d4ed8]">{f.title}</h3>
            <p className="text-slate-600 text-base">{f.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
