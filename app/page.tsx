'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@/components/UserProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

export default function Home() {
  const { user, loading } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (searchParams.get('success') === '1') {
      setShowSuccess(true);
      // Remove the query param and redirect after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        router.replace('/');
      }, 3000);
    }
  }, [searchParams, router]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    // Optionally, show nothing or a spinner while redirecting
    return null;
  }

  return (
    <div className="min-h-screen bg-[#181c2a] flex flex-col">
      <Header />
      {showSuccess && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Payment successful! Thank you for your purchase.
        </div>
      )}
      <HeroSection />
      <CallToAction />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}