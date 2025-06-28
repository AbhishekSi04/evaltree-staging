import { FC } from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url?: string;
  created_at: string;
};

export const OwnedCollectibleCard: FC<Props> = ({
  title,
  description,
  price,
  image_url,
  created_at,
}) => {
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
      
      {/* Ownership Badge */}
      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
        Owned
      </div>
      
      {/* Card content */}
      <div className="flex-1 flex flex-col justify-between px-6 py-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-2">{description}</p>
        </div>
        <div>
          <div className="text-xs text-gray-400">Purchase Price</div>
          <div className="text-2xl font-bold text-white mb-2">{price} ETH</div>
          <div className="text-xs text-gray-500">Created: {new Date(created_at).toLocaleDateString()}</div>
          
          {/* Ownership Info */}
          <div className="mt-4 p-3 bg-green-600/10 border border-green-600/20 rounded-lg">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-green-500">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-green-500 text-sm font-medium">In Your Collection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 