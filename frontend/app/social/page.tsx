export default function SocialPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            KPLAYO Social
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Meet. Share.{" "}
            <span className="text-pink-400">Connect.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Your social space inside KPLAYO. Discover people, follow creators,
            join communities, share moments, and build your own network.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#discover"
              className="rounded-full bg-pink-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-pink-400"
            >
              Discover Social
            </a>

            <a
              href="/community"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-pink-400 hover:text-pink-400"
            >
              Explore Community
            </a>
          </div>
        </div>
      </section>

      {/* Social Categories */}
      <section
        id="discover"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Social Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything starts with connection.
            </h2>

            <p className="mt-4 max-w-2xl text-white/55">
              Find your people and discover new ways to interact across the
              KPLAYO Universe.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="mb-5 text-3xl">👥</div>
              <h3 className="text-xl font-semibold">Friends</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Connect with players, friends, and people who share your
                interests.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-5 text-3xl">⭐</div>
              <h3 className="text-xl font-semibold">Creators</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Discover creators, follow their journeys, and interact with
                their content.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="mb-5 text-3xl">💬</div>
              <h3 className="text-xl font-semibold">Conversations</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Share thoughts, react to content, and take part in meaningful
                conversations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-5 text-3xl">🌎</div>
              <h3 className="text-xl font-semibold">Global Network</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Meet people from different communities across the KPLAYO
                Universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Social Areas */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Your social world.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-4xl">🔥</div>
            <h3 className="mt-6 text-2xl font-bold">Trending</h3>
            <p className="mt-3 text-white/55">
              Discover popular conversations, creators, and community moments
              happening across KPLAYO.
            </p>
            <button className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-pink-400 hover:text-pink-400">
              Coming Soon
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-4xl">✨</div>
            <h3 className="mt-6 text-2xl font-bold">Discover People</h3>
            <p className="mt-3 text-white/55">
              Find players and creators based on games, interests, communities,
              and shared experiences.
            </p>
            <button className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400">
              Coming Soon
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-4xl">💎</div>
            <h3 className="mt-6 text-2xl font-bold">Social Feed</h3>
            <p className="mt-3 text-white/55">
              A future personalized feed for posts, moments, creator content,
              gaming activity, and community updates.
            </p>
            <button className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-pink-400 hover:text-pink-400">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Build your network
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Find your people.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/55">
            KPLAYO Social will connect players, creators, communities, and
            experiences into one growing network.
          </p>

          <a
            href="/community"
            className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Visit Community
          </a>
        </div>
      </section>
    </main>
  );
}