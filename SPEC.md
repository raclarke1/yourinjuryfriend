# YourInjuryFriend.com — Modern Rebuild Spec

## Overview
Rebuild yourinjuryfriend.com as a modern, fast, static website. Use Next.js with Tailwind CSS and deploy to GitHub Pages. The site belongs to Jonathan Martin, a licensed attorney providing personal injury education and attorney referrals.

## Tech Stack
- **Next.js 14** with static export (`output: 'export'`)
- **Tailwind CSS** for styling
- **TypeScript**
- **GitHub Pages** deployment (repo: raclarke1/yourinjuryfriend)

## Design Direction
- Modern, clean, professional legal site
- Color palette: Deep navy (#1a2744), Red accent (#99272d), Warm white (#f8f6f3), Blue accent (#6CBDFC), Green accent (#4b6d0e)
- Professional but approachable — not stuffy law firm, more like a trusted friend
- Mobile-first responsive design
- Smooth scroll navigation
- Card-based layouts for articles
- Clean typography (Inter or similar)

## Site Structure

### Pages:
1. **Home** (`/`) — Hero + 3 section cards + CTA
2. **Pitfalls** (`/pitfalls`) — Hub page with 12 article cards
3. **Lifecycle** (`/lifecycle`) — Long-form content page (all sections inline)
4. **About** (`/about`) — About Jonathan Martin
5. **Referral** (`/referral`) — Contact/referral request form
6. **Do I Get Paid?** (`/transparency`) — Fee transparency page
7. **Individual Articles** (`/pitfalls/[slug]`) — 12 article pages

### Navigation:
- Sticky header with logo text "Your Injury Friend"
- Nav links: Home, Pitfalls, Lifecycle, About, Get Help (CTA button)
- Mobile hamburger menu
- Footer with disclaimer + nav links

## Header Image
- File: `images/jon-header.png` (already downloaded)
- Use on homepage hero and about page

## Content

All content is in CONTENT.md in this directory. Each section is clearly labeled with its page/slug.
The content was scraped from the original WordPress site and should be used verbatim (it's the client's writing).

## Disclaimer (footer on every page)
Disclaimer: The information on this website is for general educational purposes only and does not constitute legal advice. YourInjuryFriend.com is not a law firm and does not provide full legal representation. As a licensed attorney, I may be involved in certain cases in a limited representative capacity, but this website does not create an attorney-client relationship. Referrals are made based on personal knowledge and professional judgment, but you are under no obligation to use any law firm referred through this site. You should conduct your own independent investigation before selecting legal representation. Legal outcomes vary based on the unique facts of each case, and past results do not guarantee future outcomes. This website may be considered attorney advertising under applicable laws and ethical rules. No guarantees or promises regarding the results of any legal matter are made by this site.

## Referral Form
The referral page should have a contact form with:
- Name (required)
- Email (required) 
- Phone (optional)
- Brief description of your situation (textarea)
- Submit button
Since this is static, use Formspree or similar for form handling (or just a mailto: link).

## GitHub Pages Setup
- Configure for static export
- Add GitHub Actions workflow for auto-deploy on push
- Base path should work at raclarke1.github.io/yourinjuryfriend/

## Key Requirements
1. ALL content from the original site must be preserved verbatim
2. Modern, professional design
3. Fast loading (static site, optimized images)
4. Mobile responsive
5. SEO-friendly (meta tags, proper headings)
6. Accessible (proper alt text, contrast, semantic HTML)
7. Working internal links between articles
