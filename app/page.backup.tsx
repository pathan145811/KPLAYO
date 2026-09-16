import Header from "../components/layout/Header";

const games = [
  { title: "Neon Arena", tag: "ACTION", accent: "cyan" },
  { title: "Party Rush", tag: "SOCIAL", accent: "pink" },
  { title: "Galaxy Clash", tag: "ARCADE", accent: "purple" },
];

const liveRooms = [
  { name: "KPLAYO Live", viewers: "12.4K", type: "LIVE NOW" },
  { name: "Creator Stage", viewers: "8.7K", type: "TRENDING" },
  { name: "Game Night", viewers: "5.2K", type: "PLAYING" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[calc(100vh-4rem)] border-b border-white/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-12rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-pink-500/10 blur-[110px]"
          />

          <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#00e5ff]" />
                Social Gaming Universe
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
                Play.
                <span className="text-cyan-300"> Connect.</span>
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-pink-400 bg-clip-text text-transparent">
                  Live.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                Games, LIVE creators, social experiences and a virtual world —
                all connected inside KPLAYO.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#games"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold !text-black transition-all hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]"
                >
                  Explore Games
                </a>
                <a
                  href="#live"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:border-pink-400/40 hover:bg-pink-400/10"
                >
                  Watch LIVE
                </a>
              </div>

              <div className="mt-12 flex gap-8 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-black text-white">∞</p>
                  <p className="mt-1 text-xs text-zinc-500">Possibilities</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">24/7</p>
                  <p className="mt-1 text-xs text-zinc-500">LIVE Energy</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">01</p>
                  <p className="mt-1 text-xs text-zinc-500">Universe</p>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              <div className="absolute inset-[12%] rounded-[3rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-transparent to-pink-500/10 shadow-[0_0_100px_rgba(0,168,255,0.12)] backdrop-blur-sm" />
              <div className="absolute inset-[22%] rounded-[2.5rem] border border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl" />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-cyan-300/30 bg-[#090b10] shadow-[0_0_60px_rgba(0,229,255,0.18)]">
                <div className="h-5 w-5 rounded-full bg-pink-400 shadow-[0_0_25px_rgba(255,43,214,0.9)]" />
              </div>

              <div className="absolute left-[5%] top-[18%] rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">LIVE</p>
                <p className="mt-1 text-sm font-bold text-white">12.4K watching</p>
              </div>

              <div className="absolute bottom-[15%] right-[4%] rounded-2xl border border-pink-400/20 bg-pink-400/5 px-4 py-3 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-widest text-pink-300">CREATORS</p>
                <p className="mt-1 text-sm font-bold text-white">Create. Connect.</p>
              </div>

              <div className="absolute right-[10%] top-[8%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#00e5ff]" />
              <div className="absolute bottom-[12%] left-[12%] h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_18px_#ff2bd6]" />
            </div>
          </div>
        </section>

        {/* GAMES */}
        <section id="games" className="border-b border-white/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                  PLAY
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Enter the game.
                </h2>
                <p className="mt-4 max-w-xl text-zinc-400">
                  Fast, social and built for moments worth sharing.
                </p>
              </div>
              <a href="#" className="text-sm font-semibold text-cyan-300 hover:text-white">
                View all games →
              </a>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {games.map((game, index) => (
                <article
                  key={game.title}
                  className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f]"
                >
                  <div
                    className={`absolute inset-0 ${
                      game.accent === "cyan"
                        ? "bg-[radial-gradient(circle_at_70%_25%,rgba(0,229,255,.24),transparent_35%)]"
                        : game.accent === "pink"
                          ? "bg-[radial-gradient(circle_at_70%_25%,rgba(255,43,214,.24),transparent_35%)]"
                          : "bg-[radial-gradient(circle_at_70%_25%,rgba(139,92,246,.24),transparent_35%)]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute right-8 top-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-transform duration-500 group-hover:scale-125">
                    <span className="h-8 w-8 rounded-full bg-white/80 shadow-[0_0_35px_rgba(255,255,255,.35)]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">
                      {game.tag}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">{game.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Play with your crew and make every round count.
                    </p>
                  </div>

                  <span className="absolute right-6 top-6 text-xs font-bold text-white/50">
                    0{index + 1}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE */}
        <section id="live" className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,43,214,.08),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-300">
                LIVE
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Your world. Live.
              </h2>
              <p className="mt-4 text-zinc-400">
                Discover creators, join conversations and experience live
                entertainment together.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {liveRooms.map((room, index) => (
                <article
                  key={room.name}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-cyan-400/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,.12),transparent_25%)]" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ff2bd6]" />
                      {room.type}
                    </div>
                    <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {room.viewers}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white">{room.name}</h3>
                      <p className="mt-1 text-xs text-zinc-500">KPLAYO LIVE room</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                      →
                    </span>
                  </div>

                  <span className="absolute -right-8 -top-8 text-8xl font-black text-white/[0.025]">
                    0{index + 1}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="border-b border-white/5 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
                KPLAYO WORLD
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl">
                A universe beyond the screen.
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                Explore social spaces, meet people, express yourself through
                avatars and build your own identity inside KPLAYO World.
              </p>

              <div className="mt-8 grid max-w-lg grid-cols-2 gap-3">
                {["3D Avatars", "Virtual Spaces", "Interactive Gifts", "Social Events"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-zinc-200"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-purple-400/20 bg-[#09090d]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,.25),transparent_30%)]" />
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/20 shadow-[0_0_100px_rgba(139,92,246,.2)]" />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,.8)]" />

              <div className="absolute left-[12%] top-[18%] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white backdrop-blur">
                AVATAR DISTRICT
              </div>
              <div className="absolute bottom-[15%] right-[10%] rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-xs font-semibold text-cyan-200 backdrop-blur">
                SOCIAL CITY
              </div>
            </div>
          </div>
        </section>

        {/* CREATOR + AI */}
        <section id="social" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="relative overflow-hidden rounded-[2rem] border border-pink-400/15 bg-gradient-to-br from-pink-500/10 via-white/[0.03] to-transparent p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-300">
                  CREATOR CENTER
                </p>
                <h2 className="mt-4 max-w-md text-3xl font-black text-white sm:text-4xl">
                  Create your space. Build your community.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">
                  Tools for creators, LIVE hosts and communities — designed
                  around interaction, creativity and growth.
                </p>
                <div className="mt-8 inline-flex rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-white">
                  Creator ecosystem →
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-transparent p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                  KPLAYO AI
                </p>
                <h2 className="mt-4 max-w-md text-3xl font-black text-white sm:text-4xl">
                  Intelligence inside the universe.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">
                  A future-ready AI layer designed to help users discover,
                  create and navigate KPLAYO.
                </p>
                <div className="mt-8 inline-flex rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-bold text-white">
                  Explore KPLAYO AI →
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}