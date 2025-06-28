'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@/components/UserProvider';
import { OwnedCollectibleCard } from '@/components/OwnedCollectibleCard';

type Collectible = {
    id: string;
    title: string;
    description: string;
    price: number;
    image_url?: string;
    created_at: string;
  };

export default function MyCollectiblesPage() {
  const { user } = useUser();
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id == null) return;
    
    async function fetchMyCollectibles() {
      setLoading(true);
      
      // Try different approaches to find purchases
      const { data: purchases, error: purchasesError } = await supabase
        .from('purchases')
        .select('collectible_id')
        .eq('user_id', user?.id);
      
      
      if (purchasesError) {
        console.error('Error fetching purchases:', purchasesError);
        setLoading(false);
        return;
      }

      setLoading(false);
    }
    
    fetchMyCollectibles();
  }, [user]);

  if (!user) {
    return <div className="text-white p-8">Please sign in to view your collectibles.</div>;
  }

  return (
    <div className="min-h-screen bg-[#181c2a] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">My Collectibles</h1>
        
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : collectibles.length === 0 ? (
          <div className="text-gray-400">You have no collectibles yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {collectibles.map((item: Collectible) => (
               <OwnedCollectibleCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}