"use client";
import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { motion } from "framer-motion";
import { FaStar, FaCheckCircle } from "react-icons/fa"; // Using FaStar and FaCheckCircle

// NOTE: Ensure you have installed the required libraries:
// npm install react-elastic-carousel framer-motion react-icons

// --- Testimonial Data ---
const testimonialData = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 4.5,
    verified: true,
  },
  {
    id: 4,
    name: "Mood L.",
    review:
      "My unique style used to be a challenge until I discovered Shop.co. The stunning quality of their clothes is remarkable and caters to all my needs.",
    rating: 4.5,
    verified: true,
  },
  // Duplicating existing data points to ensure enough items for scrolling
  {
    id: 5,
    name: "Sarah M. 2",
    review: "Fantastic quality, amazing style, highly recommended!",
    rating: 5,
    verified: true,
  },
  {
    id: 6,
    name: "Alex K. 2",
    review: "The range of options they offer is truly remarkable.",
    rating: 5,
    verified: true,
  },
  {
    id: 7,
    name: "James L. 2",
    review:
      "The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 4.5,
    verified: true,
  },
  {
    id: 8,
    name: "Mood L. 2",
    review: "Stunning quality, remarkable products.",
    rating: 4.5,
    verified: true,
  },
];

// 2. Define the responsive breakpoints for testimonials
const breakPoints = [
  { width: 1, itemsToShow: 1, showArrows: false }, // Mobile: 1 item, no arrows
  { width: 768, itemsToShow: 2, itemPadding: [10, 50, 10, 50] }, // Tablet: 2 items visible
  { width: 1024, itemsToShow: 5, itemPadding: [10, 30] }, // Laptop: 3 items
  { width: 1400, itemsToShow: 5, itemPadding: [10, 10] }, // Large Screen: 3 items (adjust padding for partial view)
];

// --- Testimonial Card Component ---
const TestimonialCard = ({ testimonial }) => {
  const { name, review, rating, verified } = testimonial;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }
    if (hasHalfStar) {
      // Simple approximation for half-star: full star with reduced opacity
      stars.push(
        <FaStar
          key="half"
          className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-60"
        />
      );
    }

    // Only render full stars up to 5
    while (stars.length < 5) {
      stars.push(
        <FaStar
          key={`empty-${stars.length}`}
          className="w-5 h-5 fill-gray-300 text-gray-300"
        />
      );
    }

    return <div className="flex space-x-1 mb-3">{stars}</div>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
      className="bg-white rounded-lg p-6 min-h-[260px] max-w-sm mx-auto shadow-md border border-gray-100"
    >
      {renderStars()}

      <div className="flex items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900 mr-2">{name}</h3>
        {verified && (
          <FaCheckCircle
            className="w-4 h-4 fill-green-500"
            title="Verified Customer"
          />
        )}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">"{review}"</p>
    </motion.div>
  );
};

// --- Custom Arrow Renderer for Carousel Header ---
const CustomCarouselArrow = ({ onClick, isPrev }) => (
  <motion.button
    onClick={onClick}
    className="w-10 h-10 border border-gray-300 text-gray-800 rounded-full flex items-center justify-center transition hover:bg-gray-100 hover:border-black ml-3"
    whileTap={{ scale: 0.9 }}
    aria-label={isPrev ? "Previous Testimonial" : "Next Testimonial"}
  >
    {isPrev ? <>&larr;</> : <>&rarr;</>}
  </motion.button>
);

// --- Main Section Component ---
const HappyCustomersSection = () => {
  const carouselRef = useRef(null);

  return (
    <section className="py-10 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Custom Arrows */}
        <div className="flex justify-between items-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 uppercase tracking-tighter font-integral"
          >
            OUR HAPPY CUSTOMERS
          </motion.h2>

          {/* Arrows (Right side of Header) */}
          <div className="flex items-center">
            <CustomCarouselArrow
              onClick={() => carouselRef.current?.slidePrev()}
              isPrev={true}
            />
            <CustomCarouselArrow
              onClick={() => carouselRef.current?.slideNext()}
              isPrev={false}
            />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="testimonial-carousel-wrapper">
          <Carousel
            ref={carouselRef}
            breakPoints={breakPoints}
            // renderArrow={() => null}
            showArrows={false}
            pagination={false}
            showPagination={false}
            enableAutoPlay={true}
            autoPlaySpeed={4000}
            itemsToShow={3}
            itemPadding={[0, 15]}
            outerSpacing={-100}
          >
            {testimonialData.map((item) => (
              <div key={item.id} className="py-2 px-2 w-full">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomersSection;
