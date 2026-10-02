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
  buttonText = 'Start a project',
  buttonTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="bg-accent text-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <h2 className="text-4xl md:text-7xl font-semibold tracking-display leading-[1] max-w-4xl">
          {heading}
        </h2>
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-lg md:text-xl text-neutral-800 max-w-xl leading-relaxed">
            {description}
          </p>
          <Link
            to={buttonTo}
            className="inline-flex items-center justify-center self-start md:self-auto rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
