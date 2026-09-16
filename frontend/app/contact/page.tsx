"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const channels = [
  {
    id: "general",
    number: "01",
    label: "General",
    title: "Talk to KPLAYO",
    description:
      "Questions about the platform, your experience, features, or anything KPLAYO related.",
    accent: "#22d3ee",
    border: "rgba(34,211,238,0.30)",
    background: "rgba(34,211,238,0.06)",
  },
  {
    id: "partnerships",
    number: "02",
    label: "Partnerships",
    title: "Build with us",
    description:
      "For creators, brands, developers, publishers, and strategic collaboration opportunities.",
    accent: "#a78bfa",
    border: "rgba(167,139,250,0.30)",
    background: "rgba(167,139,250,0.06)",
  },
  {
    id: "support",
    number: "03",
    label: "Support",
    title: "Get help",
    description:
      "Need assistance with your account, games, LIVE, K-Coins, safety, or another platform issue?",
    accent: "#ec4899",
    border: "rgba(236,72,153,0.30)",
    background: "rgba(236,72,153,0.06)",
  },
];

const topics = [
  "Account & Login",
  "Games",
  "LIVE",
  "K-Coins",
  "Safety",
  "Partnership",
];

export default function ContactPage() {
  const [activeChannel, setActiveChannel] = useState("general");
  const [topic, setTopic] = useState("Account & Login");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const active =
    channels.find((channel) => channel.id === activeChannel) ?? channels[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    setSent(true);
  }

  function resetMessage() {
    setMessage("");
    setSent(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030409] text-white">
      {/* Ambient system background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[4%] top-[8%] h-80 w-80 rounded-full bg-cyan-400/[0.08] blur-[130px]" />
        <div className="absolute right-[5%] top-[22%] h-96 w-96 rounded-full bg-fuchsia-500/[0.08] blur-[150px]" />
        <div className="absolute bottom-[10%] left-[35%] h-96 w-96 rounded-full bg-blue-600/[0.07] blur-[150px]" />
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

          <nav className="hidden items-center gap-7 text-sm text-white/60 lg:flex">
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
            <Link href="/support" className="transition hover:text-white">
              Support
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

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_15px_rgba(244,114,182,0.9)]" />
              KPLAYO Contact Hub
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Start the
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
                conversation.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Whether you need help, want to build something together, or
              simply have a question, send your message into the KPLAYO
              network.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#message-console"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] transition hover:scale-[1.03]"
                style={{ color: "#000000" }}
              >
                Send a message
              </a>

              <Link
                href="/support"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] transition hover:bg-white/[0.08]"
                style={{ color: "#ffffff" }}
              >
                Open support
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              <span>Questions</span>
              <span>Support</span>
              <span>Partnerships</span>
              <span>Feedback</span>
            </div>
          </div>

          {/* Contact radar */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_75%_25%,rgba(236,72,153,0.10),transparent_30%)]" />

              <div className="relative flex h-full flex-col rounded-[2rem] border border-white/10 bg-black/35 p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
                    COMMUNICATION NETWORK
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    Online
                  </span>
                </div>

                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute h-64 w-64 rounded-full border border-cyan-300/10" />
                  <div className="absolute h-48 w-48 rounded-full border border-white/10" />
                  <div className="absolute h-32 w-32 rounded-full border border-fuchsia-400/10" />

                  <div className="absolute h-64 w-64 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-white/[0.08]" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.07] shadow-[0_0_70px_rgba(34,211,238,0.18)]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/50">
                      <span className="text-xl font-black tracking-[0.1em]">
                        K
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-[7%] top-[28%] rounded-2xl border border-cyan-300/20 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      General
                    </p>
                    <p className="mt-1 text-[10px] text-white/35">
                      Questions
                    </p>
                  </div>

                  <div className="absolute right-[4%] top-[25%] rounded-2xl border border-violet-300/20 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-violet-300">
                      Partners
                    </p>
                    <p className="mt-1 text-[10px] text-white/35">
                      Collaboration
                    </p>
                  </div>

                  <div className="absolute bottom-[18%] left-[18%] rounded-2xl border border-pink-300/20 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-pink-300">
                      Support
                    </p>
                    <p className="mt-1 text-[10px] text-white/35">
                      Assistance
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-lg font-black">01</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Message
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-lg font-black">03</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Channels
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-lg font-black">∞</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/25">
                      Possibilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channel selection */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
              Choose your channel
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Route your message.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
              Pick the conversation type that matches what you need. You can
              change it anytime before sending.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {channels.map((channel) => {
              const selected = activeChannel === channel.id;

              return (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => setActiveChannel(channel.id)}
                  aria-pressed={selected}
                  className="group rounded-[1.75rem] border p-6 text-left transition duration-300 hover:-translate-y-1"
                  style={{
                    color: "#ffffff",
                    borderColor: selected
                      ? channel.border
                      : "rgba(255,255,255,0.08)",
                    backgroundColor: selected
                      ? channel.background
                      : "rgba(255,255,255,0.025)",
                    boxShadow: selected
                      ? `0 0 35px ${channel.background}`
                      : "none",
                  }}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-xs font-black"
                      style={{
                        color: channel.accent,
                        backgroundColor: channel.background,
                      }}
                    >
                      {channel.number}
                    </div>

                    <span
                      className="text-lg transition-transform duration-300"
                      style={{
                        color: selected
                          ? channel.accent
                          : "rgba(255,255,255,0.25)",
                        transform: selected ? "translateX(3px)" : "none",
                      }}
                    >
                      →
                    </span>
                  </div>

                  <p
                    className="mt-8 text-[9px] font-bold uppercase tracking-[0.24em]"
                    style={{ color: channel.accent }}
                  >
                    {channel.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {channel.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {channel.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Message Console */}
      <section
        id="message-console"
        className="relative z-10 scroll-mt-20 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            {/* Console info */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              <div
                className="absolute right-0 top-0 h-64 w-64 rounded-full blur-[110px]"
                style={{ backgroundColor: active.background }}
              />

              <div className="relative">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: active.accent }}
                >
                  Active channel
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight">
                  {active.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/45">
                  {active.description}
                </p>

                <div className="mt-9 space-y-3">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: active.accent,
                        boxShadow: `0 0 14px ${active.accent}`,
                      }}
                    />

                    <div>
                      <p className="text-xs font-bold text-white/70">
                        Message routing
                      </p>
                      <p className="mt-1 text-[10px] text-white/30">
                        {active.label} channel selected
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.05] text-xs text-white/50">
                      ◈
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white/70">
                        Secure communication
                      </p>
                      <p className="mt-1 text-[10px] text-white/30">
                        Share only the information needed to help you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-9 border-t border-white/10 pt-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/25">
                    Need immediate help?
                  </p>

                  <Link
                    href="/support"
                    className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold transition hover:bg-white/[0.08]"
                    style={{ color: "#ffffff" }}
                  >
                    Visit Support Center
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              {sent ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] text-3xl text-cyan-300 shadow-[0_0_50px_rgba(34,211,238,0.16)]">
                    ✓
                  </div>

                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300">
                    Signal prepared
                  </p>

                  <h2 className="mt-3 text-4xl font-black">
                    Message received.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                    Your message has been prepared in this interactive
                    contact experience. A production backend can connect this
                    form to KPLAYO&apos;s support or communication system.
                  </p>

                  <button
                    type="button"
                    onClick={resetMessage}
                    className="mt-9 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:scale-[1.03]"
                    style={{ color: "#000000" }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                        Message console
                      </p>
                      <h2 className="mt-2 text-2xl font-black">
                        Compose signal
                      </h2>
                    </div>

                    <div
                      className="rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        color: active.accent,
                        borderColor: active.border,
                        backgroundColor: active.background,
                      }}
                    >
                      {active.label}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="topic"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35"
                    >
                      Topic
                    </label>

                    <select
                      id="topic"
                      value={topic}
                      onChange={(event) => setTopic(event.target.value)}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-sm outline-none transition focus:border-cyan-300/40"
                      style={{ color: "#ffffff" }}
                    >
                      {topics.map((item) => (
                        <option
                          key={item}
                          value={item}
                          className="bg-[#08090d] text-white"
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35"
                    >
                      Your message
                    </label>

                    <textarea
                      id="message"
                      value={message}
                      onChange={(event) => {
                        if (event.target.value.length <= 500) {
                          setMessage(event.target.value);
                        }
                      }}
                      placeholder="Tell us what you need..."
                      rows={9}
                      className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/40"
                    />

                    <div className="mt-2 flex justify-end text-[9px] uppercase tracking-[0.16em] text-white/25">
                      {message.length}/500
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <p className="text-[10px] leading-5 text-white/30">
                      Please avoid sending passwords, payment credentials,
                      authentication codes, or other highly sensitive
                      information through this form.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="mt-6 w-full rounded-full px-6 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    Transmit message →
                  </button>

                  <p className="mt-4 text-center text-[9px] uppercase tracking-[0.15em] text-white/20">
                    Topic: {topic}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Topics */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-300">
                Quick routes
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Looking for something specific?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setTopic(item);
                    document
                      .getElementById("message-console")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-xs font-bold text-white/60 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.05] hover:text-white"
                  style={{ color: "#ffffff" }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025]">
          <div className="relative px-7 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[110px]" />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-fuchsia-300">
                KPLAYO network
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                Play.
                <span className="text-white/30"> Connect.</span>
                <span className="block bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                  Live.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40">
                Your next conversation could become the beginning of
                something bigger inside the KPLAYO universe.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/community"
                  className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:scale-[1.03]"
                  style={{ color: "#000000" }}
                >
                  Explore community
                </Link>

                <Link
                  href="/"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.15em] transition hover:bg-white/[0.08]"
                  style={{ color: "#ffffff" }}
                >
                  Back to KPLAYO
                </Link>
              </div>
            </div>
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
                href="/support"
                className="transition hover:text-white"
              >
                Support
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