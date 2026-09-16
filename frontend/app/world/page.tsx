export default function WorldPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            KPLAYO Universe
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Enter the{" "}
            <span className="text-cyan-400">KPLAYO World.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Explore a connected virtual world where players, creators,
            communities, games, and social experiences come together.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#universe"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              Explore World
            </a>

            <a
              href="/"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-white/30"
            >
              Back Home
            </a>
          </div>
        </div>
      </section>

      {/* World Features */}
      <section
        id="universe"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              One Connected Universe
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              More than a virtual space.
            </h2>

            <p className="mt-4 max-w-2xl text-white/55">
              KPLAYO World is designed to become a social layer connecting
              every part of the KPLAYO experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-5 text-3xl">🌐</div>
              <h3 className="text-xl font-semibold">Virtual City</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Discover different areas, spaces, and future social
                destinations across the KPLAYO World.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="mb-5 text-3xl">🧑‍🚀</div>
              <h3 className="text-xl font-semibold">3D Avatars</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Build your own identity with customizable avatars and
                personalized virtual experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-5 text-3xl">🎮</div>
              <h3 className="text-xl font-semibold">Game Spaces</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Move naturally between social spaces and interactive gaming
                experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">
              <div className="mb-5 text-3xl">✨</div>
              <h3 className="text-xl font-semibold">Social Experiences</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Meet people, discover communities, attend events, and create
                memorable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future World */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Discover
            </p>
            <h3 className="mt-4 text-2xl font-bold">Explore new places</h3>
            <p className="mt-4 text-white/55">
              Future KPLAYO spaces will give players new ways to explore,
              socialize, and participate.
            </p>
          </div>

          <div className="rounded-3xl border border-pink-400/20 bg-pink-400/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              Connect
            </p>
            <h3 className="mt-4 text-2xl font-bold">Meet your community</h3>
            <p className="mt-4 text-white/55">
              Communities, creators, friends, and events can become part of
              one connected world.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Create
            </p>
            <h3 className="mt-4 text-2xl font-bold">Shape your identity</h3>
            <p className="mt-4 text-white/55">
              Your profile, avatar, achievements, and experiences can evolve
              with you throughout KPLAYO.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            The world is growing
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Play. Connect. Live.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/55">
            KPLAYO World will continue evolving as the KPLAYO Universe
            expands.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Return to KPLAYO
          </a>
        </div>
      </section>
    </main>
  );
}