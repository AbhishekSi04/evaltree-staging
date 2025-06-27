"use client"

export default function WhyChooseUs() {
    return (
      <section className="w-full flex justify-center py-16 bg-transparent">
        <div className="w-full max-w-7xl rounded-3xl bg-gradient-to-br from-[#181c2a] to-[#232946] border border-[#232946] px-8 py-12 flex flex-col items-center shadow-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">
            Why Choose <span className="text-blue-400">Evaltree</span>?
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12">
            Experience the future of digital ownership
          </p>
          <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 text-3xl shadow">
                  🚀
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white text-center">Instant Creation</h3>
              <p className="text-gray-400 text-center">
                Create and issue collectibles in minutes with our streamlined platform.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500 text-3xl shadow">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="8" fill="#22c55e"/>
                    <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white text-center">Secure Transactions</h3>
              <p className="text-gray-400 text-center">
                Bank-grade security with Stripe payments and blockchain verification.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-orange-400 text-3xl shadow">
                  🎯
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white text-center">Exclusive Raffles</h3>
              <p className="text-gray-400 text-center">
                Participate in premium raffles and win rare digital collectibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }