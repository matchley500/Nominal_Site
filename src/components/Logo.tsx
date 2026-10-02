import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-white">
      <span className="w-7 h-7 rounded-md bg-accent text-neutral-950 flex items-center justify-center text-sm font-bold">
        N
      </span>
      <span className="text-lg font-semibold tracking-tight">Nominal</span>
    </Link>
  )
}
