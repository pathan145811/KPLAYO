"use client";

import { useState } from "react";
import Link from "next/link";

const contactChannels = [
  {
    number: "01",
    icon: "◉",
    label: "GENERAL",
    title: "Talk to KPLAYO",
    description:
      "Questions, ideas, feedback or anything you want to tell the KPLAYO team.",
    accent: "#ff1493",
    glow: "rgba(255,20,147,0.18)",
  },
  {
    number: "02",
    icon: "↗️",
    label: "PARTNERSHIPS",
    title: "Build With Us",
    description:
      "Creators, brands, studios and businesses interested in working with KPLAYO.",
    accent: "#00aaff",
    glow: "rgba(0,170,255,0.18)",
  },
  {
    number: "03",
    icon: "✦",
    label: "SUPPORT",
    title: "Need Help?",
    description:
      "Account, safety, moderation, K-Coins, LIVE or platform-related support.",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
  },
];

const quickTopics = [
  "Account & Login",
  "Games",
  "LIVE",
  "K-Coins",
  "Safety",
  "Partnership",
];

export default function ContactPage() {
  const [topic, setTopic] = useState("General");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const maxCharacters = 500;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    setSent(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030407] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{ background: "rgba(255,20,147,0.10)" }}
        />
        <div
          className="absolute right-[-15%] top-[20%] h-[550px] w-[550px] rounded-full blur-[150px]"
          style={{ background: "rgba(0,170,255,0.10)" }}
        />
        <div
          className="absolute bottom-[-15%] left-[35%] h-[450px] w-[450px] rounded-full blur-[150px]"
          style={{ background: "rgba(168,85,247,0.08)" }}
        />
      </div>

      {/* Top navigation */}
      <header className="border-b border-white/[0.07] bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="KPLAYO home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <span className="text-lg font-black text-cyan-300">K</span>
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(255,20,147,0.9)]" />
            </div>

            <div>
              <div className="text-lg font-black tracking-[0.18em]">
                KPLAYO
              </div>
              <div className="text-[8px] uppercase tracking-[0.35em] text-white/35">
                Play. Connect. Live.
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            style={{ color: "#ffffff" }}
          >
            Back to KPLAYO
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-pink-400/20 bg-pink-400/[0.06] px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400 shadow-[0_0_14px_rgba(255,20,147,0.9)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink-300">
                KPLAYO Contact Hub
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Your message.
              <br />
              <span
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"
              >
                Our next move.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              KPLAYO is being built around people. Tell us what you need,
              what you want to see, or what we could build together.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Questions", "Ideas", "Support", "Partnerships"].map(
                (item, index) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-white/55"
                  >
                    <span
                      className={
                        index % 2 === 0
                          ? "mr-2 text-pink-400"
                          : "mr-2 text-cyan-400"
                      }
                    >
                      +
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Contact radar visual */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-[12%] rounded-full border border-cyan-400/15" />
            <div className="absolute inset-[22%] rounded-full border border-pink-400/15" />
            <div className="absolute inset-[32%] rounded-full border border-white/10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[58%] w-[58%] rounded-full border border-white/10 bg-white/[0.025] shadow-[0_0_100px_rgba(0,170,255,0.08)] backdrop-blur-xl" />
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/15 bg-black/80 shadow-[0_0_60px_rgba(255,20,147,0.18)]">
              <div className="text-center">
                <div className="text-3xl font-black tracking-[0.15em]">K</div>
                <div className="mt-1 text-[7px] uppercase tracking-[0.35em] text-white/35">
                  CONNECT
                </div>
              </div>
            </div>

            <div className="absolute left-[9%] top-[30%] rounded-2xl border border-pink-400/25 bg-black/75 px-4 py-3 backdrop-blur-xl">
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-pink-300">
                Ideas
              </div>
              <div className="mt-1 text-xs text-white/50">Send a thought</div>
            </div>

            <div className="absolute right-[4%] top-[18%] rounded-2xl border border-cyan-400/25 bg-black/75 px-4 py-3 backdrop-blur-xl">
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                Support
              </div>
              <div className="mt-1 text-xs text-white/50">We&apos;re here</div>
            </div>

            <div className="absolute bottom-[18%] left-[17%] rounded-2xl border border-purple-400/25 bg-black/75 px-4 py-3 backdrop-blur-xl">
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-purple-300">
                Connect
              </div>
              <div className="mt-1 text-xs text-white/50">Build together</div>
            </div>

            <div className="absolute bottom-[8%] right-[15%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(0,170,255,1)]" />
            <div className="absolute left-[19%] top-[13%] h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(255,20,147,1)]" />
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="border-y border-white/[0.07] bg-white/[0.012] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300">
              Choose your channel
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Where should we start?
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {contactChannels.map((channel) => (
              <div
                key={channel.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full blur-[65px] transition group-hover:scale-125"
                  style={{ background: channel.glow }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-3xl font-black"
                      style={{ color: channel.accent }}
                    >
                      {channel.icon}
                    </span>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                      {channel.number}
                    </span>
                  </div>

                  <div
                    className="mt-10 text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: channel.accent }}
                  >
                    {channel.label}
                  </div>

                  <h3 className="mt-3 text-2xl font-black">
                    {channel.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/45">
                    {channel.description}
                  </p>

                  <div
                    className="mt-7 flex items-center gap-2 text-sm font-bold"
                    style={{ color: channel.accent }}
                  >
                    Continue
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message console */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Side info */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-pink-300">
              Message Console
            </div>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Drop us a signal.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Select a topic and tell us what&apos;s on your mind. Your input
              helps shape what KPLAYO becomes.
            </p>

            <div className="mt-9">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                Quick topics
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {quickTopics.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTopic(item)}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    style={{
                      color: topic === item ? "#67e8f9" : "#ffffff",
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.035] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  ✦
                </div>

                <div>
                  <div className="text-sm font-bold">Building in public.</div>
                  <p className="mt-1 text-xs leading-5 text-white/40">
                    KPLAYO is evolving. Feedback today can become a feature
                    tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-9"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-pink-500/10 blur-[90px]" />

            {sent ? (
              <div className="relative flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-3xl text-cyan-300 shadow-[0_0_50px_rgba(0,170,255,0.15)]">
                  ✓
                </div>

                <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Signal received
                </div>

                <h3 className="mt-3 text-3xl font-black">
                  Thanks for reaching out.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                  Your message has been captured in this demo experience.
                  The production contact backend will be connected during the
                  relevant KPLAYO development phase.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setMessage("");
                  }}
                  className="mt-8 rounded-full bg-white px-7 py-3.5 text-sm font-bold transition hover:scale-[1.03]"
                  style={{ color: "#000000" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="relative mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/30">
                      New transmission
                    </div>
                    <div className="mt-1 text-lg font-bold">
                      Contact KPLAYO
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,170,255,1)]" />
                    Online
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                      Name
                    </span>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                      Email
                    </span>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-pink-400/50 focus:bg-pink-400/[0.03]"
                    />
                  </label>
                </div>

                <label className="mt-6 block">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                    Topic
                  </span>

                  <select
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    className="mt-2 w-full appearance-none rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white outline-none transition focus:border-purple-400/50"
                  >
                    <option value="General" className="bg-[#08090c]">
                      General
                    </option>
                    <option value="Account & Login" className="bg-[#08090c]">
                      Account & Login
                    </option>
                    <option value="Games" className="bg-[#08090c]">
                      Games
                    </option>
                    <option value="LIVE" className="bg-[#08090c]">
                      LIVE
                    </option>
                    <option value="K-Coins" className="bg-[#08090c]">
                      K-Coins
                    </option>
                    <option value="Safety" className="bg-[#08090c]">
                      Safety
                    </option>
                    <option value="Partnership" className="bg-[#08090c]">
                      Partnership
                    </option>
                  </select>
                </label>

                <label className="mt-6 block">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                      Message
                    </span>

                    <span className="text-[10px] text-white/25">
                      {message.length}/{maxCharacters}
                    </span>
                  </div>

                  <textarea
                    value={message}
                    maxLength={maxCharacters}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell us what you want to say..."
                    rows={7}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-pink-400/50 focus:bg-pink-400/[0.03]"
                  />
                </label>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs leading-5 text-white/30">
                    Topic:{" "}
                    <span className="font-semibold text-white/55">
                      {topic}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-white px-7 py-3.5 text-sm font-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]"
                    style={{ color: "#000000" }}
                  >
                    Send Message →
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-white/[0.07] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-400/10 text-xl text-pink-300">
            K
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/30">
            Until next time
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Play. Connect.{" "}
            <span className="text-cyan-300">Live.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
            Every great community starts with a connection. Yours could be
            the next one.
          </p>

          <Link
            href="/"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.14)]"
            style={{ color: "#000000" }}
          >
            Explore KPLAYO
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="font-bold tracking-[0.2em] text-white/50">
            KPLAYO
          </div>

          <div>Play. Connect. Live.</div>

          <div>© KPLAYO.COM</div>
        </div>
      </footer>
    </main>
  );
}