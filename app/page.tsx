'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/UserProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import SuccessHandler from '@/components/SuccessHandler';

export default function Home() {
  const { user, loading } = useUser();
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return null; // Redirecting to login
  }

  return (
    <div className="min-h-screen bg-[#181c2a] flex flex-col">
      <Header />
      <Suspense fallback={null}>
        <SuccessHandler onSuccess={() => setShowSuccess(true)} />
      </Suspense>

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
