import { Link } from 'react-router-dom'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import TechBadge from '../components/TechBadge'
import CTASection from '../components/CTASection'

const capabilities = [
  {
    title: 'Custom Software Development',
    description:
      'Purpose-built applications designed around your specific workflows, data models, and business rules — not adapted from a generic template.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Web Applications',
    description:
      'Full-stack web platforms with modern frontends, robust APIs, authentication, role-based access, and real-time data handling.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Automation & Workflow Systems',
    description:
      'Replace manual processes with reliable automated pipelines — data syncs, approval workflows, scheduled jobs, and event-driven logic.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'API Integrations',
    description:
      'Connect the platforms your business runs on — CRMs, ERPs, payment processors, shipping providers, and internal tools — through clean, maintainable integrations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: 'Technical Consulting',
    description:
      'Architecture reviews, technology selection, system design, and technical due diligence for teams that need experienced engineering guidance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
]

const approach = [
  {
    step: '01',
    title: 'Requirements Discovery',
    description:
      'We map out your actual business processes before writing a line of code. The goal is to understand the problem deeply enough to build the right system, not just any system.',
  },
  {
    step: '02',
    title: 'System Architecture',
    description:
      'We design the data model, service boundaries, and infrastructure before building. This prevents costly rewrites and ensures the system scales with your business.',
  },
  {
    step: '03',
    title: 'Iterative Development',
    description:
      'Working software ships in short cycles. You see real progress every week and can provide feedback before assumptions become expensive.',
  },
  {
    step: '04',
    title: 'Long-term Maintainability',
    description:
      'Clean code, thorough documentation, proper testing, and sensible deployment pipelines. The system should be easy for any competent engineer to work on after handoff.',
  },
]

const exampleProjects = [
  'Internal business automation tools',
  'Multi-tenant SaaS platforms',
  'CRM and ERP integrations',
  'Operations dashboards and reporting systems',
  'RESTful and event-driven API systems',
  'Document and workflow automation',
]

const technologies = [
  'React', 'TypeScript', 'Node.js', '.NET', 'PostgreSQL', 'Python',
  'AWS', 'Azure', 'Docker', 'REST APIs', 'GraphQL', 'Redis',
  'Terraform', 'CI/CD', 'Stripe', 'Zapier',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient background orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              We build the software your{' '}
              <span className="gradient-text">business actually needs.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Nominal Technologies is a software engineering firm that builds custom applications,
              automation systems, integrations, and modern web platforms for companies that
              have outgrown off-the-shelf tools.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                Start a Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <Section
        title="What we build"
        subtitle="We focus on the kind of software that runs your business — the systems behind the interface that make things actually work."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => (
            <FeatureCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} />
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section
        title="How we work"
        subtitle="Every project follows a structured engineering process — not a sales funnel."
        className="border-t border-white/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approach.map((item) => (
            <div key={item.step} className="flex gap-5">
              <div className="text-3xl font-bold text-white/10 shrink-0 w-12">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Example Solutions */}
      <Section
        title="Example solutions"
        subtitle="The types of systems we've designed and built."
        className="border-t border-white/5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exampleProjects.map((project) => (
            <div
              key={project}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-slate-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {project}
            </div>
          ))}
        </div>
      </Section>

      {/* Technology */}
      <Section
        title="Technology"
        subtitle="We choose tools based on what's right for the project — not what's trending."
        className="border-t border-white/5"
      >
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading="Have a project in mind?"
        description="Tell us what you're building. We'll figure out the best way to make it happen."
      />
    </>
  )
}
