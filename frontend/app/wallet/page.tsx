export default function WalletPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            KPLAYO Wallet
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Power Your KPLAYO Experience.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Manage your K-Coins, support creators, unlock digital experiences,
            and enjoy more ways to connect across the KPLAYO universe.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Get K-Coins
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              View Transactions
            </button>
          </div>
        </div>
      </section>

      {/* Balance */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Current Balance
              </p>

              <div className="mt-6 flex flex-wrap items-end gap-4">
                <span className="text-6xl font-black">0</span>
                <span className="mb-2 text-xl font-semibold text-white/50">
                  K-Coins
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
                Your K-Coins can be used across eligible KPLAYO features,
                including digital gifts and future platform experiences.
              </p>

              <button className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90">
                Add K-Coins
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Activity
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-sm text-white/40">Total Earned</p>
                  <p className="mt-1 text-2xl font-bold">0</p>
                </div>

                <div>
                  <p className="text-sm text-white/40">Total Spent</p>
                  <p className="mt-1 text-2xl font-bold">0</p>
                </div>

                <div>
                  <p className="text-sm text-white/40">Transactions</p>
                  <p className="mt-1 text-2xl font-bold">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K-Coins Uses */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              K-Coins
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What can you do with K-Coins?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎁</div>

              <h3 className="mt-5 text-xl font-bold">
                Digital Gifts
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Send interactive digital gifts to creators and friends.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">
                Game Experiences
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Unlock eligible digital experiences across KPLAYO games.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">✨</div>

              <h3 className="mt-5 text-xl font-bold">
                Special Features
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Access future platform features designed around K-Coins.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">💙</div>

              <h3 className="mt-5 text-xl font-bold">
                Support Creators
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Use eligible K-Coins features to support creators you enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Preview */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Wallet
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Recent Transactions
              </h2>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="text-5xl">🪙</div>

              <h3 className="mt-5 text-xl font-bold">
                No transactions yet
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                Your K-Coins activity and transaction history will appear here
                once wallet functionality is connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}