import Link from 'next/link';

export const metadata = {
  title: 'Do I Get Paid? | Your Injury Friend',
  description: 'Transparency about attorney referral fees and how YourInjuryFriend.com operates.',
};

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-warmWhite">
      {/* Hero Section */}
      <div className="bg-navy text-warmWhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Do I Get Paid If You Hire an Attorney I Recommend?</h1>
          <p className="text-xl text-warmWhite/90">
            Short Answer: Maybe—but never at your expense.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-md p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-navy mb-6">It All Comes Down to State Rules</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Every state has its own ethical rules governing how attorneys may share fees. Most states base their rules on the ABA Model Rules of Professional Conduct, particularly Rule 1.5(e).
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Conditions:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">The total fee is reasonable;</li>
              <li className="text-gray-700">The division is either proportional to the work performed or both attorneys assume joint responsibility;</li>
              <li className="text-gray-700">The client agrees to the arrangement in writing.</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy mb-6 mt-12">Most Importantly: You Don&apos;t Pay More</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If I am eligible to receive a portion of the fee, it doesn&apos;t cost you anything extra. My portion comes entirely out of the attorney&apos;s share—not yours.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              For example, if you agree to a 33% contingency fee, you&apos;ll pay 33% whether I receive a referral fee or not. The only difference is how that 33% is divided between the attorneys involved.
            </p>

            <h2 className="text-3xl font-bold text-navy mb-6 mt-12">What Do I Actually Do in These Cases?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="text-gray-700">I created and maintain the educational library on this site</li>
              <li className="text-gray-700">I never give direct legal advice about your specific case</li>
              <li className="text-gray-700">I help translate legal language into English</li>
              <li className="text-gray-700">I make myself available when you&apos;re confused</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy mb-6 mt-12">Why This Matters</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I believe in transparency. You deserve to know how people in your corner are getting paid.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              If you have questions about how referral fees work in your state, the attorney I refer you to will explain everything clearly before you sign any agreement. That&apos;s not just good practice—it&apos;s the law.
            </p>

            {/* CTA Section */}
            <div className="mt-12 bg-navy text-warmWhite rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Help?</h2>
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
