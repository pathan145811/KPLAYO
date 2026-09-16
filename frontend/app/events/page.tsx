"use client";

import { useState } from "react";
import Link from "next/link";

const eventCategories = [
  {
    id: "tournaments",
    number: "01",
    label: "COMPETITIVE",
    title: "Tournaments",
    description:
      "Organized competitive experiences built around skill, strategy, and community.",
    accent: "#ec4899",
    soft: "rgba(236,72,153,0.10)",
    border: "rgba(236,72,153,0.28)",
    icon: "🏆",
  },
  {
    id: "games",
    number: "02",
    label: "PLAY",
    title: "Game Events",
    description:
      "Special game sessions, challenges, themed activities, and community play.",
    accent: "#22d3ee",
    soft: "rgba(34,211,238,0.10)",
    border: "rgba(34,211,238,0.28)",
    icon: "🎮",
  },
  {
    id: "community",
    number: "03",
    label: "SOCIAL",
    title: "Community",
    description:
      "Social celebrations, meetups, creator activities, and shared experiences.",
    accent: "#a78bfa",
    soft: "rgba(167,139,250,0.10)",
    border: "rgba(167,139,250,0.28)",
    icon: "◉",
  },
  {
    id: "special",
    number: "04",
    label: "LIMITED",
    title: "Special Events",
    description:
      "Limited-time experiences designed to create memorable KPLAYO moments.",
    accent: "#60a5fa",
    soft: "rgba(96,165,250,0.10)",
    border: "rgba(96,165,250,0.28)",
    icon: "✦",
  },
];

const upcomingEvents = [
  {
    title: "KPLAYO Tournament",
    type: "Competitive",
    date: "COMING SOON",
    description:
      "A competitive KPLAYO experience for players ready to test their skills.",
    accent: "#ec4899",
    soft: "rgba(236,72,153,0.12)",
    icon: "🏆",
  },
  {
    title: "Game Night",
    type: "Community Play",
    date: "COMING SOON",
    description:
      "Play together, meet other players, and experience community gaming sessions.",
    accent: "#22d3ee",
    soft: "rgba(34,211,238,0.12)",
    icon: "🎮",
  },
  {
    title: "Community Festival",
    type: "Social",
    date: "COMING SOON",
    description:
      "A large social celebration designed to bring the KPLAYO community together.",
    accent: "#a78bfa",
    soft: "rgba(167,139,250,0.12)",
    icon: "✦",
  },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("tournaments");

  const active =
    eventCategories.find((category) => category.id === activeCategory) ??
    eventCategories[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030409] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[5%] top-[5%] h-96 w-96 rounded-full bg-fuchsia-500/[0.07] blur-[140px]" />
        <div className="absolute right-[5%] top-[25%] h-[30rem] w-[30rem] rounded-full bg-cyan-400/[0.07] blur-[150px]" />
        <div className="absolute bottom-[5%] left-[35%] h-96 w-96 rounded-full bg-blue-600/[0.06] blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-30 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="shrink-0">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/55 lg:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/games" className="transition hover:text-white">
              Games
            </Link>
            <Link href="/live" className="transition hover:text-white">
              LIVE
            </Link>
            <Link href="/community" className="transition hover:text-white">
              Community
            </Link>
            <Link href="/events" className="text-white">
              Events
            </Link>
          </nav>

          <Link
            href="/"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-black transition hover:scale-[1.03]"
            style={{ color: "#000000" }}
          >
            Back Home
          </Link>
        </div>
      </header>

      {/* Hero / Event Command Center */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-pink-400/20 bg-pink-400/[0.05] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-pink-300">
              <span className="h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.9)]" />
              Event Command Center
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Enter the
              <span className="block bg-gradient-to-r from-pink-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                event layer.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Discover competitions, game nights, social experiences, and
              limited-time moments across the KPLAYO universe.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#upcoming"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] transition hover:scale-[1.03]"
                style={{ color: "#000000" }}
              >
                Explore events
              </a>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("categories")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:bg-white/[0.08]"
                style={{ color: "#ffffff" }}
              >
                Browse categories
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              <span>Competitive</span>
              <span>Social</span>
              <span>Community</span>
              <span>Special</span>
            </div>
          </div>

          {/* Event radar */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-12 rounded-full bg-pink-500/10 blur-[100px]" />

            <div className="relative aspect-square overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(236,72,153,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent_28%)]" />

              <div className="relative flex h-full flex-col rounded-[2.25rem] border border-white/10 bg-black/45 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/25">
                      EVENT NETWORK
                    </p>
                    <p className="mt-2 text-sm font-bold text-white/70">
                      Live event matrix
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-pink-300/15 bg-pink-300/[0.05] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-pink-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-300" />
                    Scanning
                  </div>
                </div>

                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute h-72 w-72 rounded-full border border-white/[0.06]" />
                  <div className="absolute h-56 w-56 rounded-full border border-pink-400/10" />
                  <div className="absolute h-40 w-40 rounded-full border border-cyan-400/10" />
                  <div className="absolute h-24 w-24 rounded-full border border-white/10" />

                  <div className="absolute h-72 w-72 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-white/[0.08]" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-pink-300/30 bg-pink-300/[0.08] shadow-[0_0_70px_rgba(236,72,153,0.18)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/60 text-xl">
                      ✦
                    </div>
                  </div>

                  <div className="absolute left-[4%] top-[22%] rounded-2xl border border-pink-300/20 bg-black/75 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-pink-300">
                      Tournament
                    </p>
                    <p className="mt-1 text-[10px] text-white/30">
                      Competitive
                    </p>
                  </div>

                  <div className="absolute right-[2%] top-[30%] rounded-2xl border border-cyan-300/20 bg-black/75 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Game Night
                    </p>
                    <p className="mt-1 text-[10px] text-white/30">
                      Community
                    </p>
                  </div>

                  <div className="absolute bottom-[16%] left-[15%] rounded-2xl border border-violet-300/20 bg-black/75 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-violet-300">
                      Festival
                    </p>
                    <p className="mt-1 text-[10px] text-white/30">
                      Social
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-lg font-black">04</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Categories
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-lg font-black">03</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Featured
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-lg font-black">∞</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Moments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="relative z-10 scroll-mt-20 border-y border-white/10 bg-white/[0.018]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
              Discover
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Choose your event layer.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40">
              Each event category brings a different way to play, connect,
              compete, or celebrate.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {eventCategories.map((category) => {
              const selected = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={selected}
                  className="group rounded-[1.75rem] border p-6 text-left transition duration-300 hover:-translate-y-1"
                  style={{
                    color: "#ffffff",
                    borderColor: selected
                      ? category.border
                      : "rgba(255,255,255,0.08)",
                    backgroundColor: selected
                      ? category.soft
                      : "rgba(255,255,255,0.025)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
                      style={{
                        color: category.accent,
                        backgroundColor: category.soft,
                      }}
                    >
                      {category.icon}
                    </div>

                    <span
                      className="text-[9px] font-black tracking-[0.2em]"
                      style={{ color: category.accent }}
                    >
                      {category.number}
                    </span>
                  </div>

                  <p
                    className="mt-8 text-[9px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: category.accent }}
                  >
                    {category.label}
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {category.description}
                  </p>

                  <div
                    className="mt-6 text-xs font-bold"
                    style={{
                      color: selected
                        ? category.accent
                        : "rgba(255,255,255,0.25)",
                    }}
                  >
                    {selected ? "Selected →" : "Explore →"}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active category detail */}
          <div
            className="mt-5 rounded-[2rem] border p-7 sm:p-9"
            style={{
              borderColor: active.border,
              backgroundColor: active.soft,
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: active.accent }}
                >
                  Active event layer
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  {active.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
                  {active.description}
                </p>
              </div>

              <div
                className="flex h-20 w-20 items-center justify-center rounded-3xl border text-3xl"
                style={{
                  color: active.accent,
                  borderColor: active.border,
                  backgroundColor: active.soft,
                }}
              >
                {active.icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section
        id="upcoming"
        className="relative z-10 scroll-mt-20 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-pink-300">
                Event queue
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Upcoming experiences.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                The KPLAYO event universe is being prepared. Featured
                experiences will appear here as they launch.
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
              Coming Soon
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1"
              >
                <div
                  className="relative flex h-56 items-center justify-center overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at 50% 45%, ${event.soft}, transparent 55%), rgba(255,255,255,0.02)`,
                  }}
                >
                  <div
                    className="absolute h-36 w-36 rounded-full blur-[65px]"
                    style={{ backgroundColor: event.soft }}
                  />

                  <div
                    className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border text-5xl transition duration-300 group-hover:scale-110"
                    style={{
                      color: event.accent,
                      borderColor: `${event.accent}35`,
                      backgroundColor: event.soft,
                      boxShadow: `0 0 55px ${event.soft}`,
                    }}
                  >
                    {event.icon}
                  </div>

                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white/40 backdrop-blur-xl">
                    {event.type}
                  </div>

                  <div
                    className="absolute right-5 top-5 rounded-full border px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: event.accent,
                      borderColor: `${event.accent}30`,
                      backgroundColor: event.soft,
                    }}
                  >
                    {event.date}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black">{event.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {event.description}
                  </p>

                  <button
                    type="button"
                    className="mt-7 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition hover:bg-white/[0.08]"
                    style={{ color: "#ffffff" }}
                  >
                    Coming soon →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Host event */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/30 p-8 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pink-500/[0.06] blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                  Future event tools
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                  Have an experience worth sharing?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                  KPLAYO is designed to grow beyond watching events. Future
                  creator and community tools can make it possible to build
                  experiences for the wider network.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.15em] transition hover:scale-[1.03]"
                style={{ color: "#000000" }}
              >
                Talk to KPLAYO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-300">
            KPLAYO event universe
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Your next
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              moment starts here.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40">
            Explore the platform while the next generation of KPLAYO events
            comes online.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/games"
              className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:scale-[1.03]"
              style={{ color: "#000000" }}
            >
              Explore Games
            </Link>

            <Link
              href="/live"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:bg-white/[0.08]"
              style={{ color: "#ffffff" }}
            >
              Enter LIVE
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/45">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <img
                src="/brand/kplayo_logo_horizontal_white_transparent.svg"
                alt="KPLAYO"
                className="h-8 w-auto"
              />

              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/25">
                Play. Connect. Live.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/30">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="/cookies"
                className="transition hover:text-white"
              >
                Cookies
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/20">
            © {new Date().getFullYear()} KPLAYO.COM. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}