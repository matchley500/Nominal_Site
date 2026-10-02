import Section from '../components/Section'
import CTASection from '../components/CTASection'

const services = [
  {
    title: 'Custom software',
    description:
      'When off-the-shelf software doesn\'t fit how you operate, we build something that does. Each application is designed around your data, your business rules, and the people who use it every day. That can include AI features built on OpenAI or Anthropic models, wired into your own data and workflows.',
    details: [
      'Desktop and web business applications',
      'Internal tools and admin panels',
      'AI integrations with OpenAI and Anthropic',
      'Data processing pipelines',
      'Legacy system modernization and migration',
    ],
  },
  {
    title: 'Web applications',
    description:
      'Full-stack web platforms with clean architecture and production-grade infrastructure, from focused single-page apps to multi-tenant platforms.',
    details: [
      'React, TypeScript, and modern frontend stacks',
      'REST and GraphQL API design',
      'Authentication, permissions, and roles',
      'Real-time features and data sync',
    ],
  },
  {
    title: 'Automation',
    description:
      'We find the repetitive manual work in your operations and replace it with automated systems. Fewer errors, and more time for your team to spend on work that matters.',
    details: [
      'Data sync between platforms and databases',
      'Approval and routing workflows',
      'Scheduled and event-driven jobs',
      'Document generation and processing',
    ],
  },
  {
    title: 'API integrations',
    description:
      'Most businesses run on several platforms that don\'t talk to each other. We build well-documented integrations that keep them in sync.',
    details: [
      'CRM, ERP, and accounting integrations',
      'Payment and billing connections',
      'Third-party API orchestration',
      'Webhook handling and event routing',
    ],
  },
  {
    title: 'Architecture and consulting',
    description:
      'Help with the design before anything gets built. Architecture reviews, stack selection, scalability planning, and technical due diligence.',
    details: [
      'System design and documentation',
      'Technology evaluation and selection',
      'Database and data architecture',
      'Infrastructure planning and cost control',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Section
        title="Services"
        subtitle="What we build, and what each kind of engagement usually includes."
      >
        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-12 md:py-16 border-b border-white/10"
            >
              <div className="lg:col-span-1 text-sm font-semibold text-neutral-500 pt-2">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-lg">{service.description}</p>
              </div>
              <ul className="lg:col-span-5 lg:pt-3">
                {service.details.map((detail) => (
                  <li key={detail} className="py-3 border-b border-white/[0.06] last:border-b-0 text-neutral-200">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Ready to build?"
        description="Describe your project and we'll come back with a recommended approach."
      />
    </>
  )
}
