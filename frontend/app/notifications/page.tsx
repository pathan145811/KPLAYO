export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-32 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          KPLAYO Updates
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
          Notifications.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Stay updated with your games, creators, communities, events, and
          activity across the KPLAYO Universe.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black">
            All
          </button>

          <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-cyan-400 hover:text-cyan-400">
            Social
          </button>

          <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-cyan-400 hover:text-cyan-400">
            Games
          </button>

          <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-cyan-400 hover:text-cyan-400">
            LIVE
          </button>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <div className="text-5xl">🔔</div>

            <h2 className="mt-6 text-2xl font-bold">
              No notifications yet.
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-white/50">
              Your notifications will appear here when you start connecting,
              playing games, joining communities, and following creators.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}