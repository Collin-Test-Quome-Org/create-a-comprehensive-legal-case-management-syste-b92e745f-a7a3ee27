import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const mockStats = [
  {
    label: 'Active Cases',
    value: 14,
    icon: 'briefcase',
    color: 'text-[#1d4ed8]'
  },
  {
    label: 'Upcoming Deadlines',
    value: 5,
    icon: 'calendar-clock',
    color: 'text-[#1d4ed8]'
  },
  {
    label: 'Unbilled Hours',
    value: 12.5,
    icon: 'clock',
    color: 'text-[#1d4ed8]'
  },
];

export function Dashboard() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-2 text-[#1d4ed8]"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}
      >
        Good afternoon, Counselor
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-lg text-slate-700 mb-10"
      >
        Your legal day, perfectly orchestrated. Here’s what’s on your docket:
      </motion.p>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {mockStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 border-[#1d4ed8] relative overflow-hidden"
          >
            <span className={`absolute top-6 right-6 opacity-15 text-6xl ${stat.color}`}><i className={`lucide lucide-${stat.icon}`}></i></span>
            <span className={`text-4xl ${stat.color} mb-4`}><i className={`lucide lucide-${stat.icon}`}></i></span>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="font-semibold text-slate-700 mb-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-6">
        <Button asChild id="dashboard-btn-cases" className="bg-[#1d4ed8] text-white font-bold px-8 py-4 text-lg flex items-center gap-2">
          <Link to="/cases">Manage Cases <ArrowRight size={20} /></Link>
        </Button>
        <Button asChild id="dashboard-btn-calendar" variant="outline" className="text-[#1d4ed8] border-[#1d4ed8] font-bold px-8 py-4 text-lg flex items-center gap-2">
          <Link to="/calendar">View Calendar <ArrowRight size={20} /></Link>
        </Button>
        <Button asChild id="dashboard-btn-messages" variant="secondary" className="text-[#1d4ed8] font-bold px-8 py-4 text-lg flex items-center gap-2">
          <Link to="/communications">Secure Messaging <ArrowRight size={20} /></Link>
        </Button>
      </div>
    </div>
  );
}
