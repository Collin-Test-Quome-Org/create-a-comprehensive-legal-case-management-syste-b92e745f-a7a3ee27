import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, CalendarClock, FolderKanban, Users, MessageSquare, FileText, Clock, DollarSign, Lock, UserCheck } from 'lucide-react';

export function FeaturesPage() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Secure Client Portal',
      desc: 'Share files and communicate with clients securely, with full encryption and privilege compliance.'
    },
    {
      icon: <CalendarClock className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Deadline & Calendar Management',
      desc: 'Track deadlines, court dates, and get automated reminders. Never miss a key date again.'
    },
    {
      icon: <FolderKanban className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Case File Organization',
      desc: 'Centralize case documents, notes, and correspondence for instant team access.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Team Workflows',
      desc: 'Assign tasks, monitor progress, and streamline collaboration among attorneys, paralegals, and staff.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Secure Messaging',
      desc: 'Maintain privileged client communications and internal logs – all in one protected place.'
    },
    {
      icon: <FileText className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Document Management',
      desc: 'Upload, version, and share documents with robust search and powerful audit trail.'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Time Tracking & Billing',
      desc: 'Track billable hours, expenses, and generate invoices with ease.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Expense Tracking',
      desc: 'Log expenses and bill clients transparently. Generate professional invoices instantly.'
    },
    {
      icon: <Lock className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Encrypted Storage',
      desc: 'All data is encrypted to uphold attorney-client privilege and compliance.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#1d4ed8] mb-2" />, title: 'Role-Based Access',
      desc: 'Grant permissions by role (attorney, paralegal, admin, client) for secure, streamlined operations.'
    }
  ];
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="w-full bg-[#1d4ed8] bg-gradient-to-br from-[#1d4ed8] to-[#94a3b8] text-white py-20 mb-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            The Complete Legal Case Management Suite
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-4 text-slate-100 opacity-95"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Everything your firm needs to win cases, serve clients, and run efficiently—securely, and all in one place.
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * i }}
          >
            <Card className="h-full hover:shadow-2xl hover:scale-105 transition-transform border-t-4 border-[#1d4ed8]">
              <CardHeader className="flex flex-col items-center justify-center">
                {f.icon}
                <CardTitle className="text-xl text-[#1d4ed8] font-bold mt-1 mb-2 text-center">
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600 pb-6">
                {f.desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
