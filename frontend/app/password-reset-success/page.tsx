"use client";

import Link from "next/link";

export default function PasswordResetSuccessPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020204] text-white">
      <div className="relative min-h-screen">
        {/* Cinematic background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[42%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[150px]" />
          <div className="absolute left-[-180px] top-[5%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-[140px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[480px] w-[480px] rounded-full bg-pink-500/[0.08] blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        {/* Header */}
        <header className="relative z-30 flex items-center justify-between border-b border-white/[0.08] bg-black/20 px-6 py-5 backdrop-blur-xl lg:px-10">
          <Link href="/" className="transition hover:opacity-80">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-9 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 sm:block">
              SECURITY COMPLETE
            </span>

            <span className="flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                Protected
              </span>
            </span>
          </div>
        </header>

        {/* Main */}
        <section className="relative z-10 flex min-h-[calc(100vh-82px)] items-center justify-center px-5 py-12 sm:px-8">
          <div className="w-full max-w-6xl">
            {/* Status */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-14 bg-gradient-to-r from-transparent to-cyan-400/40" />

              <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-cyan-300">
                Recovery Complete
              </p>

              <span className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-400/40" />
            </div>

            <div className="relative overflow-hidden rounded-[42px] border border-white/[0.09] bg-[#07070b]/90 shadow-2xl backdrop-blur-2xl">
              {/* Decorative top line */}
              <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

              <div className="grid min-h-[610px] items-center lg:grid-cols-[0.85fr_1.15fr]">
                {/* Left visual */}
                <div className="relative flex min-h-[420px] items-center justify-center border-b border-white/[0.07] p-10 lg:min-h-[610px] lg:border-b-0 lg:border-r">
                  {/* giant rings */}
                  <div className="absolute h-[390px] w-[390px] rounded-full border border-cyan-300/[0.08]" />
                  <div className="absolute h-[300px] w-[300px] rounded-full border border-pink-400/[0.08]" />
                  <div className="absolute h-[215px] w-[215px] rounded-full border border-white/[0.07]" />

                  {/* diagonal beams */}
                  <div className="absolute h-px w-[430px] rotate-45 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
                  <div className="absolute h-px w-[430px] -rotate-45 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent" />

                  {/* Core */}
                  <div className="relative flex h-44 w-44 items-center justify-center rounded-[48px] border border-cyan-300/25 bg-[#05090b] shadow-[0_0_100px_rgba(34,211,238,0.15)]">
                    <div className="absolute inset-3 rounded-[40px] border border-white/[0.05]" />

                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 shadow-[0_0_55px_rgba(34,211,238,0.65)]">
                      <span className="text-5xl font-black text-black">
                        ✓
                      </span>
                    </div>
                  </div>

                  {/* Orbit nodes */}
                  <span className="absolute left-[13%] top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,1)]" />
                  <span className="absolute right-[13%] top-1/2 h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,1)]" />
                  <span className="absolute left-1/2 top-[12%] h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_15px_white]" />

                  {/* Visual label */}
                  <div className="absolute bottom-10 left-10 right-10 rounded-2xl border border-white/[0.07] bg-black/30 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/20">
                          Identity Status
                        </p>
                        <p className="mt-1.5 text-xs font-semibold text-white/65">
                          Your account is secured
                        </p>
                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                        ONLINE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right content */}
                <div className="p-8 sm:p-12 lg:p-16">
                  <div className="max-w-xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-pink-400">
                      Password Successfully Updated
                    </p>

                    <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl">
                      Your account
                      <br />
                      is{" "}
                      <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                        ready.
                      </span>
                    </h1>

                    <p className="mt-7 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
                      Your new password is active. Everything is secured and
                      your KPLAYO journey is ready to continue.
                    </p>

                    {/* Confirmation */}
                    <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.035] p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-black shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                          ✓
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white/80">
                            Security update complete
                          </p>
                          <p className="mt-1 text-xs leading-5 text-white/30">
                            Your new credentials are now ready for your next
                            sign-in.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* MAIN CTA */}
                    <div className="mt-8">
                      <Link
                        href="/signin"
                        className="group relative flex min-h-[72px] w-full items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-300 via-white to-cyan-300 px-6 text-black shadow-[0_0_45px_rgba(34,211,238,0.18)] transition duration-300 hover:scale-[1.015] hover:shadow-[0_0_65px_rgba(34,211,238,0.3)]"
                      >
                        <span className="relative z-10">
                          <span className="block text-[9px] font-black uppercase tracking-[0.25em] text-black/50">
                            Your next step
                          </span>

                          <span className="mt-1 block text-lg font-black tracking-tight">
                            CONTINUE TO KPLAYO
                          </span>
                        </span>

                        <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white transition duration-300 group-hover:translate-x-1">
                          →
                        </span>

                        <span className="absolute inset-y-0 -left-24 w-24 -skew-x-[25deg] bg-white/80 blur-xl transition-all duration-700 group-hover:left-[110%]" />
                      </Link>
                    </div>

                    {/* Secondary */}
                    <div className="mt-4">
                      <Link
                        href="/"
                        className="flex min-h-[52px] w-full items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] text-xs font-bold uppercase tracking-[0.2em] text-white/35 transition hover:border-white/15 hover:bg-white/[0.04] hover:text-white/70"
                      >
                        Return to KPLAYO Home
                      </Link>
                    </div>

                    {/* Bottom micro status */}
                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/15">
                      <span>✓ Password Updated</span>
                      <span>✓ Account Protected</span>
                      <span>✓ Session Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-white/[0.06]" />
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/15">
                KPLAYO · PLAY. CONNECT. LIVE.
              </p>
              <span className="h-px w-16 bg-white/[0.06]" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}