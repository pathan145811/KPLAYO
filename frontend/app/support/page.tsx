export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            KPLAYO Support
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            We&apos;re Here to Help.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Find answers, get help with your KPLAYO experience, and reach the
            support team when you need assistance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Get Help
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Help Center
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What do you need help with?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">
                Games
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Get help with games, gameplay features, accounts, and progress.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">📺</div>

              <h3 className="mt-5 text-xl font-bold">
                LIVE
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Find help with streaming, creators, rooms, and LIVE features.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🪙</div>

              <h3 className="mt-5 text-xl font-bold">
                K-Coins
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Get assistance with coins, gifts, transactions, and wallet
                activity.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🛡️</div>

              <h3 className="mt-5 text-xl font-bold">
                Safety
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Report problems and learn about safety, privacy, and account
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                How do I create a KPLAYO account?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Account creation and authentication will be available when
                KPLAYO account systems are connected.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                How do K-Coins work?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                K-Coins are designed as KPLAYO&apos;s virtual platform currency
                for eligible digital experiences and features.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                How can I report a problem?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Reporting and customer-support tools will be connected as the
                KPLAYO safety and moderation systems are implemented.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                Can I contact KPLAYO support directly?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Dedicated support channels, tickets, and escalation options
                will become available as the support system is implemented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Need More Help?
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Contact KPLAYO Support
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/50">
              Our future support system will provide help through tickets,
              live chat, account assistance, payment and K-Coin support, and
              human escalation when needed.
            </p>

            <button className="mt-7 rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-white/90">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}