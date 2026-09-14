export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            KPLAYO Profile
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Your KPLAYO Identity.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Build your identity, showcase your gaming journey, connect with
            friends, and manage your KPLAYO experience from one place.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:bg-cyan-400">
              View Profile
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              Edit Profile
            </button>
          </div>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Identity
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Your Profile
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-2">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-4xl font-black text-cyan-300">
                  K
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                    Player
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    KPLAYO Player
                  </h3>

                  <p className="mt-2 text-white/50">
                    Gamer • Creator • Community Member
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm text-white/40">Games Played</p>
                  <p className="mt-2 text-2xl font-bold">00</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm text-white/40">Followers</p>
                  <p className="mt-2 text-2xl font-bold">00</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm text-white/40">Following</p>
                  <p className="mt-2 text-2xl font-bold">00</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                Level
              </p>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-5xl font-black">01</p>
                  <p className="mt-2 text-sm text-white/40">
                    KPLAYO Starter
                  </p>
                </div>

                <span className="text-sm text-white/40">
                  0 / 100 XP
                </span>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-0 rounded-full bg-pink-500" />
              </div>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Keep playing, connecting, and exploring KPLAYO to grow your
                profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Features */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Manage your KPLAYO experience
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">👤</div>

              <h3 className="mt-5 text-xl font-bold">
                Identity
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Customize your profile and build your unique KPLAYO identity.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-pink-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🎮</div>

              <h3 className="mt-5 text-xl font-bold">
                Gaming
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Track your games, achievements, activity, and progress.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">👥</div>

              <h3 className="mt-5 text-xl font-bold">
                Connections
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Connect with friends, creators, and communities across KPLAYO.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/40 hover:bg-white/[0.05]">
              <div className="text-3xl">🏆</div>

              <h3 className="mt-5 text-xl font-bold">
                Achievements
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Showcase milestones, rewards, rankings, and gaming progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}