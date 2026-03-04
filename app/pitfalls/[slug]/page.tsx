import Link from 'next/link';
import { articles } from '@/app/data/articles';
import { articleContent } from '@/app/data/articleContent';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Your Injury Friend`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const currentIndex = articles.findIndex((a) => a.slug === params.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const article = articles[currentIndex];
  const content = articleContent[params.slug];
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-warmWhite">
      {/* Breadcrumb */}
      <div className="bg-navy text-warmWhite py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm">
            <Link href="/" className="hover:text-blue transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/pitfalls" className="hover:text-blue transition-colors">
              Pitfalls
            </Link>
            <span className="mx-2">/</span>
            <span className="text-warmWhite/70">{article.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-4xl font-bold text-navy mb-6">{article.title}</h1>

              <div className="prose prose-lg max-w-none">
                {content.split('\n\n').map((paragraph, index) => {
                  // Check if it's a heading
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-navy mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }

                  // Check if it's a list item
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-700">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Check if it's numbered list
                  if (/^\d+\./.test(paragraph)) {
                    const items = paragraph.split('\n').filter(line => /^\d+\./.test(line));
                    return (
                      <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-700">
                            {item.replace(/^\d+\.\s/, '')}
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  // Check if it contains bold text markers
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split('**');
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {parts.map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="font-bold text-navy">{part}</strong> : part
                        )}
                      </p>
                    );
                  }

                  // Regular paragraph
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Previous/Next Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
                {prevArticle ? (
                  <Link
                    href={`/pitfalls/${prevArticle.slug}`}
                    className="text-navy hover:text-red transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-600">Previous</div>
                      <div className="font-semibold">{prevArticle.shortTitle}</div>
                    </div>
                  </Link>
                ) : (
                  <div></div>
                )}

                {nextArticle ? (
                  <Link
                    href={`/pitfalls/${nextArticle.slug}`}
                    className="text-navy hover:text-red transition-colors flex items-center text-right"
                  >
                    <div>
                      <div className="text-sm text-gray-600">Next</div>
                      <div className="font-semibold">{nextArticle.shortTitle}</div>
                    </div>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-navy text-warmWhite rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="mb-6 text-warmWhite/90">
                If you&apos;ve been injured and need guidance, I can connect you with a trusted attorney who will fight for you.
              </p>
              <Link
                href="/referral"
                className="block w-full bg-red text-warmWhite text-center py-3 px-6 rounded-lg font-semibold hover:bg-red/90 transition-colors"
              >
                Get a Referral
              </Link>

              <div className="mt-8 pt-6 border-t border-warmWhite/20">
                <h4 className="font-bold mb-3">More Articles</h4>
                <ul className="space-y-2">
                  {articles.slice(0, 5).map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/pitfalls/${a.slug}`}
                        className={`text-sm hover:text-blue transition-colors ${
                          a.slug === params.slug ? 'text-blue font-semibold' : 'text-warmWhite/80'
                        }`}
                      >
                        {a.shortTitle}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/pitfalls"
                      className="text-sm text-blue hover:underline"
                    >
                      View all articles →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
