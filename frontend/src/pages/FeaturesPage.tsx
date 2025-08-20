import { motion } from 'framer-motion';
import { ShieldCheck, CalendarDays, FileText, Users, MessageCircle, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="text-[#1d4ed8] w-8 h-8 mb-3" />,
    title: 'Bank-Grade Security',
    desc: 'All your data is encrypted and protected to the highest standards, ensuring attorney-client privilege and peace of mind.'
  },
  {
    icon: <CalendarDays className="text-[#1d4ed8] w-8 h-8 mb-3" />,
    title: 'Smart Calendar & Deadlines',
    desc: 'Never miss a hearing or deadline. Automated reminders, conflict checks, and team scheduling keep your firm on track.'
  },
  {
    icon: <FileText className="text-[#1d4ed8] w-8 h-8 mb-3" />,
    title: 'Robust Document Management',
    desc: 'Upload, organize, and version all case files with audit trails and client-sharing controls.'
  },
  {
    icon: <Users className="text-[#1d4ed8] w-8 h-8 mb-3" />,
    title: 'Team & Role Management',
    desc: 'Granular, role-based access for attorneys, paralegals, admin staff, and clients.'
  },
  {
    icon: <MessageCircle className="text-[#1d4ed8] w-8 h-8 mb-3" />,
    title: 'Secure Messaging',
    desc: 'Built-in secure messaging and communication logs with instant notifications.'
  },
  {
    icon: <DollarSign className="text-[#1d4ed8] w-8 h-8 mb-3" />,
    title: 'Billing, Expenses & Invoicing',
    desc: 'Integrated time tracking, expense management, and invoice generation for streamlined billing.'
  },
];

export function FeaturesPage() {
  return (
    <div className="min-h-[60vh] bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#1d4ed8] mb-10 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Powerful Features for Modern Legal Teams
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="rounded-xl bg-slate-50 border border-slate-200 shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl group"
            >
              {f.icon}
              <div className="font-bold text-lg text-slate-800 mb-2 group-hover:text-[#1d4ed8] transition-colors">{f.title}</div>
              <div className="text-slate-600 text-base">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
