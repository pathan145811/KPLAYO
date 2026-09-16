"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type RewardCategory = "Daily" | "Achievements" | "Bonuses" | "Special";

const categories = [
  {
    id: "Daily" as RewardCategory,
    label: "DAILY",
    title: "Daily Rewards",
    description:
      "Return regularly, build your streak, and unlock the next reward.",
    accent: "#ff2f92",
    icon: "✦",
  },
  {
    id: "Achievements" as RewardCategory,
    label: "MILESTONES",
    title: "Achievements",
    description:
      "Complete meaningful milestones across the KPLAYO universe.",
    accent: "#22d3ee",
    icon: "◇",
  },
  {
    id: "Bonuses" as RewardCategory,
    label: "BOOST",
    title: "Bonuses",
    description:
      "Special progression boosts connected to eligible activities.",
    accent: "#a855f7",
    icon: "↗",
  },
  {
    id: "Special" as RewardCategory,
    label: "LIMITED",
    title: "Special Rewards",
    description:
      "Limited-time experiences, drops, and exclusive KPLAYO moments.",
    accent: "#3b82f6",
    icon: "◆",
  },
];

const rewards = [
  {
    title: "Daily Drop",
    category: "Daily",
    description: "A daily reward slot waiting to be activated.",
    icon: "✦",
    accent: "#ff2f92",
    requirement: "Daily check-in",
  },
  {
    title: "First Milestone",
    category: "Achievements",
    description: "Reach your first progression milestone.",
    icon: "◇",
    accent: "#22d3ee",
    requirement: "100 XP",
  },
  {
    title: "XP Surge",
    category: "Bonuses",
    description: "A future boost designed around eligible activities.",
    icon: "↗",
    accent: "#a855f7",
    requirement: "Activity bonus",
  },
  {
    title: "Creator Drop",
    category: "Special",
    description: "A limited KPLAYO experience connected to special events.",
    icon: "◆",
    accent: "#3b82f6",
    requirement: "Limited",
  },
  {
    title: "Community Spark",
    category: "Achievements",
    description: "A future reward for meaningful community participation.",
    icon: "◎",
    accent: "#14b8a6",
    requirement: "Community",
  },
  {
    title: "Event Vault",
    category: "Special",
    description: "Unlockable experiences tied to selected KPLAYO events.",
    icon: "⬡",
    accent: "#f97316",
    requirement: "Event",
  },
];

export default function RewardsPage() {
  const [activeCategory, setActiveCategory] =
    useState<RewardCategory>("Daily");
  const [claimed, setClaimed] = useState(false);

  const active = useMemo(
    () =>
      categories.find((category) => category.id === activeCategory) ??
      categories[0],
    [activeCategory],
  );

  const visibleRewards = rewards.filter(
    (reward) => reward.category === activeCategory,
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* Ambient system */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-[-12%] top-[4%] h-[430px] w-[430px] rounded-full blur-[150px]"
          style={{ background: "rgba(255,47,146,0.10)" }}
        />

        <div
          className="absolute right-[-12%] top-[30%] h-[500px] w-[500px] rounded-full blur-[160px]"
          style={{ background: "rgba(34,211,238,0.08)" }}
        />

        <div
          className="absolute bottom-[-15%] left-[35%] h-[450px] w-[450px] rounded-full blur-[160px]"
          style={{ background: "rgba(168,85,247,0.07)" }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
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

            <span className="hidden border-l border-white/15 pl-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/35 sm:block">
              Rewards
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/events"
              className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold transition hover:bg-white/[0.08] sm:block"
              style={{ color: "#ffffff" }}
            >
              Events
            </Link>

            <Link
              href="/profile"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-black transition hover:bg-white/90"
              style={{ color: "#000000" }}
            >
              My Profile
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-pink-400/20 bg-pink-400/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_16px_rgba(255,47,146,0.9)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
                Reward Vault Online
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Play More.
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Unlock More.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Every game, event, social moment, and eligible activity can
              become part of your KPLAYO progression journey.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("reward-vault")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-white px-7 py-3.5 text-sm font-black transition hover:scale-[1.02] hover:bg-white/90"
                style={{ color: "#000000" }}
              >
                Explore Rewards
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("my-rewards")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-7 py-3.5 text-sm font-bold transition hover:border-cyan-300/60 hover:bg-cyan-400/15"
                style={{ color: "#ffffff" }}
              >
                My Rewards
              </button>
            </div>

            {/* Progress metrics */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-2xl font-black">01</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                  Reward Level
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-2xl font-black">000</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                  XP Earned
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-2xl font-black">0</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                  Unlocked
                </p>
              </div>
            </div>
          </div>

          {/* Reward vault visual */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="relative aspect-square overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.025]">
              <div
                className="absolute inset-[10%] rounded-full border border-pink-400/10"
                style={{
                  boxShadow: "inset 0 0 80px rgba(255,47,146,0.04)",
                }}
              />

              <div className="absolute inset-[22%] rounded-full border border-cyan-400/15" />

              <div className="absolute inset-[34%] rounded-full border border-purple-400/20" />

              <div className="absolute left-1/2 top-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-[85%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent" />

              {/* Vault core */}
              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 shadow-[0_0_90px_rgba(255,47,146,0.10)] backdrop-blur-xl sm:h-48 sm:w-48">
                <div className="text-center">
                  <div className="text-4xl">✦</div>

                  <p className="mt-3 text-[9px] font-black uppercase tracking-[0.35em] text-pink-300">
                    KPLAYO
                  </p>

                  <p className="mt-1 text-2xl font-black tracking-[-0.04em]">
                    VAULT
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Locked Rewards
                  </p>
                </div>
              </div>

              {/* Orbit points */}
              <div className="absolute left-[18%] top-[25%] flex h-10 w-10 items-center justify-center rounded-full border border-pink-400/25 bg-pink-400/10 text-pink-300 shadow-[0_0_25px_rgba(255,47,146,0.15)]">
                ✦
              </div>

              <div className="absolute right-[17%] top-[34%] flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                ◇
              </div>

              <div className="absolute bottom-[21%] left-[24%] flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/25 bg-purple-400/10 text-purple-300">
                ◆
              </div>

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-xl">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                  Vault Status
                </p>

                <p className="mt-1 text-sm font-bold">SYNCED</p>
              </div>

              <div className="absolute right-6 top-6 rounded-2xl border border-pink-400/15 bg-pink-400/[0.05] px-4 py-3 backdrop-blur-xl">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-pink-300">
                  XP
                </p>

                <p className="mt-1 text-sm font-bold">000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reward Vault */}
      <section
        className="border-t border-white/10 px-5 py-20 sm:px-8"
        id="reward-vault"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
              Reward Systems
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Choose your reward path.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/45">
              Explore different reward systems and see how each layer can
              connect to the future KPLAYO experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const selected = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="group rounded-[28px] border p-6 text-left transition duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: selected
                      ? `${category.accent}66`
                      : "rgba(255,255,255,0.08)",
                    background: selected
                      ? `linear-gradient(145deg, ${category.accent}14, rgba(255,255,255,0.025))`
                      : "rgba(255,255,255,0.025)",
                    boxShadow: selected
                      ? `0 0 50px ${category.accent}0d`
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
                      style={{
                        color: selected
                          ? category.accent
                          : "rgba(255,255,255,0.28)",
                      }}
                    >
                      {selected ? "ACTIVE" : category.label}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active reward lane */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em]"
                style={{ color: active.accent }}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                {active.label}
              </div>

              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                {active.title}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                {active.description}
              </p>
            </div>

            <span className="w-fit rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
              Coming Soon
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {visibleRewards.length > 0 ? (
              visibleRewards.map((reward) => (
                <div
                  key={reward.title}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1"
                >
                  <div
                    className="relative flex h-48 items-center justify-center overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${reward.accent}18, transparent 60%), rgba(255,255,255,0.02)`,
                    }}
                  >
                    <div
                      className="absolute h-32 w-32 rounded-full blur-[55px]"
                      style={{ background: `${reward.accent}18` }}
                    />

                    <div
                      className="relative flex h-24 w-24 items-center justify-center rounded-[30px] border text-4xl transition duration-300 group-hover:scale-105"
                      style={{
                        color: reward.accent,
                        background: `${reward.accent}10`,
                        borderColor: `${reward.accent}30`,
                        boxShadow: `0 0 45px ${reward.accent}12`,
                      }}
                    >
                      {reward.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-black">{reward.title}</h3>
                        <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/25">
                          {reward.requirement}
                        </p>
                      </div>

                      <span
                        className="rounded-full border px-2.5 py-1 text-[9px] font-black uppercase"
                        style={{
                          color: reward.accent,
                          borderColor: `${reward.accent}25`,
                          background: `${reward.accent}0c`,
                        }}
                      >
                        Locked
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-white/40">
                      {reward.description}
                    </p>

                    <button
                      disabled
                      className="mt-6 w-full rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-xs font-black uppercase tracking-[0.15em] opacity-70"
                      style={{ color: "#ffffff" }}
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[30px] border border-white/10 bg-white/[0.025] p-8 text-sm text-white/40 md:col-span-3">
                More rewards will appear here as this reward category becomes
                active.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Daily streak */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[34px] border border-pink-400/20 bg-gradient-to-br from-pink-400/[0.08] via-white/[0.025] to-purple-500/[0.04] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
                    Daily Streak
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    Keep the chain alive.
                  </h2>
                </div>

                <div className="rounded-2xl border border-pink-400/20 bg-pink-400/10 px-4 py-3 text-center">
                  <p className="text-2xl font-black">0</p>
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-pink-300">
                    Days
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-7 gap-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div
                    key={`${day}-${index}`}
                    className="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-black/20 text-[10px] font-black text-white/30"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <button
                disabled
                className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-black opacity-80"
                style={{ color: "#000000" }}
              >
                Daily Check-In Coming Soon
              </button>
            </div>

            <div className="rounded-[34px] border border-cyan-400/20 bg-cyan-400/[0.045] p-7 sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                Next Unlock
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Reward Level 02
              </h2>

              <div className="mt-7 flex items-end justify-between">
                <div>
                  <p className="text-4xl font-black">0</p>
                  <p className="mt-1 text-xs text-white/30">of 100 XP</p>
                </div>

                <p className="text-sm font-bold text-cyan-300">0%</p>
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full w-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #22d3ee, #3b82f6)",
                  }}
                />
              </div>

              <p className="mt-5 text-sm leading-6 text-white/35">
                Your progression system will connect here once KPLAYO rewards
                are backed by live account and activity data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Rewards */}
      <section
        className="border-t border-white/10 px-5 py-20 sm:px-8"
        id="my-rewards"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[40px] border border-purple-400/20 bg-gradient-to-br from-purple-400/[0.08] via-white/[0.025] to-pink-400/[0.04] p-7 sm:p-10">
            <div className="absolute right-[-10%] top-[-55%] h-[480px] w-[480px] rounded-full bg-purple-400/[0.07] blur-[130px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-300">
                  My Rewards
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                  Your reward
                  <br />
                  collection.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                  Your unlocked rewards, achievements, bonuses, and special
                  experiences will live inside this personal reward vault.
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
                    className="rounded-full border border-purple-300/25 bg-purple-300/10 px-6 py-3 text-sm font-bold transition hover:bg-purple-300/15"
                    style={{ color: "#ffffff" }}
                  >
                    Create Account
                  </Link>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-3xl font-black">0</p>
                    <p className="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/25">
                      Unlocked
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-3xl font-black">0</p>
                    <p className="mt-2 text-[9px] font-black uppercase tracking-[0.18em] text-white/25">
                      Claimed
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/25">
                        Vault Status
                      </span>

                      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-purple-300">
                        {claimed ? "PREVIEW ACTIVE" : "LOCKED"}
                      </span>
                    </div>

                    <button
                      onClick={() => setClaimed(true)}
                      className="mt-4 w-full rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-black transition hover:bg-white/[0.08]"
                      style={{ color: "#ffffff" }}
                    >
                      {claimed ? "Reward Preview Activated" : "Preview Vault"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7">
              <p className="text-3xl font-black">01</p>
              <h3 className="mt-6 text-xl font-black">Play</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Game activity can become one layer of future reward
                progression.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7">
              <p className="text-3xl font-black">02</p>
              <h3 className="mt-6 text-xl font-black">Connect</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Community and social participation can contribute to your
                KPLAYO journey.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7">
              <p className="text-3xl font-black">03</p>
              <h3 className="mt-6 text-xl font-black">Unlock</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">
                Milestones can open new reward experiences throughout the
                universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-white/10 px-5 py-24 text-center sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
            Your vault is waiting
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Turn every
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              moment into progress.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40">
            Play. Connect. Complete milestones. Build your KPLAYO reward
            journey.
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