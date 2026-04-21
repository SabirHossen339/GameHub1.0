import React from 'react';
import { FaBell } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <section className="bg-[#0b1120] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
          Stay in the loop
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mb-8">
          Get weekly curated picks of the best indie games <br />
          delivered straight to your inbox.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-100 px-5 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
          />

          <button className="flex items-center gap-2 bg-blue-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-blue-300 transition">
            Subscribe
            <span><FaBell /></span>
          </button>

        </div>

      </div>
    </section>
    );
};

export default Newsletter;