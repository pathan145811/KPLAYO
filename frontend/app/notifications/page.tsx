"use client";

import Link from "next/link";
import { useState } from "react";

type Filter = "All" | "LIVE" | "Social" | "Games" | "System";

const notifications = [
  {
    id: 1,
    type: "LIVE",
    title: "Neon Nights is LIVE",
    description: "A creator you follow just started a live session.",
    time: "2 min ago",
    unread: true,
    icon: "◉",
    tone: "pink",
  },
  {
    id: 2,
    type: "Social",
    title: "New connection request",
    description: "AlexNova wants to connect with you.",
    time: "18 min ago",
    unread: true,
    icon: "✦",
    tone: "cyan",
  },
  {
    id: 3,
    type: "Games",
    title: "Your squad is waiting",
    description: "Three players are ready for the next match.",
    time: "41 min ago",
    unread: true,
    icon: "◆",
    tone: "purple",
  },
  {
    id: 4,
    type: "LIVE",
    title: "You received a LIVE gift",
    description: "Your recent LIVE activity received a new reaction.",
    time: "1 hr ago",
    unread: false,
    icon: "♦️",
    tone: "pink",
  },
  {
    id: 5,
    type: "Social",
    title: "Someone followed you",
    description: "NovaPlayer started following your profile.",
    time: "2 hrs ago",
    unread: false,
    icon: "+",
    tone: "cyan",
  },
  {
    id: 6,
    type: "System",
    title: "Security check complete",
    description: "Your KPLAYO account security status is healthy.",
    time: "Yesterday",
    unread: false,
    icon: "✓",
    tone: "green",
  },
];

const filters: Filter[] = ["All", "LIVE", "Social", "Games", "System"];

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [items, setItems] = useState(notifications);

  const filtered =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.type === activeFilter);

  const unreadCount = items.filter((item) => item.unread).length;

  function markAllRead() {
    setItems((current) =>
      current.map((item) => ({ ...item, unread: false })),
    );
  }

  function toggleRead(id: number) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, unread: !item.unread } : item,
      ),
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* Ambient system glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-180px] top-[100px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />
        <div className="absolute right-[-180px] top-[80px] h-[500px] w-[500px] rounded-full bg-pink-500/[0.07] blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[150px]" />

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
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="transition hover:opacity-80">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/50 transition hover:border-cyan-400/30 hover:text-white"
            >
              Profile
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/50 transition hover:border-white/25 hover:text-white"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-[1450px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[34px] border border-white/[0.09] bg-white/[0.025]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.05] via-transparent to-pink-500/[0.06]" />

          {/* Radar decoration */}
          <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[520px] w-[520px] rounded-full border border-cyan-300/[0.08]" />
          <div className="pointer-events-none absolute right-[-20px] top-[-100px] h-[360px] w-[360px] rounded-full border border-cyan-300/[0.07]" />
          <div className="pointer-events-none absolute right-[100px] top-[20px] h-[120px] w-[120px] rounded-full border border-pink-400/[0.12]" />

          <div className="relative grid lg:grid-cols-[1fr_320px]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                  ◉
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-400">
                    KPLAYO Signal Network
                  </p>
                  <p className="mt-1 text-xs text-white/25">
                    Real-time activity center
                  </p>
                </div>
              </div>

              <h1 className="mt-8 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Your world
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                  is calling.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                Stay connected with your LIVE rooms, friends, games,
                achievements and important KPLAYO account activity.
              </p>
            </div>

            <div className="border-t border-white/[0.08] bg-black/20 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                Incoming Signals
              </p>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-6xl font-black tracking-tight text-white">
                  {unreadCount}
                </span>

                <span className="pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Unread
                </span>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Network Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col justify-between gap-4 rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-4 sm:flex-row sm:items-center sm:p-5">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                  activeFilter === filter
                    ? "bg-white text-black"
                    : "border border-white/[0.07] bg-white/[0.02] text-white/35 hover:border-cyan-400/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={markAllRead}
            className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]"
          >
            Mark All Read
          </button>
        </div>

        {/* Notification layout */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Feed */}
          <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                  Signal Feed
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Recent activity
                </h2>
              </div>

              <span className="text-xs text-white/20">
                {filtered.length} signals
              </span>
            </div>

            <div className="space-y-3">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleRead(item.id)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition sm:p-5 ${
                    item.unread
                      ? "border-cyan-400/15 bg-cyan-400/[0.035]"
                      : "border-white/[0.06] bg-black/20"
                  } hover:-translate-y-[1px] hover:border-white/15`}
                >
                  {item.unread && (
                    <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-300 to-pink-400" />
                  )}

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg ${
                      item.tone === "pink"
                        ? "border border-pink-400/20 bg-pink-400/[0.06] text-pink-300"
                        : item.tone === "cyan"
                          ? "border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
                          : item.tone === "purple"
                            ? "border border-purple-400/20 bg-purple-400/[0.06] text-purple-300"
                            : "border border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">
                        {item.type}
                      </span>

                      {item.unread && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      )}
                    </div>

                    <p className="mt-1 truncate text-sm font-bold text-white/75">
                      {item.title}
                    </p>

                    <p className="mt-1 line-clamp-1 text-xs text-white/25">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden shrink-0 text-right sm:block">
                    <p className="text-[10px] text-white/20">{item.time}</p>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/15">
                      {item.unread ? "Unread" : "Read"}
                    </p>
                  </div>

                  <span className="text-white/15 transition group-hover:text-cyan-300">
                    →
                  </span>
                </button>
              ))}

              {filtered.length === 0 && (
                <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">
                  <p className="text-sm font-semibold text-white/40">
                    No signals in this channel.
                  </p>
                  <p className="mt-2 text-xs text-white/20">
                    Try another notification filter.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Side panel */}
          <aside className="space-y-6">
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-pink-400">
                Signal Status
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">LIVE Alerts</span>
                  <span className="h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">Social Activity</span>
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">Game Updates</span>
                  <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">Security</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-cyan-400/[0.06] to-pink-500/[0.04] p-6">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-cyan-300/[0.08]" />

              <div className="relative">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                  Notification Control
                </p>

                <h3 className="mt-3 text-xl font-black">
                  Stay in control.
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/30">
                  Notification preferences will let you decide which KPLAYO
                  signals reach you.
                </p>

                <button
                  type="button"
                  className="mt-6 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 transition hover:border-cyan-400/20 hover:text-white"
                >
                  NOTIFICATION SETTINGS
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/15">
            KPLAYO · PLAY. CONNECT. LIVE.
          </p>

          <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/15">
            <span>Signal Network</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
            <span>Connected</span>
          </div>
        </div>
      </section>
    </main>
  );
}