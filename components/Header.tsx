'use client';

import Link from 'next/link';
import { useUser } from '@/components/UserProvider';

export default function Header() {
  const { user } = useUser();

  return (
    <header className="w-full bg-[#10172a] text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 rounded p-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="currentColor" />
              <path d="M7 12l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 12l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="ml-2">Evaltree</span>
        </Link>
        {/* Navigation */}
        <nav className="flex gap-8 items-center font-medium">
          <Link href="/marketplace" className="hover:text-blue-400 transition">Marketplace</Link>
          <Link href="/trading" className="hover:text-blue-400 transition">Trading</Link>
          <Link href="/create" className="hover:text-blue-400 transition">Create</Link>
        </nav>
        {/* Auth/User section */}
        {!user ? (
          <Link
            href="/auth"
            className="ml-6 px-5 py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition"
          >
            Sign In
          </Link>
        ) : (
          <div className="ml-6 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-lg font-bold uppercase">
              {user.email?.[0] || user.user_metadata?.name?.[0] || 'U'}
            </span>
            <span className="font-semibold text-white">
              {user.user_metadata?.name || user.email}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}