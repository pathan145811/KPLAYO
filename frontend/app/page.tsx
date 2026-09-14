import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Social Gaming Universe
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Play.
              <br />
              Connect.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Experience KPLAYO.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Games, LIVE entertainment, creators, community and
              interactive experiences — all connected in one universe.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#games"
                className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-black transition hover:scale-105 hover:bg-cyan-300"
              >
                Explore Games
              </a>

              <a
                href="#live"
                className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-pink-500 hover:text-pink-400"
              >
                Watch LIVE
              </a>
            </div>

            <div className="mt-10 flex gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold">∞</p>
                <p className="mt-1 text-xs text-white/40">Possibilities</p>
              </div>

              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-1 text-xs text-white/40">Gaming Universe</p>
              </div>

              <div>
                <p className="text-2xl font-bold">01</p>
                <p className="mt-1 text-xs text-white/40">Universe</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden min-h-[480px] items-center justify-center lg:flex">
            <div className="absolute h-80 w-80 rounded-full border border-cyan-400/20" />
            <div className="absolute h-96 w-96 rounded-full border border-pink-500/10" />

            <div className="relative flex h-72 w-72 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
                  <span className="text-3xl font-black text-cyan-400">
                    K
                  </span>
                </div>

                <h2 className="text-3xl font-black tracking-wider">
                  KPLAYO
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  Enter the Universe
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Games */}
      <section id="games" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Discover
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Featured Games
            </h2>

            <p className="mt-4 max-w-xl text-white/50">
              Discover the games that will power the KPLAYO universe.
            </p>
          </div>

          <a
            href="#games"
            className="w-fit rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            View All Games →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent">
              <div className="absolute h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative rounded-2xl border border-cyan-400/20 bg-black/40 px-8 py-6 backdrop-blur">
                <span className="text-3xl font-black tracking-wider text-cyan-400">
                  GAME 01
                </span>
              </div>

              <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/60">
                Coming Soon
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    KPLAYO Game One
                  </h3>

                  <p className="mt-2 text-sm text-white/45">
                    Competitive multiplayer experience.
                  </p>
                </div>

                <span className="rounded-lg bg-cyan-400/10 px-2 py-1 text-xs text-cyan-400">
                  NEW
                </span>
              </div>

              <a
                href="#games"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Game
              </a>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-pink-500/40">
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent">
              <div className="absolute h-44 w-44 rounded-full bg-pink-500/10 blur-3xl transition group-hover:bg-pink-500/20" />

              <div className="relative rounded-2xl border border-pink-500/20 bg-black/40 px-8 py-6 backdrop-blur">
                <span className="text-3xl font-black tracking-wider text-pink-500">
                  GAME 02
                </span>
              </div>

              <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/60">
                Coming Soon
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    KPLAYO Game Two
                  </h3>

                  <p className="mt-2 text-sm text-white/45">
                    Fast-paced social gaming experience.
                  </p>
                </div>

                <span className="rounded-lg bg-pink-500/10 px-2 py-1 text-xs text-pink-400">
                  NEW
                </span>
              </div>

              <a
                href="#games"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-pink-500 hover:text-pink-400"
              >
                View Game
              </a>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/20 via-pink-500/10 to-transparent">
              <div className="absolute h-44 w-44 rounded-full bg-blue-400/10 blur-3xl transition group-hover:bg-blue-400/20" />

              <div className="relative rounded-2xl border border-white/15 bg-black/40 px-8 py-6 backdrop-blur">
                <span className="text-3xl font-black tracking-wider">
                  GAME 03
                </span>
              </div>

              <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/60">
                Coming Soon
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    KPLAYO Game Three
                  </h3>

                  <p className="mt-2 text-sm text-white/45">
                    A new way to play and connect.
                  </p>
                </div>

                <span className="rounded-lg bg-white/10 px-2 py-1 text-xs text-white/60">
                  SOON
                </span>
              </div>

              <a
                href="#games"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Game
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* LIVE Gaming */}
      <section id="live" className="relative overflow-hidden border-y border-white/10 bg-white/[0.02]">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
                LIVE Gaming
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Watch. Interact. Play.
              </h2>

              <p className="mt-4 max-w-xl text-white/50">
                Discover live gaming, creators and interactive
                experiences happening across KPLAYO.
              </p>
            </div>

            <a
              href="#live"
              className="w-fit rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-pink-500 hover:text-pink-400"
            >
              View All LIVE →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition hover:-translate-y-2 hover:border-pink-500/40">
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent">
                <div className="absolute h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-pink-500/30 bg-black/50">
                  <span className="text-2xl">▶️</span>
                </div>

                <span className="absolute left-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-bold">
                  LIVE
                </span>

                <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
                  0 viewers
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Gaming LIVE
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  Live gaming experiences coming soon.
                </p>

                <a
                  href="#live"
                  className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-pink-500 hover:text-pink-400"
                >
                  Watch LIVE
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent">
                <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-black/50">
                  <span className="text-2xl">▶️</span>
                </div>

                <span className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                  LIVE
                </span>

                <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
                  0 viewers
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Creator LIVE
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  Connect with your favorite creators.
                </p>

                <a
                  href="#live"
                  className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Watch LIVE
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition hover:-translate-y-2 hover:border-pink-500/40">
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/20 via-pink-500/10 to-transparent">
                <div className="absolute h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/50">
                  <span className="text-2xl">▶️</span>
                </div>

                <span className="absolute left-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-bold">
                  LIVE
                </span>

                <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
                  0 viewers
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Community LIVE
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  Join the KPLAYO community in real time.
                </p>

                <a
                  href="#live"
                  className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-pink-500 hover:text-pink-400"
                >
                  Join LIVE
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Community
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Your Gaming Community
            </h2>

            <p className="mt-4 max-w-xl text-white/50">
              Meet players, follow creators, share moments and build
              your KPLAYO identity.
            </p>
          </div>

          <a
            href="#community"
            className="w-fit rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Explore Community →
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <h3 className="text-xl font-bold">
                  Community Feed
                </h3>

                <p className="mt-1 text-sm text-white/40">
                  What's happening in KPLAYO
                </p>
              </div>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                TRENDING
              </span>
            </div>

            <div className="mt-5 space-y-4">

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 font-bold text-cyan-400">
                    K
                  </div>

                  <div>
                    <p className="font-semibold">
                      KPLAYO Player
                    </p>

                    <p className="text-xs text-white/35">
                      Community Member
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/65">
                  The next generation of social gaming is coming to
                  KPLAYO. Are you ready?
                </p>

                <div className="mt-4 flex gap-5 text-xs text-white/35">
                  <span>♡ 0 Likes</span>
                  <span>◯ 0 Comments</span>
                  <span>↗️ Share</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 font-bold text-pink-500">
                    K
                  </div>

                  <div>
                    <p className="font-semibold">
                      KPLAYO Creator
                    </p>

                    <p className="text-xs text-white/35">
                      Creator
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/65">
                  Games, LIVE streams, friends and creators — all in
                  one universe.
                </p>

                <div className="mt-4 flex gap-5 text-xs text-white/35">
                  <span>♡ 0 Likes</span>
                  <span>◯ 0 Comments</span>
                  <span>↗️ Share</span>
                </div>
              </div>

            </div>
          </article>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                Trending
              </h3>

              <span className="text-xs text-pink-500">
                LIVE
              </span>
            </div>

            <div className="mt-6 space-y-5">

              <div className="border-b border-white/10 pb-5">
                <p className="text-xs text-white/35">#01</p>

                <p className="mt-1 font-semibold">
                  KPLAYO Games
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Gaming community
                </p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-xs text-white/35">#02</p>

                <p className="mt-1 font-semibold">
                  KPLAYO LIVE
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Live creators
                </p>
              </div>

              <div>
                <p className="text-xs text-white/35">#03</p>

                <p className="mt-1 font-semibold">
                  KPLAYO Community
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Players & creators
                </p>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* K-Coins / Virtual Economy */}
      <section id="economy" className="relative overflow-hidden border-y border-white/10 bg-white/[0.02]">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              KPLAYO Economy
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              K-Coins & Rewards
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-white/50">
              Power your KPLAYO experience with K-Coins,
              virtual gifts, rewards and your digital wallet.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* K-Coins */}
            <a
              href="#economy"
              className="group rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <span className="text-2xl font-black text-cyan-400">
                  K
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                K-Coins
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Your digital currency across the KPLAYO universe.
              </p>

              <span className="mt-6 block text-sm font-semibold text-cyan-400 transition group-hover:text-cyan-300">
                Explore →
              </span>
            </a>

            {/* Virtual Gifts */}
            <a
              href="#economy"
              className="group rounded-3xl border border-pink-500/20 bg-pink-500/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
                <span className="text-2xl text-pink-500">
                  ✦
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Virtual Gifts
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Send interactive gifts to creators and players.
              </p>

              <span className="mt-6 block text-sm font-semibold text-pink-400 transition group-hover:text-pink-300">
                View Gifts →
              </span>
            </a>

            {/* Rewards */}
            <a
              href="#economy"
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <span className="text-2xl">
                  ★
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Rewards
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Earn rewards through games, events and challenges.
              </p>

              <span className="mt-6 block text-sm font-semibold text-cyan-400 transition group-hover:text-cyan-300">
                View Rewards →
              </span>
            </a>

            {/* Wallet */}
            <a
              href="#economy"
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <span className="text-2xl">
                  ◇
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Wallet
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Manage your K-Coins and digital rewards in one place.
              </p>

              <span className="mt-6 block text-sm font-semibold text-pink-400 transition group-hover:text-pink-300">
                Open Wallet →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* Events & Challenges */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
              Compete
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Events & Challenges
            </h2>

            <p className="mt-4 max-w-xl text-white/50">
              Compete, climb the leaderboard and prove yourself
              across the KPLAYO universe.
            </p>
          </div>

          <a
            href="#events"
            className="w-fit rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-pink-500 hover:text-pink-400"
          >
            View All Events →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Tournament */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  TOURNAMENT
                </span>

                <span className="text-xs text-white/35">
                  SOON
                </span>
              </div>

              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <span className="text-2xl font-black text-cyan-400">
                  #
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                KPLAYO Championship
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Compete against players and fight your way to the
                top of the leaderboard.
              </p>

              <a
                href="#events"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Tournament
              </a>
            </div>
          </article>

          {/* Challenge */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-pink-500/40">

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-400">
                  CHALLENGE
                </span>

                <span className="text-xs text-white/35">
                  SOON
                </span>
              </div>

              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
                <span className="text-2xl font-black text-pink-500">
                  ★
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Weekly Challenge
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Complete special challenges and earn exclusive
                KPLAYO rewards.
              </p>

              <a
                href="#events"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-pink-500 hover:text-pink-400"
              >
                View Challenge
              </a>
            </div>
          </article>

          {/* Leaderboard */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-cyan-400/40">

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/60">
                  LEADERBOARD
                </span>

                <span className="text-xs text-white/35">
                  SOON
                </span>
              </div>

              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <span className="text-2xl font-black">
                  🏆
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Global Rankings
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                See the best players, creators and competitors across
                KPLAYO.
              </p>

              <a
                href="#events"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Rankings
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* Recommended For You */}
      <section id="recommended" className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              For You
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Recommended For You
            </h2>

            <p className="mt-4 max-w-xl text-white/50">
              Discover games, creators and community content
              selected for your KPLAYO experience.
            </p>
          </div>

          <a
            href="#recommended"
            className="w-fit rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            View All →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Recommended Game */}
          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent">

              <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative rounded-2xl border border-cyan-400/20 bg-black/40 px-7 py-5 backdrop-blur">
                <span className="text-2xl font-black tracking-wider text-cyan-400">
                  GAME
                </span>
              </div>

              <span className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                FOR YOU
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                Recommended Game
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                A gaming experience selected for your interests.
              </p>

              <a
                href="#games"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Game
              </a>
            </div>
          </article>

          {/* LIVE Creator */}
          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-pink-500/40">

            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent">

              <div className="absolute h-40 w-40 rounded-full bg-pink-500/10 blur-3xl transition group-hover:bg-pink-500/20" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-pink-500/30 bg-black/50">
                <span className="text-2xl font-black text-pink-500">
                  C
                </span>
              </div>

              <span className="absolute left-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-bold">
                CREATOR
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                LIVE Creator
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Discover creators and their latest LIVE
                experiences.
              </p>

              <a
                href="#live"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-pink-500 hover:text-pink-400"
              >
                Watch LIVE
              </a>
            </div>
          </article>

          {/* Community Content */}
          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-pink-500/10">

              <div className="absolute h-40 w-40 rounded-full bg-blue-400/10 blur-3xl transition group-hover:bg-blue-400/20" />

              <div className="relative rounded-2xl border border-white/15 bg-black/40 px-6 py-5 backdrop-blur">
                <span className="text-xl font-black tracking-wider">
                  COMMUNITY
                </span>
              </div>

              <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                TRENDING
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">
                Community Content
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                See trending posts, players and creator activity.
              </p>

              <a
                href="#community"
                className="mt-6 block w-full rounded-xl border border-white/10 py-3 text-center text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Community
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* KPLAYO Universe */}
      <section id="universe" className="relative overflow-hidden border-y border-white/10 bg-white/[0.02]">

        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              The Future Is Connected
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Welcome to the
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                KPLAYO Universe
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
              One connected universe where games, LIVE entertainment,
              creators, community and digital experiences come together.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {/* Games */}
            <a
              href="#games"
              className="group rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <span className="text-xl font-black text-cyan-400">
                  G
                </span>
              </div>

              <h3 className="mt-5 font-bold">
                Games
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Play competitive and social games.
              </p>
            </a>

            {/* LIVE */}
            <a
              href="#live"
              className="group rounded-3xl border border-pink-500/15 bg-pink-500/[0.03] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-pink-500/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
                <span className="text-xl font-black text-pink-500">
                  ▶️
                </span>
              </div>

              <h3 className="mt-5 font-bold">
                LIVE
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Watch and interact in real time.
              </p>
            </a>

            {/* Community */}
            <a
              href="#community"
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <span className="text-xl font-black">
                  C
                </span>
              </div>

              <h3 className="mt-5 font-bold">
                Community
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Connect with players and creators.
              </p>
            </a>

            {/* Economy */}
            <a
              href="#economy"
              className="group rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <span className="text-xl font-black text-cyan-400">
                  K
                </span>
              </div>

              <h3 className="mt-5 font-bold">
                K-Coins
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Power your digital KPLAYO experience.
              </p>
            </a>

            {/* Future */}
            <a
              href="#universe"
              className="group rounded-3xl border border-pink-500/15 bg-pink-500/[0.03] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-pink-500/50 sm:col-span-2 lg:col-span-1"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10">
                <span className="text-xl font-black text-pink-500">
                  ∞
                </span>
              </div>

              <h3 className="mt-5 font-bold">
                Future
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/40">
                New experiences are coming.
              </p>
            </a>

          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="#games"
              className="inline-block rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              Enter KPLAYO Universe →
            </a>
          </div>

        </div>
      </section>

      {/* Professional Footer */}
      <footer className="border-t border-white/10 bg-black px-6 py-14">
        <div className="mx-auto max-w-7xl">

          {/* Main Footer */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
                  <span className="text-lg font-black text-cyan-400">
                    K
                  </span>
                </div>

                <div>
                  <p className="text-xl font-black tracking-[0.2em]">
                    KPLAYO
                  </p>

                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Social Gaming Universe
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Play games, watch LIVE streams, connect with the community,
                compete in events, and experience the growing KPLAYO universe.
              </p>

              {/* Social */}
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white/60 transition hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  X
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-white/60 transition hover:border-pink-500/50 hover:text-pink-500"
                >
                  IG
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-white/60 transition hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  YT
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-white/60 transition hover:border-pink-500/50 hover:text-pink-500"
                >
                  DC
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">
                <a href="/" className="transition hover:text-cyan-400">
                  Home
                </a>

                <a href="/games" className="transition hover:text-cyan-400">
                  Games
                </a>

                <a href="/live" className="transition hover:text-pink-500">
                  LIVE
                </a>

                <a href="/community" className="transition hover:text-cyan-400">
                  Community
                </a>

                <a href="/events" className="transition hover:text-pink-500">
                  Events
                </a>
              </div>
            </div>

            {/* KPLAYO */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                KPLAYO
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">
                <a href="/profile" className="transition hover:text-cyan-400">
                  Profile
                </a>

                <a href="/wallet" className="transition hover:text-cyan-400">
                  K-Coins
                </a>

                <a href="/leaderboards" className="transition hover:text-pink-500">
                  Leaderboards
                </a>

                <a href="/rewards" className="transition hover:text-cyan-400">
                  Rewards
                </a>

                <a href="/support" className="transition hover:text-pink-500">
                  Support
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">
                <a href="/about" className="transition hover:text-cyan-400">
                  About
                </a>

                <a href="/careers" className="transition hover:text-cyan-400">
                  Careers
                </a>

                <a href="/contact" className="transition hover:text-pink-500">
                  Contact
                </a>

                <a href="/privacy" className="transition hover:text-cyan-400">
                  Privacy
                </a>

                <a href="/terms" className="transition hover:text-pink-500">
                  Terms
                </a>
              </div>
            </div>

          </div>

          {/* Newsletter */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Stay Connected
                </p>

                <h3 className="mt-2 text-xl font-black sm:text-2xl">
                  Get the latest from KPLAYO.
                </h3>

                <p className="mt-2 text-sm text-white/40">
                  New games, events, LIVE updates and community news.
                </p>
              </div>

              <div className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-400/50"
                />

                <button className="rounded-xl border border-cyan-400 bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-300">
                  Join
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 KPLAYO.COM. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="/privacy" className="transition hover:text-white/70">
                Privacy
              </a>

              <a href="/terms" className="transition hover:text-white/70">
                Terms
              </a>

              <a href="/cookies" className="transition hover:text-white/70">
                Cookies
              </a>

              <a href="/support" className="transition hover:text-white/70">
                Support
              </a>
            </div>

          </div>

        </div>
      </footer>

    </main>
  );
}