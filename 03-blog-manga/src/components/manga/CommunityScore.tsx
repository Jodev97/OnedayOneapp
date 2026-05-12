interface CommunityScoreProps {
  score?: number
}

export default function CommunityScore({ score = 0 }: CommunityScoreProps) {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Circular Score Badge */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
            <div className="absolute inset-1 rounded-full bg-slate-950 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-black text-cyan-400">{score.toFixed(1)}</p>
                <p className="text-xs text-slate-400 font-bold mt-1">/10</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl font-black text-white uppercase tracking-wider">
            Community Score
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Based on user ratings and reviews
          </p>
          <div className="pt-4 border-t border-cyan-500/20">
            <p className="text-sm text-slate-400">
              This score reflects the collective opinion of thousands of manga readers worldwide.
              Rate this manga to influence the community score.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
