import { motion } from 'framer-motion';
import { CheckCircle, Lock, CalendarCheck2, FileText, Users, MessageSquare, Timer, ShieldCheck, FolderOpenDot } from 'lucide-react';

const FEATURES = [
  {
    icon: <ShieldCheck className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption and compliance for all case data, files, and messages.'
  },
  {
    icon: <CalendarCheck2 className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Deadline & Court Date Tracking',
    desc: 'Automated reminders and conflict checks to keep your team on schedule.'
  },
  {
    icon: <FileText className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Document Management',
    desc: 'Organize, share, and version all legal documents with full audit trails.'
  },
  {
    icon: <Users className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Team Collaboration',
    desc: 'Assign tasks, share notes, and coordinate across attorneys, paralegals, and admins.'
  },
  {
    icon: <MessageSquare className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Secure Messaging',
    desc: 'Compliant, encrypted communication between staff and clients.'
  },
  {
    icon: <Timer className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Time Tracking & Billing',
    desc: 'Integrated time entry, expense management, and invoice generation.'
  },
  {
    icon: <FolderOpenDot className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Client Portal',
    desc: 'Clients access shared docs, case status, and invoices in a secure digital hub.'
  },
  {
    icon: <Lock className="text-[#1d4ed8] w-8 h-8 mx-auto" />,
    title: 'Role-Based Access',
    desc: 'Granular permissions for attorneys, paralegals, admins, and clients.'
  },
];

export function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <section className="max-w-6xl mx-auto">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-[#1d4ed8] mb-7 text-center" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Everything Your Law Firm Needs
        </motion.h1>
        <motion.p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          The future of legal work is organized, secure, and collaborative.<br />CaseCollab is your all-in-one platform for every case, every client, every day.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURES.map((f, idx) => (
            <motion.div
              key={f.title}
              className="bg-white shadow-lg rounded-lg p-7 text-center flex flex-col items-center border-t-4 border-[#1d4ed8]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {f.icon}
              <h3 className="font-bold text-xl mt-4 mb-2 text-[#1d4ed8]">{f.title}</h3>
              <p className="text-slate-600 text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-6 items-center mt-10">
          <span className="inline-flex items-center gap-2 bg-[#e0e7ff] text-[#1d4ed8] px-4 py-2 rounded-lg font-semibold"><CheckCircle className="w-5 h-5" />Ready for compliance. Ready for growth.</span>
        </div>
      </section>
    </main>
  );
}
