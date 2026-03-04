"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/pitfalls", label: "Pitfalls" },
    { href: "/lifecycle", label: "Lifecycle" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight hover:text-accent-blue transition">
          Your Injury Friend
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent-blue transition font-medium">
              {l.label}
            </Link>
          ))}
          <Link
            href="/referral"
            className="bg-accent-red hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Get Help
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-navy border-t border-white/10 px-4 pb-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 hover:text-accent-blue transition"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/referral"
            className="block bg-accent-red hover:bg-red-700 text-white text-center px-5 py-2 rounded-lg font-semibold transition"
            onClick={() => setOpen(false)}
          >
            Get Help
          </Link>
        </nav>
      )}
    </header>
  );
}
