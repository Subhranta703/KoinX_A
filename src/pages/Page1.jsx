import React from "react";
import Header from "../components/Header";
import Frame from "../assets/Frame.png";
import Ethereum from "../assets/Ethereum.jpeg"
import Polygon from"../assets/Polygon.jpeg"
import Bitcoin from "../assets/bit.webp"

const Page1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Bitcoin Info and Chart */}
        <div className="col-span-2">
          {/* Bitcoin Price Section */}
          <section className="bg-white text-black rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold flex items-center space-x-2">
            <img src={Bitcoin} alt="frame" className="w-8 h-8 " />
              <span>Bitcoin</span>
              <span className="text-gray-500">BTC</span>
              <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                Rank #1
              </span>
            </h2>
            <div className="mt-4">
              <div className="text-4xl font-bold">$46,953.04</div>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-green-500 font-medium">+2.51%</span>
                <span className="text-gray-500">(24H)</span>
              </div>
              <div className="text-2xl text-gray-700 mt-2">₹39,42,343</div>
            </div>
          </section>

          {/* Chart Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Bitcoin Price Chart <span className="text-gray-500">(USD)</span>
            </h2>
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
        </div>

        {/* Right Section - Call-to-Action and Trending Coins */}
        <div>
          {/* Call-to-Action Section */}
          <section className="bg-blue-600 text-white rounded-lg p-6 shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center">
              Get Started with KoinX for FREE
            </h2>
            <p className="mt-4 text-center">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            {/* Centered Image */}
            <img src={Frame} alt="frame" className="w-32 h-36 my-6" />
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition">
              Get Started for FREE →
            </button>
          </section>

          {/* Trending Coins Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Trending Coins (24h)
            </h2>
            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex items-center">
              <img src={Ethereum} alt="frame" className="w-8 h-8" />
                <p className="text-gray-700">Ethereum (ETH)</p>
                <p className="text-green-500 ml-auto">+8.21%</p>
              </div>
              <div className="flex items-center">
              <img src={Bitcoin} alt="frame" className="w-8 h-8 " />
                <p className="text-gray-700">Bitcoin (BTC)</p>
                <p className="text-green-500 ml-auto">+5.26%</p>
              </div>
              <div className="flex items-center">
              <img src={Polygon} alt="frame" className="w-8 h-8 " />
                <p className="text-gray-700">Polygon (MATIC)</p>
                <p className="text-green-500 ml-auto">+4.32%</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page1;
