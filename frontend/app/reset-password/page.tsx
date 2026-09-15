"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const strength = useMemo(() => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  }, [password]);

  const strengthLabel =
    strength === 0
      ? "Waiting"
      : strength === 1
        ? "Weak"
        : strength === 2
          ? "Fair"
          : strength === 3
            ? "Good"
            : "Strong";

  return (
    <main className="min-h-screen overflow-hidden bg-[#020204] text-white">
      <div className="relative min-h-screen">
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[10%] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />
          <div className="absolute bottom-[-180px] right-[-100px] h-[520px] w-[520px] rounded-full bg-pink-500/[0.09] blur-[150px]" />
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />
          <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.04]" />
        </div>

        {/* Top navigation */}
        <header className="relative z-20 flex items-center justify-between border-b border-white/[0.08] px-6 py-5 lg:px-10">
          <Link href="/" className="transition hover:opacity-80">
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-9 w-auto"
            />
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-white/20 sm:block">
              Account Security
            </span>

            <Link
              href="/signin"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/50 transition hover:border-cyan-400/40 hover:text-white"
            >
              Sign In
            </Link>
          </div>
        </header>

        <section className="relative z-10 mx-auto flex min-h-[calc(100vh-82px)] max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Security Vault Visual */}
            <div className="hidden lg:block">
              <div className="relative mx-auto h-[570px] max-w-[470px]">
                {/* Vertical security line */}
                <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

                <div className="absolute left-0 top-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
                    KPLAYO SECURITY
                  </p>
                  <p className="mt-2 text-xs text-white/25">
                    Recovery Protocol / 03
                  </p>
                </div>

                {/* Main vault */}
                <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 rounded-full border border-cyan-300/10" />

                  <div className="absolute inset-7 rounded-full border border-pink-400/10" />

                  <div className="absolute inset-14 rounded-full border border-white/10" />

                  <div className="absolute inset-[84px] rounded-[34px] border border-cyan-300/20 bg-[#080b10]/90 shadow-[0_0_70px_rgba(34,211,238,0.08)]">
                    <div className="absolute inset-4 rounded-[26px] border border-white/[0.05]" />

                    <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-[22px] border border-cyan-300/30 bg-cyan-300/[0.04]">
                      <div className="-rotate-45">
                        <div className="h-5 w-5 rounded-full border-2 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                      </div>
                    </div>
                  </div>

                  {/* Orbit nodes */}
                  <span className="absolute left-[13px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,1)]" />
                  <span className="absolute right-[13px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,1)]" />
                  <span className="absolute left-1/2 top-[13px] h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Status panel */}
                <div className="absolute bottom-5 left-14 right-0 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                        Security Status
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white/70">
                        Recovery channel verified
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.05]">
                      <span className="text-cyan-300">✓</span>
                    </div>
                  </div>

                  <div className="mt-5 h-px bg-white/[0.07]" />

                  <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em]">
                    <span className="text-white/20">Encryption</span>
                    <span className="text-cyan-300">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Password Console */}
            <div className="w-full">
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-pink-400">
                  New Access Key
                </p>

                <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Lock it.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                    Make it yours.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                  Create a new password for your KPLAYO account. Make it
                  powerful, private, and uniquely yours.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-cyan-400/10 via-transparent to-pink-500/10 blur-2xl" />

                <div className="relative rounded-[32px] border border-white/[0.09] bg-[#08080c]/95 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
                  {/* Console header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-300">
                        ◈
                      </span>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/20">
                          Password Console
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white/60">
                          Create new credentials
                        </p>
                      </div>
                    </div>

                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                      Secure
                    </span>
                  </div>

                  <form
                    className="mt-7 space-y-5"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    {/* New password */}
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                        New Password
                      </label>

                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Enter your new password"
                          className="w-full rounded-2xl border border-white/[0.09] bg-white/[0.025] px-4 py-4 pr-20 text-sm text-white outline-none transition placeholder:text-white/15 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02]"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/25 transition hover:text-cyan-300"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>

                    {/* Strength meter */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/25">
                          Strength
                        </span>

                        <span
                          className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
                            strength >= 3
                              ? "text-cyan-300"
                              : strength === 2
                                ? "text-yellow-300"
                                : "text-pink-300"
                          }`}
                        >
                          {strengthLabel}
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-4 gap-1.5">
                        {[0, 1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className={`h-1.5 rounded-full transition-all ${
                              item < strength
                                ? strength >= 3
                                  ? "bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                                  : "bg-pink-400"
                                : "bg-white/[0.08]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Confirm password */}
                    <div>
                      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                        Confirm Password
                      </label>

                      <div className="relative">
                        <input
                          type={showConfirm ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                          placeholder="Confirm your new password"
                          className="w-full rounded-2xl border border-white/[0.09] bg-white/[0.025] px-4 py-4 pr-20 text-sm text-white outline-none transition placeholder:text-white/15 focus:border-pink-400/50 focus:bg-pink-400/[0.02]"
                        />

                        <button
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/25 transition hover:text-pink-300"
                        >
                          {showConfirm ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="grid grid-cols-2 gap-2">
                      <div
                        className={`rounded-xl border px-3 py-2.5 text-[10px] transition ${
                          password.length >= 8
                            ? "border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-300"
                            : "border-white/[0.06] bg-white/[0.015] text-white/25"
                        }`}
                      >
                        {password.length >= 8 ? "✓" : "○"} 8+ characters
                      </div>

                      <div
                        className={`rounded-xl border px-3 py-2.5 text-[10px] transition ${
                          /[A-Z]/.test(password)
                            ? "border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-300"
                            : "border-white/[0.06] bg-white/[0.015] text-white/25"
                        }`}
                      >
                        {/[A-Z]/.test(password) ? "✓" : "○"} Uppercase
                      </div>

                      <div
                        className={`rounded-xl border px-3 py-2.5 text-[10px] transition ${
                          /[0-9]/.test(password)
                            ? "border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-300"
                            : "border-white/[0.06] bg-white/[0.015] text-white/25"
                        }`}
                      >
                        {/[0-9]/.test(password) ? "✓" : "○"} Number
                      </div>

                      <div
                        className={`rounded-xl border px-3 py-2.5 text-[10px] transition ${
                          /[^A-Za-z0-9]/.test(password)
                            ? "border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-300"
                            : "border-white/[0.06] bg-white/[0.015] text-white/25"
                        }`}
                      >
                        {/[^A-Za-z0-9]/.test(password) ? "✓" : "○"} Symbol
                      </div>
                    </div>

                    {/* Action */}
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-2xl bg-white px-5 py-4 text-sm font-black tracking-wide text-black transition hover:bg-cyan-300"
                    >
                      <span className="relative z-10">
                        UPDATE PASSWORD
                      </span>

                      <span className="absolute inset-y-0 -left-20 w-20 skew-x-[-20deg] bg-cyan-200/50 blur-md transition-all duration-700 group-hover:left-[110%]" />
                    </button>
                  </form>

                  <div className="mt-6 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/20">
                    <span>Protected</span>
                    <span>•</span>
                    <span>Private</span>
                    <span>•</span>
                    <span>KPLAYO</span>
                  </div>
                </div>
              </div>

              <p className="mt-7 text-center text-[9px] font-bold uppercase tracking-[0.35em] text-white/15">
                PLAY. CONNECT. LIVE.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}