export default function MangaSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 animate-pulse">
      <div className="bg-slate-700 aspect-[3/4]" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-700 rounded w-3/4" />
        <div className="h-3 bg-slate-700 rounded w-1/2" />
        <div className="flex gap-2">
          <div className="h-3 bg-slate-700 rounded px-3 py-1 w-16" />
          <div className="h-3 bg-slate-700 rounded px-3 py-1 w-16" />
        </div>
      </div>
    </div>
  )
}
