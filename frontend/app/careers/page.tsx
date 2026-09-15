"use client";

import Link from "next/link";
import { useState } from "react";

const areas = [
  {
    number: "01",
    title: "ENGINEERING",
    short: "Build the engine.",
    description:
      "Create scalable web, gaming, social, AI and platform systems that power the KPLAYO universe.",
    accent: "#67e8f9",
    border: "rgba(103,232,249,0.25)",
    background: "rgba(103,232,249,0.07)",
    icon: "</>",
  },
  {
    number: "02",
    title: "DESIGN",
    short: "Shape the experience.",
    description:
      "Design premium interfaces, interactions and visual systems across every part of KPLAYO.",
    accent: "#f472b6",
    border: "rgba(244,114,182,0.25)",
    background: "rgba(244,114,182,0.07)",
    icon: "✦",
  },
  {
    number: "03",
    title: "GAMING",
    short: "Create the play.",
    description:
      "Help develop original games and interactive experiences built for social connection.",
    accent: "#a78bfa",
    border: "rgba(167,139,250,0.25)",
    background: "rgba(167,139,250,0.07)",
    icon: "◈",
  },
  {
    number: "04",
    title: "COMMUNITY",
    short: "Grow the network.",
    description:
      "Help players, creators and communities discover each other and build meaningful connections.",
    accent: "#22d3ee",
    border: "rgba(34,211,238,0.25)",
    background: "rgba(34,211,238,0.07)",
    icon: "◎",
  },
];

const values = [
  {
    number: "01",
    title: "BUILD BOLD",
    text: "We think beyond ordinary platforms and build experiences people remember.",
    accent: "#67e8f9",
  },
  {
    number: "02",
    title: "MOVE FAST",
    text: "Ideas become better when they are tested, shipped and improved quickly.",
    accent: "#f472b6",
  },
  {
    number: "03",
    title: "OWN IT",
    text: "Every contribution matters. We value initiative, responsibility and craftsmanship.",
    accent: "#a78bfa",
  },
];

export default function CareersPage() {
  const [activeArea, setActiveArea] = useState(0);

  const active = areas[activeArea];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-15%] top-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div className="absolute right-[-15%] top-[15%] h-[600px] w-[600px] rounded-full bg-pink-500/[0.07] blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[30%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/[0.07] bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] transition hover:bg-white/[0.08] sm:inline-flex"
              style={{ color: "#ffffff" }}
            >
              Home
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-white px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
              style={{ color: "#000000" }}
            >
              Join KPLAYO
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-pink-400/20 bg-pink-400/[0.07] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,0.9)]" />

              <span
                className="text-[9px] font-black uppercase tracking-[0.3em]"
                style={{ color: "#f9a8d4" }}
              >
                KPLAYO CAREERS
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              BUILD THE
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                NEXT WORLD.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Join the people building KPLAYO — a social gaming universe where
              games, LIVE entertainment, creators and communities come together.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
                style={{ color: "#000000" }}
              >
                Explore Opportunities
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300 hover:border-pink-400/40 hover:bg-pink-500/[0.08]"
                style={{ color: "#ffffff" }}
              >
                Back to KPLAYO
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {["GAMING", "SOCIAL", "CREATORS", "TECHNOLOGY"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-white/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-pink-500/[0.07] blur-[90px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/[0.07] bg-black/70 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[8px] font-black uppercase tracking-[0.25em]"
                    style={{ color: "#67e8f9" }}
                  >
                    KPLAYO / PEOPLE
                  </span>

                  <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.15em] text-white/30">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    BUILDING
                  </span>
                </div>

                <div className="flex min-h-[360px] items-center justify-center">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-400/15">
                    <div className="absolute h-52 w-52 rounded-full border border-pink-400/15" />
                    <div className="absolute h-40 w-40 rounded-full border border-purple-400/15" />

                    <div className="absolute left-7 top-12 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,1)]" />

                    <div className="absolute right-8 top-24 h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_25px_rgba(244,114,182,1)]" />

                    <div className="absolute bottom-12 left-24 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(192,132,252,1)]" />

                    <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_0_70px_rgba(0,180,255,0.14)]">
                      <img
                        src="/brand/kplayo_logo_horizontal_white_transparent.svg"
                        alt="KPLAYO"
                        className="w-24"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "CREATE", color: "#67e8f9" },
                    { label: "CONNECT", color: "#f472b6" },
                    { label: "GROW", color: "#c084fc" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-2 py-4 text-center"
                    >
                      <span
                        className="text-[8px] font-black tracking-[0.16em]"
                        style={{ color: item.color }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why KPLAYO */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <div
              className="mb-4 text-[9px] font-black uppercase tracking-[0.28em]"
              style={{ color: "#67e8f9" }}
            >
              WHY KPLAYO
            </div>

            <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Don&apos;t just join a company.
              <span className="block text-white/35">
                Help build a universe.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              KPLAYO is being built from the ground up. Every contributor has
              the opportunity to influence how the platform grows.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.number}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045]"
              >
                <div className="absolute right-[-20px] top-[-30px] text-[100px] font-black leading-none text-white/[0.025]">
                  {value.number}
                </div>

                <div className="relative">
                  <div
                    className="text-4xl font-black tracking-[-0.06em]"
                    style={{ color: value.accent }}
                  >
                    {value.number}
                  </div>

                  <h3 className="mt-10 text-sm font-black tracking-[0.18em]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section
        id="opportunities"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          {/* Selector */}
          <div>
            <div
              className="mb-4 text-[9px] font-black uppercase tracking-[0.28em]"
              style={{ color: "#f472b6" }}
            >
              OPPORTUNITIES
            </div>

            <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Find your
              <span className="block text-white/35">place here.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              As KPLAYO grows, opportunities will expand across technology,
              gaming, design, content, community and operations.
            </p>

            <div className="mt-8 space-y-2">
              {areas.map((area, index) => {
                const selected = activeArea === index;

                return (
                  <button
                    key={area.number}
                    type="button"
                    onClick={() => setActiveArea(index)}
                    className="flex w-full items-center justify-between rounded-2xl border p-4 text-left transition duration-300"
                    style={{
                      borderColor: selected
                        ? area.border
                        : "rgba(255,255,255,0.07)",
                      backgroundColor: selected
                        ? area.background
                        : "rgba(255,255,255,0.02)",
                      color: "#ffffff",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="text-[9px] font-black"
                        style={{
                          color: selected
                            ? area.accent
                            : "rgba(255,255,255,0.3)",
                        }}
                      >
                        {area.number}
                      </span>

                      <span className="text-[10px] font-black tracking-[0.16em]">
                        {area.title}
                      </span>
                    </div>

                    <span
                      className="text-lg"
                      style={{
                        color: selected
                          ? area.accent
                          : "rgba(255,255,255,0.25)",
                      }}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Opportunity */}
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10">
            <div
              className="absolute right-[-10%] top-[-15%] h-72 w-72 rounded-full blur-[110px]"
              style={{
                backgroundColor: active.background,
              }}
            />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border text-xl font-black"
                    style={{
                      borderColor: active.border,
                      backgroundColor: active.background,
                      color: active.accent,
                    }}
                  >
                    {active.icon}
                  </div>

                  <span
                    className="text-[9px] font-black uppercase tracking-[0.2em]"
                    style={{ color: active.accent }}
                  >
                    AREA {active.number}
                  </span>
                </div>

                <div className="mt-14">
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
                    {active.short}
                  </div>

                  <h3 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                    {active.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-8 text-white/50">
                    {active.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-white/[0.07] pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/25">
                    CURRENT STATUS
                  </span>

                  <span
                    className="rounded-full border px-3 py-1 text-[8px] font-black uppercase tracking-[0.16em]"
                    style={{
                      borderColor: active.border,
                      color: active.accent,
                      backgroundColor: active.background,
                    }}
                  >
                    BUILDING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-pink-500/[0.07] p-8 sm:p-12 lg:p-16">
          <div className="absolute right-[-10%] top-[-60%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.07] blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div
                className="mb-5 text-[9px] font-black uppercase tracking-[0.28em]"
                style={{ color: "#67e8f9" }}
              >
                THE FUTURE
              </div>

              <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                We&apos;re still
                <span className="text-cyan-300"> building.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                KPLAYO is currently growing through development. More roles and
                opportunities will appear as the platform moves toward launch.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 backdrop-blur-xl">
              <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
                CAREERS STATUS
              </div>

              <div className="mt-2 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />

                <span className="text-sm font-black">
                  OPENING SOON
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <div
            className="text-[9px] font-black uppercase tracking-[0.3em]"
            style={{ color: "#f472b6" }}
          >
            KPLAYO
          </div>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
            PLAY.
            <span className="text-cyan-300"> CONNECT.</span>
            <span className="block text-white/35">LIVE.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">
            We are building the next generation of social gaming.
          </p>

          <div className="mt-9">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
              style={{ color: "#000000" }}
            >
              Enter KPLAYO
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-7 w-auto"
            />

            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
              Play. Connect. Live.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-[9px] font-bold uppercase tracking-[0.15em]">
            <Link
              href="/games"
              className="transition hover:text-cyan-300"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Games
            </Link>

            <Link
              href="/live"
              className="transition hover:text-pink-300"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              LIVE
            </Link>

            <Link
              href="/community"
              className="transition hover:text-purple-300"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Community
            </Link>

            <Link
              href="/support"
              className="transition hover:text-white"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}