import { motion } from 'framer-motion';
import { ShieldCheck, FileText, CalendarCheck2, Users, MessageCircle, Coins, KeyRound } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Bank-Grade Security',
    desc: 'Encrypted data storage, secure client portals, and role-based access controls ensure your confidential files are always protected.'
  },
  {
    icon: <FileText className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Organized Case Files',
    desc: 'Upload, preview, and organize documents with versioning and audit trails. Find every file in a snap.'
  },
  {
    icon: <CalendarCheck2 className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Smart Calendar & Deadlines',
    desc: 'Automated reminders, court date conflict checks, and deadline tracking keep your firm on schedule.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Collaborative Workflows',
    desc: 'Task assignments, team chat, and workflow management help your legal team work in harmony.'
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Secure Messaging',
    desc: 'Keep client communications confidential with encrypted, logged conversations.'
  },
  {
    icon: <Coins className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Integrated Billing',
    desc: 'Track time, log expenses, and generate invoices—CaseCollab makes billing effortless.'
  },
  {
    icon: <KeyRound className="w-8 h-8 text-[#1d4ed8]" />,
    title: 'Role-Based Access',
    desc: 'Granular permissions for attorneys, paralegals, admins, and clients. Stay compliant and in control.'
  },
];

export function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-6 text-center"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Every Feature, Purpose-Built for Law
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto font-[400]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          CaseCollab empowers your firm from intake to invoice. Each tool is engineered for efficiency, security, and seamless teamwork—so you can focus on justice, not juggling software.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border-t-4 border-[#1d4ed8]"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-[#1d4ed8]">{f.title}</h3>
              <p className="text-slate-700 text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
