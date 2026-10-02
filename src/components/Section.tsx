import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  tone?: 'dark' | 'light'
  // Use 'h1' when the section is the top of a page
  as?: 'h1' | 'h2'
  className?: string
  id?: string
}

export default function Section({ children, title, subtitle, tone = 'dark', as: Heading = 'h2', className = '', id }: SectionProps) {
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
              <Heading className="text-4xl md:text-6xl font-semibold tracking-display leading-[1.02]">
                {title}
              </Heading>
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
