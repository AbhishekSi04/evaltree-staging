'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { CollectibleCard } from '@/components/CollectibleCard';

type Collectible = {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url?: string;
  created_at: string;
};

export default function MarketplacePage() {
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollectibles() {
      setLoading(true);
      const { data, error } = await supabase
        .from('collectibles')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) setCollectibles(data as Collectible[]);
      setLoading(false);
    }
    fetchCollectibles();
  }, []);

  return (
    <div className="min-h-screen bg-[#181c2a] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Marketplace</h1>
        <div className="text-gray-400 mb-6">
          Showing {collectibles.length} of {collectibles.length} collectibles
        </div>
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : collectibles.length === 0 ? (
          <div className="text-gray-400">No collectibles found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {collectibles.map((item) => (
              <CollectibleCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}