import Link from "next/link";
import { articles } from "../data/articles";

export const metadata = {
  title: "The Pitfalls of Personal Injury | Your Injury Friend",
  description: "Critical things you need to know before making any decisions after an accident.",
};

export default function PitfallsHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy mb-4">The Pitfalls of Personal Injury</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">
        If you&apos;ve been hurt in an accident, there are critical things you need to know before making any
        decisions. These articles cover the most common mistakes, traps, and pitfalls that can cost you
        thousands — or even your entire case.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <Link
            key={a.slug}
            href={`/pitfalls/${a.slug}`}
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
          >
            <div className="bg-accent-red h-1.5" />
            <div className="p-6">
              <span className="text-sm font-bold text-accent-red mb-2 block">
                Pitfall #{i + 1}
              </span>
              <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-red transition">
                {a.shortTitle}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
