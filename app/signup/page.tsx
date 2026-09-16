import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-pink-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mx-auto flex w-fit items-center gap-2.5"
            aria-label="Back to KPLAYO home"
          >
            <span
              aria-hidden="true"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-white/[0.04] shadow-[0_0_24px_rgba(0,229,255,0.12)]"
            >
              <span className="absolute h-5 w-5 rotate-45 rounded-full border border-cyan-300/80 border-l-transparent" />
              <span className="absolute left-[8px] top-[8px] h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_14px_rgba(255,43,214,0.9)]" />
              <span className="absolute bottom-[7px] right-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,229,255,0.9)]" />
            </span>

            <span className="text-xl font-black tracking-[0.18em] text-white">
              KPLAYO
            </span>
          </Link>

          <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">
                JOIN THE UNIVERSE
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Create your KPLAYO.
              </h1>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Create your account and enter games, LIVE, Reels and the
                KPLAYO social universe.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold text-zinc-300"
                >
                  Display name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-pink-300/50 focus:bg-pink-300/[0.03] focus:ring-2 focus:ring-pink-300/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold text-zinc-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-pink-300/50 focus:bg-pink-300/[0.03] focus:ring-2 focus:ring-pink-300/10"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-bold text-zinc-300"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-pink-300/50 focus:bg-pink-300/[0.03] focus:ring-2 focus:ring-pink-300/10"
                />
              </div>

              <label className="flex items-start gap-3 text-xs leading-5 text-zinc-500">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-cyan-400"
                />
                <span>
                  I agree to the KPLAYO Terms of Service and Privacy Policy.
                </span>
              </label>

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-white text-sm font-black !text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]"
              >
                Create Account
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-white transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black !text-black">
                G
              </span>
              Continue with Google
            </button>

            <p className="mt-7 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-cyan-300 transition-colors hover:text-cyan-200"
              >
                Log in
              </Link>
            </p>
          </section>

          <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-700">
            PLAY. CONNECT. LIVE.
          </p>
        </div>
      </div>
    </main>
  );
}
