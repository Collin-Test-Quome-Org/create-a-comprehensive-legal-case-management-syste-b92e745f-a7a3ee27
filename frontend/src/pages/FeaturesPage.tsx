import { motion } from 'framer-motion';
import { BadgeCheck, FileText, Lock, Users, CalendarCheck, MessageCircle, Timer, Folder, BarChart3 } from 'lucide-react';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <section className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-[#1d4ed8] text-center mb-6"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
        >
          Every Feature for a Modern Legal Practice
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-2xl mx-auto text-center text-slate-600 mb-14 text-lg"
        >
          LegalEase Case Manager does the heavy lifting—so your firm can focus on winning cases, serving clients, and running smoothly. Explore our robust features designed for security, efficiency, and collaboration.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<FileText className="w-8 h-8 text-[#1d4ed8]" />}
            title="Case & Document Management"
            description="Organize all your case files, client records, and legal documents in one secure, searchable hub. Version control, audit trails, and easy sharing included."
          />
          <FeatureCard
            icon={<CalendarCheck className="w-8 h-8 text-[#1d4ed8]" />}
            title="Calendar & Court Dates"
            description="Never miss a deadline or court date. Sync with your calendar, get automated reminders, and check for conflicts instantly."
          />
          <FeatureCard
            icon={<Timer className="w-8 h-8 text-[#1d4ed8]" />}
            title="Time Tracking & Billing"
            description="Log billable hours on the fly, track expenses, and generate invoices—seamlessly integrated for your team."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-[#1d4ed8]" />}
            title="Team Workflow & Tasking"
            description="Assign tasks, set priorities, and manage workflow across attorneys, paralegals, and staff. Collaborate and track progress efficiently."
          />
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8 text-[#1d4ed8]" />}
            title="Secure Messaging & Logs"
            description="Communicate securely with colleagues and clients. All messages are encrypted and logged for compliance and transparency."
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8 text-[#1d4ed8]" />}
            title="Bank-Grade Security"
            description="Confidentiality guaranteed. End-to-end encryption, strict access controls, and compliance with legal industry standards."
          />
          <FeatureCard
            icon={<BadgeCheck className="w-8 h-8 text-[#1d4ed8]" />}
            title="Role-Based Permissions"
            description="Fine-tuned access for attorneys, paralegals, admins, and clients—ensuring everyone sees just what they need."
          />
          <FeatureCard
            icon={<Folder className="w-8 h-8 text-[#1d4ed8]" />}
            title="Client Portal"
            description="Give clients a secure place to view documents, case status, send messages, and pay invoices."
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8 text-[#1d4ed8]" />}
            title="Reports & Analytics"
            description="Stay on top of your practice—track productivity, billing, deadlines, and more in real time."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-7 flex flex-col gap-3 items-start border-t-4 border-[#1d4ed8] hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#e0e7ef] rounded-lg p-3 mb-2 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-[#1d4ed8]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{title}</h3>
      <p className="text-slate-600 text-base">{description}</p>
    </motion.div>
  );
}
