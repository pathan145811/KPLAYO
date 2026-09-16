"use client";

import Link from "next/link";
import { useState } from "react";

type PrivacySection = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  border: string;
  glow: string;
  points: string[];
};

const sections: PrivacySection[] = [
  {
    id: "data",
    number: "01",
    title: "Data Protection",
    subtitle: "How information is safeguarded",
    description:
      "KPLAYO is being designed with appropriate technical and organizational safeguards for account, platform, and security-related information.",
    accent: "#ff3cac",
    border: "rgba(255,60,172,0.28)",
    glow: "rgba(255,60,172,0.16)",
    points: [
      "Account and authentication information",
      "Security and fraud-prevention signals",
      "Platform and service operations",
      "Appropriate access controls",
    ],
  },
  {
    id: "control",
    number: "02",
    title: "User Control",
    subtitle: "Your settings should stay yours",
    description:
      "KPLAYO aims to provide meaningful controls for account settings, privacy preferences, content, communications, and other user choices.",
    accent: "#00e5ff",
    border: "rgba(0,229,255,0.28)",
    glow: "rgba(0,229,255,0.16)",
    points: [
      "Account and profile controls",
      "Privacy preferences",
      "Communication settings",
      "Content and interaction choices",
    ],
  },
  {
    id: "activity",
    number: "03",
    title: "Platform Activity",
    subtitle: "Understanding your experience",
    description:
      "Information connected with games, LIVE experiences, social interactions, communities, and content may be used to operate relevant KPLAYO services.",
    accent: "#8b5cf6",
    border: "rgba(139,92,246,0.28)",
    glow: "rgba(139,92,246,0.16)",
    points: [
      "Games and gameplay interactions",
      "LIVE and social activity",
      "Community interactions",
      "Content and engagement signals",
    ],
  },
  {
    id: "technical",
    number: "04",
    title: "Technical Data",
    subtitle: "Keeping the platform running",
    description:
      "Technical information may be required to maintain performance, reliability, security, compatibility, and the overall KPLAYO experience.",
    accent: "#3b82f6",
    border: "rgba(59,130,246,0.28)",
    glow: "rgba(59,130,246,0.16)",
    points: [
      "Device and browser information",
      "Performance and diagnostic signals",
      "Network and technical information",
      "Security and reliability data",
    ],
  },
];

const principles = [
  {
    icon: "◈",
    title: "Privacy by Design",
    text: "Privacy considerations are part of the platform architecture rather than an afterthought.",
    accent: "#00e5ff",
  },
  {
    icon: "◎",
    title: "Meaningful Choice",
    text: "Users should have understandable controls over relevant settings and preferences.",
    accent: "#ff3cac",
  },
  {
    icon: "◇",
    title: "Responsible Use",
    text: "Information should be handled according to the purpose and requirements of the service.",
    accent: "#8b5cf6",
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("data");
  const [showDetails, setShowDetails] = useState(false);

  const active =
    sections.find((section) => section.id === activeSection) ?? sections[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-12%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-[-12%] top-[18%] h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/55 md:flex">
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
          </nav>

          <Link
            href="/signin"
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-bold transition hover:scale-105"
            style={{ color: "#000000" }}
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_14px_#00e5ff]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
                Privacy Command Center
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.04em] sm:text-7xl lg:text-[88px]">
              Your data.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                Your control.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              KPLAYO is being built with privacy, security, transparency, and
              meaningful user control at the center of the platform experience.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#privacy-controls"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-black transition hover:scale-105"
                style={{ color: "#000000" }}
              >
                Explore Privacy
              </a>

              <Link
                href="/cookies"
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3.5 text-sm font-bold transition hover:border-cyan-300/60 hover:bg-cyan-400/15"
                style={{ color: "#ffffff" }}
              >
                Cookie Controls
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/35">
              <span>Privacy by Design</span>
              <span>•</span>
              <span>Security First</span>
              <span>•</span>
              <span>User Control</span>
            </div>
          </div>

          {/* Privacy Core Visual */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-[12%] rounded-full border border-cyan-300/15" />
            <div className="absolute inset-[22%] rounded-full border border-pink-400/20" />
            <div className="absolute inset-[32%] rounded-full border border-purple-400/20" />

            <div className="absolute inset-[8%] animate-[spin_22s_linear_infinite] rounded-full border border-dashed border-cyan-300/15" />

            <div className="absolute left-[10%] top-[23%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_#00e5ff]" />
            <div className="absolute right-[13%] top-[32%] h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_25px_#ff3cac]" />
            <div className="absolute bottom-[18%] left-[28%] h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_25px_#8b5cf6]" />

            <div className="absolute inset-[30%] flex items-center justify-center rounded-[35%] border border-white/15 bg-white/[0.045] shadow-[0_0_100px_rgba(0,229,255,0.1)] backdrop-blur-xl">
              <div className="text-center">
                <div className="text-5xl">⌾</div>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300">
                  Privacy Core
                </p>
                <p className="mt-2 text-xs text-white/40">
                  Built into the experience
                </p>
              </div>
            </div>

            <div className="absolute left-0 top-[47%] rounded-2xl border border-cyan-400/20 bg-black/70 px-4 py-3 backdrop-blur-xl">
              <p className="text-[9px] uppercase tracking-[0.2em] text-cyan-300">
                Protection
              </p>
              <p className="mt-1 text-xs font-bold text-white">
                Account Data
              </p>
            </div>

            <div className="absolute bottom-[5%] right-0 rounded-2xl border border-pink-400/20 bg-black/70 px-4 py-3 backdrop-blur-xl">
              <p className="text-[9px] uppercase tracking-[0.2em] text-pink-300">
                Control
              </p>
              <p className="mt-1 text-xs font-bold text-white">
                User Choices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.015] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-pink-300">
              Core Principles
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Privacy is part of the architecture.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group rounded-[28px] border border-white/10 bg-black/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border text-xl"
                  style={{
                    color: principle.accent,
                    borderColor: `${principle.accent}40`,
                    backgroundColor: `${principle.accent}0d`,
                  }}
                >
                  {principle.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">{principle.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Controls */}
      <section
        id="privacy-controls"
        className="relative z-10 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            {/* Selector */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
                Privacy Map
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Understand the important layers.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                Select a privacy area to explore the type of information and
                controls that the KPLAYO platform is being designed around.
              </p>

              <div className="mt-8 space-y-3">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveSection(section.id)}
                      className="w-full rounded-2xl border p-4 text-left transition duration-300"
                      style={{
                        borderColor: isActive
                          ? section.border
                          : "rgba(255,255,255,0.08)",
                        backgroundColor: isActive
                          ? section.glow
                          : "rgba(255,255,255,0.02)",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="text-xs font-black tracking-[0.2em]"
                          style={{ color: section.accent }}
                        >
                          {section.number}
                        </span>

                        <div className="flex-1">
                          <p className="text-sm font-bold text-white">
                            {section.title}
                          </p>
                          <p className="mt-1 text-xs text-white/35">
                            {section.subtitle}
                          </p>
                        </div>

                        <span
                          className="text-lg"
                          style={{ color: section.accent }}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Detail */}
            <div
              className="relative overflow-hidden rounded-[32px] border bg-white/[0.025] p-7 sm:p-10"
              style={{ borderColor: active.border }}
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px]"
                style={{ backgroundColor: active.glow }}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p
                      className="text-xs font-black uppercase tracking-[0.28em]"
                      style={{ color: active.accent }}
                    >
                      Layer {active.number}
                    </p>

                    <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                      {active.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      {active.subtitle}
                    </p>
                  </div>

                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl"
                    style={{
                      color: active.accent,
                      borderColor: active.border,
                      backgroundColor: active.glow,
                    }}
                  >
                    ◉
                  </div>
                </div>

                <p className="mt-8 max-w-2xl text-sm leading-8 text-white/55">
                  {active.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {active.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/8 bg-black/25 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: active.accent,
                            boxShadow: `0 0 14px ${active.accent}`,
                          }}
                        />
                        <span className="text-sm text-white/70">{point}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <button
                    type="button"
                    onClick={() => setShowDetails(!showDetails)}
                    className="rounded-full border px-5 py-3 text-sm font-bold transition hover:bg-white/10"
                    style={{
                      borderColor: active.border,
                      color: "#ffffff",
                    }}
                  >
                    {showDetails ? "Hide Context" : "View Context"}{" "}
                    <span className="ml-2">{showDetails ? "↑" : "↓"}</span>
                  </button>

                  {showDetails && (
                    <div
                      className="mt-5 rounded-2xl border p-5 text-sm leading-7 text-white/45"
                      style={{
                        borderColor: active.border,
                        backgroundColor: active.glow,
                      }}
                    >
                      These categories represent the product-stage privacy
                      direction for KPLAYO. The final legal policy will depend
                      on the actual services, data flows, technologies,
                      jurisdictions, and applicable laws at launch.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Matrix */}
      <section className="relative z-10 border-t border-white/10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-pink-300">
                Information Matrix
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                What the final policy will explain.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Before public launch, KPLAYO&apos;s complete privacy policy
                should describe actual data practices rather than assumptions
                about future functionality.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Account Information", "Creating, securing, and managing accounts."],
                ["Platform Activity", "Games, LIVE, communities, content, and interactions."],
                ["Technical Information", "Device, performance, security, and service operations."],
                ["Communications", "Support requests and communications with KPLAYO."],
                ["Cookies & Similar Tools", "Technologies used for functionality and preferences."],
                ["User Rights", "Applicable choices, requests, and privacy rights."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20"
                >
                  <div className="flex gap-4">
                    <span className="text-xs font-black text-cyan-300/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-sm font-bold text-white">{title}</h3>
                      <p className="mt-2 text-xs leading-6 text-white/40">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="relative z-10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[34px] border border-yellow-300/15 bg-yellow-300/[0.035] p-7 sm:p-10">
            <div className="absolute right-[-8%] top-[-70%] h-[400px] w-[400px] rounded-full bg-yellow-300/[0.06] blur-[100px]" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-300/20 bg-yellow-300/10 text-yellow-200">
                    !
                  </span>

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-200">
                    Product-Stage Notice
                  </p>
                </div>

                <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                  This is not the final legal privacy policy.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  This page communicates KPLAYO&apos;s current privacy
                  direction. The final policy will be prepared and reviewed
                  before public launch and will reflect the actual services,
                  technologies, data practices, applicable laws, and user
                  rights at that time.
                </p>
              </div>

              <Link
                href="/support"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-white px-6 py-3.5 text-sm font-black transition hover:scale-105"
                style={{ color: "#000000" }}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            KPLAYO Trust Layer
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Play freely.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
              Know your choices.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45">
            A social gaming universe should make the experience exciting while
            keeping privacy and responsible data practices visible.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/cookies"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-black transition hover:scale-105"
              style={{ color: "#000000" }}
            >
              Cookie Center
            </Link>

            <Link
              href="/terms"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold transition hover:border-white/30 hover:bg-white/[0.08]"
              style={{ color: "#ffffff" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/35 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-white/70">KPLAYO</p>
            <p className="mt-1">Play. Connect. Live.</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/privacy" className="text-white/70">
              Privacy
            </Link>
            <Link href="/cookies" className="transition hover:text-white">
              Cookies
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/support" className="transition hover:text-white">
              Support
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}