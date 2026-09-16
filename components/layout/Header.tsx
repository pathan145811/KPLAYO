import Link from "next/link";

const navItems = [
  { label: "Games", href: "#games" },
  { label: "LIVE", href: "#live" },
  { label: "Reels", href: "#reels" },
  { label: "Streaks", href: "#streaks" },
  { label: "Social", href: "#social" },
  { label: "World", href: "#world" },
];

function KplayoMark() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-white/[0.04] shadow-[0_0_24px_rgba(0,229,255,0.12)]"
    >
      <span className="absolute h-5 w-5 rotate-45 rounded-full border border-cyan-300/80 border-l-transparent" />
      <span className="absolute left-[8px] top-[8px] h-2.5 w-2.5 rounded-full bg-pink-400 shadow-[0_0_14px_rgba(255,43,214,0.9)]" />
      <span className="absolute bottom-[7px] right-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,229,255,0.9)]" />
    </span>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050505]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="KPLAYO home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <KplayoMark />

          <span className="text-[17px] font-black tracking-[0.18em] text-white transition-colors group-hover:text-cyan-300">
            KPLAYO
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-1 py-2 text-[13px] font-semibold text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
              {item.label === "LIVE" && (
                <span className="absolute -right-2 top-1 h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_#ff2bd6]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-black !text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_28px_rgba(0,229,255,0.25)]"
          >
            Join KPLAYO
          </Link>
        </div>

        <details className="relative sm:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] [&::-webkit-details-marker]:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-3.5 self-end bg-cyan-300" />
              <span className="h-0.5 w-5 bg-white" />
            </span>
          </summary>

          <div className="absolute right-0 top-12 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#09090d]/95 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}

                  {item.label === "LIVE" && (
                    <span className="flex items-center gap-1.5 text-[9px] font-black tracking-wider text-pink-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
                      LIVE
                    </span>
                  )}
                </Link>
              ))}

              <div className="my-2 h-px bg-white/10" />

              <Link
                href="/login"
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                className="mt-1 rounded-xl bg-white px-4 py-3.5 text-center text-sm font-black !text-black transition-colors hover:bg-cyan-200"
              >
                Join KPLAYO
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
