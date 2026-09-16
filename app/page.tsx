import Link from "next/link";
import Header from "../components/layout/Header";

const games = [
  { title: "Neon Arena", type: "ACTION", players: "Play Now", accent: "cyan" },
  { title: "Party Rush", type: "SOCIAL", players: "Play Now", accent: "pink" },
  { title: "Galaxy Clash", type: "ARCADE", players: "Play Now", accent: "purple" },
];

const liveRooms = [
  { name: "KPLAYO Live", category: "Entertainment", viewers: "12.4K" },
  { name: "Creator Stage", category: "Creator LIVE", viewers: "8.7K" },
  { name: "Game Night", category: "Gaming LIVE", viewers: "5.2K" },
];

const reels = [
  { creator: "@nova", title: "Night challenge unlocked", tag: "TRENDING", accent: "cyan" },
  { creator: "@zoya", title: "Best moment of the day", tag: "FOR YOU", accent: "pink" },
  { creator: "@ray", title: "Can you beat this?", tag: "CHALLENGE", accent: "purple" },
];

const features = [
  ["GAMES", "Play social, competitive and arcade experiences."],
  ["LIVE", "Watch creators, join rooms and interact in real time."],
  ["REELS", "Watch, create, like, comment, share and follow."],
  ["STREAKS", "Keep your daily activity alive and unlock milestones."],
  ["SOCIAL", "Find friends, communities and people to connect with."],
  ["K-COINS", "A virtual currency powering the KPLAYO ecosystem."],
  ["GIFTS", "Send virtual gifts and make LIVE moments interactive."],
  ["CREATOR CENTER", "Create, go LIVE and build your community."],
];

const worldFeatures = [
  "3D Avatars",
  "Virtual City",
  "Social Spaces",
  "Interactive Events",
  "Digital Identity",
  "Community Experiences",
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[calc(100vh-4rem)] border-b border-white/5">
          <div className="pointer-events-none absolute left-[-20rem] top-[-15rem] h-[45rem] w-[45rem] rounded-full bg-cyan-400/10 blur-[140px]" />
          <div className="pointer-events-none absolute right-[-15rem] top-[5rem] h-[40rem] w-[40rem] rounded-full bg-pink-500/10 blur-[140px]" />

          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_14px_#00e5ff]" />
                One Universe. Everything You Love.
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.4rem]">
                PLAY.
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-pink-300 bg-clip-text text-transparent">
                  WATCH.
                </span>
                <span className="block text-zinc-400">CONNECT.</span>
                <span className="block">REPEAT.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                Games, LIVE streams, Reels, Streaks, friends, creators,
                virtual gifts, K-Coins, KPLAYO World and AI — all connected
                in one social gaming universe.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#explore"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-black !text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(0,229,255,.3)]"
                >
                  Explore KPLAYO
                </Link>
                <Link
                  href="#live"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-400/10"
                >
                  🔴 Enter LIVE
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold text-zinc-500">
                <span className="rounded-full border border-white/10 px-3 py-2">🎮 Games</span>
                <span className="rounded-full border border-white/10 px-3 py-2">🔴 LIVE</span>
                <span className="rounded-full border border-white/10 px-3 py-2">🎬 Reels</span>
                <span className="rounded-full border border-white/10 px-3 py-2">🔥 Streaks</span>
                <span className="rounded-full border border-white/10 px-3 py-2">🌎 World</span>
              </div>
            </div>

            {/* HERO UNIVERSE */}
            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              <div className="absolute inset-[4%] animate-[spin_30s_linear_infinite] rounded-full border border-cyan-300/10 border-dashed" />
              <div className="absolute inset-[13%] rounded-full border border-pink-300/10 shadow-[0_0_120px_rgba(0,229,255,.08)]" />
              <div className="absolute inset-[23%] rounded-full border border-white/10" />

              <div className="absolute inset-[30%] rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-[#09090d] to-pink-500/10 shadow-[0_0_100px_rgba(0,229,255,.14)] backdrop-blur-xl">
                <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_25%,rgba(0,229,255,.2),transparent_30%),radial-gradient(circle_at_75%_75%,rgba(255,43,214,.18),transparent_32%)]" />
                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/10 bg-black/70 shadow-[0_0_70px_rgba(0,229,255,.25)]">
                  <div className="relative h-10 w-10">
                    <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 shadow-[0_0_28px_#ff2bd6]" />
                    <span className="absolute inset-0 rotate-45 rounded-full border border-cyan-300 border-l-transparent" />
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-[20%] rounded-2xl border border-pink-400/20 bg-[#100a12]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
                <p className="text-[9px] font-black tracking-[0.2em] text-pink-300">🔴 LIVE NOW</p>
                <p className="mt-1 text-sm font-bold text-white">12.4K watching</p>
              </div>

              <div className="absolute right-[-1%] top-[13%] rounded-2xl border border-cyan-400/20 bg-[#081116]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
                <p className="text-[9px] font-black tracking-[0.2em] text-cyan-300">🎬 REELS</p>
                <p className="mt-1 text-sm font-bold text-white">Watch & Create</p>
              </div>

              <div className="absolute bottom-[15%] right-[0] rounded-2xl border border-orange-400/20 bg-[#120d08]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
                <p className="text-[9px] font-black tracking-[0.2em] text-orange-300">🔥 STREAK</p>
                <p className="mt-1 text-sm font-bold text-white">Day 07</p>
              </div>

              <div className="absolute bottom-[13%] left-[3%] rounded-2xl border border-purple-400/20 bg-[#0e0a14]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
                <p className="text-[9px] font-black tracking-[0.2em] text-purple-300">🪙 K-COINS</p>
                <p className="mt-1 text-sm font-bold text-white">Virtual Economy</p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK DISCOVERY */}
        <section id="explore" className="relative border-b border-white/5 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                EXPLORE THE UNIVERSE
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Everything starts here.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(([title, description], index) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">
                      {["🎮", "🔴", "🎬", "🔥", "👥", "🪙", "🎁", "🎤"][index]}
                    </span>
                    <span className="text-[9px] font-bold text-zinc-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GAMES */}
        <section id="games" className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="pointer-events-none absolute right-[-12rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                  01 / GAMES
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                  Play something.
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                  Jump between competitive, arcade and social experiences
                  without leaving the KPLAYO universe.
                </p>
              </div>
              <span className="text-sm font-bold text-zinc-500">PLAY → CONNECT → REPEAT</span>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {games.map((game, index) => (
                <article
                  key={game.title}
                  className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20"
                >
                  <div
                    className={`absolute inset-0 ${
                      game.accent === "cyan"
                        ? "bg-[radial-gradient(circle_at_70%_25%,rgba(0,229,255,.25),transparent_40%)]"
                        : game.accent === "pink"
                          ? "bg-[radial-gradient(circle_at_70%_25%,rgba(255,43,214,.25),transparent_40%)]"
                          : "bg-[radial-gradient(circle_at_70%_25%,rgba(139,92,246,.25),transparent_40%)]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-zinc-300">
                    GAME 0{index + 1}
                  </div>

                  <div className="absolute right-8 top-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125">
                    <div
                      className={`h-10 w-10 rounded-full ${
                        game.accent === "cyan"
                          ? "bg-cyan-300 shadow-[0_0_40px_#00e5ff]"
                          : game.accent === "pink"
                            ? "bg-pink-400 shadow-[0_0_40px_#ff2bd6]"
                            : "bg-purple-400 shadow-[0_0_40px_#8b5cf6]"
                      }`}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[10px] font-black tracking-[0.25em] text-cyan-300">
                      {game.type}
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-white">{game.title}</h3>
                    <p className="mt-2 text-sm text-zinc-500">
                      Social gameplay built for moments with your crew.
                    </p>
                    <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-black !text-black transition-all hover:bg-cyan-200">
                      {game.players}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE */}
        <section id="live" className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="pointer-events-none absolute left-[-15rem] top-1/3 h-[35rem] w-[35rem] rounded-full bg-pink-500/10 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
                02 / LIVE
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                There&apos;s always something happening.
              </h2>
              <p className="mt-5 leading-7 text-zinc-400">
                Watch creators, join conversations, play together and become
                part of LIVE moments.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {liveRooms.map((room, index) => (
                <article
                  key={room.name}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/25"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/25 via-purple-500/10 to-cyan-400/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.15),transparent_25%)]" />
                    <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-[9px] font-black text-white">
                      LIVE
                    </div>
                    <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white">
                      {room.viewers}
                    </div>
                    <div className="absolute bottom-5 left-5 flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400 shadow-[0_0_12px_#ff2bd6]" />
                      <span className="text-xs font-bold text-white">LIVE NOW</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-white">{room.name}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{room.category}</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-all group-hover:border-pink-400/30 group-hover:bg-pink-400/10">
                      →
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-pink-300">🎤</p>
                <p className="mt-3 font-black text-white">Multi-Host</p>
                <p className="mt-1 text-xs text-zinc-500">Bring multiple people into one LIVE.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-cyan-300">🎁</p>
                <p className="mt-3 font-black text-white">Interactive Gifts</p>
                <p className="mt-1 text-xs text-zinc-500">Make LIVE moments feel interactive.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-purple-300">💬</p>
                <p className="mt-3 font-black text-white">Live Chat</p>
                <p className="mt-1 text-xs text-zinc-500">Talk, react and connect in real time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REELS */}
        <section id="reels" className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="pointer-events-none absolute right-[-12rem] top-1/4 h-[32rem] w-[32rem] rounded-full bg-purple-500/10 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-300">
                  03 / REELS
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                  Scroll. Discover. Create.
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                  Short videos, gaming moments, creators, trends and
                  challenges — made for the KPLAYO community.
                </p>
              </div>
              <span className="text-sm font-bold text-zinc-500">WATCH → CREATE → SHARE</span>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reels.map((reel, index) => (
                <article
                  key={reel.creator}
                  className="group relative aspect-[9/13] overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d] transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 ${
                      reel.accent === "cyan"
                        ? "bg-[radial-gradient(circle_at_50%_25%,rgba(0,229,255,.35),transparent_45%)]"
                        : reel.accent === "pink"
                          ? "bg-[radial-gradient(circle_at_50%_25%,rgba(255,43,214,.35),transparent_45%)]"
                          : "bg-[radial-gradient(circle_at_50%_25%,rgba(139,92,246,.35),transparent_45%)]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-black text-white backdrop-blur">
                    {reel.tag}
                  </span>

                  <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-sm">♡</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-sm">💬</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-sm">↗</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-sm">＋</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-sm font-black text-white">{reel.creator}</p>
                    <h3 className="mt-2 text-xl font-black text-white">{reel.title}</h3>
                    <p className="mt-3 text-xs text-zinc-400">
                      Music · Effects · Filters · Text · Stickers
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 h-10 w-10 rounded-full border border-white/20 bg-white/10" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STREAKS */}
        <section id="streaks" className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-300">
                  04 / STREAKS
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                  Keep the fire alive.
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                  Come back, play, watch, connect and complete challenges.
                  Your activity builds your KPLAYO streak.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Daily Login", "Play", "Watch LIVE", "Watch Reels", "Social", "Challenges"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-orange-400/15 bg-orange-400/[0.04] px-4 py-2 text-xs font-bold text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-transparent p-8 sm:p-12">
                <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="text-7xl drop-shadow-[0_0_30px_rgba(255,150,50,.45)]">🔥</div>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.3em] text-orange-300">
                    CURRENT STREAK
                  </p>
                  <p className="mt-2 text-7xl font-black tracking-[-0.06em] text-white">07</p>
                  <p className="text-sm text-zinc-500">days connected</p>

                  <div className="mt-8 grid w-full max-w-md grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                      <div key={`${day}-${index}`} className="flex flex-col items-center gap-2">
                        <span className="text-[9px] font-bold text-zinc-600">{day}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-400/30 bg-orange-400/10 text-xs font-black text-orange-200">
                          ✓
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 rounded-xl bg-white px-6 py-3 text-sm font-black !text-black hover:bg-orange-200">
                    Keep Streak Alive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL + ECONOMY */}
        <section id="social" className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                05 / SOCIAL
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                People make the universe.
              </h2>
              <p className="mt-5 leading-7 text-zinc-400">
                Follow creators, find friends, join communities, chat and
                share moments across KPLAYO.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-transparent p-8 sm:p-10">
                <p className="text-3xl">👥</p>
                <h3 className="mt-5 text-3xl font-black text-white">Connect your way.</h3>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["Friends", "Follow", "Chat", "Communities"].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-bold text-zinc-200">
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-pink-400/15 bg-gradient-to-br from-pink-400/10 via-white/[0.03] to-transparent p-8 sm:p-10">
                <p className="text-3xl">🎁</p>
                <h3 className="mt-5 text-3xl font-black text-white">Give moments a little more.</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  K-Coins and virtual gifts connect the social side of KPLAYO
                  with LIVE experiences and creator interactions.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold">🪙 K-Coins</span>
                  <span className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold">🎁 Gifts</span>
                  <span className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold">✨ Interactions</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="pointer-events-none absolute right-[-15rem] top-1/3 h-[38rem] w-[38rem] rounded-full bg-purple-500/10 blur-[140px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-300">
                06 / KPLAYO WORLD
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                Don&apos;t just play. Live inside it.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                A future virtual world where your avatar, identity,
                communities and experiences come together.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {worldFeatures.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-bold text-zinc-200 hover:border-purple-400/25">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-purple-400/20 bg-[#08080d] shadow-[0_0_100px_rgba(139,92,246,.1)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,.28),transparent_32%),radial-gradient(circle_at_30%_75%,rgba(0,229,255,.12),transparent_25%)]" />
              <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/15" />
              <div className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/10 bg-black/70 backdrop-blur-xl">
                <span className="text-4xl">🌎</span>
              </div>

              <div className="absolute left-[8%] top-[15%] rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-[9px] font-black tracking-[0.18em] text-white backdrop-blur">
                AVATAR DISTRICT
              </div>
              <div className="absolute right-[7%] top-[25%] rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-[9px] font-black tracking-[0.18em] text-cyan-200">
                SOCIAL CITY
              </div>
              <div className="absolute bottom-[13%] left-[13%] rounded-xl border border-purple-300/20 bg-purple-300/5 px-4 py-3 text-[9px] font-black tracking-[0.18em] text-purple-200">
                EVENT PLAZA
              </div>
            </div>
          </div>
        </section>

        {/* CREATOR + AI */}
        <section className="relative border-b border-white/5 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
                07 / CREATE
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
                Your content. Your community.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-pink-400/15 bg-gradient-to-br from-pink-500/10 via-white/[0.03] to-transparent p-8 sm:p-10">
                <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-pink-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                <div className="relative">
                  <p className="text-3xl">🎤</p>
                  <p className="mt-5 text-[10px] font-black tracking-[0.25em] text-pink-300">CREATOR CENTER</p>
                  <h3 className="mt-3 max-w-md text-3xl font-black text-white sm:text-4xl">
                    Go LIVE. Create Reels. Build your community.
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">
                    Creator tools designed around LIVE interaction,
                    short-form content and community building.
                  </p>
                </div>
              </article>

              <article className="group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-transparent p-8 sm:p-10">
                <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                <div className="relative">
                  <p className="text-3xl">🤖</p>
                  <p className="mt-5 text-[10px] font-black tracking-[0.25em] text-cyan-300">KPLAYO AI</p>
                  <h3 className="mt-3 max-w-md text-3xl font-black text-white sm:text-4xl">
                    An intelligent layer across the universe.
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">
                    Discover games, find content, navigate experiences and
                    unlock smarter ways to use KPLAYO.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="relative border-b border-white/5 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-cyan-400/[0.08] via-white/[0.03] to-pink-400/[0.08] p-8 sm:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-[10px] font-black tracking-[0.3em] text-cyan-300">
                    08 / EVENTS & CHALLENGES
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                    There&apos;s always another reason to come back.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
                    Daily challenges, community events, game activities and
                    streak milestones keep the universe moving.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {["Daily", "Weekly", "Games", "LIVE", "Reels", "Streaks"].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-bold text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-28 sm:py-36">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
              WELCOME TO KPLAYO
            </p>
            <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
              One place.
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-pink-300 bg-clip-text text-transparent">
                Endless ways to play.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-400">
              Play games. Watch LIVE. Create Reels. Keep Streaks. Meet people.
              Send gifts. Explore the world. Discover what&apos;s next.
            </p>

            <Link
              href="/signup"
              className="mt-9 inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-black !text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_0_45px_rgba(0,229,255,.3)]"
            >
              Join KPLAYO →
            </Link>

            <p className="mt-6 text-xs font-semibold tracking-wide text-zinc-600">
              PLAY. CONNECT. LIVE.
            </p>
          </div>
        </section>

        <footer className="border-t border-white/5 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
            <div>
              <p className="text-xl font-black tracking-[0.12em] text-white">KPLAYO</p>
              <p className="mt-1 text-xs text-zinc-600">Play. Connect. Live.</p>
            </div>
            <p className="text-xs text-zinc-600">The next generation social gaming universe.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
