// components/MainFooter.js
"use client";
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image"; // Assuming Next.js for Image component

const MainFooter = () => {
  return (
    // Key Styling for Overlap:
    // 1. pt-32: Creates the large empty space at the top to receive the overlapping section.
    // 2. z-30: Ensures it sits *below* the newsletter's z-50 index.
    <footer className="bg-gray-50 text-gray-700 py-12  relative z-30 px-4 md:py-16 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto pt-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 md:gap-y-12 lg:gap-x-8 mb-12">
          {/* Column 1: SHOP.CO Branding & Socials */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 font-integral">
              SHOP.CO
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaTwitter className="w-4 h-4 text-gray-800" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaFacebookF className="w-4 h-4 text-gray-800" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaInstagram className="w-4 h-4 text-gray-800" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaGithub className="w-4 h-4 text-gray-800" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-medium text-lg text-gray-900 mb-5">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h4 className="font-medium text-lg text-gray-900 mb-5">HELP</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: FAQ */}
          <div>
            <h4 className="font-medium text-lg text-gray-900 mb-5">FAQ</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h4 className="font-medium text-lg text-gray-900 mb-5">
              RESOURCES
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section (Copyright & Payment) */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center text-sm">
          <p className="mb-4 md:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start">
            {/* Payment Icons - Using Next/Image for better optimization */}
            <div className="relative h-6 w-10">
              <Image
                src="/visa-logo.svg"
                alt="Visa"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-6 w-10">
              <Image
                src="/mastercard-logo.svg"
                alt="Mastercard"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-6 w-10">
              <Image
                src="/paypal-logo.svg"
                alt="PayPal"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-6 w-10">
              <Image
                src="/apple-pay-logo.svg"
                alt="Apple Pay"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-6 w-10">
              <Image
                src="/google-pay-logo.svg"
                alt="Google Pay"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
