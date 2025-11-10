"use client";
import React, { useState } from "react";
// 1. Import motion for animations
import { motion } from "framer-motion";

// --- Asset Imports (Assuming these paths are correct) ---
import MainImage from "../../assets/HomeLanding/image5.svg";
import OutdoorActiveImage from "../../assets/HomeLanding/image3.svg";
import CasualComfortImage from "../../assets/HomeLanding/image4.svg";
import SayItWithShirtImage from "../../assets/HomeLanding/image1.svg";
import FunkyNeverGetOldImage from "../../assets/HomeLanding/image2.svg";

// 2. Import the Skeleton Loader component
// NOTE: You must create this file separately (see code below)
import SkeletonImageLoader from "./SkeletonImageLoader";

const IMAGES = {
  main: MainImage.src,
  outdoor: OutdoorActiveImage.src,
  comfort: CasualComfortImage.src,
  sayit: SayItWithShirtImage.src,
  funky: FunkyNeverGetOldImage.src,
};

const imageTiles = [
  {
    title: "Outdoor Active",
    className: "col-span-1 row-span-1 h-64 md:h-[390px] ",
    img: IMAGES.outdoor,
  },
  {
    title: "Casual Comfort",
    className: "col-span-1 row-span-1 h-64 md:h-[390px] ",
    img: IMAGES.comfort,
  },
];

const inspirationTiles = [
  {
    title: "Say it with Shirt",
    className: "col-span-1 row-span-1 h-80 md:h-[450px] ",
    img: IMAGES.sayit,
  },
  {
    title: "Funky never get old",
    className: "col-span-1 row-span-1 h-80 md:h-[450px] ",
    img: IMAGES.funky,
  },
];

// --- MotionImageTile Component (handles loading state and hover effects) ---
const MotionImageTile = ({ title, className, img }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      role="button"
      tabIndex={0}
      aria-label={title}
      whileHover="hover"
      initial="rest"
    >
      {/* Conditionally Render Loader or Image */}
      {!imageLoaded && <SkeletonImageLoader className="w-full h-full" />}

      {/* The Image Element */}
      <motion.img
        src={img}
        alt={title}
        className="w-full h-full object-cover"
        // Key: Set opacity to 0 until loaded, and use onLoad to set state
        style={{ opacity: imageLoaded ? 1 : 0 }}
        onLoad={() => setImageLoaded(true)}
        variants={{
          rest: { scale: 1, transition: { duration: 0.5 } },
          hover: { scale: 1.05, transition: { duration: 0.5 } },
        }}
      />

      {/* Overlay content - only show once the image is visible */}
      {imageLoaded && (
        <>
          {/* Overlay for darkening effect on hover */}
          <motion.div
            className="absolute inset-0 bg-black/0"
            variants={{
              rest: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                transition: { duration: 0.5 },
              },
              hover: {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.5 },
              },
            }}
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-integral font-extrabold leading-tight tracking-tight">
              {title}
            </h3>
            <span className="absolute bottom-6 right-6 text-3xl font-bold">
              &rarr;
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
};

// --- Main Component ---
export default function ComplexImageGridSection() {
  // State for the main hero image
  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  return (
    <section className=" py-10 md:py-20 bg-[#F2F0F1] ">
      <div className=" max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main Hero - also using motion for hover and loading state */}
          <motion.div
            className="lg:col-span-2 relative overflow-hidden rounded-xl bg-gray-200 h-[600px] md:h-[800px]"
            whileHover="hover"
            initial="rest"
          >
            {/* Main Image Loader */}
            {!mainImageLoaded && (
              <SkeletonImageLoader className="w-full h-full" />
            )}

            <motion.img
              src={IMAGES.main}
              alt="Woman sitting on a tennis court wearing a summer outfit."
              className="w-full h-full object-cover"
              style={{ opacity: mainImageLoaded ? 1 : 0 }}
              onLoad={() => setMainImageLoaded(true)}
              variants={{
                rest: { scale: 1, transition: { duration: 0.5 } },
                hover: { scale: 1.05, transition: { duration: 0.5 } },
              }}
            />

            {/* Text and Button Overlay - only show once the image is visible */}
            {mainImageLoaded && (
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-5xl md:text-6xl font-integral lg:text-8xl font-extrabold leading-none tracking-tight mb-4">
                    Color of <br /> Summer <br /> Outfit
                  </h2>
                  <p className="text-lg md:text-xl font-medium max-w-sm mb-8">
                    100+ Collections for your outfit inspiration this summer
                  </p>
                </div>

                {/* Animated Button 1 */}
                <motion.button
                  className="w-fit px-8 py-3 bg-black text-white text-base font-medium rounded-lg"
                  whileHover={{
                    backgroundColor: "#2D2D2D",
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  VIEW COLLECTIONS
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Small Grid */}
          <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {imageTiles.map((tile, index) => (
              <MotionImageTile
                key={index}
                title={tile.title}
                className={tile.className}
                img={tile.img}
              />
            ))}
          </div>
        </div>

        {/* --- Separator --- */}
        {/* <hr className="my-10 border-gray-300" /> */}

        {/* --- Bottom Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 py-4 md:py-8 lg:py-12">
            <h2 className="text-[36px] md:text-[66px] tracking-tighter font-integral font-bold leading-[1.1] md:leading-[50px] leading-[30px] text-gray-900 md:mb-[32px] mb-[20px] uppercase tracking-tight">
              Casual <br /> Inspirations
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-sm mb-8">
              Our favorite combinations for casual outfit that can inspire you
              to apply on your daily activity.
            </p>

            {/* Animated Button 2 */}
            <motion.button
              className="px-8 py-3 border border-gray-400 text-gray-800 text-base font-medium rounded-full"
              whileHover={{
                backgroundColor: "#E5E7EB",
                color: "#1F2937",
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              BROWSE INSPIRATIONS
            </motion.button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {inspirationTiles.map((tile, index) => (
              <MotionImageTile
                key={index}
                title={tile.title}
                className={tile.className}
                img={tile.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
