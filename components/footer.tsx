import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-6">
        
        {/* About Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="mb-5 font-bold">ABOUT US</p>
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="text-green-600 md:text-white text-sm hover:text-green-200 transition-colors"
              >
                About Paged
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-green-600 md:text-white text-sm hover:text-green-200 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-green-600 md:text-white text-sm hover:text-green-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="text-green-600 md:text-white text-sm hover:text-green-200 transition-colors hover:cursor-pointer">
              Billing Policy
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="mb-5 font-bold">SUPPORT</p>
          <ul className="space-y-4">
            <li className="text-green-600 md:text-white text-sm hover:text-green-200">
              support@paged.com
            </li>
            <li className="text-green-600 md:text-white text-sm hover:text-green-200 hover:cursor-pointer">
              Contact Us
            </li>
            <li className="text-green-600 md:text-white text-sm hover:text-green-200 hover:cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>

        {/* Apps Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="mb-5 font-bold">OUR APPS</p>
          <ul className="space-y-4">
            <li>
              <img
                src="https://assets.jiji.ng/static/img/single-images/app-store.svg"
                alt="App Store"
                className="w-20 md:w-40"
              />
            </li>
            <li>
              <img
                src="https://assets.jiji.ng/static/img/single-images/google-play.svg"
                alt="Google Play"
                className="w-20 md:w-40"
              />
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="mb-5 font-bold">OUR SOCIAL MEDIA</p>
          <ul className="space-y-4">
            <li className="text-green-600 md:text-white text-sm hover:text-green-200 hover:cursor-pointer">
              Our Blog
            </li>
            <li className="text-green-600 md:text-white text-sm hover:text-green-200 hover:cursor-pointer">
              Our Facebook
            </li>
            <li className="text-green-600 md:text-white text-sm hover:text-green-200 hover:cursor-pointer">
              Our Instagram
            </li>
            <li className="text-green-600 md:text-white text-sm hover:text-green-200 hover:cursor-pointer">
              Our Twitter
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}