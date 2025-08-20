import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, FileText, MessageCircle, Clock, Users, CalendarCheck2, DollarSign, KeyRound } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#1d4ed8]" />, title: 'Bank-Grade Security',
    desc: 'All data is encrypted in transit and at rest. LegalEase uses industry-leading security to ensure compliance and protect attorney-client privilege.'
  },
  {
    icon: <FileText className="w-8 h-8 text-[#1d4ed8]" />, title: 'Document Management',
    desc: 'Upload, organize, and share files securely. Versioning, audit trails, and access controls keep your documents in order.'
  },
  {
    icon: <CalendarCheck2 className="w-8 h-8 text-[#1d4ed8]" />, title: 'Smart Calendar & Deadlines',
    desc: 'Never miss a court date or deadline again. Automated reminders and conflict checks keep your firm on track.'
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-[#1d4ed8]" />, title: 'Secure Messaging',
    desc: 'Keep client conversations confidential with secure, encrypted messaging directly inside the platform.'
  },
  {
    icon: <Clock className="w-8 h-8 text-[#1d4ed8]" />, title: 'Time Tracking & Billing',
    desc: 'Log billable hours, track expenses, and generate invoices. Integrates seamlessly with your workflow.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#1d4ed8]" />, title: 'Team & Role Management',
    desc: 'Assign tasks, manage staff roles, and control access. Built for collaboration across legal teams.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#1d4ed8]" />, title: 'Expense Tracking',
    desc: 'Easily record, categorize and bill client expenses. Get paid faster and keep your finances organized.'
  },
  {
    icon: <KeyRound className="w-8 h-8 text-[#1d4ed8]" />, title: 'Client Portal',
    desc: 'Clients can securely access documents, pay invoices, and communicate with your team—all in one place.'
  }
];

export function FeaturesPage() {
  return (
    <div className="min-h-[60vh] bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#1d4ed8] mb-8 font-[700]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Platform Features
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-slate-50 rounded-xl px-7 py-8 shadow flex flex-col gap-2 border-t-4 border-[#1d4ed8]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">{f.icon}<span className="font-bold text-xl text-slate-900">{f.title}</span></div>
              <div className="text-slate-700 text-base">{f.desc}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <span className="flex gap-2 items-center text-[#1d4ed8] font-semibold text-lg">
            <CheckCircle className="w-6 h-6" />
            Secure. Compliant. Collaborative.
          </span>
        </div>
      </div>
    </div>
  );
}
