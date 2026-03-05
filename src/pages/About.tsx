import Section from '../components/Section'
import CTASection from '../components/CTASection'

const values = [
  {
    title: 'Engineering over marketing',
    description:
      'We spend our time building reliable systems, not crafting sales pitches. Our work speaks through the software we deliver and the problems we solve.',
  },
  {
    title: 'Practical solutions',
    description:
      'We build what businesses actually need — not the most complex or impressive-sounding system. The right solution is the one that works reliably and is maintainable long-term.',
  },
  {
    title: 'Honest communication',
    description:
      'If something is going to take longer than expected, or if we think a different approach is better, we say so. Clear communication prevents costly surprises.',
  },
  {
    title: 'Long-term thinking',
    description:
      'We design systems to be maintained and extended, not just launched. That means clean architecture, proper testing, documentation, and sensible deployment processes.',
  },
]

export default function About() {
  return (
    <>
      <Section
        title="About Nominal Technologies"
        subtitle="We're a software engineering firm focused on building practical, high-impact systems for businesses."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              Nominal Technologies exists because too many businesses are stuck between expensive
              enterprise software that doesn't fit their operations and generic off-the-shelf tools
              that require constant workarounds.
            </p>
            <p>
              We build the software that fills that gap — custom applications, automation systems,
              integrations, and web platforms designed around how your business actually works.
            </p>
            <p>
              Our team brings experience across the full stack, from database design and API
              architecture to modern frontend interfaces and cloud infrastructure. We've built
              systems for industries ranging from logistics and finance to healthcare and manufacturing.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Our approach</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Understand first</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    We invest time upfront to understand your business processes, constraints, and goals before proposing a technical solution.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Build iteratively</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    Ship working software in short cycles so you can see progress and provide feedback before assumptions become expensive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Deliver for the long term</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    Clean code, proper testing, and thorough documentation. The system should outlast our engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section
        title="What we believe"
        className="border-t border-white/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Let's build something that works."
        description="Tell us about your project. No sales pitch — just a straightforward conversation about what you need."
      />
    </>
  )
}
