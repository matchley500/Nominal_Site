import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  id?: string
}

export default function Section({ children, title, subtitle, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-14 max-w-2xl">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
