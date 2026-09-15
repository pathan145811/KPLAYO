"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020205] text-white">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute right-[-120px] top-[-100px] h-[460px] w-[460px] rounded-full bg-pink-500/10 blur-[140px]" />
        <div className="absolute bottom-[-180px] left-1/3 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
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
          href="/signin"
          className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70 transition hover:border-cyan-400/40 hover:text-white"
        >
          Back to Sign In
        </Link>
      </header>

      {/* Main */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-[1fr_480px] lg:px-10 lg:py-16">
        {/* Left */}
        <div className="hidden lg:block">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Account Recovery
          </p>

          <h1 className="mt-6 max-w-2xl text-6xl font-black leading-[0.95] tracking-tight xl:text-7xl">
            Find your way
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
              back to KPLAYO.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/50">
            Forgot your password? No problem. Enter your account email and
            we&apos;ll help you get back into your KPLAYO Universe.
          </p>

          {/* Recovery visual */}
          <div className="relative mt-12 h-64 max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%)]" />

            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20">
              <div className="absolute inset-5 rounded-full border border-pink-400/20" />
              <div className="absolute inset-12 rounded-full border border-white/10" />
            </div>

            <div className="absolute left-[24%] top-[34%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />

            <div className="absolute right-[27%] top-[30%] h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.9)]" />

            <div className="absolute bottom-[27%] left-[48%] h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.9)]" />

            <div className="absolute left-[26%] top-[37%] h-px w-[24%] rotate-[-12deg] bg-gradient-to-r from-cyan-400/50 to-white/10" />

            <div className="absolute right-[29%] top-[37%] h-px w-[21%] rotate-[15deg] bg-gradient-to-r from-white/10 to-pink-400/50" />

            <div className="absolute bottom-6 left-7 flex gap-3">
              {["SECURE", "RECOVER", "RETURN"].map((item) => (
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

        {/* Recovery card */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-cyan-400/20 via-transparent to-pink-500/20 blur-xl" />

          <div className="relative rounded-[32px] border border-white/10 bg-[#08080d]/90 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6 text-cyan-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-10 0v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Zm3-11V7a3 3 0 0 1 6 0v3"
                />
              </svg>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
                Secure Recovery
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Reset your password.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Enter the email connected to your KPLAYO account and we&apos;ll
                help you recover access.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/60 focus:bg-white/[0.05]"
                />
              </div>

              <button
                type="submit"
                className="group relative mt-2 w-full overflow-hidden rounded-2xl bg-white px-5 py-4 text-sm font-black tracking-wide text-black transition hover:bg-cyan-300"
              >
                <span className="relative z-10">
                  SEND RECOVERY LINK
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-300 via-white to-pink-300 transition duration-500 group-hover:translate-x-0" />
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                or
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <Link
              href="/signin"
              className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white/75 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Return to Sign In
            </Link>

            <div className="mt-7 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                Secure KPLAYO Access
              </p>

              <p className="mt-1 text-xs text-white/30">
                Account recovery will be securely connected when KPLAYO
                authentication is activated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}