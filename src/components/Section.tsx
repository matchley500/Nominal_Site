import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  tone?: 'dark' | 'light'
  className?: string
  id?: string
}

export default function Section({ children, title, subtitle, tone = 'dark', className = '', id }: SectionProps) {
  const light = tone === 'light'

  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${light ? 'bg-paper text-neutral-950' : 'text-white'} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-16 max-w-3xl">
            {title && (
              <h2 className="text-4xl md:text-6xl font-semibold tracking-display leading-[1.02]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-6 text-lg md:text-xl leading-relaxed ${light ? 'text-neutral-600' : 'text-neutral-400'}`}>
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
