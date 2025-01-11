import React from "react";
import Header from "../components/Header";

const Page1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* Bitcoin Price Section */}
        <section className="bg-white text-black rounded-lg p-6 mb-8 flex justify-between items-center">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold">Bitcoin <span className="text-gray-600">BTC</span> </h2>
            
            {/* <p className="text-sm">Updated just now</p> */}
          
          <div className="flex items-center">
          
            <p className="text-4xl font-bold">$43,000</p>
            <p className="text-green-400 text-lg mt-2">+2.5% </p>
            </div>
          
          <div className="flex items-center ">
          <p className="text-2xl font-bold mt-8">₹35,00,000</p>
         
          </div>
          </div>
        </section>

        {/* Chart Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700">BTC Price Chart</h2>
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=BITSTAMP:BTCUSD"
            width="100%"
            height="400"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
            className="mt-4 rounded-lg border"
          ></iframe>
        </section>

        {/* Trending Coins Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Trending Coins (24h)</h2>
          <div className="mt-6 flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
              <p className="text-gray-700">Ethereum (ETH)</p>
              <p className="text-green-500 ml-auto">+8.21%</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
              <p className="text-gray-700">Bitcoin (BTC)</p>
              <p className="text-green-500 ml-auto">+5.26%</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              <p className="text-gray-700">Polygon (MATIC)</p>
              <p className="text-green-500 ml-auto">+4.32%</p>
            </div>
          </div>
        </section>

        {/* You May Also Like Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">You May Also Like</h2>
          <div className="mt-6 flex space-x-4">
            <div className="bg-gray-200 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
              <p className="text-gray-700 font-semibold">Polkadot</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
              <p className="text-gray-700 font-semibold">Litecoin</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
              <p className="text-gray-700 font-semibold">Chainlink</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page1;