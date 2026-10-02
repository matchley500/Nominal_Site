import { Link } from 'react-router-dom'
import Section from '../components/Section'

export default function NotFound() {
  return (
    <Section
      as="h1"
      title="Page not found"
      subtitle="The page you're looking for doesn't exist or has moved."
    >
      <div className="flex flex-wrap gap-4">
        <Link to="/" className="btn-primary px-7 py-4">
          Go home
        </Link>
        <Link to="/contact" className="btn-secondary px-7 py-4">
          Contact us
        </Link>
      </div>
    </Section>
  )
}
