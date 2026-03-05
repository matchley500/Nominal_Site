import Section from '../components/Section'
import CTASection from '../components/CTASection'

const services = [
  {
    title: 'Custom Software Development',
    description:
      'When off-the-shelf software doesn\'t fit your operations, we build what does. We design and develop applications around your specific data models, business rules, and user workflows.',
    details: [
      'Desktop and web-based business applications',
      'Internal tools and admin panels',
      'Data processing and transformation pipelines',
      'Legacy system modernization and migration',
    ],
  },
  {
    title: 'Web Applications',
    description:
      'Full-stack web platforms built with modern frameworks, clean architecture, and production-grade infrastructure. From single-page applications to complex multi-tenant platforms.',
    details: [
      'React, TypeScript, and modern frontend stacks',
      'RESTful and GraphQL API design',
      'Authentication, authorization, and role management',
      'Real-time features and data synchronization',
    ],
  },
  {
    title: 'Automation & Workflow Systems',
    description:
      'We identify repetitive manual processes in your business and replace them with reliable automated systems — reducing errors, saving time, and freeing your team to do higher-value work.',
    details: [
      'Data sync between platforms and databases',
      'Approval and routing workflows',
      'Scheduled jobs and event-driven automation',
      'Document generation and processing',
    ],
  },
  {
    title: 'API Integrations',
    description:
      'Most businesses run on multiple platforms that don\'t talk to each other. We build the connective layer — clean, well-documented integrations that keep your systems in sync.',
    details: [
      'CRM, ERP, and accounting system integrations',
      'Payment processor and billing connections',
      'Third-party API consumption and orchestration',
      'Webhook handlers and event routing',
    ],
  },
  {
    title: 'System Architecture & Consulting',
    description:
      'Before building, we help you think through the design. Architecture reviews, technology selection, scalability planning, and technical due diligence for teams that want to get it right the first time.',
    details: [
      'System design and architecture documentation',
      'Technology stack evaluation and selection',
      'Database modeling and data architecture',
      'Infrastructure planning and cost optimization',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Section
        title="Services"
        subtitle="Detailed breakdown of what we build and how we approach each type of engagement."
      >
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                index !== 0 ? 'pt-16 border-t border-white/5' : ''
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
              <div>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-400 mt-0.5 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Ready to build?"
        description="Describe your project and we'll scope out the right approach."
      />
    </>
  )
}
