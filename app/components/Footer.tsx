import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Your Injury Friend</h3>
            <p className="text-sm leading-relaxed">
              Honest guidance through the personal injury process. Created by Jonathan Martin, licensed attorney.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pitfalls" className="hover:text-white transition">Pitfalls</Link></li>
              <li><Link href="/lifecycle" className="hover:text-white transition">Lifecycle of a Lawsuit</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/transparency" className="hover:text-white transition">Do I Get Paid?</Link></li>
              <li><Link href="/referral" className="hover:text-white transition">Get a Referral</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pitfalls/medical-liens" className="hover:text-white transition">Medical Liens</Link></li>
              <li><Link href="/pitfalls/insurance-companies" className="hover:text-white transition">Insurance Companies</Link></li>
              <li><Link href="/pitfalls/papermill-firms" className="hover:text-white transition">Papermill Law Firms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-gray-400 leading-relaxed">
          <p>
            <strong className="text-gray-300">Disclaimer:</strong> The information on this website is for general educational purposes only and does not constitute legal advice. YourInjuryFriend.com is not a law firm and does not provide full legal representation. As a licensed attorney, I may be involved in certain cases in a limited representative capacity, but this website does not create an attorney-client relationship. Referrals are made based on personal knowledge and professional judgment, but you are under no obligation to use any law firm referred through this site. You should conduct your own independent investigation before selecting legal representation. Legal outcomes vary based on the unique facts of each case, and past results do not guarantee future outcomes. This website may be considered attorney advertising under applicable laws and ethical rules. No guarantees or promises regarding the results of any legal matter are made by this site.
          </p>
          <p className="mt-4">&copy; {new Date().getFullYear()} YourInjuryFriend.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
