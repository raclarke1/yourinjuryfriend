import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const cards = [
    {
      title: "Pitfalls of Personal Injury",
      desc: "If you've been hurt in an accident, there are things you need to know before you hire an attorney. I wrote these articles to help protect you from common mistakes that can cost you thousands.",
      href: "/pitfalls",
      color: "bg-accent-red",
      icon: "⚠️",
    },
    {
      title: "The Lifecycle of a Lawsuit",
      desc: "Lawsuits are complex. This section walks you through every stage of a personal injury case, from the moment of injury to final resolution.",
      href: "/lifecycle",
      color: "bg-accent-blue",
      icon: "⚖️",
    },
    {
      title: "Who Am I, and Why Do I Care?",
      desc: "I'm Jonathan Martin, a licensed attorney. I created this site because I believe everyone deserves honest, accessible information about personal injury law.",
      href: "/about",
      color: "bg-accent-green",
      icon: "👤",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Your Injury Friend
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Honest guidance through the personal injury process
            </p>
            <p className="text-lg text-accent-blue font-medium mb-8">
              Jonathan Martin — Licensed Attorney
            </p>
            <Link
              href="/referral"
              className="inline-block bg-accent-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition shadow-lg"
            >
              Let Me Refer You to Someone I Trust
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/yourinjuryfriend/images/jon-header.png"
              alt="Jonathan Martin"
              width={300}
              height={300}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className={`${card.color} h-2`} />
              <div className="p-6">
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h2 className="text-xl font-bold text-navy mb-3 group-hover:text-accent-red transition">
                  {card.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-navy mb-4">Need Help With Your Case?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          No pressure. No sales pitch. Just honest guidance from someone who understands the process and wants to help you make informed decisions.
        </p>
        <Link
          href="/referral"
          className="inline-block bg-accent-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition shadow-lg"
        >
          Request a Referral →
        </Link>
      </section>
    </>
  );
}
