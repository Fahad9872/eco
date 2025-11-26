// components/NewsletterSection.js
"use client";
import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      // Key Styling for Overlap:
      // 1. max-w: Restricts width for rounding effect
      // 2. rounded-[40px]: Adds corner rounding
      // 3. relative & z-50: Ensures it stacks ABOVE the footer
      // 4. mb-[-80px]: Pushes the *next* element (the footer) up by 80px
      className="bg-black text-white max-w-[1400px] mx-auto rounded-[40px] py-12 px-4 md:py-16 md:px-8 lg:px-16 relative z-50 mb-[-80px]"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Title: STAY UPTO DATE ABOUT OUR LATEST OFFERS */}
        <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold uppercase tracking-tighter leading-tight font-integral flex-shrink-0 ">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        {/* Input and Button Container */}
        <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[400px]">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-4 pr-12 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Email address for newsletter"
            />
          </div>

          {/* Subscribe Button (White background, Black text) */}
          <button
            className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Subscribe to Newsletter"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterSection;
