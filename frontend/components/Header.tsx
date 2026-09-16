"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-4 py-4 backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center transition hover:opacity-80"
          >
            <img
              src="/brand/kplayo_logo_horizontal_white_transparent.svg"
              alt="KPLAYO"
              className="h-8 w-auto md:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex lg:gap-6">
            <a href="/" className="transition hover:text-cyan-400">
              Home
            </a>

            <a href="/games" className="transition hover:text-cyan-400">
              Games
            </a>

            <a href="/live" className="transition hover:text-pink-500">
              LIVE
            </a>

            <a
              href="/community"
              className="transition hover:text-cyan-400"
            >
              Community
            </a>

            <a href="/wallet" className="transition hover:text-cyan-400">
              Economy
            </a>

            <a href="/events" className="transition hover:text-pink-500">
              Events
            </a>

            <a href="/world" className="transition hover:text-cyan-400">
              Universe
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="/search"
              className="rounded-full border border-white/20 px-3 py-2 text-sm transition hover:border-cyan-400"
            >
              Search
            </a>

            <a
              href="/notifications"
              className="rounded-full border border-white/20 px-3 py-2 text-sm transition hover:border-pink-500"
            >
              Notifications
            </a>

            <a
              href="/profile"
              className="rounded-full border border-white/20 px-3 py-2 text-sm transition hover:border-cyan-400"
            >
              Profile
            </a>

            <a
              href="/signin"
              className="rounded-full border border-cyan-400 px-4 py-2 text-sm transition hover:bg-cyan-400 hover:text-black"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/20 px-3 py-2 text-lg transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3 pt-4 md:hidden">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="/games"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Games
            </a>

            <a
              href="/live"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-pink-500"
            >
              LIVE
            </a>

            <a
              href="/community"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Community
            </a>

            <a
              href="/wallet"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Economy
            </a>

            <a
              href="/events"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-pink-500"
            >
              Events
            </a>

            <a
              href="/world"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Universe
            </a>

            <a
              href="/profile"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Profile
            </a>

            <a
              href="/notifications"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-pink-500"
            >
              Notifications
            </a>

            <a
              href="/search"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Search
            </a>

            <a
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full border border-cyan-400 px-4 py-2 text-center transition hover:bg-cyan-400 hover:text-black"
            >
              Sign In
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}