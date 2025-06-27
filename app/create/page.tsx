'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@/components/UserProvider'; // If you use auth context
import { useRouter } from 'next/navigation';

export default function CreateCollectiblePage() {
  const { user } = useUser(); // If you use the UserProvider
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (!user) {
      setError('You must be signed in to create a collectible.');
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from('collectibles').insert([
      {
        title,
        description,
        price: parseFloat(price),
        image_url: imageUrl,
        owner: user.id,
      },
    ]);

    setLoading(false);

    if (insertError) {
      setError(insertError.message);
    } else {
      setSuccess('Collectible created successfully!');
      setTitle('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setTimeout(() => router.push('/marketplace'), 1500);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181c2a] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#232946] p-8 rounded-2xl shadow-lg w-full max-w-lg flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Create a Collectible</h2>
        <input
          type="text"
          placeholder="Title"
          className="p-3 rounded bg-[#181c2a] text-white border border-[#232946] focus:outline-none focus:border-blue-400"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="p-3 rounded bg-[#181c2a] text-white border border-[#232946] focus:outline-none focus:border-blue-400"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price (ETH)"
          className="p-3 rounded bg-[#181c2a] text-white border border-[#232946] focus:outline-none focus:border-blue-400"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
          min="0"
          step="0.01"
        />
        <div>
          <label className="block text-gray-400 mb-1">Image URL (optional)</label>
          <input
            type="url"
            placeholder="https://example.com/image.png"
            className="block w-full p-2 rounded bg-[#181c2a] text-white border border-[#232946] focus:outline-none focus:border-blue-400"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
          {imageUrl && (
            <img src={imageUrl} alt="Preview" className="mt-2 rounded w-32 h-32 object-cover" />
          )}
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Collectible'}
        </button>
      </form>
    </div>
  );
}