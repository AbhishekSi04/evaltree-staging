import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full flex justify-center py-16 bg-transparent">
      <div className="w-full max-w-7xl rounded-3xl bg-gradient-to-br from-[#181c2a] to-[#232946] border border-[#232946] px-8 py-12 flex flex-col items-center shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Digital Journey?
          </span>
        </h2>
        <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl">
          Join thousands of creators and collectors in the premier digital collectibles ecosystem. Create, trade, and own unique digital assets with blockchain security.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <Link
            href="/auth"
            className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg shadow hover:from-purple-600 hover:to-blue-600 transition flex items-center justify-center gap-2"
          >
            Get Started Now <span className="ml-1">→</span>
          </Link>
          <Link
            href="/create"
            className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-green-500 text-white font-semibold text-lg shadow hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            Start Creating <span className="ml-1">⚡</span>
          </Link>
          <Link
            href="/marketplace"
            className="flex-1 md:flex-none px-8 py-4 rounded-xl bg-orange-500 text-white font-semibold text-lg shadow hover:bg-orange-600 transition flex items-center justify-center gap-2"
          >
            Explore Market <span className="ml-1">🛡️</span>
          </Link>
        </div>
      </div>
    </section>
  );
}