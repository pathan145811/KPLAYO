export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            KPLAYO Cookies
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            A smoother KPLAYO experience.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Cookies and similar technologies may help KPLAYO operate,
            understand, secure, and improve the platform.
          </p>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                What Are Cookies?
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Small technologies with a useful role
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Cookies are small pieces of information that can be stored on
                your device when you visit a website. They can help websites
                remember preferences, maintain sessions, and understand how
                services are being used.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                KPLAYO
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Designed for a better experience
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Depending on the final platform architecture, KPLAYO may use
                cookies or similar technologies for essential functionality,
                preferences, security, analytics, and other approved purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Cookie Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How cookies may be used
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
              The exact technologies and purposes will depend on the services
              available when KPLAYO launches.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">⚙️</div>

              <h3 className="mt-5 text-xl font-bold">
                Essential
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Technologies required for core website functionality,
                authentication, security, and essential platform operations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">🎛️</div>

              <h3 className="mt-5 text-xl font-bold">
                Preferences
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Technologies that can help remember settings and preferences
                to provide a more consistent experience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">📊</div>

              <h3 className="mt-5 text-xl font-bold">
                Analytics
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Where applicable, analytics technologies may help us understand
                platform usage and improve performance and experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">🛡️</div>

              <h3 className="mt-5 text-xl font-bold">
                Security
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Technologies may be used to detect abuse, protect accounts,
                prevent fraudulent activity, and maintain platform security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Choices */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Your Choices
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Manage your preferences
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Depending on applicable laws and the final KPLAYO
              implementation, users may have controls for managing certain
              non-essential cookies and similar technologies. Essential
              technologies may be necessary for the platform to function.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-black/30 px-6 py-3 text-sm font-semibold text-white/50">
              Cookie controls coming soon
            </div>
          </div>
        </div>
      </section>

      {/* Third Parties */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Third-Party Services
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Services may use their own technologies
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/50">
            Some KPLAYO features may rely on third-party services. Where
            applicable, those providers may use cookies or similar
            technologies according to their own policies and the permissions
            available to users.
          </p>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
            Important
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Cookie policy in development
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/50">
            This page is currently a product-stage overview and is not the
            final legal Cookie Policy. The complete policy will be prepared
            and reviewed before KPLAYO launches publicly and will reflect the
            actual technologies, services, data practices, applicable laws,
            and user choices at that time.
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
            Building a better social gaming experience, one connection at a
            time.
          </p>
        </div>
      </section>
    </main>
  );
}