import { Link } from 'react-router-dom'

interface CTASectionProps {
  heading: string
  description: string
  buttonText?: string
  buttonTo?: string
}

export default function CTASection({
  heading,
  description,
  buttonText = 'Start a Project',
  buttonTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {heading}
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            {description}
          </p>
          <Link
            to={buttonTo}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            {buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
