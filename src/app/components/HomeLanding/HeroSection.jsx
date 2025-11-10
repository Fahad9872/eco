"use client";
import React from "react";
// Framer Motion is the standard for high-quality, declarative animations in Next.js
import { motion } from "framer-motion";
// Importing assets for potential background/decorative elements (kept for completeness)
import HeorSectionBG from "../../assets/HomeLanding/Rectangle 2.png";
import StarVector from "../../assets/HomeLanding/Vector.svg";
import Carousel from "react-elastic-carousel";

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

  const breakPoints = [
    { width: 1, itemsToShow: 2 }, // mobile
    { width: 640, itemsToShow: 3 }, // small tablets
    { width: 1024, itemsToShow: 5 }, // desktop
  ];

  return (
    // Removed min-h-screen to prevent extra space. Used py-12 for overall top/bottom padding.
    <div className="bg-[#F2F0F1] font-sans">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="md:relative overflow-hidden">
          <div className="lg:flex lg:flex-row lg:items-stretch justify-between">
            <div className="lg:w-[55%] w-full mb-12 lg:mb-0 pt-10 lg:pb-40 lg:pr-24">
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
                  className="text-[36px]  md:text-[66px] tracking-tighter font-integral font-bold leading-[1.1]  md:leading-[50px] leading-[30px] text-gray-900 md:mb-[32px] mb-[20px] uppercase tracking-tight"
                  variants={itemVariants}
                >
                  FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-[14px]  font-normal md:text-[16px] text-gray-500 mb-[32px] max-w-lg"
                  variants={itemVariants}
                >
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </motion.p>

                {/* Shop Now Button */}
                <motion.button
                  // Adjusted button to match the image: black background, white text, full roundness.
                  className="px-12 w-[210px] h-[50px] text-[16px] font-medium bg-black text-white rounded-full shadow-xl hover:bg-gray-800 transition duration-300 mb-[48px]"
                  variants={itemVariants}
                  onClick={() => console.log("Shop Now clicked")}
                >
                  Shop Now
                </motion.button>

                {/* Stats Block (Staggered inside the main container) */}
                <motion.div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-start sm:gap-0 ml-[-20px]">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.value}
                      variants={itemVariants}
                      className={`
        flex flex-col items-start py-4 sm:py-0 px-8

        ${
          // ✅ Mobile: Only first item gets border-r
          index === 0 ? "border-r border-gray-400/60" : ""
        }

        ${
          // ✅ Desktop: All except last get border-r
          index < stats.length - 1
            ? "sm:border-r sm:border-gray-400/60"
            : "sm:border-none"
        }

        ${index === 2 ? "col-span-2 justify-self-center sm:col-span-1" : ""}
      `}
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

            <motion.div
              className="lg:w-[45%]   lg:h-auto overflow-visible"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-full h-full">
                <img
                  src={MODELS_IMAGE_URL}
                  alt="Two models wearing modern, stylish clothes."
                  className="md:w-fit md:h-[550px] "
                  style={{}}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/800x1000/333333/ffffff?text=Image+Not+Found";
                  }}
                />

                {/* Decorative Star/Sparkle Elements (Styled to match the image's star vector) */}
                <motion.div
                  className="absolute top-[8%] md:right-[8%] right-[5%] text-black w-20 h-20 md:w-24 md:h-24"
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
                  className="absolute md:bottom-[20%] bottom-[28%] md:left-[-10%] text-black w-12 h-12 md:w-16 md:h-16"
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
        className="w-full bg-black py-6 md:py-8 relative z-20 lg:mt-[-120px]"
        // The margin-top property is crucial to overlap the image and the rest of the white section

        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-[1700px] mx-auto px-4">
          <Carousel
            breakPoints={breakPoints}
            enableAutoPlay
            autoPlaySpeed={2000}
            pagination={false}
            showArrows={false}
          >
            {brands.map((brand) => (
              // <div key={logo.id} className="flex justify-center px-4">
              //   <img
              //     src={logo.src}
              //     alt="logo"
              //     className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              //   />
              // </div>
              <div
                key={brand}
                // Ensured text size is large, font-weight is bold, and tracking is wide
                className="flex-shrink-0 text-white text-xl md:text-3xl lg:text-4xl font-bold tracking-widest my-2 uppercase opacity-95"
              >
                {brand}
              </div>
            ))}
          </Carousel>
          {/* Used justify-around for even spacing */}
        </div>
      </motion.div>
    </div>
  );
}
