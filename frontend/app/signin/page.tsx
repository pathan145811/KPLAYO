export default function SignInPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020205] text-white">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[650px] w-[650px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-pink-500/[0.08] blur-[160px]" />
        <div className="absolute left-[45%] top-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.05] blur-[150px]" />
      </div>

      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Header */}
      <header className="relative z-30 flex items-center justify-between px-6 py-6 lg:px-12">
        <a href="/" className="group">
          <img
            src="/brand/kplayo_logo_horizontal_white_transparent.svg"
            alt="KPLAYO"
            className="h-9 w-auto transition duration-500 group-hover:scale-105"
          />
        </a>

        <a
          href="/"
          className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 text-xs font-semibold text-white/50 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          Back to KPLAYO
        </a>
      </header>

      {/* Main */}
      <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-center px-5 pb-12 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1400px] items-stretch gap-0 overflow-hidden rounded-[2.75rem] border border-white/[0.08] bg-white/[0.018] shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:grid-cols-[1.15fr_0.85fr]">

          {/* =====================================================
              LEFT — KPLAYO UNIVERSE
          ====================================================== */}
          <div className="relative hidden min-h-[760px] overflow-hidden lg:block">

            {/* Large atmospheric circle */}
            <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.07]" />

            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-400/[0.06]" />

            {/* Central energy */}
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[70px]" />

            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300/20 via-purple-400/10 to-pink-400/20 blur-2xl" />

            {/* Constellation lines */}
            <div className="absolute left-[24%] top-[31%] h-px w-[52%] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />

            <div className="absolute left-[27%] top-[60%] h-px w-[48%] -rotate-[24deg] bg-gradient-to-r from-transparent via-pink-300/15 to-transparent" />

            <div className="absolute left-[45%] top-[25%] h-[52%] w-px rotate-[22deg] bg-gradient-to-b from-transparent via-purple-300/10 to-transparent" />

            {/* Nodes */}
            <div className="absolute left-[22%] top-[30%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(103,232,249,0.9)]" />

            <div className="absolute right-[21%] top-[38%] h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_30px_rgba(244,114,182,0.9)]" />

            <div className="absolute bottom-[27%] left-[30%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.9)]" />

            <div className="absolute bottom-[23%] right-[29%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />

            {/* Content */}
            <div className="relative flex h-full flex-col justify-between p-14 xl:p-20">

              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/45">
                    KPLAYO Universe
                  </span>
                </div>

                <h1 className="mt-10 max-w-2xl text-6xl font-black leading-[0.95] tracking-[-0.04em] xl:text-7xl">
                  Enter a world
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                    built to connect.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-white/35">
                  Games, LIVE, creators, communities and experiences —
                  connected through one KPLAYO identity.
                </p>
              </div>

              {/* Universe cards */}
              <div>
                <div className="grid max-w-2xl grid-cols-3 gap-3">
                  {[
                    {
                      number: "01",
                      title: "GAMES",
                      text: "Play",
                    },
                    {
                      number: "02",
                      title: "LIVE",
                      text: "Connect",
                    },
                    {
                      number: "03",
                      title: "WORLD",
                      text: "Explore",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="group rounded-2xl border border-white/[0.07] bg-black/20 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold tracking-[0.2em] text-white/20">
                          {item.number}
                        </span>

                        <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition group-hover:bg-cyan-400" />
                      </div>

                      <p className="mt-5 text-[9px] font-bold tracking-[0.25em] text-white/25">
                        {item.title}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-white/65">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-cyan-400/50 to-transparent" />

                  <span className="text-[10px] uppercase tracking-[0.35em] text-white/20">
                    Play. Connect. Live.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — AUTH
          ====================================================== */}
          <div className="relative flex min-h-[700px] items-center justify-center border-white/[0.07] bg-black/20 p-6 sm:p-10 lg:border-l lg:p-14">

            {/* Mobile glow */}
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[100px] lg:hidden" />

            <div className="relative w-full max-w-[430px]">

              {/* Mini brand mark */}
              <div className="mb-9 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                  <span className="text-lg text-cyan-300">✦</span>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                    Member Access
                  </p>

                  <p className="mt-1 text-[10px] text-white/20">
                    KPLAYO ID
                  </p>
                </div>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Welcome back.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/35">
                Your universe is waiting.
              </p>

              {/* Auth panel */}
              <div className="mt-9 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/30 sm:p-7">

                {/* Google */}
                <button
                  type="button"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.035] text-sm font-semibold text-white/75 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-black">
                    G
                  </span>

                  Continue with Google
                </button>

                {/* Divider */}
                <div className="my-7 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/[0.07]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/20">
                    or
                  </span>

                  <div className="h-px flex-1 bg-white/[0.07]" />
                </div>

                <form className="space-y-5">

                  {/* Email */}
                  <div>
                    <label className="mb-2.5 block text-[11px] font-semibold text-white/45">
                      Email address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-14 w-full rounded-2xl border border-white/[0.08] bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/15 hover:border-white/[0.14] focus:border-cyan-400/50 focus:bg-black/40 focus:ring-4 focus:ring-cyan-400/[0.05]"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <div className="mb-2.5 flex items-center justify-between">
                      <label className="text-[11px] font-semibold text-white/45">
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-[10px] font-semibold text-cyan-400 transition hover:text-cyan-300"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="h-14 w-full rounded-2xl border border-white/[0.08] bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/15 hover:border-white/[0.14] focus:border-cyan-400/50 focus:bg-black/40 focus:ring-4 focus:ring-cyan-400/[0.05]"
                    />
                  </div>

                  {/* Remember */}
                  <label className="flex cursor-pointer items-center gap-3 py-1 text-[11px] text-white/30">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/10 bg-black/30 accent-cyan-400"
                    />

                    Keep me signed in
                  </label>

                  {/* CTA */}
                  <button
                    type="button"
                    className="relative h-14 w-full overflow-hidden rounded-2xl bg-white font-black text-black shadow-[0_10px_40px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(34,211,238,0.2)]"
                  >
                    <span className="relative z-10">
                      Enter KPLAYO
                    </span>

                    <span className="absolute inset-y-0 left-[-30%] w-1/4 skew-x-[-20deg] bg-cyan-300/70 blur-lg transition-all duration-700 group-hover:left-[120%]" />
                  </button>
                </form>

                {/* Register */}
                <div className="mt-7 border-t border-white/[0.06] pt-6 text-center">
                  <span className="text-xs text-white/25">
                    New to KPLAYO?
                  </span>{" "}

                  <button
                    type="button"
                    className="text-xs font-bold text-pink-400 transition hover:text-pink-300"
                  >
                    Create your identity
                  </button>
                </div>
              </div>

              {/* Security */}
              <div className="mt-7 flex items-center justify-center gap-3 text-[8px] font-bold uppercase tracking-[0.22em] text-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                Secure KPLAYO Access
                <span>•</span>
                Your data stays yours
              </div>

              {/* Mobile tagline */}
              <p className="mt-7 text-center text-[9px] uppercase tracking-[0.35em] text-white/15 lg:hidden">
                Play. Connect. Live.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}