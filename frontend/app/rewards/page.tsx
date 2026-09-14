export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            KPLAYO Rewards
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Play More. Unlock More.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Discover rewards, achievements, bonuses, and special experiences
            designed to make every KPLAYO moment more rewarding.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-pink-500 px-7 py-3 font-semibold text-white transition hover:bg-pink-400">
              Explore Rewards
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              My Rewards
            </button>
          </div>
        </div>
      </section>

      {/* Reward Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Discover
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Reward categories
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎁</div>

              <h3 className="mt-5 text-xl font-bold">
                Daily Rewards
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Check in and discover daily opportunities to earn rewards.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🏆</div>

              <h3 className="mt-5 text-xl font-bold">
                Achievements
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Complete milestones and showcase your progress across KPLAYO.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-5 text-xl font-bold">
                Bonuses
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Unlock special bonuses through eligible activities and events.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">✨</div>

              <h3 className="mt-5 text-xl font-bold">
                Special Rewards
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Discover limited-time rewards and special KPLAYO experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rewards */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Featured Rewards
              </h2>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/5">
                <span className="text-6xl">🎁</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Daily Bonus
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Return regularly to discover daily reward opportunities.
              </p>

              <button className="mt-5 text-sm font-semibold text-pink-400 transition hover:text-pink-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/5">
                <span className="text-6xl">🏆</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Achievement Reward
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Complete eligible milestones and unlock achievement rewards.
              </p>

              <button className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-500/5">
                <span className="text-6xl">✨</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Special Drop
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Watch for limited-time rewards and exclusive KPLAYO drops.
              </p>

              <button className="mt-5 text-sm font-semibold text-purple-400 transition hover:text-purple-300">
                Coming Soon →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Your Progress
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Reward Level 01
                </h2>

                <p className="mt-2 text-sm text-white/50">
                  0 / 100 XP
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                Coming Soon
              </span>
            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-0 rounded-full bg-cyan-400" />
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/40">
              Play games, participate in events, connect with the community,
              and complete eligible activities to progress through the KPLAYO
              reward system.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}