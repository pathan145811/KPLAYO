"use client";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020205] text-white">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[-100px] top-[-80px] h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-[130px]" />
        <div className="absolute bottom-[-160px] left-1/3 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center">
          <img
            src="/brand/kplayo_logo_horizontal_white_transparent.svg"
            alt="KPLAYO"
            className="h-9 w-auto"
          />
        </Link>

        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-cyan-400/40 hover:text-white"
        >
          Back to KPLAYO
        </Link>
      </header>

      {/* Main */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-[1fr_480px] lg:px-10 lg:py-16">
        {/* Left side */}
        <div className="hidden lg:block">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Create Your Identity
          </p>

          <h1 className="mt-6 max-w-2xl text-6xl font-black leading-[0.95] tracking-tight xl:text-7xl">
            Your world.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
              Your identity.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/50">
            Join KPLAYO and step into a social gaming universe built for
            players, creators, communities, and unforgettable experiences.
          </p>

          {/* Universe visual */}
          <div className="relative mt-12 h-64 max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%)]" />

            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20">
              <div className="absolute inset-5 rounded-full border border-pink-400/20" />
              <div className="absolute inset-12 rounded-full border border-white/10" />
            </div>

            <div className="absolute left-[25%] top-[35%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
            <div className="absolute right-[27%] top-[30%] h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.9)]" />
            <div className="absolute bottom-[27%] left-[48%] h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.9)]" />

            <div className="absolute left-[27%] top-[37%] h-px w-[23%] rotate-[-12deg] bg-gradient-to-r from-cyan-400/50 to-white/10" />
            <div className="absolute right-[29%] top-[37%] h-px w-[21%] rotate-[15deg] bg-gradient-to-r from-white/10 to-pink-400/50" />

            <div className="absolute bottom-6 left-7 flex gap-3">
              {["GAMES", "LIVE", "WORLD"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white/45"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm font-medium tracking-[0.25em] text-white/30">
            PLAY. CONNECT. LIVE.
          </p>
        </div>

        {/* Sign Up card */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-cyan-400/20 via-transparent to-pink-500/20 blur-xl" />

          <div className="relative rounded-[32px] border border-white/10 bg-[#08080d]/90 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
                KPLAYO Identity
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Create your account.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Start your journey through the KPLAYO Universe.
              </p>
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                G
              </span>
              Continue with Google
            </button>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                or
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  KPLAYO ID
                </label>
                <input
                  type="text"
                  placeholder="Choose your username"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/60 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/60 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/60 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/60 focus:bg-white/[0.05]"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-cyan-400"
                />
                <span className="text-xs leading-5 text-white/40">
                  I agree to the KPLAYO{" "}
                  <Link
                    href="/terms"
                    className="text-cyan-400 transition hover:text-cyan-300"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-cyan-400 transition hover:text-cyan-300"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="group relative mt-3 w-full overflow-hidden rounded-2xl bg-white px-5 py-4 text-sm font-black tracking-wide text-black transition hover:bg-cyan-300"
              >
                <span className="relative z-10">CREATE KPLAYO ID</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-300 via-white to-pink-300 transition duration-500 group-hover:translate-x-0" />
              </button>
            </form>

            {/* Sign in */}
            <div className="mt-7 text-center text-sm text-white/35">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-white transition hover:text-cyan-400"
              >
                Sign In
              </Link>
            </div>

            {/* Security */}
            <div className="mt-7 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                Secure KPLAYO Access
              </p>
              <p className="mt-1 text-xs text-white/30">
                Your account security is built into the KPLAYO experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}