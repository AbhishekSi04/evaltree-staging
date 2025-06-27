import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#181c2a] to-[#232946] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full bg-[#232946] text-blue-300 font-semibold text-xs tracking-wider shadow">
              Next-Gen Digital Collectibles
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Create & Collect
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Assets
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Join the premier platform for issuing, trading, and collecting unique digital assets. Experience the future of ownership with blockchain-powered collectibles.
          </p>
          <div className="flex gap-4 mb-10">
            <Link
              href="/create"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
            >
              Start Creating
            </Link>
            <Link
              href="/marketplace"
              className="px-6 py-3 rounded-lg bg-[#232946] border border-blue-400 text-blue-300 font-semibold shadow hover:bg-blue-900 transition"
            >
              Explore Market
            </Link>
          </div>
          <div className="flex gap-10 text-center text-white/80 text-sm">
            <div>
              <div className="text-2xl font-bold">10K+</div>
              Collections
            </div>
            <div>
              <div className="text-2xl font-bold">500K+</div>
              Assets Created
            </div>
            <div>
              <div className="text-2xl font-bold">$2M+</div>
              Volume Traded
            </div>
          </div>
        </div>
        {/* Right: Cards */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 p-6 shadow-lg min-w-[200px] min-h-[120px] flex flex-col justify-end">
            <div className="font-bold text-lg">Golden Edition</div>
            <div className="text-xs text-white/80 mb-2">Limited Collection</div>
            <div className="text-blue-200 font-bold text-xl">2.5 ETH</div>
            <div className="text-xs text-white/40 mt-2">#001/100</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 p-6 shadow-lg min-w-[200px] min-h-[120px] flex flex-col justify-end">
            <div className="font-bold text-lg">Cyber Genesis</div>
            <div className="text-xs text-white/80 mb-2">Rare Drop</div>
            <div className="text-blue-200 font-bold text-xl">1.8 ETH</div>
            <div className="text-xs text-white/40 mt-2">#005/50</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 p-6 shadow-lg min-w-[200px] min-h-[120px] flex flex-col justify-end">
            <div className="font-bold text-lg">Nature&apos;s Call</div>
            <div className="text-xs text-white/80 mb-2">Eco Series</div>
            <div className="text-blue-200 font-bold text-xl">0.9 ETH</div>
            <div className="text-xs text-white/40 mt-2">#012/200</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-red-400 p-6 shadow-lg min-w-[200px] min-h-[120px] flex flex-col justify-end">
            <div className="font-bold text-lg">Fire Element</div>
            <div className="text-xs text-white/80 mb-2">Elemental Set</div>
            <div className="text-orange-200 font-bold text-xl">3.2 ETH</div>
            <div className="text-xs text-white/40 mt-2">#003/25</div>
          </div>
        </div>
      </div>
    </section>
  );
}