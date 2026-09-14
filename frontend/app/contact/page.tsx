export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            Contact KPLAYO
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Let&apos;s connect.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Have a question, suggestion, partnership idea, or need help?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How can we help?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
              Choose the area that best matches your message.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-8">
              <div className="text-3xl">💬</div>

              <h3 className="mt-5 text-xl font-bold">
                General Questions
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Questions about KPLAYO, the platform, features, or upcoming
                experiences.
              </p>

              <div className="mt-6 text-sm font-semibold text-pink-400">
                General Support
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8">
              <div className="text-3xl">🤝</div>

              <h3 className="mt-5 text-xl font-bold">
                Partnerships
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Interested in working with KPLAYO, becoming a partner, or
                exploring business opportunities?
              </p>

              <div className="mt-6 text-sm font-semibold text-cyan-400">
                Business Inquiries
              </div>
            </div>

            <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-8">
              <div className="text-3xl">🛡️</div>

              <h3 className="mt-5 text-xl font-bold">
                Safety & Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Need help with safety, moderation, accounts, K-Coins, or
                another platform issue?
              </p>

              <div className="mt-6 text-sm font-semibold text-purple-400">
                Visit Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Send A Message
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              We&apos;re listening
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50">
              The full contact system will be connected as KPLAYO development
              progresses.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-white/70">
                  Name
                </label>

                <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/30">
                  Your name
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-white/70">
                  Email
                </label>

                <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/30">
                  Your email
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-semibold text-white/70">
                Message
              </label>

              <div className="mt-2 min-h-36 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/30">
                Write your message...
              </div>
            </div>

            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/50">
              Contact system coming soon
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            KPLAYO
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Play. Connect. Live.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/50">
            Every great community starts with a connection.
          </p>
        </div>
      </section>
    </main>
  );
}