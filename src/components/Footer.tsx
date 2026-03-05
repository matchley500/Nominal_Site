import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight">
              <span className="gradient-text">Nominal Technologies</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Software engineering for businesses that need systems built right.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-slate-400">Custom Software</span>
              <span className="text-sm text-slate-400">Web Applications</span>
              <span className="text-sm text-slate-400">Automation Systems</span>
              <span className="text-sm text-slate-400">API Integrations</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nominal Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
