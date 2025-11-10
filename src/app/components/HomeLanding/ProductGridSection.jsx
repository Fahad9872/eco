"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import cloth from "../../assets/HomeLanding/cloth.svg";
import Image from "next/image";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- Data (Remains the same) ---
const newArrivalsData = [
  {
    name: "T-shirt with Tape Details",
    price: "120",
    rating: 4.5,
    imageUrl: cloth.src,
    isFeatured: false,
  },
  {
    name: "Skinny Fit Jeans",
    price: "240",
    oldPrice: "260",
    discount: "-20%",
    rating: 3.5,
    imageUrl: cloth.src,
    isFeatured: false,
  },
  {
    name: "Checkered Shirt",
    price: "180",
    rating: 4.5,
    imageUrl: cloth.src,
    isFeatured: false,
  },
  {
    name: "Sleeve Striped T-shirt",
    price: "130",
    oldPrice: "160",
    discount: "-30%",
    rating: 4.5,
    imageUrl: cloth.src,
    isFeatured: true,
  },
];

const topSellingData = [
  {
    name: "Vertical Striped Shirt",
    price: "212",
    oldPrice: "232",
    discount: "-20%",
    rating: 5.0,
    imageUrl: cloth.src,
  },
  {
    name: "Courage Graphic T-shirt",
    price: "145",
    rating: 4.0,
    imageUrl: cloth.src,
  },
  {
    name: "Loose Fit Bermuda Shorts",
    price: "80",
    rating: 3.0,
    imageUrl: cloth.src,
  },
  {
    name: "Faded Skinny Jeans",
    price: "210",
    rating: 4.5,
    imageUrl: cloth.src,
  },
];

// --- Skeleton Product Card Component ---

// The skeleton uses the shimmering animation
const SkeletonShimmer = () => (
  <motion.div
    className="absolute inset-0"
    initial={{ left: "-200%" }}
    animate={{ left: "200%" }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    }}
    style={{
      background:
        "linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
    }}
  />
);

const SkeletonProductCard = () => (
  <div className="flex flex-col p-4 relative overflow-hidden">
    {/* Skeleton Image Area */}
    <div className="bg-gray-200 h-80 rounded-lg mb-3 relative">
      <SkeletonShimmer />
    </div>

    {/* Skeleton Text Lines */}
    <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
    <div className="flex items-center space-x-2 mt-1">
      <div className="h-4 w-1/4 bg-gray-200 rounded"></div>{" "}
      {/* Rating placeholder */}
      <div className="h-4 w-1/6 bg-gray-200 rounded"></div>{" "}
      {/* Rating value placeholder */}
    </div>
    <div className="mt-2 flex items-center space-x-2">
      <div className="h-5 w-1/3 bg-gray-200 rounded"></div>{" "}
      {/* Price placeholder */}
    </div>
  </div>
);

// --- Reusable Product Card Component (Uses FaStar) ---
const ProductCard = ({
  name,
  price,
  oldPrice,
  discount,
  rating,
  imageUrl,
  isNewArrival,
}) => {
  // Helper to render the star rating using FaStar
  const renderRating = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-500 text-yellow-500"
        />
      );
    }

    // Half star (approximate visual)
    if (hasHalfStar) {
      stars.push(
        <FaStar
          key="half"
          className="w-4 h-4 fill-yellow-500 text-yellow-500 opacity-50"
        />
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar
          key={`empty-${i}`}
          className="w-4 h-4 fill-gray-300 text-gray-300"
        />
      );
    }

    return (
      <div className="flex items-center space-x-1">
        {stars}
        <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
      </div>
    );
  };

  const isFeatured = isNewArrival;

  return (
    <motion.div
      className={`flex flex-col p-4 transition-shadow duration-300 cursor-pointer 
         ${
           //    isFeatured
           //      ? "border-2 border-blue-500 rounded-xl"
           //      : "border border-transparent"
           ""
         }
         `}
      variants={itemVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container */}
      <div className="bg-[#F2F0F1] h-80 flex items-center justify-center rounded-lg overflow-hidden mb-3">
        <Image
          height={0}
          width={0}
          src={imageUrl || "/path/to/placeholder-image.jpg"}
          alt={name}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Product Details */}
      <div className="text-sm font-medium text-gray-900">{name}</div>
      <div className="mt-1">{renderRating()}</div>

      {/* Price and Discount */}
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-lg font-bold text-gray-900">${price}</span>
        {oldPrice && (
          <span className="text-base text-gray-500 line-through">
            ${oldPrice}
          </span>
        )}
        {discount && (
          <span className="text-sm font-semibold text-red-500 bg-red-100 px-2 py-0.5 rounded-full">
            {discount}
          </span>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---

export default function ProductGridSection() {
  const [isLoading, setIsLoading] = useState(false);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second delay for demonstration

    return () => clearTimeout(timer);
  }, []);

  const renderSection = (title, data) => (
    <div className="mb-16">
      {/* Title with subtle animation */}
      <motion.h2
        className="text-3xl sm:text-4xl font-integral font-extrabold text-gray-900 text-center uppercase tracking-wider mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Animated Grid Container */}
      <motion.div
        className="grid  md:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {isLoading
          ? // Show Skeletons while loading
            [...Array(data.length)].map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          : // Show actual cards when loaded
            data.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                rating={product.rating}
                imageUrl={product.imageUrl}
                isNewArrival={title === "NEW ARRIVALS" && product.isFeatured}
              />
            ))}
      </motion.div>

      {/* View All Button - Only render when NOT loading */}
      <div className="text-center mt-10">
        {!isLoading && (
          <motion.button
            className="px-8 py-3 border border-gray-400 text-gray-800 text-base font-medium rounded-full"
            whileHover={{
              backgroundColor: "#E5E7EB",
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEW ARRIVALS Section */}
        {renderSection("NEW ARRIVALS", newArrivalsData)}

        {/* Separator / Spacer */}
        <div className="h-16 md:h-20"></div>

        {/* TOP SELLING Section */}
        {renderSection("TOP SELLING", topSellingData)}
      </div>
    </section>
  );
}
