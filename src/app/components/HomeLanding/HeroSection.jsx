"use client";

import React from "react";
// Framer Motion is the standard for high-quality, declarative animations in Next.js
import { motion } from "framer-motion";
// Importing assets for potential background/decorative elements (kept for completeness)
import HeorSectionBG from "../../assets/HomeLanding/Rectangle 2.png";
import StarVector from "../../assets/HomeLanding/Vector.svg";

// 1. Placeholder URL for the Models Image (MUST be the correct image URL in a real project)
// In a real Next.js/React project, you'd import the image file directly, like:
// import ModelsImage from './path/to/models-image.png';
// Since I can't access your local assets, I'll use a functional placeholder that mimics the image's presence.
// *** IMPORTANT: The image shown in the prompt is a complex photo, not an SVG.
// The original code was pointing to an SVG (`HeorSectionBG.svg`), which is incorrect for the visual.
// For the UI to look exact, you must use the original image file.
const MODELS_IMAGE_URL = HeorSectionBG.src; // A URL to the image you uploaded (as a placeholder)

// Main App component which serves as the hero section
export default function HeroSection() {
  // 1. Framer Motion Variants for Staggered Entrance
  // Parent container variants to control the staggered appearance of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Time gap between child elements starting
        delayChildren: 0.3, // Delay before the first child starts
      },
    },
  };

  // Item variants for the slide-up and fade-in effect
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Data for the statistical highlights
  const stats = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" },
  ];

  // Data for the brand logos
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    // Removed min-h-screen to prevent extra space. Used py-12 for overall top/bottom padding.
    <div className="bg-[#F2F0F1] font-sans">
      {/* Main Hero Section Container (max-width and centered) */}
      {/* Increased max-w to match the wide content look of the image */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="relative overflow-hidden">
          {/* Flex Container for Left Content and Right Image */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between">
            {/* --- Left Side: Content & Stats (Animated Container) --- */}
            {/* Adjusted width to lg:w-[55%] to give the image more space, and increased padding */}
            <div className="lg:w-[55%] w-full mb-12 lg:mb-0 pt-10 pb-40 lg:pr-24">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {/* Main Headline */}
                <motion.h1
                  // Increased font size significantly, adjusted line-height for stacked text.
                  // The font looks like 'Integral CF' or similar heavy, condensed sans-serif.
                  // Use a class that mimics this style, e.g., a very heavy weight.
                  className="text-[48px]  md:text-[66px] tracking-tighter font-integral font-bold leading-[1.1] leading-[50px] text-gray-900 mb-6 uppercase tracking-tight"
                  variants={itemVariants}
                >
                  FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-base md:text-lg text-gray-700 mb-10 max-w-lg"
                  variants={itemVariants}
                >
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your **individuality** and
                  cater to your sense of **style**.
                </motion.p>

                {/* Shop Now Button */}
                <motion.button
                  // Adjusted button to match the image: black background, white text, full roundness.
                  className="px-12 w-[210px] py-4 text-[16px] font-medium bg-black text-white rounded-full shadow-xl hover:bg-gray-800 transition duration-300"
                  variants={itemVariants}
                  onClick={() => console.log("Shop Now clicked")}
                >
                  Shop Now
                </motion.button>

                {/* Stats Block (Staggered inside the main container) */}
                <motion.div
                  // Adjusted mt to match the large gap in the image, and used justify-start for alignment.
                  className="mt-20 flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-20 justify-start"
                  // This motion.div inherits stagger control from the parent, but we apply itemVariants to the children
                >
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.value}
                      className="flex flex-col"
                      variants={itemVariants}
                    >
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        {stat.value}
                      </span>
                      <span className="text-sm text-gray-600 mt-1 whitespace-nowrap">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* --- Right Side: Image (Single Fade-In) --- */}
            {/* Adjusted width to lg:w-[45%] and used absolute positioning for image to overlap the footer and align to the right edge */}
            <motion.div
              className="lg:w-[45%]  lg:h-auto overflow-visible"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              {/* The image container should manage the photo */}
              <div className="relative w-full h-full">
                {/* The main model image, positioned to cover the height and align to the bottom of its main section, then overlaps the footer */}
                <img
                  src={MODELS_IMAGE_URL}
                  alt="Two models wearing modern, stylish clothes."
                  // Use object-cover to make the image fill the container without distortion
                  // Use w-full and h-full to fill the space
                  // Use absolute positioning with 'bottom-0' and 'right-0' to align it correctly
                  className="md:w-full md:h-full "
                  style={{
                    // This min-height is a hack to ensure the image container is tall enough on desktop
                    // to match the visual height of the original image, pushing the footer into view.
                    minHeight: "800px",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/800x1000/333333/ffffff?text=Image+Not+Found";
                  }}
                />

                {/* Decorative Star/Sparkle Elements (Styled to match the image's star vector) */}
                <motion.div
                  className="absolute top-[8%] right-[8%] text-black w-20 h-20 md:w-24 md:h-24"
                  // Using a simple SVG path for the star shape as StarVector.src is inaccessible
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Mimic a four-point star/sparkle */}
                  <svg
                    className="w-full h-full fill-current"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z"
                      fill="black"
                    />
                  </svg>
                </motion.div>

                {/* Second Decorative Star/Sparkle Element */}
                <motion.div
                  className="absolute bottom-[40%] left-[5%] text-black w-12 h-12 md:w-16 md:h-16"
                  animate={{ scale: [1, 1.2, 1], rotate: [45, 60, 45] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <svg
                    className="w-full h-full fill-current"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z"
                      fill="black"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* --- Brand Logos Footer --- */}
      <motion.div
        className="w-full bg-black py-6 md:py-8 relative z-20"
        // The margin-top property is crucial to overlap the image and the rest of the white section
        style={{ marginTop: "-120px" }} // Increased negative margin to pull up significantly over the image base
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Used justify-around for even spacing */}
          <div className="flex flex-wrap justify-around items-center gap-4 md:gap-8">
            {brands.map((brand) => (
              <div
                key={brand}
                // Ensured text size is large, font-weight is bold, and tracking is wide
                className="flex-shrink-0 text-white text-xl md:text-3xl lg:text-4xl font-bold tracking-widest my-2 uppercase opacity-95"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
