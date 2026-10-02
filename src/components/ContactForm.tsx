import { FormEvent, useRef, useState } from 'react'
import { sendContactForm } from '../lib/emailjs'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    // Honeypot check
    const honeypot = formRef.current.querySelector<HTMLInputElement>('[name="hp_trap"]')
    if (honeypot && honeypot.value) return

    setStatus('sending')

    try {
      await sendContactForm(formRef.current)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-white/10 p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-accent text-neutral-950 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Message sent</h3>
        <p className="text-neutral-400">We'll reply within one business day.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot, hidden from real users */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="hp_trap" tabIndex={-1} autoComplete="nope" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
          Name <span className="text-neutral-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
          Email <span className="text-neutral-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors"
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
          Project details <span className="text-neutral-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3.5 text-base text-white placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="What are you trying to build, and what problem does it solve?"
        />
      </div>

      {status === 'error' && (
        <div className="rounded-xl border border-red-400/30 px-4 py-3 text-sm text-red-300">
          That didn't go through. Please try again, or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
