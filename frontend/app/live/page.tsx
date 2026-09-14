export default function LivePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            KPLAYO LIVE
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Go Live. Connect. Play.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Watch creators, join live conversations, discover interactive
            experiences, and connect with the KPLAYO community in real time.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-pink-500 px-7 py-3 font-semibold text-white transition hover:bg-pink-400">
              Explore LIVE
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              Start Streaming
            </button>
          </div>
        </div>
      </section>

      {/* LIVE Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Discover
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Explore KPLAYO LIVE
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🔴</div>

              <h3 className="mt-5 text-xl font-bold">Live Now</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Discover creators and communities streaming right now.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">Gaming LIVE</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Watch gaming sessions, challenges, and interactive play.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎤</div>

              <h3 className="mt-5 text-xl font-bold">Social LIVE</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Join conversations, hangouts, and community experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">👥</div>

              <h3 className="mt-5 text-xl font-bold">Multi-Host</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Multiple creators, one live room, and more ways to connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured LIVE */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Featured LIVE Rooms
              </h2>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/5">
                <span className="text-6xl">📺</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Creator LIVE</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Connect with creators and experience live community moments.
              </p>

              <button className="mt-5 text-sm font-semibold text-pink-400 transition hover:text-pink-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/5">
                <span className="text-6xl">🎮</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Game LIVE</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Watch games unfold and interact with the audience in real
                time.
              </p>

              <button className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-500/5">
                <span className="text-6xl">👥</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Multi-Host LIVE</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Bring multiple hosts together in one shared live experience.
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