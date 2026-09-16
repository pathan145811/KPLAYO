"use client";

import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020205] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="kplayo-auth-float absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="kplayo-auth-float-reverse absolute right-[-120px] top-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[140px]" />

        <div className="kplayo-auth-glow absolute bottom-[-160px] left-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-10">
        <Link href="/">
          <img
            src="/brand/kplayo_logo_horizontal_white_transparent.svg"
            alt="KPLAYO"
            className="h-8 w-auto transition duration-300 hover:scale-105"
          />
        </Link>

        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/70 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white hover:-translate-y-0.5"
        >
          Back to KPLAYO
        </Link>
      </header>

      {/* Main */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-2 lg:px-10">
        {/* Left Side */}
        <div className="kplayo-auth-enter hidden lg:block">
          <div className="mb-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/70">
              KPLAYO UNIVERSE
            </p>

            <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight xl:text-6xl">
              Enter a world
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent">
                built to connect.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/50">
              Games, LIVE experiences, communities and a digital world —
              everything connected through one KPLAYO identity.
            </p>
          </div>

          {/* Universe Visual */}
          <div className="relative mt-10 h-[330px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] shadow-[0_0_80px_rgba(34,211,238,0.04)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_45%)]" />

            {/* Animated Ambient Ring */}
            <div className="kplayo-auth-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.06]" />

            {/* Main Orbit */}
            <div className="kplayo-auth-orbit absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            </div>

            {/* Second Orbit */}
            <div className="kplayo-auth-orbit absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/15 [animation-duration:18s] [animation-direction:reverse]">
              <div className="absolute right-[-3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_15px_rgba(232,121,249,0.9)]" />
            </div>

            {/* Center K */}
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[0_0_50px_rgba(34,211,238,0.12)]">
              <span className="text-lg font-semibold tracking-[0.2em]">
                K
              </span>
            </div>

            {/* Connection Line 1 */}
            <div className="absolute left-[29%] top-[43%] h-px w-[22%] rotate-[20deg] bg-gradient-to-r from-cyan-300/0 via-cyan-300/30 to-cyan-300/0" />

            {/* Connection Line 2 */}
            <div className="absolute right-[28%] top-[42%] h-px w-[22%] -rotate-[22deg] bg-gradient-to-r from-fuchsia-300/0 via-fuchsia-300/30 to-fuchsia-300/0" />

            {/* Games Node */}
            <div className="kplayo-auth-float absolute left-[18%] top-[25%] rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 backdrop-blur-md transition duration-500 hover:scale-105">
              <p className="text-xs text-cyan-200">GAMES</p>
              <p className="mt-1 text-[10px] text-white/40">
                Play & compete
              </p>
            </div>

            {/* LIVE Node */}
            <div className="kplayo-auth-float-reverse absolute right-[15%] top-[20%] rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/[0.06] px-4 py-3 backdrop-blur-md transition duration-500 hover:scale-105">
              <p className="text-xs text-fuchsia-200">LIVE</p>
              <p className="mt-1 text-[10px] text-white/40">
                Watch & connect
              </p>
            </div>

            {/* World Node */}
            <div className="kplayo-auth-float absolute bottom-[18%] left-[32%] rounded-2xl border border-purple-300/20 bg-purple-300/[0.06] px-4 py-3 backdrop-blur-md transition duration-500 hover:scale-105">
              <p className="text-xs text-purple-200">WORLD</p>
              <p className="mt-1 text-[10px] text-white/40">
                Explore together
              </p>
            </div>

            {/* Small Floating Particles */}
            <div className="kplayo-auth-glow absolute left-[12%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />

            <div className="kplayo-auth-glow absolute right-[25%] bottom-[18%] h-1 w-1 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />

            <div className="kplayo-auth-glow absolute right-[10%] top-[52%] h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/35">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
            Play. Connect. Live.
          </div>
        </div>

        {/* Right Side */}
        <div className="kplayo-auth-enter mx-auto w-full max-w-md lg:ml-auto">
          <div className="relative rounded-[30px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-500 hover:border-white/[0.15] hover:shadow-[0_0_70px_rgba(34,211,238,0.06)] sm:p-8">
            {/* Card Glow */}
            <div className="kplayo-auth-glow pointer-events-none absolute -inset-px rounded-[30px] border border-cyan-300/[0.04]" />

            <div className="relative">
              <div className="mb-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60">
                  SECURE ACCESS
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Welcome back.
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Sign in to continue your KPLAYO journey.
                </p>
              </div>

              {/* Google */}
              <button
                type="button"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]"
              >
                Continue with Google
              </button>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  or
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/55">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-cyan-300/40 focus:bg-white/[0.04] focus:shadow-[0_0_25px_rgba(34,211,238,0.06)]"
                />
              </div>

              {/* Password */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-xs font-medium text-white/55">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs text-cyan-300/70 transition hover:text-cyan-200"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-fuchsia-300/40 focus:bg-white/[0.04] focus:shadow-[0_0_25px_rgba(217,70,239,0.06)]"
                />
              </div>

              {/* Remember */}
              <label className="mt-5 flex cursor-pointer items-center gap-3 text-xs text-white/40">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-black/30 accent-cyan-400"
                />
                Keep me signed in
              </label>

              {/* Sign In Button */}
              <button
                type="button"
                className="group relative mt-7 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-300 via-cyan-200 to-fuchsia-400 px-5 py-3.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_0_45px_rgba(34,211,238,0.22)]"
              >
                <span className="relative z-10">Enter KPLAYO</span>

                <span className="absolute inset-y-0 left-[-80px] w-16 -skew-x-12 bg-white/50 opacity-0 blur-md transition duration-700 group-hover:left-[110%] group-hover:opacity-60" />
              </button>

              {/* Sign Up */}
              <p className="mt-7 text-center text-sm text-white/35">
                New to KPLAYO?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-cyan-300/80 transition hover:text-cyan-200"
                >
                  Create your identity
                </Link>
              </p>

              {/* Security */}
              <div className="mt-8 border-t border-white/10 pt-5 text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                  Secure KPLAYO Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}