interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white transition-all duration-200">
      {name}
    </span>
  )
}
