import { motion } from 'framer-motion';
import { CheckCircle, Lock, FolderKanban, CalendarCheck, Users, DollarSign, MessageCircle, ShieldCheck } from 'lucide-react';

export function FeaturesPage() {
  const features = [
    {
      icon: <FolderKanban className="w-8 h-8 text-[#1d4ed8]" />, 
      title: 'Case Management',
      desc: 'Organize, track, and view all your cases in one secure location with powerful search and filtering.'
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-[#1d4ed8]" />,
      title: 'Calendar & Deadlines',
      desc: 'Automated reminders, court date scheduling, and deadline tracking—all in a collaborative calendar.'
    },
    {
      icon: <Lock className="w-8 h-8 text-[#1d4ed8]" />,
      title: 'Encrypted Client Portal',
      desc: 'Confidential document sharing and messaging, with end-to-end encryption to safeguard attorney-client privilege.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#1d4ed8]" />,
      title: 'Role-Based Access',
      desc: 'Granular permissions for attorneys, paralegals, admins, and clients. Stay secure and compliant at all times.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#1d4ed8]" />,
      title: 'Secure Messaging',
      desc: 'Integrated communication logs and secure chat to keep all parties up to date.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#1d4ed8]" />,
      title: 'Billing & Time Tracking',
      desc: 'Track billable hours, manage expenses, and generate invoices—transparently and efficiently.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#1d4ed8]" />,
      title: 'Compliance & Security',
      desc: 'Full encryption, audit trails, and compliance tools to uphold the highest legal standards.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#1d4ed8]" />,
      title: 'Workflow & Task Management',
      desc: 'Assign tasks, track progress, and collaborate with your team—never miss a beat.'
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          className="text-4xl font-extrabold mb-4 text-[#1d4ed8] text-center font-['IBM Plex Sans']"
        >
          Everything a Modern Law Firm Needs
        </motion.h1>
        <motion.p 
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2, duration: 0.7}}
          className="text-slate-600 text-center max-w-2xl mx-auto mb-12 text-lg"
        >
          LegalEase Case Manager is your all-in-one platform for secure, collaborative, and efficient case management—engineered for legal professionals by legal professionals.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={feat.title}
              initial={{opacity: 0, y: 40}} 
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: idx * 0.08, duration: 0.5}}
              viewport={{once: true}}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[#1d4ed8]"
            >
              <div className="mb-3">{feat.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">{feat.title}</h3>
              <p className="text-slate-600 text-center">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
