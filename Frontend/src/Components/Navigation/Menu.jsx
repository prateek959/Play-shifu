import React from "react";
import { ChevronDown } from "lucide-react";

const Menu = () => {
  return (
    <div className="font-[Nunito] border-b pl-25 pr-25 bg-white px-6 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between py-4 text-m relative">

          {/* Shop By Category with hover dropdown */}
          
          <div className="relative group">
            <button className="menu-item flex items-center gap-1 hover:text-[#68005f] transition duration-200">
              Shop By Category <ChevronDown size={16} />
            </button>

            <div className="absolute z-10 mt-2 w-300 rounded-xl bg-white shadow-lg  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 p-6">
              <div className="grid grid-cols-6 gap-6 text-center text-sm text-gray-700">
                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fproblem-solving.webp&w=1920&q=75"
                    alt="Problem Solving"className="w-24 h-24"/>
                  <span>Problem Solving Toys</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fstem.webp&w=1920&q=75"
                    alt="Stem Toys"className="w-24 h-24"/>
                  <span>Stem Toys</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fsocial-skills.webp&w=1920&q=75"
                    alt="Emotional Toys"className="w-24 h-24"/>
                  <span>Social Emotional & Development Toys</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fanimals-and-dinos.webp&w=1920&q=75"
                    alt="Animals"className="w-24 h-24"/>
                  <span>Animals & Dinos</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fpretend-play.webp&w=1920&q=75"
                    alt="Pretend Play"className="w-24 h-24" />
                  <span>Pretend Play</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fbirthday-gifts.webp&w=1920&q=75"
                    alt="Birthday"className="w-24 h-24"/>
                  <span>Birthday Gift Toys</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-400">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fsupersaver.webp&w=1920&q=75"alt="Super Saver Deals"
                    className="w-24 h-24"
                  />
                  <span>Super Saver Deals</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fbestseller.webp&w=1920&q=75"alt="Best Seller Toys"
                    className="w-24 h-24"
                  />
                  <span>Best Seller Toys</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Forboot.webp&w=1920&q=75"alt="Orboot"
                    className="w-24 h-24"
                  />
                  <span>Orboot</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Ftacto.webp&w=1920&q=75"
                    alt="Tacto"className="w-24 h-24"/>
                  <span>Tacto</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Fplugo.webp&w=1920&q=75"
                    alt="Plugo"className="w-24 h-24"/>
                  <span>Plugo</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fcategories%2Flovabies%2B.webp&w=1920&q=75"
                    alt="Lovabies"className="w-24 h-24"/>
                  <span>Lovabies</span>
                </button>

              </div>
            </div>
          </div>

{/* Shop By Age with hover dropdown */}
          
<div className="relative group">
<button className="menu-item flex items-center gap-1 hover:text-[#68005f] transition duration-200">
              Shop By Age <ChevronDown size={16} />
            </button>

            <div className="absolute z-10 mt-2 w-200 rounded-xl bg-white shadow-lg  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 p-6">
              <div className="grid grid-cols-4 gap-6 text-center text-s text-gray-700">
                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F4-6.webp&w=1920&q=75"
                    alt="4-6"className="w-26 h-26"/>
                  <span>4-6</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F6-8.webp&w=1920&q=75"
                    alt="6-8"className="w-26 h-26"/>
                  <span>6-8</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F8-10.webp&w=1920&q=75"
                    alt="8-10"className="w-26 h-26"/>
                  <span>8-10</span>
                </button>

                <button className="flex flex-col items-center space-y-2 hover:text-blue-600">
                  <img
                    src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fnavigation-bar%2Fages%2F10-plus.webp&w=1920&q=75"
                    alt="10+"className="w-26 h-26"/>
                  <span>10+</span>
                </button>

              </div>
            </div>
          </div>

          {/* Rest of the Buttons */}
          <button className="menu-item flex items-center gap-1 hover:text-[#68005f] transition duration-200">Birthday Gifts</button>
          <button className="menu-item flex items-center gap-1 hover:text-[#68005f] transition duration-200">Return Gifts</button>
          <button className="menu-item flex items-center gap-1 hover:text-[#68005f] transition duration-200">Shop All</button>
          <button className="menu-item flex items-center gap-1 hover:text-[#68005f] transition duration-200">More <ChevronDown size={16} /></button>

        </div>
      </div>
    </div>
  );
};

export default Menu;
