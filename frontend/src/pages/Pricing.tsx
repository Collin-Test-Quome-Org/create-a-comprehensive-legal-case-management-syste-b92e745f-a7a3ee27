import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      'Up to 3 active cases',
      'Basic document storage',
      'Client portal',
      'Secure messaging',
      'Email support',
    ],
    cta: 'Sign Up Free',
    highlight: false,
    link: '/signup',
  },
  {
    name: 'Pro',
    price: '$49/mo',
    features: [
      'Unlimited cases',
      'Advanced document vault',
      'Deadline tracking',
      'Court scheduler',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    highlight: true,
    link: '/signup',
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom integrations',
      'Dedicated onboarding',
      'White-glove migration',
      'Custom security controls',
      'SLAs & dedicated CSM',
    ],
    cta: 'Contact Sales',
    highlight: false,
    link: '/contact',
  }
];

export function Pricing() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-[#1d4ed8] font-plex-sans"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Pricing Plans
      </motion.h1>
      <p className="text-slate-600 text-center mb-14">Flexible plans for solo attorneys, small firms, or growing legal teams. No hidden fees. Try Pro free for 14 days.</p>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            className={`relative rounded-2xl p-8 bg-white shadow-md border-t-4 ${plan.highlight ? 'border-[#1d4ed8] scale-105 shadow-xl z-10' : 'border-[#94a3b8]'}`}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            {plan.highlight && (
              <span className="absolute top-4 right-4 bg-[#1d4ed8] text-white text-xs px-4 py-1 rounded-full font-bold shadow">Most Popular</span>
            )}
            <h2 className="text-2xl font-bold mb-2 text-[#1d4ed8]">{plan.name}</h2>
            <div className="text-3xl font-extrabold mb-6 text-slate-900">{plan.price}</div>
            <ul className="mb-8 text-slate-700 space-y-3">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#1d4ed8]" />{f}</li>
              ))}
            </ul>
            <Link to={plan.link}>
              <Button id={`plan-cta-${plan.name.toLowerCase()}`}
                className={plan.highlight ? 'bg-[#1d4ed8] text-white w-full font-bold text-lg py-3 hover:bg-[#2563eb]' : 'bg-[#94a3b8] text-white w-full font-bold text-lg py-3 hover:bg-[#64748b]'}>
                {plan.cta}
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
