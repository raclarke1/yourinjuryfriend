export interface Article {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
}

export const articles: Article[] = [
  { slug: "medical-liens", title: "You Need to Know About Medical Liens", shortTitle: "Medical Liens", description: "What is a medical lien, and how can it impact your settlement?" },
  { slug: "contingency-fees", title: "Contingency Fees — What You Need to Know", shortTitle: "Contingency Fees", description: "Understanding how personal injury lawyers charge for their services." },
  { slug: "papermill-firms", title: "You Need to Know About Paper Mill Law Firms", shortTitle: "Papermill Law Firms", description: "Don't pick a papermill — how to identify high-volume, low-quality firms." },
  { slug: "changing-attorneys", title: "Can You Change Your Attorney?", shortTitle: "Changing Attorneys", description: "Your right to fire your attorney and what happens when you do." },
  { slug: "profits-vs-care", title: "The Dark Side: Profits vs. Care", shortTitle: "Profits vs. Care", description: "The troubling pressure to inflate medical costs in personal injury cases." },
  { slug: "social-media", title: "Avoid Social Media Like the Plague!", shortTitle: "Social Media", description: "Why your social media posts can become weapons for the defense." },
  { slug: "insurance-companies", title: "Insurance Companies Are Not Your Friend — READ THIS NOW", shortTitle: "Insurance Companies", description: "How insurance companies build cases against you from the first phone call." },
  { slug: "independent-medical-exams", title: "What You Need to Know About IMEs", shortTitle: "IMEs", description: "Independent medical exams aren't as independent as they sound." },
  { slug: "treatment-gaps", title: "Beware of Medical Treatment Gaps", shortTitle: "Treatment Gaps", description: "Why gaps in your medical treatment can destroy your case." },
  { slug: "gather-evidence", title: "Gather the Evidence — NOW", shortTitle: "Gather Evidence", description: "Evidence has an expiration date — here's how to preserve it." },
  { slug: "never-lie", title: "Never Lie to Your Attorney", shortTitle: "Never Lie", description: "Why honesty with your lawyer is the most important thing you can do." },
  { slug: "privacy", title: "How Your Privacy Changes When You Sue", shortTitle: "Privacy", description: "What happens to your privacy the moment you file a lawsuit." },
];
