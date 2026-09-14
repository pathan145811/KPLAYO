export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            KPLAYO Privacy
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Your privacy matters.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            KPLAYO is designed with privacy, security, and responsible data
            practices at the center of the platform experience.
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Privacy by design
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
              KPLAYO aims to build privacy and security into the platform from
              the beginning rather than treating them as an afterthought.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-8">
              <div className="text-3xl">🔐</div>

              <h3 className="mt-5 text-xl font-bold">
                Data Protection
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                We aim to protect account and platform data through
                appropriate technical and organizational safeguards.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8">
              <div className="text-3xl">👤</div>

              <h3 className="mt-5 text-xl font-bold">
                User Control
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Users should have meaningful control over their accounts,
                settings, content, and privacy choices.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-8">
              <div className="text-3xl">🛡️</div>

              <h3 className="mt-5 text-xl font-bold">
                Security First
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Security and responsible platform design are core parts of the
                KPLAYO development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Information
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              What this policy will cover
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                Account Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Information required to create, secure, and manage a KPLAYO
                account.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                Platform Activity
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Information related to games, LIVE experiences, communities,
                content, and other interactions on the platform.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                Device & Technical Data
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Technical information that may be required to operate,
                maintain, secure, and improve KPLAYO services.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">
                Communications
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Information you provide when contacting KPLAYO support or
                communicating with the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Your Choices
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                You should stay in control
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                KPLAYO will provide appropriate account and privacy controls
                as platform features are developed and released.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Transparency
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Clear and responsible
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Privacy practices, data usage, security measures, and user
                choices will be documented clearly as the KPLAYO platform
                moves toward launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
            Important
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Privacy policy in development
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/50">
            This page is currently a product-stage privacy overview and is
            not the final legal privacy policy. The complete policy will be
            prepared and reviewed before KPLAYO launches publicly and will
            reflect the actual services, data practices, applicable laws, and
            user rights at that time.
          </p>
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
            Building a social gaming universe with privacy and security at
            its core.
          </p>
        </div>
      </section>
    </main>
  );
}