export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            KPLAYO Events
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Play. Compete. Celebrate.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Discover gaming events, community activities, competitions, and
            special experiences happening across the KPLAYO universe.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-pink-500 px-7 py-3 font-semibold text-white transition hover:bg-pink-400">
              Explore Events
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              Host an Event
            </button>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Discover
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Explore event categories
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🏆</div>

              <h3 className="mt-5 text-xl font-bold">Tournaments</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Compete in organized gaming tournaments and challenges.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">Game Events</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Discover special game sessions, challenges, and activities.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎉</div>

              <h3 className="mt-5 text-xl font-bold">Community</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Join community celebrations, meetups, and social experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">✨</div>

              <h3 className="mt-5 text-xl font-bold">Special Events</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Experience limited-time events and special KPLAYO moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Upcoming
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Upcoming Events
              </h2>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/5">
                <span className="text-6xl">🏆</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">KPLAYO Tournament</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Competitive gaming event for players ready to test their
                skills.
              </p>

              <button className="mt-5 text-sm font-semibold text-pink-400 transition hover:text-pink-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/5">
                <span className="text-6xl">🎮</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Game Night</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Play together, meet other players, and enjoy community gaming
                sessions.
              </p>

              <button className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-500/5">
                <span className="text-6xl">🎉</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Community Festival</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                A social celebration bringing the KPLAYO community together.
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