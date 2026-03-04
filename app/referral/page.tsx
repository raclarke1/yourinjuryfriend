'use client';

import { useState } from 'react';

export default function ReferralPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/yourinjuryfriend', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      <title>Get a Referral | Your Injury Friend</title>
      <meta
        name="description"
        content="Need help finding a trustworthy attorney? Let Jonathan Martin connect you with someone he knows and trusts."
      />

      <div className="min-h-screen bg-warmWhite">
        {/* Hero Section */}
        <div className="bg-navy text-warmWhite py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Let Me Refer You To Someone I Trust</h1>
            <p className="text-xl text-warmWhite/90 max-w-3xl">
              No pressure. No sales pitch. Just help when you need it.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 lg:p-12">
            <div className="mb-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you&apos;ve been injured and need legal representation, I can connect you with a trusted attorney who will fight for you.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Fill out the form below with some basic information about your situation, and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="bg-green/10 border border-green text-green p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p>
                  I&apos;ve received your referral request and will get back to you shortly. Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Your Name <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Your Email <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Your Phone <span className="text-gray-500 text-sm font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Situation Field */}
                <div>
                  <label htmlFor="situation" className="block text-sm font-semibold text-navy mb-2">
                    Tell me about your situation <span className="text-red">*</span>
                  </label>
                  <textarea
                    id="situation"
                    name="situation"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                    placeholder="Please describe what happened, when it occurred, and any injuries you sustained..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-warmWhite transition-colors ${
                      formStatus === 'submitting'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-red hover:bg-red/90'
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Request a Referral'}
                  </button>
                </div>

                {formStatus === 'error' && (
                  <div className="bg-red/10 border border-red text-red p-4 rounded-lg text-sm">
                    There was an error submitting your request. Please try again or email directly.
                  </div>
                )}
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Privacy Note:</strong> Your information will only be used to connect you with a qualified attorney. We will never sell or share your information with third parties for marketing purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
