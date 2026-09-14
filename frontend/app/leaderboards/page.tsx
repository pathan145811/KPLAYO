export default function LeaderboardsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            KPLAYO Leaderboards
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Rise. Compete. Lead.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Track your progress, compete with players, and climb the KPLAYO
            leaderboards across games and experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-pink-500 px-7 py-3 font-semibold text-white transition hover:bg-pink-400">
              View Rankings
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              My Ranking
            </button>
          </div>
        </div>
      </section>

      {/* Leaderboard Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Rankings
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Explore leaderboards
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🏆</div>

              <h3 className="mt-5 text-xl font-bold">
                Top Players
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                See the highest-performing players across KPLAYO.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">
                Game Rankings
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Compete for the top spots in your favorite games.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-5 text-xl font-bold">
                Weekly
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Track weekly performance and climb the latest rankings.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🌎</div>

              <h3 className="mt-5 text-xl font-bold">
                Global
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                See how players rank across the wider KPLAYO universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Players */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Top Players
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Global Leaderboard
              </h2>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.03] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 text-xl">
                🥇
              </div>

              <div className="flex-1">
                <h3 className="font-bold">Top Player</h3>
                <p className="text-sm text-white/40">Rank #1</p>
              </div>

              <div className="text-right">
                <p className="font-bold">0 XP</p>
                <p className="text-xs text-white/40">Coming Soon</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl">
                🥈
              </div>

              <div className="flex-1">
                <h3 className="font-bold">Player Two</h3>
                <p className="text-sm text-white/40">Rank #2</p>
              </div>

              <div className="text-right">
                <p className="font-bold">0 XP</p>
                <p className="text-xs text-white/40">Coming Soon</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/10 text-xl">
                🥉
              </div>

              <div className="flex-1">
                <h3 className="font-bold">Player Three</h3>
                <p className="text-sm text-white/40">Rank #3</p>
              </div>

              <div className="text-right">
                <p className="font-bold">0 XP</p>
                <p className="text-xs text-white/40">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Ranking */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Your Ranking
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Rank #—
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/50">
              Your ranking will appear here once KPLAYO gaming and ranking
              systems are connected.
            </p>

            <button className="mt-7 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
              View My Stats
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}