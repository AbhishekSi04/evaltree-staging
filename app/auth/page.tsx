'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/UserProvider';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleAuth = async (e: React.FormEvent) => {
    
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else setMessage('Check your email for a confirmation link!');
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else {
        setMessage('Signed in! Redirecting...');
        setTimeout(() => router.replace('/'), 1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181c2a] px-4">
      <form
        onSubmit={handleAuth}
        className="bg-[#232946] p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-[#181c2a] text-white border border-[#232946] focus:outline-none focus:border-blue-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-[#181c2a] text-white border border-[#232946] focus:outline-none focus:border-blue-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {message && <div className="text-green-500 text-sm">{message}</div>}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
        <div className="text-center">
          <button
            type="button"
            className="text-blue-400 underline text-sm"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? 'Already have an account? Sign In'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}