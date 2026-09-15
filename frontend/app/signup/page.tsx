"use client";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020205] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="kplayo-auth-float absolute -right-32 top-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[130px]" />

        <div className="kplayo-auth-float-reverse absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="kplayo-auth-glow absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

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
          className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-400/30 hover:bg-white/[0.06] hover:text-white"
        >
          Back to KPLAYO
        </Link>
      </header>

      {/* Main */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-2 lg:px-10">
        {/* Left Side */}
        <div className="kplayo-auth-enter order-2 hidden lg:order-1 lg:block">
          <div className="mb-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-fuchsia-300/70">
              CREATE YOUR IDENTITY
            </p>

            <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight xl:text-6xl">
              Your world.
              <span className="block bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Your identity.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/50">
              Create your KPLAYO identity and step into a connected universe
              built around games, LIVE experiences and community.
            </p>
          </div>

          {/* Identity Visual */}
          <div className="relative mt-10 h-[330px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] shadow-[0_0_80px_rgba(217,70,239,0.04)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.08),transparent_45%)]" />

            {/* Rotating Identity Frame */}
            <div className="kplayo-auth-orbit absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[38%] border border-fuchsia-300/15 [animation-duration:30s]">
              <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(232,121,249,0.9)]" />
            </div>

            {/* Inner Frame */}
            <div className="kplayo-auth-orbit absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-cyan-300/15 [animation-duration:20s] [animation-direction:reverse]">
              <div className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />
            </div>

            {/* Identity Core */}
            <div className="kplayo-auth-glow absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.06] shadow-[0_0_50px_rgba(217,70,239,0.12)]">
              <div className="text-center">
                <div className="text-xl font-semibold tracking-[0.15em]">
                  K
                </div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/30">
                  IDENTITY
                </div>
              </div>
            </div>

            {/* Floating Identity Cards */}
            <div className="kplayo-auth-float absolute left-[12%] top-[18%] rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/[0.06] px-4 py-3 backdrop-blur-md">
              <p className="text-xs text-fuchsia-200">PROFILE</p>
              <p className="mt-1 text-[10px] text-white/40">
                Your digital identity
              </p>
            </div>

            <div className="kplayo-auth-float-reverse absolute right-[12%] top-[23%] rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 backdrop-blur-md">
              <p className="text-xs text-cyan-200">SOCIAL</p>
              <p className="mt-1 text-[10px] text-white/40">
                Connect with others
              </p>
            </div>

            <div className="kplayo-auth-float absolute bottom-[16%] left-[28%] rounded-2xl border border-purple-300/20 bg-purple-300/[0.06] px-4 py-3 backdrop-blur-md">
              <p className="text-xs text-purple-200">UNIVERSE</p>
              <p className="mt-1 text-[10px] text-white/40">
                Your KPLAYO journey
              </p>
            </div>

            {/* Particles */}
            <div className="kplayo-auth-glow absolute left-[20%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />

            <div className="kplayo-auth-glow absolute right-[22%] bottom-[18%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />

            <div className="kplayo-auth-glow absolute right-[8%] top-[55%] h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/35">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(232,121,249,0.8)]" />
            Build your identity. Enter your world.
          </div>
        </div>

        {/* Right Side */}
        <div className="kplayo-auth-enter order-1 mx-auto w-full max-w-md lg:order-2 lg:ml-auto">
          <div className="relative rounded-[30px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-500 hover:border-white/[0.15] hover:shadow-[0_0_70px_rgba(217,70,239,0.06)] sm:p-8">
            {/* Card Glow */}
            <div className="kplayo-auth-glow pointer-events-none absolute -inset-px rounded-[30px] border border-fuchsia-300/[0.04]" />

            <div className="relative">
              <div className="mb-7">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-fuchsia-300/60">
                  NEW IDENTITY
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Create your account.
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Your KPLAYO universe starts here.
                </p>
              </div>

              {/* Google */}
              <button
                type="button"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Continue with Google
              </button>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  or create with email
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* KPLAYO ID */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/55">
                  KPLAYO ID
                </label>

                <input
                  type="text"
                  placeholder="Choose your identity"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-fuchsia-300/40 focus:bg-white/[0.04] focus:shadow-[0_0_25px_rgba(217,70,239,0.06)]"
                />
              </div>

              {/* Email */}
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium text-white/55">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-cyan-300/40 focus:bg-white/[0.04]"
                />
              </div>

              {/* Password */}
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium text-white/55">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-fuchsia-300/40 focus:bg-white/[0.04]"
                />
              </div>

              {/* Confirm Password */}
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium text-white/55">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-cyan-300/40 focus:bg-white/[0.04]"
                />
              </div>

              {/* Terms */}
              <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-white/35">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-black/30 accent-fuchsia-400"
                />

                <span>
                  I agree to the KPLAYO{" "}
                  <Link
                    href="/terms"
                    className="text-fuchsia-300/70 hover:text-fuchsia-200"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-fuchsia-300/70 hover:text-fuchsia-200"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Create Button */}
              <button
                type="button"
                className="group relative mt-6 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 px-5 py-3.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(217,70,239,0.12)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_0_45px_rgba(217,70,239,0.22)]"
              >
                <span className="relative z-10">Create KPLAYO ID</span>

                <span className="absolute inset-y-0 left-[-80px] w-16 -skew-x-12 bg-white/50 opacity-0 blur-md transition duration-700 group-hover:left-[110%] group-hover:opacity-60" />
              </button>

              {/* Sign In */}
              <p className="mt-6 text-center text-sm text-white/35">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="font-medium text-fuchsia-300/80 transition hover:text-fuchsia-200"
                >
                  Sign in
                </Link>
              </p>

              {/* Security */}
              <div className="mt-7 border-t border-white/10 pt-5 text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                  Secure KPLAYO Identity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}