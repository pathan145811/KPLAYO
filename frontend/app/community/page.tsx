export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            KPLAYO Community
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Meet. Share. Connect.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Discover communities, meet new players, share your gaming
            moments, and build connections across the KPLAYO universe.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300">
              Explore Community
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              Create Community
            </button>
          </div>
        </div>
      </section>

      {/* Community Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Discover
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Find your community
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">Gaming</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Find players who enjoy the same games and challenges.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎥</div>

              <h3 className="mt-5 text-xl font-bold">Creators</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Connect with creators and discover new content.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">💬</div>

              <h3 className="mt-5 text-xl font-bold">Chat & Social</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Talk, share ideas, and make new friends.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🌎</div>

              <h3 className="mt-5 text-xl font-bold">Global</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Connect with the wider KPLAYO community around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Featured Communities
              </h2>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/5">
                <span className="text-6xl">🎮</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Game Clubs</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Join groups built around your favorite games and play styles.
              </p>

              <button className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/5">
                <span className="text-6xl">✨</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">Creator Clubs</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Follow creators, join their communities, and stay connected.
              </p>

              <button className="mt-5 text-sm font-semibold text-pink-400 transition hover:text-pink-300">
                Coming Soon →
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/40">
              <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-500/5">
                <span className="text-6xl">🌐</span>
              </div>

              <h3 className="mt-6 text-xl font-bold">KPLAYO Hub</h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                A central place for community events, discussions, and
                connections.
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