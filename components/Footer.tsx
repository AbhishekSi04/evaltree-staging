import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181c2a] border-t border-[#232946] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Brand and Description */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold text-lg">
              E
            </span>
            <span className="text-2xl font-bold text-white">Evaltree</span>
          </div>
          <p className="text-gray-400 mb-4 max-w-xm">
            The premier platform for issuing and collecting digital assets. Create, trade, and own unique digital collectibles with blockchain technology.
          </p>
          <div className="flex gap-3">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 0 0 1.964-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12 8.48c0 .352.04.695.116 1.022C8.728 9.36 5.8 7.77 3.797 5.36a4.48 4.48 0 0 0-.607 2.254c0 1.555.792 2.927 2.002 3.73a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.052-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.07a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.98 8.98 0 0 1-2.6.713z" fill="currentColor"/></svg>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.42-.012 2.75 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1"/><path d="M7.5 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.75 2.25H6.75v7.5h1.5v-7.5zm3.75 0h-1.5v7.5h1.5v-4.125c0-1.125.75-1.5 1.125-1.5.375 0 .75.375.75 1.5v4.125h1.5v-4.5c0-1.875-1.125-2.25-1.5-2.25-.75 0-1.125.375-1.5 1.125V10.75z" fill="currentColor"/></svg>
            </a>
            <a href="mailto:info@evaltree.com" className="text-gray-400 hover:text-blue-400 transition">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1"/><path d="M4 8.5v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2 0l6 4.5L18 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
        {/* Center: Platform Links */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:px-20">
          <div className="font-bold text-white mb-3">Platform</div>
          <ul className="space-y-2">
            <li>
              <Link href="/marketplace" className="text-gray-400 hover:text-blue-400 transition">Marketplace</Link>
            </li>
            <li>
              <Link href="/create" className="text-gray-400 hover:text-blue-400 transition">Create Collection</Link>
            </li>
            <li>
              <Link href="/raffles" className="text-gray-400 hover:text-blue-400 transition">Raffles</Link>
            </li>
            <li>
              <Link href="/analytics" className="text-gray-400 hover:text-blue-400 transition">Analytics</Link>
            </li>
          </ul>
        </div>
        {/* Right: Support Links */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:px-20">
          <div className="font-bold text-white mb-3">Support</div>
          <ul className="space-y-2">
            <li>
              <Link href="/help" className="text-gray-400 hover:text-blue-400 transition">Help Center</Link>
            </li>
            <li>
              <Link href="/community" className="text-gray-400 hover:text-blue-400 transition">Community</Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}