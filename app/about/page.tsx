import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Jonathan Martin | Your Injury Friend',
  description: 'Learn about Jonathan Martin, a licensed attorney who created Your Injury Friend to provide honest, accessible information about personal injury law.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warmWhite">
      {/* Hero Section */}
      <div className="bg-green text-warmWhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Who Am I, and Why Do I Care?</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-md p-8 lg:p-12">
          {/* Header Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src="/yourinjuryfriend/images/jon-header.png"
              alt="Jonathan Martin, Licensed Attorney"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              My name is Jonathan Martin, and I&apos;m a licensed attorney.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              I created Your Injury Friend because I saw too many people getting taken advantage of after accidents. Between aggressive insurance adjusters, papermill law firms, and confusing legal processes, injured people often feel lost and overwhelmed.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              I&apos;ve spent my career in litigation, and I&apos;ve seen both sides — the good attorneys who fight for their clients and the bad ones who treat cases like assembly-line products. I&apos;ve seen insurance companies use every trick in the book to minimize payouts, and I&apos;ve watched people sign away their rights because they didn&apos;t know any better.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              This site is my way of leveling the playing field. Every article here is written to give you real, honest information about how personal injury law actually works — not marketing fluff designed to get you to call a 1-800 number.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              I don&apos;t charge you for the information on this site. If you want help finding a trustworthy attorney, I&apos;m happy to connect you with someone I know and trust. That&apos;s it. No pressure, no gimmicks.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              My father is an expert witness in the garage door and gate industry through his company Door and Gate Experts (doorandgateexperts.com). Growing up around the legal world gave me a unique perspective on how cases really work behind the scenes.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              I believe that informed people make better decisions. And better decisions lead to better outcomes.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              If you have questions, want guidance, or just need someone to point you in the right direction — I&apos;m here.
            </p>

            {/* CTA Section */}
            <div className="mt-12 bg-navy text-warmWhite rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help Finding an Attorney?</h2>
              <p className="mb-6 text-warmWhite/90">
                I can connect you with a trusted attorney who will fight for you.
              </p>
              <Link
                href="/referral"
                className="inline-block bg-red text-warmWhite py-3 px-8 rounded-lg font-semibold hover:bg-red/90 transition-colors"
              >
                Get a Referral
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
