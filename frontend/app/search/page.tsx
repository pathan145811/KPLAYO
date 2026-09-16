export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-32 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          KPLAYO Discovery
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
          Search KPLAYO.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Find games, creators, communities, events, and people across the
          KPLAYO Universe.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            placeholder="Search KPLAYO..."
            className="min-h-14 flex-1 rounded-2xl border border-white/15 bg-white/[0.04] px-5 text-white outline-none placeholder:text-white/35 focus:border-cyan-400"
          />

          <button className="rounded-2xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300">
            Search
          </button>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
            Discover
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Search across KPLAYO.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🎮", "Games"],
              ["🔴", "LIVE"],
              ["👥", "People"],
              ["🌐", "Communities"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/45">
                  Search and discover {title.toLowerCase()} on KPLAYO.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Your discovery engine is coming.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-white/50">
          Advanced search, filters, recommendations, and personalized results
          will be connected as the KPLAYO platform becomes functional.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
        >
          Return Home
        </a>
      </section>
    </main>
  );
}