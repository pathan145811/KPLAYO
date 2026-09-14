export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            About KPLAYO
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Play. Connect. Live.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            KPLAYO is a social gaming universe built to bring games, LIVE
            experiences, communities, creators, and virtual worlds together.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Our Vision
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                One universe. Endless ways to play.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                We are building KPLAYO as a connected destination where people
                can play games, watch and host LIVE experiences, meet
                communities, support creators, and explore new digital worlds.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Our Mission
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Make social gaming more connected.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                KPLAYO aims to combine entertainment, social interaction,
                gaming, creators, and community into one evolving platform
                designed for players around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is KPLAYO */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The KPLAYO Universe
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              More than just gaming
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
              KPLAYO brings multiple experiences together so players can move
              naturally between entertainment, competition, social spaces, and
              creator experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">
                Games
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Discover casual, action, competitive, and multiplayer gaming
                experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">📺</div>

              <h3 className="mt-5 text-xl font-bold">
                LIVE
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Watch creators, gaming streams, social rooms, and multi-host
                experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🌎</div>

              <h3 className="mt-5 text-xl font-bold">
                World
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Explore the future KPLAYO virtual world and its connected social
                experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">✨</div>

              <h3 className="mt-5 text-xl font-bold">
                Creators
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Give creators tools and experiences to connect with their
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Built around people and play
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">🤝</div>

              <h3 className="mt-5 text-xl font-bold">
                Community First
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Strong communities are at the heart of a great social gaming
                experience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">🚀</div>

              <h3 className="mt-5 text-xl font-bold">
                Always Evolving
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                KPLAYO is designed to grow with new games, features, creators,
                and experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">🛡️</div>

              <h3 className="mt-5 text-xl font-bold">
                Safe & Responsible
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Safety, moderation, privacy, and responsible platform design
                are essential parts of the KPLAYO vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            KPLAYO
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Play. Connect. Live.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/50">
            The KPLAYO journey is just beginning. We are building a social
            gaming universe where every player, creator, and community can
            become part of something bigger.
          </p>
        </div>
      </section>
    </main>
  );
}