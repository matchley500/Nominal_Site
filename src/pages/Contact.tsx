import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

const include = [
  'What you want to build',
  'The business problem behind it',
  'Any existing systems or tools involved',
  'Timeline and budget range, if you have them',
]

const nextSteps = [
  'We read your message and look into the problem.',
  'We set up a call to go through requirements.',
  'You get a scope document with approach, timeline, and cost.',
]

export default function Contact() {
  return (
    <Section
      title="Get in touch"
      subtitle="Tell us about your project and we'll reply within one business day."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="text-sm font-semibold text-neutral-500 mb-2">Helpful to include</h3>
            <ul className="border-t border-white/10">
              {include.map((item) => (
                <li key={item} className="py-4 border-b border-white/10 text-neutral-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-500 mb-2">What happens next</h3>
            <ol className="border-t border-white/10">
              {nextSteps.map((text, index) => (
                <li key={text} className="flex gap-5 py-4 border-b border-white/10">
                  <span className="text-sm font-semibold text-accent pt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-neutral-200">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  )
}
