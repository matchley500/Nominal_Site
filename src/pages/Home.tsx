import { Link } from 'react-router-dom'
import Section from '../components/Section'
import CTASection from '../components/CTASection'

const capabilities = [
  {
    title: 'Custom software',
    description:
      'Applications designed around your workflows, your data, and the rules your business already follows.',
  },
  {
    title: 'Web applications',
    description:
      'Full-stack platforms with solid APIs, user accounts and permissions, and live data where you need it.',
  },
  {
    title: 'Automation',
    description:
      'Data syncs, approval flows, and scheduled jobs that take repetitive work off your team\'s plate.',
  },
  {
    title: 'API integrations',
    description:
      'Your CRM, ERP, payment processor, and internal tools, connected and kept in sync.',
  },
  {
    title: 'Technical consulting',
    description:
      'Architecture reviews, stack decisions, and due diligence from engineers who have built this before.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We learn how your business runs today before writing any code, so we solve the right problem.',
  },
  {
    step: '02',
    title: 'Architecture',
    description:
      'We plan the data model, services, and infrastructure up front to avoid expensive rewrites later.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Working software ships in short cycles. You see progress every week and can steer as we go.',
  },
  {
    step: '04',
    title: 'Handoff',
    description:
      'Clean code, documentation, tests, and a deploy pipeline any competent engineer can pick up.',
  },
]

const exampleProjects = [
  'Internal business tools',
  'SaaS platforms',
  'CRM and ERP integrations',
  'Operations dashboards and reporting',
  'REST and event-driven APIs',
  'Document and workflow automation',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-24 md:pt-36 md:pb-32">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-display leading-[0.98] text-white max-w-5xl">
            Software that fits how your business <span className="text-accent">runs.</span>
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
            We design and build custom applications, automation, and integrations for companies
            that have outgrown off-the-shelf tools.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary px-7 py-4">
              Start a project
            </Link>
            <Link to="/services" className="btn-secondary px-7 py-4">
              See services
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <Section title="What we build">
        <div className="border-t border-white/10">
          {capabilities.map((cap) => (
            <Link
              key={cap.title}
              to="/services"
              className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-8 md:py-10 border-b border-white/10"
            >
              <h3 className="md:col-span-5 text-2xl md:text-4xl font-semibold tracking-tight text-white">
                {cap.title}
              </h3>
              <p className="md:col-span-6 text-neutral-400 leading-relaxed md:pt-2">
                {cap.description}
              </p>
              <span className="hidden md:flex md:col-span-1 justify-end pt-2 text-neutral-600 group-hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section
        tone="light"
        title="How we work"
        subtitle="A clear process with a working build you can see every week."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {approach.map((item) => (
            <div key={item.step} className="border-t border-neutral-950 pt-6">
              <div className="text-sm font-semibold text-neutral-500 mb-8">{item.step}</div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Example work */}
      <Section title="Things we build">
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 border-t border-white/10">
          {exampleProjects.map((project) => (
            <li key={project} className="py-4 border-b border-white/10 text-lg text-neutral-200">
              {project}
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        heading="Have a project in mind?"
        description="Tell us what you're working on and we'll get back to you within one business day."
      />
    </>
  )
}
