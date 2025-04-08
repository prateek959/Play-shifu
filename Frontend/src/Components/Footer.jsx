import React from "react";
import {
  Truck,
  Package,
  CircleCheckBig,
  Lock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import ap from '../assets/icons8-apple-pay.svg'
import Mastercard from '../assets/icons8-mastercard.svg'
import visaa from '../assets/icons8-visa.svg'
import gpay from '../assets/icons8-google-pay.svg'

const Footer = () => {
  return (
    <footer className="bg-[#eb1c4f] text-white pt-10">
      {/* Images on top of footer */}
      <div className="flex justify-center items-center gap-10 mb-6 flex-wrap">
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F2m-plus.webp&w=1920&q=75"
          alt=""
          className="w-40 h-35"
        />
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F35-plus-countries.webp&w=1920&q=75"
          alt=""
          className="w-40 h-35"
        />
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F20-plus-educational-toys.webp&w=1920&q=75"
          alt=""
          className="w-40 h-35"
        />
      </div>
      {/* Info Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="text-2xl text-black">
            <Truck size={28} />{" "}
          </span>
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="text-2xl text-black">
            <Package size={28} />
          </span>
          <span>30 Days Return</span>
        </div>
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="text-2xl text-black">
            <CircleCheckBig size={28} />
          </span>
          <span>6 Months Warranty</span>
        </div>
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="text-2xl text-black">
            <Lock size={28} />
          </span>
          <span>Secure Checkout</span>
        </div>
      </div>

      <hr className="my-6 border-t border-white/50 w-1/2 mx-auto" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-4 pb-8 ml-80 mr-50 text-sm">
        {/* WhatsApp Subscription */}
        <div>
          <p className="mb-2">
            Get notified of new launches, product updates, contests, and more
            exciting news!
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-1 text-xs rounded-full">
            Join our WhatsApp Community
          </button>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-yellow-300 font-bold mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>Problem Solving Toys</li>
            <li>Stem Toys</li>
            <li>Social & Emotional Development Toys</li>
            <li>Birthday Gift Toys</li>
            <li>Super Saver Deals</li>
            <li>Best Seller Toys</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="text-yellow-300 font-bold mb-2">More</h4>
          <ul className="space-y-1">
            <li>Device Compatibility</li>
            <li>Free-E-Books</li>
            <li>Parent Hub</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-yellow-300 font-bold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

     {/* Footer Bottom */}
<div className="border-t border-white/30 px-4 py-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
    {/* Copyright + Social Icons */}
    <div className="flex flex-col md:flex-row items-center gap-4">
      
      <div className="flex items-center gap-4">
        <Facebook />
        <Linkedin />
        <Instagram />
        <Youtube />
      </div>
      <div className="text-center ml-100 md:text-left">© 2025 PlayShifu.com</div>
    </div>

    {/* Payment & WhatsApp Icons */}
    <div className="flex items-center gap-4">
      <img
        src={ap}
        alt="Apple Pay"
      />
      <img
        src={Mastercard}
        alt="MasterCard"
      />
      <img
        src={visaa}
        alt="Visa"
      />
      <img
        src={gpay}
        alt="Google Pay"
      />
      
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
