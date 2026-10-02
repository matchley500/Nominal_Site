import Section from '../components/Section'
import CTASection from '../components/CTASection'

const approach = [
  {
    title: 'Understand first',
    description:
      'We take time up front to learn your processes, constraints, and goals before proposing anything technical.',
  },
  {
    title: 'Build in small steps',
    description:
      'Working software ships in short cycles, so you can give feedback before assumptions get expensive or hard to undo.',
  },
  {
    title: 'Build to last',
    description:
      'Clean code, real tests, and good documentation. The system should keep working long after we hand it over.',
  },
]

const values = [
  {
    title: 'The work speaks for itself',
    description:
      'We put our time into building reliable systems. The software we deliver and the problems it solves are our best pitch.',
  },
  {
    title: 'Occam\'s Razor',
    description:
      'The simplest solution is often the correct one. Starting from first principles allows us to rethink assumptions and avoid unnecessary complexity.',
  },
  {
    title: 'Straight answers',
    description:
      'If something will take longer than expected, or we think there\'s a better approach, we tell you early. No surprises on the invoice.',
  },
  {
    title: 'Built for the long run',
    description:
      'We design systems to be maintained and extended after launch, with sensible architecture, tests, docs, and deployment.',
  },
]

export default function About() {
  return (
    <>
      <Section
        title="About Nominal"
        subtitle="We're a software engineering firm that builds practical systems for businesses."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>
              A lot of businesses get stuck between expensive enterprise software that doesn't fit
              how they operate and generic tools that need constant workarounds.
            </p>
            <p>
              We build solutions for that gap: custom applications, automation, integrations, and web
              platforms designed around the way your business works.
            </p>
            <p>
              Our team covers the full stack, from database design and API architecture to frontend
              interfaces and cloud infrastructure.
            </p>
            <p>
              We believe in building thoughtful software people actually want to use. 
            </p>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold text-neutral-500 mb-2">Our approach</h3>
            <div className="border-t border-white/10">
              {approach.map((item) => (
                <div key={item.title} className="py-6 border-b border-white/10">
                  <h4 className="text-xl font-semibold tracking-tight text-white">{item.title}</h4>
                  <p className="text-neutral-400 mt-2 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light" title="What we believe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {values.map((value) => (
            <div key={value.title} className="border-t border-neutral-950 pt-6">
              <h3 className="text-2xl font-semibold tracking-tight mb-3">{value.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Let's build something that works."
        description="Tell us about your project. You'll get a straightforward conversation about what you need."
      />
    </>
  )
}
