# Task: Build YourInjuryFriend.com Modern Static Site

## What to build
A modern, professional personal injury education website for Jonathan Martin. All content and specs are in SPEC.md, CONTENT.md, and LIFECYCLE-CONTENT.md in this directory.

## Requirements
1. Use Next.js 14 with static export (output: 'export') and Tailwind CSS
2. TypeScript throughout
3. ALL content from CONTENT.md and LIFECYCLE-CONTENT.md must be included verbatim
4. The header image is at images/jon-header.png - copy it to public/images/
5. Mobile-first responsive design
6. Professional but approachable legal website feel
7. Color scheme: Navy (#1a2744), Red (#99272d), Blue (#6CBDFC), Green (#4b6d0e), Warm white (#f8f6f3)
8. Sticky nav with "Your Injury Friend" branding, hamburger menu on mobile
9. Footer with disclaimer on every page
10. SEO meta tags on every page

## Pages to build
- `/` - Homepage with hero, 3 cards, CTA
- `/pitfalls` - Hub with 12 article cards
- `/pitfalls/[slug]` - 12 individual article pages (all content in CONTENT.md)
- `/lifecycle` - Long-form page with all 10 sections (content in LIFECYCLE-CONTENT.md)
- `/about` - About Jonathan Martin
- `/referral` - Contact form (use formspree.io or simple mailto)
- `/transparency` - "Do I Get Paid?" page

## GitHub Pages deployment
- Add `.github/workflows/deploy.yml` for automatic deployment
- Configure next.config.js with basePath: '/yourinjuryfriend' and output: 'export'
- The repo is raclarke1/yourinjuryfriend

## When done
1. Git add, commit, and push everything
2. Run: openclaw system event --text "Done: Built modern YourInjuryFriend.com - all content migrated, pushed to GitHub" --mode now
