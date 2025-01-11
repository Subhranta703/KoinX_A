import React from "react";
import Header from "../components/Header";

const Page2 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* Coin Details Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Bitcoin (BTC)</h1>
            <p className="text-sm text-gray-500">Last updated: just now</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {/* Chart */}
            <div className="flex-1">
              <img
                src="/assets/bitcoin-chart.png"
                alt="Bitcoin Chart"
                className="rounded-lg border"
              />
            </div>
            {/* Price and Info */}
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-500">Current Price (USD)</p>
                <p className="text-3xl font-bold text-gray-800">$43,000</p>
                <p className="text-lg text-green-500 mt-1">+2.5% in last 24h</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-500">Market Cap</p>
                <p className="text-xl font-bold text-gray-800">$800 Billion</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page2;
