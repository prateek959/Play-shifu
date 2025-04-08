import React, { useState } from 'react';
import { Search, CircleUserRound, ShoppingCart, X } from 'lucide-react';
import CountrySelector from './CountrySelector';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Search Bar */}
      {showSearch && (
        <div className="bg-white px-8 py-6 shadow-md flex justify-between items-center relative z-50">
          <input type="text" placeholder="Search for products" className="w-full text-3xl text-gray-400 focus:outline-none"
          />
          <button onClick={() => setShowSearch(false)} className="ml-4">
            <X size={30} className="text-gray-600 hover:text-black" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-yellow-300 py-4 shadow-md pl-40 pr-40 relative z-40">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="hover:text-purple-800 transition-colors" onClick={() => setShowSearch(prev => !prev)}>
              <Search className="text-2xl" />
            </button>
            <CountrySelector />
          </div>

          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fbrand%2Fplayshifu-logo.webp&w=1080&q=75"
            alt="PlayShifu"
            className="h-10 transform hover:scale-105 transition-transform"
          />

          <div className="flex items-center gap-6">
            <div className="relative">
              <ShoppingCart className="text-2xl hover:text-purple-800 transition-colors cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
            </div>
            <button onClick={() => setShowModal(true)}>
              <CircleUserRound className="text-2xl hover:text-purple-800 transition-colors cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>

      {/*  Sign Up Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl relative">
            <button
              className="absolute top-3 right-3 bg-purple-700 text-white p-1 rounded-full hover:bg-purple-800"
              onClick={() => setShowModal(false)}
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-semibold text-center mb-6">Sign up to PlayShifu</h2>

            <button className="w-full border border-gray-400 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-100 mb-4">
              Continue With Google
              <img
                src="https://www.playshifu.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.4fbed1c7.png&w=48&q=75"
                alt="Google"
                className="w-5 h-5"
              />
            </button>

            <div className="text-center text-sm text-gray-500 mb-4">or</div>

            <button className="w-full border border-gray-400 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
              Continue with email
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
