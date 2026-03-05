import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <Section
      title="Get in touch"
      subtitle="Describe your project and we'll follow up within one business day."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-white mb-4">What to include</h3>
            <ul className="space-y-3">
              {[
                'A brief description of what you want to build',
                'The business problem you\'re trying to solve',
                'Any existing systems or tools involved',
                'Your timeline and budget range, if known',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-400 mt-0.5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-white mb-4">What happens next</h3>
            <div className="space-y-4">
              {[
                { step: '1', text: 'We review your message and research the problem space.' },
                { step: '2', text: 'We schedule a call to discuss requirements in detail.' },
                { step: '3', text: 'We provide a scope document with approach, timeline, and cost.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 text-xs font-semibold">
                    {item.step}
                  </span>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
