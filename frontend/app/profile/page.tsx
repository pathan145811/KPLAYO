"use client";

import Link from "next/link";

const stats = [
  ["01", "Followers", "1.2K"],
  ["02", "Following", "486"],
  ["03", "Games", "37"],
  ["04", "Live Hours", "128"],
];

const badges = [
  ["✦", "Early Player", "KPLAYO Pioneer"],
  ["◈", "Social Core", "Community Builder"],
  ["⚡", "Live Energy", "LIVE Explorer"],
  ["◆", "Game Master", "37 Games Played"],
];

const activity = [
  ["GAME", "Entered Neon Arena", "12 min ago"],
  ["LIVE", "Joined a LIVE room", "1 hour ago"],
  ["SOCIAL", "Connected with 8 players", "3 hours ago"],
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-180px] top-[120px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />
        <div className="absolute right-[-160px] top-[260px] h-[500px] w-[500px] rounded-full bg-pink-500/[0.07] blur-[150px]" />
        <div className="absolute bottom-[-220px] left-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/[0.08] bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="transition hover:opacity-80">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2 sm:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                Online
              </span>
            </div>

            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/50 transition hover:border-white/25 hover:text-white"
            >
              Back Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="relative z-10 mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14">
        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:mb-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-cyan-400">
              Player Identity System
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your KPLAYO
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                Identity.
              </span>
            </h1>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/35">
            Your games, connections, achievements and digital presence —
            organized inside one personal KPLAYO command deck.
          </p>
        </div>

        {/* Identity Card */}
        <div className="relative overflow-hidden rounded-[34px] border border-white/[0.09] bg-white/[0.025]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.06] via-transparent to-pink-500/[0.06]" />

          <div className="pointer-events-none absolute -right-24 -top-40 h-[520px] w-[520px] rounded-full border border-cyan-300/[0.08]" />
          <div className="pointer-events-none absolute -right-5 -top-28 h-[370px] w-[370px] rounded-full border border-pink-400/[0.08]" />

          <div className="relative grid lg:grid-cols-[1.3fr_0.7fr]">
            {/* Identity */}
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-pink-500/20 blur-xl" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[32px] border border-cyan-300/30 bg-gradient-to-br from-cyan-300/20 via-purple-500/20 to-pink-500/20 shadow-[0_0_45px_rgba(34,211,238,0.12)] sm:h-36 sm:w-36">
                    <div className="absolute inset-3 rounded-[26px] border border-white/10" />

                    <span className="bg-gradient-to-br from-cyan-200 to-pink-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                      KP
                    </span>

                    <span className="absolute bottom-3 right-3 h-4 w-4 rounded-full border-4 border-[#09090d] bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                      KPLAYO Player
                    </h2>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Verified
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-white/35">
                    @kplayo_player
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
                    Exploring games, LIVE rooms and the growing KPLAYO social
                    universe.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-xl bg-white px-5 py-3 text-xs font-black tracking-wide text-black transition hover:bg-cyan-300"
                    >
                      EDIT PROFILE
                    </button>

                    <button
                      type="button"
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-bold tracking-wide text-white/60 transition hover:border-cyan-400/30 hover:text-white"
                    >
                      SHARE IDENTITY
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Level */}
            <div className="border-t border-white/[0.08] bg-black/20 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25">
                  Player Level
                </p>

                <span className="text-3xl font-black text-cyan-300">24</span>
              </div>

              <div className="mt-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-bold text-white/75">
                      Cosmic Explorer
                    </p>

                    <p className="mt-1 text-xs text-white/25">
                      Level 25 incoming
                    </p>
                  </div>

                  <span className="text-xs font-bold text-white/35">
                    72%
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-400 shadow-[0_0_15px_rgba(34,211,238,0.45)]" />
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/20">
                  7,240 / 10,000 XP
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Rank
                  </p>
                  <p className="mt-2 text-lg font-black text-white/80">
                    #2,481
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Streak
                  </p>
                  <p className="mt-2 text-lg font-black text-pink-300">
                    12 DAYS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([number, label, value]) => (
                <div
                  key={label}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan-400/20"
                >
                  <p className="text-[9px] font-bold tracking-[0.22em] text-cyan-400/50">
                    {number}
                  </p>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
                    {label}
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-tight text-white/85">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-400">
                    Player DNA
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    Your KPLAYO signature
                  </h3>
                </div>

                <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 sm:block">
                  04 Badges
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {badges.map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-pink-400/20"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-pink-400/15 bg-pink-400/[0.05] text-xl text-pink-300">
                      {icon}
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white/75">
                        {title}
                      </p>

                      <p className="mt-1 text-xs text-white/25">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            {/* Activity */}
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                    Recent Signal
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    Activity stream
                  </h3>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-white/30">
                  ↗️
                </span>
              </div>

              <div className="mt-7 space-y-3">
                {activity.map(([type, title, time]) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-black/20 p-4"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[8px] font-black ${
                        type === "GAME"
                          ? "border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
                          : type === "LIVE"
                            ? "border border-pink-400/20 bg-pink-400/[0.06] text-pink-300"
                            : "border border-purple-400/20 bg-purple-400/[0.06] text-purple-300"
                      }`}
                    >
                      {type}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white/70">
                        {title}
                      </p>

                      <p className="mt-1 text-xs text-white/20">
                        {time}
                      </p>
                    </div>

                    <span className="text-white/15">•••</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-br from-white/[0.035] to-transparent p-7 sm:p-9">
              <div className="absolute right-[-60px] top-[-70px] h-48 w-48 rounded-full border border-cyan-300/[0.08]" />
              <div className="absolute bottom-[-90px] left-[-60px] h-48 w-48 rounded-full border border-pink-400/[0.08]" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25">
                  Identity Controls
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Manage your space.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/30">
                  Control your account, security and personal KPLAYO
                  experience from one place.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold text-white/60 transition hover:border-cyan-400/30 hover:text-white"
                  >
                    ACCOUNT SETTINGS
                  </button>

                  <Link
                    href="/signin"
                    className="rounded-xl border border-pink-400/20 bg-pink-400/[0.05] px-5 py-3 text-xs font-bold text-pink-300 transition hover:bg-pink-400/10"
                  >
                    SIGN OUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/15">
            KPLAYO · PLAY. CONNECT. LIVE.
          </p>

          <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/15">
            <span>Identity Node 024</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
            <span>Online</span>
          </div>
        </div>
      </section>
    </main>
  );
}