import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sans">
      <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center border-t-4 border-[#1d4ed8]">
        <Ghost className="w-16 h-16 text-[#1d4ed8] mb-4" />
        <h1 className="text-4xl font-bold text-[#1d4ed8] mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700 }}>404</h1>
        <p className="text-slate-700 mb-6 text-lg">Oops! The page you're looking for does not exist.</p>
        <Button asChild id="notfound-home-btn" className="bg-[#1d4ed8] text-white font-bold">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
