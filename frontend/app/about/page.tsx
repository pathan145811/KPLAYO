"use client";

import Link from "next/link";
import { useState } from "react";

const experiences = {
  VISION: {
    eyebrow: "THE VISION",
    title: "A social world built around play.",
    description:
      "KPLAYO brings gaming, LIVE entertainment, creators, communities and virtual experiences into one connected universe.",
    accent: "cyan",
    points: [
      "Play together instead of playing alone.",
      "Discover creators, communities and new experiences.",
      "Move naturally between Games, LIVE and Social.",
    ],
  },
  UNIVERSE: {
    eyebrow: "THE UNIVERSE",
    title: "One platform. Endless ways to connect.",
    description:
      "From quick games to live rooms and future virtual worlds, KPLAYO is designed as an evolving digital universe.",
    accent: "pink",
    points: [
      "Games designed for social interaction.",
      "LIVE experiences built around communities.",
      "A future-ready virtual world and creator ecosystem.",
    ],
  },
  COMMUNITY: {
    eyebrow: "THE COMMUNITY",
    title: "People are the heart of KPLAYO.",
    description:
      "KPLAYO is being built around connection — friends, creators, players, hosts and communities sharing experiences together.",
    accent: "purple",
    points: [
      "Find people who share your interests.",
      "Create moments worth coming back to.",
      "Build communities instead of simply collecting followers.",
    ],
  },
};

export default function AboutPage() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof experiences>("VISION");

  const active = experiences[activeTab];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute right-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-pink-500/[0.08] blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[25%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_72%)]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/[0.07] bg-black/50 backdrop-blur-xl">
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
              className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition hover:border-cyan-400/40 hover:bg-white/[0.08] sm:inline-flex"
              style={{ color: "#ffffff" }}
            >
              Home
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition duration-300 hover:scale-[1.03] hover:bg-cyan-300"
              style={{ color: "#000000" }}
            >
              Join KPLAYO
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />
              <span
                className="text-[9px] font-black uppercase tracking-[0.28em]"
                style={{ color: "#67e8f9" }}
              >
                About KPLAYO
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              MORE THAN
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                A GAME.
              </span>
              <span className="block">A WORLD.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              KPLAYO is a next-generation social gaming universe where
              entertainment, gaming, LIVE experiences and communities come
              together.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* WHITE BUTTON — BLACK TEXT */}
              <Link
                href="/games"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
                style={{ color: "#000000" }}
              >
                Explore Games
              </Link>

              {/* PINK BUTTON — WHITE TEXT */}
              <Link
                href="/live"
                className="inline-flex items-center justify-center rounded-2xl border border-pink-400/30 bg-pink-500/[0.12] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300 hover:border-pink-300/60 hover:bg-pink-500/[0.22]"
                style={{ color: "#ffffff" }}
              >
                Enter LIVE
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["01", "UNIVERSE"],
                ["24/7", "SOCIAL"],
                ["∞", "POSSIBILITIES"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl"
                >
                  <div className="text-xl font-black tracking-tight">
                    {number}
                  </div>
                  <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-500/[0.08] blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-500/[0.12] blur-[70px]" />

              <div className="relative rounded-[1.5rem] border border-white/[0.08] bg-black/60 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[9px] font-black uppercase tracking-[0.25em]"
                    style={{ color: "#67e8f9" }}
                  >
                    KPLAYO WORLD
                  </span>

                  <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white/35">
                    <span className="h-2 w-2 rounded-full bg-pink-400" />
                    LIVE
                  </span>
                </div>

                <div className="flex min-h-[370px] items-center justify-center">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-400/20">
                    <div className="absolute h-52 w-52 rounded-full border border-pink-400/20" />
                    <div className="absolute h-40 w-40 rounded-full border border-cyan-300/20" />

                    <div className="absolute left-7 top-12 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,1)]" />
                    <div className="absolute right-9 top-24 h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_25px_rgba(244,114,182,1)]" />
                    <div className="absolute bottom-12 left-24 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(192,132,252,1)]" />

                    <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_0_70px_rgba(0,180,255,0.15)]">
                      <img
                        src="/brand/kplayo_logo_horizontal_white_transparent.svg"
                        alt="KPLAYO"
                        className="w-24"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {["GAMES", "LIVE", "SOCIAL"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 text-center"
                    >
                      <div
                        className="text-[9px] font-black tracking-[0.18em]"
                        style={{
                          color:
                            index === 0
                              ? "#67e8f9"
                              : index === 1
                                ? "#f472b6"
                                : "#c084fc",
                        }}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mb-10 max-w-2xl">
            <div
              className="mb-4 text-[9px] font-black uppercase tracking-[0.28em]"
              style={{ color: "#67e8f9" }}
            >
              THE KPLAYO EXPERIENCE
            </div>

            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              Built for people who want more.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base">
              KPLAYO is designed as a connected ecosystem rather than a
              collection of disconnected features.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.35fr_0.65fr]">
            {/* Tabs */}
            <div className="space-y-3">
              {(Object.keys(experiences) as Array<keyof typeof experiences>).map(
                (tab) => {
                  const selected = activeTab === tab;

                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className="w-full rounded-2xl border p-5 text-left transition duration-300"
                      style={{
                        borderColor: selected
                          ? "rgba(103,232,249,0.35)"
                          : "rgba(255,255,255,0.07)",
                        backgroundColor: selected
                          ? "rgba(103,232,249,0.08)"
                          : "rgba(255,255,255,0.02)",
                        color: "#ffffff",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black tracking-[0.2em]">
                          {tab}
                        </span>

                        <span
                          style={{
                            color: selected ? "#67e8f9" : "#ffffff",
                            opacity: selected ? 1 : 0.3,
                          }}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  );
                },
              )}
            </div>

            {/* Active Experience */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10">
              <div
                className="absolute right-0 top-0 h-56 w-56 rounded-full blur-[100px]"
                style={{
                  backgroundColor:
                    active.accent === "cyan"
                      ? "rgba(34,211,238,0.10)"
                      : active.accent === "pink"
                        ? "rgba(236,72,153,0.10)"
                        : "rgba(168,85,247,0.10)",
                }}
              />

              <div className="relative">
                <div className="mb-5 text-[9px] font-black uppercase tracking-[0.25em] text-white/35">
                  {active.eyebrow}
                </div>

                <h3 className="max-w-2xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  {active.title}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                  {active.description}
                </p>

                <div className="mt-8 space-y-4">
                  {active.points.map((point, index) => (
                    <div
                      key={point}
                      className="flex gap-4 rounded-2xl border border-white/[0.07] bg-black/30 p-4"
                    >
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-black"
                        style={{
                          backgroundColor:
                            index === 0
                              ? "rgba(34,211,238,0.12)"
                              : index === 1
                                ? "rgba(236,72,153,0.12)"
                                : "rgba(168,85,247,0.12)",
                          color:
                            index === 0
                              ? "#67e8f9"
                              : index === 1
                                ? "#f472b6"
                                : "#c084fc",
                        }}
                      >
                        0{index + 1}
                      </div>

                      <p className="text-sm leading-6 text-white/65">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "SOCIAL FIRST",
              text: "Every experience is designed with connection at its core.",
              color: "#67e8f9",
            },
            {
              number: "02",
              title: "PLAYFUL",
              text: "Gaming should feel exciting, accessible and rewarding.",
              color: "#f472b6",
            },
            {
              number: "03",
              title: "FUTURE READY",
              text: "KPLAYO is built to evolve with creators, technology and communities.",
              color: "#c084fc",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
            >
              <div
                className="text-4xl font-black tracking-[-0.06em]"
                style={{ color: item.color }}
              >
                {item.number}
              </div>

              <h3 className="mt-10 text-sm font-black tracking-[0.16em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-pink-500/[0.08] p-8 sm:p-12 lg:p-16">
          <div className="absolute right-[-10%] top-[-50%] h-[500px] w-[500px] rounded-full bg-pink-500/[0.08] blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div
                className="mb-5 text-[9px] font-black uppercase tracking-[0.28em]"
                style={{ color: "#67e8f9" }}
              >
                OUR MISSION
              </div>

              <h2 className="max-w-4xl text-4xl font-black leading-[1] tracking-[-0.05em] sm:text-6xl">
                Play.
                <span className="text-cyan-300"> Connect.</span>
                <br />
                Live.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                We are building a place where digital entertainment feels
                alive, social and limitless.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {/* BLACK BUTTON — WHITE TEXT */}
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300 hover:scale-[1.02] hover:bg-[#111]"
                style={{ color: "#ffffff" }}
              >
                Join KPLAYO
              </Link>

              {/* WHITE BUTTON — BLACK TEXT */}
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition duration-300 hover:border-black/30 hover:bg-cyan-300"
                style={{ color: "#000000" }}
              >
                Back Home
              </Link>
            </div>
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

          <div className="flex flex-wrap gap-5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/30">
            <Link
              href="/games"
              className="transition hover:text-cyan-300"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Games
            </Link>

            <Link
              href="/live"
              className="transition hover:text-pink-300"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              LIVE
            </Link>

            <Link
              href="/community"
              className="transition hover:text-purple-300"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Community
            </Link>

            <Link
              href="/support"
              className="transition hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}