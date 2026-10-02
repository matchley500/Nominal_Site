interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-neutral-300">
      {name}
    </span>
  )
}
