"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type RankingTab = "Global" | "Weekly" | "Games" | "Friends";

type Player = {
  rank: number;
  name: string;
  tag: string;
  xp: number;
  level: number;
  accent: string;
  status: string;
};

const players: Player[] = [
  {
    rank: 1,
    name: "Nova",
    tag: "@nova",
    xp: 98240,
    level: 48,
    accent: "#ff2f92",
    status: "Elite",
  },
  {
    rank: 2,
    name: "Shadow",
    tag: "@shadow",
    xp: 94180,
    level: 46,
    accent: "#22d3ee",
    status: "Rising",
  },
  {
    rank: 3,
    name: "Vortex",
    tag: "@vortex",
    xp: 90350,
    level: 44,
    accent: "#a855f7",
    status: "Elite",
  },
  {
    rank: 4,
    name: "PixelRush",
    tag: "@pixelrush",
    xp: 86120,
    level: 42,
    accent: "#3b82f6",
    status: "Active",
  },
  {
    rank: 5,
    name: "NightByte",
    tag: "@nightbyte",
    xp: 82490,
    level: 40,
    accent: "#14b8a6",
    status: "Active",
  },
  {
    rank: 6,
    name: "Kairo",
    tag: "@kairo",
    xp: 79310,
    level: 38,
    accent: "#f97316",
    status: "Rising",
  },
];

const tabs: RankingTab[] = ["Global", "Weekly", "Games", "Friends"];

const categories = [
  {
    title: "Global",
    label: "WORLDWIDE",
    description: "The wider KPLAYO competitive network.",
    accent: "#ff2f92",
    icon: "◎",
  },
  {
    title: "Weekly",
    label: "7 DAY RUSH",
    description: "Fresh rankings based on recent activity.",
    accent: "#22d3ee",
    icon: "↗",
  },
  {
    title: "Games",
    label: "GAME RANK",
    description: "Track performance across individual games.",
    accent: "#a855f7",
    icon: "◆",
  },
  {
    title: "Friends",
    label: "YOUR CIRCLE",
    description: "Compare progress with your social circle.",
    accent: "#3b82f6",
    icon: "◇",
  },
];

export default function LeaderboardsPage() {
  const [activeTab, setActiveTab] = useState<RankingTab>("Global");
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const visiblePlayers = useMemo(() => {
    if (activeTab === "Weekly") {
      return [...players].reverse();
    }

    if (activeTab === "Friends") {
      return players.slice(0, 4);
    }

    return players;
  }, [activeTab]);

  const activeCategory =
    categories.find((category) => category.title === activeTab) ??
    categories[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-[-12%] top-[4%] h-[420px] w-[420px] rounded-full blur-[140px]"
          style={{ background: "rgba(255,47,146,0.10)" }}
        />

        <div
          className="absolute right-[-10%] top-[28%] h-[500px] w-[500px] rounded-full blur-[160px]"
          style={{ background: "rgba(34,211,238,0.08)" }}
        />

        <div
          className="absolute bottom-[-10%] left-[35%] h-[420px] w-[420px] rounded-full blur-[150px]"
          style={{ background: "rgba(168,85,247,0.07)" }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-8 w-auto sm:h-9"
            />

            <span className="hidden border-l border-white/15 pl-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 sm:block">
              Rankings
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/games"
              className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400/30 hover:bg-white/[0.08] sm:block"
              style={{ color: "#ffffff" }}
            >
              Games
            </Link>

            <Link
              href="/profile"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-bold transition hover:bg-white/90"
              style={{ color: "#000000" }}
            >
              My Profile
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-pink-400/20 bg-pink-400/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_14px_rgba(255,47,146,0.9)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
                Competitive Network
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Rise.
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Compete.
              </span>
              <br />
              Lead.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Enter the KPLAYO competitive network. Track XP, follow your
              progression, and see where you stand across the social gaming
              universe.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("rankings")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-white px-7 py-3.5 text-sm font-black transition hover:scale-[1.02] hover:bg-white/90"
                style={{ color: "#000000" }}
              >
                View Rankings
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("my-ranking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-7 py-3.5 text-sm font-bold transition hover:border-cyan-300/60 hover:bg-cyan-400/15"
                style={{ color: "#ffffff" }}
              >
                My Ranking
              </button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-2xl font-black">∞</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Competition
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-2xl font-black">24/7</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Activity
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-2xl font-black">XP</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Progression
                </p>
              </div>
            </div>
          </div>

          {/* Competitive radar */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-square overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.025] shadow-2xl">
              <div className="absolute inset-[12%] rounded-full border border-cyan-400/10" />
              <div className="absolute inset-[23%] rounded-full border border-pink-400/15" />
              <div className="absolute inset-[34%] rounded-full border border-purple-400/20" />

              <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[82%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent" />

              <div className="absolute left-[18%] top-[27%] h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_25px_rgba(255,47,146,0.9)]" />
              <div className="absolute right-[20%] top-[39%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
              <div className="absolute bottom-[24%] left-[30%] h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)]" />

              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:h-44 sm:w-44">
                <div className="text-center">
                  <p className="text-[9px] font-black uppercase tracking-[0.35em] text-cyan-300">
                    KPLAYO
                  </p>
                  <p className="mt-2 text-4xl font-black tracking-[-0.06em]">
                    RANK
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-white/35">
                    NETWORK ONLINE
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                  Current Mode
                </p>
                <p className="mt-1 text-sm font-bold">Global Ranking</p>
              </div>

              <div className="absolute right-6 top-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] px-4 py-3 backdrop-blur-xl">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                  Signal
                </p>
                <p className="mt-1 text-sm font-bold">ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking categories */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8" id="rankings">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
              Ranking Systems
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Choose your arena.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/45">
              Different ranking views give you different ways to follow
              progression across KPLAYO.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const active = activeTab === category.title;

              return (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(category.title as RankingTab)}
                  className="group rounded-[28px] border p-6 text-left transition duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: active
                      ? `${category.accent}66`
                      : "rgba(255,255,255,0.08)",
                    background: active
                      ? `linear-gradient(145deg, ${category.accent}14, rgba(255,255,255,0.025))`
                      : "rgba(255,255,255,0.025)",
                    boxShadow: active
                      ? `0 0 45px ${category.accent}10`
                      : "none",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-xl font-black"
                      style={{
                        color: category.accent,
                        background: `${category.accent}12`,
                        border: `1px solid ${category.accent}25`,
                      }}
                    >
                      {category.icon}
                    </span>

                    <span
                      className="text-[9px] font-black tracking-[0.18em]"
                      style={{ color: active ? category.accent : "#ffffff66" }}
                    >
                      {active ? "ACTIVE" : category.label}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black">{category.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main ranking command center */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div
                className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em]"
                style={{ color: activeCategory.accent }}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {activeCategory.label}
              </div>

              <h2 className="text-3xl font-black sm:text-5xl">
                {activeCategory.title} Leaderboard
              </h2>

              <p className="mt-3 text-sm text-white/40">
                Rankings interface preview — live game data connects here.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const active = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="rounded-full border px-4 py-2 text-xs font-bold transition"
                    style={{
                      borderColor: active
                        ? `${activeCategory.accent}55`
                        : "rgba(255,255,255,0.10)",
                      background: active
                        ? `${activeCategory.accent}14`
                        : "rgba(255,255,255,0.035)",
                      color: active ? "#ffffff" : "rgba(255,255,255,0.50)",
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Podium */}
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {visiblePlayers.slice(0, 3).map((player, index) => (
              <button
                key={player.name}
                onClick={() => setSelectedPlayer(player)}
                className="relative overflow-hidden rounded-[30px] border p-6 text-left transition duration-300 hover:-translate-y-1"
                style={{
                  borderColor:
                    index === 0
                      ? "rgba(255,47,146,0.30)"
                      : "rgba(255,255,255,0.09)",
                  background:
                    index === 0
                      ? "linear-gradient(145deg, rgba(255,47,146,0.10), rgba(255,255,255,0.025))"
                      : "rgba(255,255,255,0.025)",
                }}
              >
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-[70px]"
                  style={{ background: `${player.accent}22` }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="text-4xl font-black text-white/20">
                    #{player.rank}
                  </span>

                  <span
                    className="rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em]"
                    style={{
                      color: player.accent,
                      background: `${player.accent}12`,
                      border: `1px solid ${player.accent}25`,
                    }}
                  >
                    {player.status}
                  </span>
                </div>

                <div className="relative mt-10 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black"
                    style={{
                      background: `${player.accent}15`,
                      color: player.accent,
                      border: `1px solid ${player.accent}30`,
                    }}
                  >
                    {player.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-black">{player.name}</h3>
                    <p className="text-xs text-white/35">{player.tag}</p>
                  </div>
                </div>

                <div className="relative mt-7 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                      XP
                    </p>
                    <p className="mt-1 text-xl font-black">
                      {player.xp.toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                      Level
                    </p>
                    <p className="mt-1 text-xl font-black">{player.level}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Ranking list */}
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025]">
            <div className="grid grid-cols-[60px_1fr_auto] items-center gap-4 border-b border-white/10 px-5 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/30 sm:grid-cols-[70px_1fr_120px_100px] sm:px-7">
              <span>Rank</span>
              <span>Player</span>
              <span className="hidden sm:block">Level</span>
              <span>XP</span>
            </div>

            <div>
              {visiblePlayers.map((player) => {
                const selected = selectedPlayer.name === player.name;

                return (
                  <button
                    key={player.name}
                    onClick={() => setSelectedPlayer(player)}
                    className="grid w-full grid-cols-[60px_1fr_auto] items-center gap-4 border-b border-white/[0.06] px-5 py-5 text-left transition last:border-b-0 hover:bg-white/[0.035] sm:grid-cols-[70px_1fr_120px_100px] sm:px-7"
                    style={{
                      background: selected
                        ? `${player.accent}08`
                        : "transparent",
                    }}
                  >
                    <span
                      className="text-lg font-black"
                      style={{
                        color:
                          player.rank <= 3
                            ? player.accent
                            : "rgba(255,255,255,0.28)",
                      }}
                    >
                      #{player.rank}
                    </span>

                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black"
                        style={{
                          color: player.accent,
                          background: `${player.accent}12`,
                          border: `1px solid ${player.accent}25`,
                        }}
                      >
                        {player.name.charAt(0)}
                      </span>

                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold">
                          {player.name}
                        </span>
                        <span className="block truncate text-xs text-white/30">
                          {player.tag}
                        </span>
                      </span>
                    </span>

                    <span className="hidden text-sm font-bold text-white/60 sm:block">
                      {player.level}
                    </span>

                    <span className="text-right text-sm font-black">
                      {player.xp.toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Selected player command card */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8" id="my-ranking">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.09] via-white/[0.025] to-purple-500/[0.05] p-7 sm:p-10">
            <div className="absolute right-[-8%] top-[-45%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.07] blur-[120px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                  Player Command Deck
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                  Your progression
                  <br />
                  starts here.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
                  Connect your KPLAYO account and your competitive identity
                  will become part of the ranking network.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/signin"
                    className="rounded-full bg-white px-6 py-3 text-sm font-black transition hover:bg-white/90"
                    style={{ color: "#000000" }}
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-6 py-3 text-sm font-bold transition hover:bg-cyan-300/15"
                    style={{ color: "#ffffff" }}
                  >
                    Create Account
                  </Link>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                      Selected Player
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {selectedPlayer.name}
                    </h3>
                  </div>

                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black"
                    style={{
                      color: selectedPlayer.accent,
                      background: `${selectedPlayer.accent}15`,
                      border: `1px solid ${selectedPlayer.accent}30`,
                    }}
                  >
                    {selectedPlayer.rank}
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                      XP
                    </p>
                    <p className="mt-2 text-xl font-black">
                      {selectedPlayer.xp.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                      Level
                    </p>
                    <p className="mt-2 text-xl font-black">
                      {selectedPlayer.level}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-[9px] font-black uppercase tracking-[0.18em]">
                    <span className="text-white/30">Progression</span>
                    <span style={{ color: selectedPlayer.accent }}>
                      78%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "78%",
                        background: `linear-gradient(90deg, ${selectedPlayer.accent}, #22d3ee)`,
                        boxShadow: `0 0 18px ${selectedPlayer.accent}66`,
                      }}
                    />
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-white/30">
                  Ranking data shown here is a UI preview until the live
                  KPLAYO ranking system is connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future competitive ecosystem */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7">
              <p className="text-3xl">01</p>
              <h3 className="mt-6 text-xl font-black">Game XP</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Progression systems can connect game performance with the
                wider KPLAYO identity.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7">
              <p className="text-3xl">02</p>
              <h3 className="mt-6 text-xl font-black">Seasonal Ranks</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Future seasons can create fresh competitive cycles and
                progression milestones.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7">
              <p className="text-3xl">03</p>
              <h3 className="mt-6 text-xl font-black">Social Status</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Competitive identity can become another layer of the KPLAYO
                social universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-white/10 px-5 py-24 text-center sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
            The network is waiting
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Build your
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">
              competitive identity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40">
            Play games, connect with people, build XP, and become part of the
            KPLAYO competitive universe.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/games"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-black transition hover:bg-white/90"
              style={{ color: "#000000" }}
            >
              Explore Games
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold transition hover:bg-white/[0.08]"
              style={{ color: "#ffffff" }}
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KPLAYO.COM — Play. Connect. Live.</p>

          <div className="flex flex-wrap gap-5">
            <Link className="transition hover:text-white" href="/about">
              About
            </Link>

            <Link className="transition hover:text-white" href="/support">
              Support
            </Link>

            <Link className="transition hover:text-white" href="/privacy">
              Privacy
            </Link>

            <Link className="transition hover:text-white" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}