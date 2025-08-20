import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, CalendarClock, Lock, Users, FolderTree, MessageCircle, Clock, CreditCard, CheckCircle } from 'lucide-react';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-80 md:h-96 relative"
      >
        <div className="bg-black bg-opacity-60 h-full flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold text-center font-[700] mb-4"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            LegalEase Case Manager: Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-slate-200 max-w-xl text-lg md:text-xl text-center"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Everything your firm needs to work smarter, serve clients better, and stay compliant—right at your fingertips.
          </motion.p>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#1d4ed8] mb-6 text-center font-[700]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Powerful, Secure, and Intuitive
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<FileText className="w-10 h-10 text-[#1d4ed8]" />}
            title="Case File Organization"
            desc="Organize, search, and manage all your cases and files in one secure hub. Share documents and keep teams in sync."
          />
          <FeatureCard
            icon={<CalendarClock className="w-10 h-10 text-[#94a3b8]" />}
            title="Calendar & Deadlines"
            desc="Never miss a date. Track court dates, deadlines, and receive automated reminders—firm-wide."
          />
          <FeatureCard
            icon={<Lock className="w-10 h-10 text-[#1d4ed8]" />}
            title="Bank-Grade Security"
            desc="Advanced encryption and compliance. All data protected to legal industry standards."
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-[#94a3b8]" />}
            title="Role-Based Access"
            desc="Granular permissions for attorneys, paralegals, admins, and clients. The right access for every role."
          />
          <FeatureCard
            icon={<FolderTree className="w-10 h-10 text-[#1d4ed8]" />}
            title="Document Management"
            desc="Upload, preview, version, and share documents. Secure client portals for seamless document exchange."
          />
          <FeatureCard
            icon={<MessageCircle className="w-10 h-10 text-[#94a3b8]" />}
            title="Secure Messaging"
            desc="Confidential client and team communications, all logged and encrypted."
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10 text-[#1d4ed8]" />}
            title="Time Tracking & Billing"
            desc="Track billable hours, expenses, and generate invoices in just a few clicks."
          />
          <FeatureCard
            icon={<CreditCard className="w-10 h-10 text-[#94a3b8]" />}
            title="Expense Tracking & Invoicing"
            desc="Log expenses, manage invoices, and streamline your accounting workflows."
          />
          <FeatureCard
            icon={<CheckCircle className="w-10 h-10 text-[#1d4ed8]" />}
            title="Task Assignment & Workflow"
            desc="Assign tasks, set priorities, and collaborate with your team for true legal project management."
          />
        </div>
        <div className="flex justify-center mt-14">
          <Button asChild size="lg" className="bg-[#1d4ed8] text-white px-8 py-5 text-lg font-bold shadow-xl" id="features-signup-btn">
            <Link to="/signup">Try LegalEase Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-[#1d4ed8] hover:scale-[1.035] transition-transform duration-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>{title}</h3>
      <p className="text-slate-600 mb-2">{desc}</p>
    </motion.div>
  );
}
