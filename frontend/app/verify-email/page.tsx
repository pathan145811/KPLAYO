"use client";

import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-[#030307] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
        <div className="absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-pink-500/[0.08] blur-[120px]" />
        <div className="absolute bottom-[-150px] left-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.07] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-10">
        <Link href="/">
          <img
            src="/brand/kplayo_logo_horizontal_white_transparent.svg"
            alt="KPLAYO"
            className="h-9 w-auto"
          />
        </Link>

        <Link
          href="/signin"
          className="text-sm font-medium text-white/45 transition hover:text-white"
        >
          Sign In →
        </Link>
      </header>

      <section className="relative z-10 flex min-h-[calc(100vh-82px)] items-center justify-center px-6 py-14">
        <div className="w-full max-w-2xl">
          <div className="mb-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] border border-cyan-400/20 bg-cyan-400/[0.06]">
              <div className="h-9 w-9 rounded-full border border-cyan-300/70 p-2">
                <div className="h-full w-full rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />
              </div>
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
              Identity Verification
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Verify your KPLAYO identity.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              We&apos;ve sent a verification code to your email. Enter the
              code below to activate your KPLAYO account.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 blur-2xl" />

            <div className="relative rounded-[36px] border border-white/10 bg-[#09090f]/95 p-7 shadow-2xl backdrop-blur-2xl sm:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                    Verification Status
                  </p>

                  <p className="mt-2 text-sm font-semibold text-white/75">
                    Waiting for your code
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Secure
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                  Code Sent To
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-white/70">
                    your-email@example.com
                  </p>

                  <button
                    type="button"
                    className="text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="mt-9">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Verification Code
                  </p>

                  <span className="text-xs text-white/25">
                    6 digits
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] text-center text-xl font-bold text-white outline-none transition focus:border-cyan-400/70 sm:h-16"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] text-center text-xl font-bold text-white outline-none transition focus:border-cyan-400/70 sm:h-16"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] text-center text-xl font-bold text-white outline-none transition focus:border-cyan-400/70 sm:h-16"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] text-center text-xl font-bold text-white outline-none transition focus:border-cyan-400/70 sm:h-16"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] text-center text-xl font-bold text-white outline-none transition focus:border-cyan-400/70 sm:h-16"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.035] text-center text-xl font-bold text-white outline-none transition focus:border-cyan-400/70 sm:h-16"
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-sm font-black tracking-wide text-black transition hover:bg-cyan-300"
              >
                VERIFY &amp; ACTIVATE ACCOUNT
              </button>

              <div className="mt-7 text-center">
                <p className="text-sm text-white/30">
                  Didn&apos;t receive the code?
                </p>

                <button
                  type="button"
                  className="mt-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Resend verification code
                </button>
              </div>

              <div className="mt-9 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan-400/60">
                    01
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white/45">
                    Encrypted
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan-400/60">
                    02
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white/45">
                    Private
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan-400/60">
                    03
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white/45">
                    Protected
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/20">
              KPLAYO · PLAY. CONNECT. LIVE.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}