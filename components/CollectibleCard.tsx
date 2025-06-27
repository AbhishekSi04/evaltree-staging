import { FC } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import { useUser } from '@/components/UserProvider';

type Props = {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url?: string;
  created_at: string;
};

export const CollectibleCard: FC<Props> = ({
  id,
  title,
  description,
  price,
  image_url,
  created_at,
}) => {
  const { user } = useUser();

  const handleBuy = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title, price, user_id: user?.id }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Payment failed: ' + (data.error || 'Unknown error'));
    }
  };

  return (
    <div className="bg-[#232946] rounded-2xl shadow-lg overflow-hidden flex flex-col border border-[#232946] relative group transition hover:shadow-2xl">
      {/* Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        {image_url ? (
          <img src={image_url} alt={title} className="object-cover w-full h-full" />
        ) : (
          <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="text-gray-300">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
            <path d="M20 32h24M32 20v24" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}
      </div>
      {/* Card content */}
      <div className="flex-1 flex flex-col justify-between px-6 py-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-2">{description}</p>
        </div>
        <div>
          <div className="text-xs text-gray-400">Current Price</div>
          <div className="text-2xl font-bold text-white mb-2">{price} ETH</div>
          <div className="text-xs text-gray-500">Created: {new Date(created_at).toLocaleDateString()}</div>
          <button
            onClick={handleBuy}
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M6 6h15M6 12h15M6 18h15M3 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};