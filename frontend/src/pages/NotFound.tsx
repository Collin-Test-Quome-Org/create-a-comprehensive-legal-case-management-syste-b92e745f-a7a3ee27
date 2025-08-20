import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img src="/branding/assets/logo-2.png" className="w-20 mb-8" />
      <h1 className="text-4xl font-bold font-plex-sans text-blue-900 mb-3">404 – Lost in Litigation</h1>
      <p className="text-gray-600 mb-8 text-lg font-plex-sans">The page you're seeking has filed a motion to dismiss. Let's get you back where you belong!</p>
      <Button id="notfound-home" asChild>
        <a href="/">
          <ArrowLeft className="w-4 h-4 mr-2" /> Home
        </a>
      </Button>
    </motion.div>
  )
}
