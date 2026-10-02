import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-neutral-400 max-w-xs leading-relaxed">
              Custom software, automation, and integrations for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-neutral-400">Custom software</span>
              <span className="text-sm text-neutral-400">Web applications</span>
              <span className="text-sm text-neutral-400">Automation</span>
              <span className="text-sm text-neutral-400">API integrations</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Nominal Technologies LLC
          </p>
        </div>
      </div>
    </footer>
  )
}
