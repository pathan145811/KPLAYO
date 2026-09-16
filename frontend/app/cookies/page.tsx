"use client";

import { useState } from "react";
import Link from "next/link";

type CookieType = {
  id: string;
  name: string;
  short: string;
  description: string;
  status: string;
  accent: string;
  border: string;
  surface: string;
  iconSurface: string;
  glow: string;
  details: string[];
};

const cookieTypes: CookieType[] = [
  {
    id: "essential",
    name: "Essential",
    short: "Core platform operations",
    description:
      "These technologies are required for KPLAYO to provide core functionality, security, authentication, navigation, and session continuity.",
    status: "Always active",
    accent: "#22d3ee",
    border: "rgba(34, 211, 238, 0.35)",
    surface: "rgba(34, 211, 238, 0.08)",
    iconSurface: "rgba(34, 211, 238, 0.16)",
    glow: "rgba(34, 211, 238, 0.20)",
    details: [
      "Account authentication",
      "Security and fraud prevention",
      "Session continuity",
      "Basic site functionality",
    ],
  },
  {
    id: "preferences",
    name: "Preferences",
    short: "Remember your experience",
    description:
      "Preference technologies help KPLAYO remember choices such as interface preferences and certain experience settings.",
    status: "Optional",
    accent: "#8b5cf6",
    border: "rgba(139, 92, 246, 0.35)",
    surface: "rgba(139, 92, 246, 0.08)",
    iconSurface: "rgba(139, 92, 246, 0.16)",
    glow: "rgba(139, 92, 246, 0.20)",
    details: [
      "Interface preferences",
      "Experience settings",
      "Remembered choices",
      "Personalized presentation",
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    short: "Understand platform usage",
    description:
      "Analytics technologies help us understand aggregated usage patterns so we can improve performance, usability, and platform experiences.",
    status: "Optional",
    accent: "#38bdf8",
    border: "rgba(56, 189, 248, 0.35)",
    surface: "rgba(56, 189, 248, 0.08)",
    iconSurface: "rgba(56, 189, 248, 0.16)",
    glow: "rgba(56, 189, 248, 0.20)",
    details: [
      "Aggregated usage patterns",
      "Performance insights",
      "Feature improvement",
      "Experience optimization",
    ],
  },
  {
    id: "advertising",
    name: "Advertising",
    short: "Relevant advertising measurement",
    description:
      "Advertising-related technologies may help measure campaigns, understand advertising performance, and support KPLAYO's platform revenue model.",
    status: "Optional",
    accent: "#ec4899",
    border: "rgba(236, 72, 153, 0.35)",
    surface: "rgba(236, 72, 153, 0.08)",
    iconSurface: "rgba(236, 72, 153, 0.16)",
    glow: "rgba(236, 72, 153, 0.20)",
    details: [
      "Campaign measurement",
      "Advertising performance",
      "Frequency management",
      "Platform monetization",
    ],
  },
];

const quickLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Support Center",
    href: "/support",
  },
  {
    label: "Contact KPLAYO",
    href: "/contact",
  },
];

export default function CookiesPage() {
  const [activeId, setActiveId] = useState("essential");
  const [preferencesEnabled, setPreferencesEnabled] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(false);

  const active =
    cookieTypes.find((item) => item.id === activeId) ?? cookieTypes[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030409] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[8%] top-[8%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[24%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[35%] h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="shrink-0">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/65 lg:flex">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="transition hover:text-white"
            >
              Games
            </Link>
            <Link
              href="/live"
              className="transition hover:text-white"
            >
              LIVE
            </Link>
            <Link
              href="/community"
              className="transition hover:text-white"
            >
              Community
            </Link>
            <Link
              href="/support"
              className="transition hover:text-white"
            >
              Support
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold transition hover:scale-[1.03]"
            style={{ color: "#000000" }}
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
              Cookie Control
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Your experience.
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
                Your control.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              KPLAYO uses cookies and similar technologies to keep the
              platform secure, remember selected preferences, understand
              usage, and support relevant platform experiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#control-center"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] transition hover:scale-[1.03]"
                style={{ color: "#000000" }}
              >
                Manage choices
              </a>

              <Link
                href="/privacy"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
                style={{ color: "#ffffff" }}
              >
                Privacy policy
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-white/35">
              <span>Privacy aware</span>
              <span>Security focused</span>
              <span>Transparent controls</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.12),transparent_30%)]" />

              <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-black/30 p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                    KPLAYO / CONTROL MATRIX
                  </span>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                    Live
                  </span>
                </div>

                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute h-64 w-64 rounded-full border border-cyan-300/10" />
                  <div className="absolute h-48 w-48 rounded-full border border-fuchsia-400/10" />
                  <div className="absolute h-32 w-32 rounded-full border border-white/10" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] shadow-[0_0_80px_rgba(34,211,238,0.2)]">
                    <div className="h-12 w-12 rounded-full border border-white/30 bg-white/[0.06]" />
                    <span className="absolute text-[10px] font-black tracking-[0.2em] text-white">
                      K
                    </span>
                  </div>

                  <div className="absolute left-[12%] top-[25%] rounded-2xl border border-cyan-300/20 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Essential
                    </p>
                    <p className="mt-1 text-xs text-white/45">Core access</p>
                  </div>

                  <div className="absolute right-[5%] top-[35%] rounded-2xl border border-fuchsia-300/20 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-fuchsia-300">
                      Optional
                    </p>
                    <p className="mt-1 text-xs text-white/45">Your choices</p>
                  </div>

                  <div className="absolute bottom-[16%] left-[22%] rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                      Privacy
                    </p>
                    <p className="mt-1 text-xs text-white/45">Transparent</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xl font-black text-white">01</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
                      Required
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xl font-black text-white">03</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
                      Optional
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xl font-black text-white">24/7</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
                      Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                The basics
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                What cookies do.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300">
                  ◈
                </div>
                <h3 className="text-lg font-bold">Keep things working</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">
                  Some technologies are necessary for authentication,
                  security, sessions, and core functionality.
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-400/10 text-xl text-violet-300">
                  ◇
                </div>
                <h3 className="text-lg font-bold">Remember choices</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">
                  Optional technologies can help preserve preferences and
                  improve how parts of the experience are presented.
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-400/10 text-xl text-pink-300">
                  ⌁
                </div>
                <h3 className="text-lg font-bold">Improve KPLAYO</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">
                  Aggregated analytics can help identify performance and
                  usability improvements across the platform.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Control Center */}
      <section
        id="control-center"
        className="relative z-10 scroll-mt-20 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-300">
              Control center
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Explore every layer.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/45">
              Select a technology category to see what it is designed to do.
              Required technologies cannot be switched off through this
              preference interface.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            {/* Categories */}
            <div className="space-y-3">
              {cookieTypes.map((item, index) => {
                const isActive = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={isActive}
                    className="w-full rounded-[1.5rem] border p-5 text-left transition duration-300 hover:-translate-y-0.5"
                    style={{
                      color: "#ffffff",
                      borderColor: isActive
                        ? item.border
                        : "rgba(255,255,255,0.08)",
                      backgroundColor: isActive
                        ? item.surface
                        : "rgba(255,255,255,0.025)",
                      boxShadow: isActive
                        ? `0 0 30px ${item.glow}`
                        : "none",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black"
                        style={{
                          color: item.accent,
                          backgroundColor: item.iconSurface,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold">{item.name}</h3>
                          <span
                            className="rounded-full px-2 py-1 text-[8px] font-bold uppercase tracking-[0.15em]"
                            style={{
                              color: item.accent,
                              backgroundColor: item.iconSurface,
                            }}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-white/40">
                          {item.short}
                        </p>
                      </div>

                      <span
                        className="text-lg transition-transform"
                        style={{
                          color: isActive ? item.accent : "rgba(255,255,255,0.3)",
                          transform: isActive ? "rotate(45deg)" : "none",
                        }}
                      >
                        +
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div
              className="relative overflow-hidden rounded-[2rem] border p-7 sm:p-9"
              style={{
                borderColor: active.border,
                backgroundColor: "rgba(255,255,255,0.025)",
                boxShadow: `0 0 80px ${active.glow}`,
              }}
            >
              <div
                className="absolute right-0 top-0 h-72 w-72 rounded-full blur-[110px]"
                style={{ backgroundColor: active.glow }}
              />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <div
                      className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black"
                      style={{
                        color: active.accent,
                        backgroundColor: active.iconSurface,
                      }}
                    >
                      K
                    </div>

                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.28em]"
                      style={{ color: active.accent }}
                    >
                      Technology layer
                    </p>

                    <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                      {active.name}
                    </h3>
                  </div>

                  <span
                    className="rounded-full border px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: active.accent,
                      borderColor: active.border,
                      backgroundColor: active.surface,
                    }}
                  >
                    {active.status}
                  </span>
                </div>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">
                  {active.description}
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {active.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: active.accent,
                          boxShadow: `0 0 14px ${active.accent}`,
                        }}
                      />
                      <span className="text-sm text-white/65">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="text-xs leading-6 text-white/30">
                    The exact technologies and vendors used may vary as KPLAYO
                    evolves. This page describes their intended functional
                    categories rather than guaranteeing a specific third-party
                    provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preference preview */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                Preference preview
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                See your choices.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
                These controls demonstrate how optional preferences can be
                presented. Your production consent implementation can connect
                these choices to the actual cookie-management system.
              </p>

              <div className="mt-7 rounded-2xl border border-yellow-300/10 bg-yellow-300/[0.03] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-200/70">
                  Implementation note
                </p>
                <p className="mt-2 text-xs leading-6 text-white/35">
                  This preview changes only the interface state. It does not
                  set or remove browser cookies by itself.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6 sm:p-8">
              <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm font-bold">Cookie preferences</p>
                  <p className="mt-1 text-xs text-white/35">
                    Optional categories
                  </p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Preview
                </span>
              </div>

              <div className="space-y-3">
                <PreferenceRow
                  title="Essential technologies"
                  description="Required for core platform functionality."
                  enabled={true}
                  locked={true}
                  onToggle={() => undefined}
                  accent="#22d3ee"
                />

                <PreferenceRow
                  title="Preferences"
                  description="Remember selected experience settings."
                  enabled={preferencesEnabled}
                  locked={false}
                  onToggle={() =>
                    setPreferencesEnabled((current) => !current)
                  }
                  accent="#8b5cf6"
                />

                <PreferenceRow
                  title="Analytics"
                  description="Help understand aggregated platform usage."
                  enabled={analyticsEnabled}
                  locked={false}
                  onToggle={() => setAnalyticsEnabled((current) => !current)}
                  accent="#38bdf8"
                />

                <PreferenceRow
                  title="Advertising"
                  description="Support campaign measurement and platform monetization."
                  enabled={advertisingEnabled}
                  locked={false}
                  onToggle={() =>
                    setAdvertisingEnabled((current) => !current)
                  }
                  accent="#ec4899"
                />
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="flex-1 rounded-full bg-white px-5 py-3.5 text-sm font-black transition hover:scale-[1.02]"
                  style={{ color: "#000000" }}
                >
                  Save preferences
                </button>

                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-bold transition hover:bg-white/[0.08]"
                  style={{ color: "#ffffff" }}
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-party and retention */}
      <section className="relative z-10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-fuchsia-300">
                Third parties
              </span>
              <h2 className="mt-4 text-3xl font-black">
                Some services may be external.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/45">
                KPLAYO may work with infrastructure, analytics, security,
                communications, advertising, or other service providers.
                Their technologies may be governed by their own privacy and
                cookie practices.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                Browser controls
              </span>
              <h2 className="mt-4 text-3xl font-black">
                Your browser has its own tools.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/45">
                Most modern browsers allow you to inspect, block, delete, or
                restrict cookies. Blocking some technologies may affect parts
                of the KPLAYO experience.
              </p>
            </article>
          </div>

          <div className="mt-5 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/[0.06] via-white/[0.025] to-fuchsia-500/[0.06] p-8 sm:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                  Important
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  Cookie practices can evolve with the KPLAYO platform.
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/45">
                  We may update this page when our technologies, services, or
                  legal requirements change. The latest version published on
                  KPLAYO should be treated as the current version.
                </p>
              </div>

              <Link
                href="/privacy"
                className="shrink-0 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-center text-sm font-bold transition hover:bg-white/[0.1]"
                style={{ color: "#ffffff" }}
              >
                Read privacy policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025]">
          <div className="relative px-7 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">
                KPLAYO privacy ecosystem
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                Play freely.
                <span className="block text-white/35">
                  Understand clearly.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45">
                Explore the policies and support resources behind your KPLAYO
                experience.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/privacy"
                  className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:scale-[1.03]"
                  style={{ color: "#000000" }}
                >
                  Privacy policy
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:bg-white/[0.08]"
                  style={{ color: "#ffffff" }}
                >
                  Contact KPLAYO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
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

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/35">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/25">
            © {new Date().getFullYear()} KPLAYO.COM. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

type PreferenceRowProps = {
  title: string;
  description: string;
  enabled: boolean;
  locked: boolean;
  onToggle: () => void;
  accent: string;
};

function PreferenceRow({
  title,
  description,
  enabled,
  locked,
  onToggle,
  accent,
}: PreferenceRowProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold">{title}</h3>

          {locked && (
            <span className="rounded-full bg-white/[0.06] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/35">
              Required
            </span>
          )}
        </div>

        <p className="mt-1 text-xs leading-5 text-white/35">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onToggle}
        disabled={locked}
        aria-pressed={enabled}
        aria-label={`${title} ${enabled ? "enabled" : "disabled"}`}
        className="relative h-7 w-12 shrink-0 rounded-full border transition"
        style={{
          borderColor: enabled
            ? accent
            : "rgba(255,255,255,0.12)",
          backgroundColor: enabled
            ? accent
            : "rgba(255,255,255,0.04)",
          opacity: locked ? 0.7 : 1,
        }}
      >
        <span
          className="absolute top-1 h-5 w-5 rounded-full bg-white transition"
          style={{
            left: enabled ? "24px" : "4px",
          }}
        />
      </button>
    </div>
  );
}