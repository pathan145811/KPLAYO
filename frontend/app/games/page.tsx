export default function GamesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            KPLAYO Games
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Play. Compete. Connect.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Discover exciting games, challenge your friends, climb the
            leaderboards, and become part of the KPLAYO gaming universe.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300">
              Explore Games
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Find your next game
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>
              <h3 className="mt-5 text-xl font-bold">Casual</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Quick and fun games for everyone.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">⚡</div>
              <h3 className="mt-5 text-xl font-bold">Action</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Fast-paced challenges and intense gameplay.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🏆</div>
              <h3 className="mt-5 text-xl font-bold">Competitive</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Compete, rank up, and prove your skills.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">👥</div>
              <h3 className="mt-5 text-xl font-bold">Multiplayer</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Play together and create memorable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Featured Games
              </h2>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/5">
                <span className="text-6xl">🎮</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Arcade Zone</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Fast, fun and easy-to-play experiences for the whole
                community.
              </p>

              <button className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                Coming Soon →
              </button>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400/20 to-purple-500/5">
                <span className="text-6xl">⚡</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Battle Arena</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Competitive multiplayer experiences built for skill,
                teamwork and progression.
              </p>

              <button className="mt-5 text-sm font-semibold text-pink-400 transition hover:text-pink-300">
                Coming Soon →
              </button>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-500/5">
                <span className="text-6xl">🏆</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Competitive Hub</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Rankings, challenges and competitive events for players
                who want to climb higher.
              </p>

              <button className="mt-5 text-sm font-semibold text-purple-400 transition hover:text-purple-300">
                Coming Soon →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}