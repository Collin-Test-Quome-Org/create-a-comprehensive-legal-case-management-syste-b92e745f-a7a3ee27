import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-slate-50">
      <div className="bg-white rounded-xl shadow-xl p-12 flex flex-col items-center">
        <span className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-4 4a4 4 0 100-8 4 4 0 000 8zm8-4v-2a8 8 0 10-16 0v2a2 2 0 002 2h12a2 2 0 002-2z" /></svg>
        </span>
        <h1 className="text-3xl font-bold text-blue-900 mb-2 font-plex-sans">404: Lost in Litigation</h1>
        <p className="text-slate-700 mb-8 text-lg">Sorry, the page you're looking for doesn't exist.<br />But LawBridge is always here to guide you back.</p>
        <Button asChild id="notfound-home">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
