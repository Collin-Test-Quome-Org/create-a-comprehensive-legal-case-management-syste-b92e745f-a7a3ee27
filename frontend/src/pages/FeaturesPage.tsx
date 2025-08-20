import { motion } from 'framer-motion';
import { CheckCircle, Shield, Folder, Clock, MessageCircle, Calendar, Users, FileText, DollarSign } from 'lucide-react';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="max-w-7xl mx-auto py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-[#1d4ed8] text-center mb-6"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
        >
          LegalEase Case Manager Features
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-slate-600 text-center mb-14 max-w-2xl mx-auto"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Empower your firm to operate smarter, faster, and more securely. LegalEase Case Manager is your all-in-one toolkit for legal operations.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Folder className="w-10 h-10 text-[#1d4ed8]" />}
            title="Case File Organization"
            text="Organize, search, and access all your case files instantly. Drag & drop, tag, and filter for effortless management."
          />
          <FeatureCard
            icon={<Shield className="w-10 h-10 text-[#1d4ed8]" />}
            title="Bank-Grade Security"
            text="All data is encrypted and access is tightly controlled. Attorney-client privilege is always protected."
          />
          <FeatureCard
            icon={<Calendar className="w-10 h-10 text-[#1d4ed8]" />}
            title="Calendar & Deadlines"
            text="Never miss an important date with automated reminders, court date scheduling, and deadline tracking."
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10 text-[#1d4ed8]" />}
            title="Time Tracking & Billing"
            text="Track time and expenses seamlessly. Generate invoices with a click and keep billing on track."
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-[#1d4ed8]" />}
            title="Team Workflow"
            text="Assign tasks, manage workflows, and collaborate in real-time. Keep your team on the same page."
          />
          <FeatureCard
            icon={<MessageCircle className="w-10 h-10 text-[#1d4ed8]" />}
            title="Secure Messaging"
            text="Log all communications and send secure messages. Clients and staff stay updated and compliant."
          />
          <FeatureCard
            icon={<FileText className="w-10 h-10 text-[#1d4ed8]" />}
            title="Document Sharing"
            text="Share documents via the secure client portal with granular permissions and full audit history."
          />
          <FeatureCard
            icon={<DollarSign className="w-10 h-10 text-[#1d4ed8]" />}
            title="Expense Tracking"
            text="Log expenses, generate invoices, and keep finances transparent for clients and staff."
          />
          <FeatureCard
            icon={<CheckCircle className="w-10 h-10 text-[#1d4ed8]" />}
            title="Role-Based Access"
            text="Granular permissions for attorneys, paralegals, admins, and clients. Everyone sees exactly what they should."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({icon, title, text}: {icon: React.ReactNode, title: string, text: string}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow border-t-4 border-[#1d4ed8]"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-center" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>{title}</h3>
      <p className="text-slate-600 text-center" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{text}</p>
    </motion.div>
  );
}
