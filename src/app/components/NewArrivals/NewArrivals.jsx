"use client";
import Image from 'next/image';
import React from 'react';
// 👈 Framer Motion ইম্পোর্ট করুন
import { motion } from 'framer-motion';

// Product Data (পূর্বের মতো থাকবে)
const newArrivalProducts = [
    {
        id: 1,
        name: 'T-shirt with Tape Details',
        price: 120,
        rating: 4.5,
        imageUrl: '/images/img1.png',
        oldPrice: null,
        discount: null,
    },
    {
        id: 2,
        name: 'Skinny Fit Jeans',
        price: 240,
        rating: 3.5,
        imageUrl: '/images/img2.png',
        oldPrice: 260,
        discount: '20%',
    },
    {
        id: 3,
        name: 'Checkered Shirt',
        price: 180,
        rating: 4.5,
        imageUrl: '/images/img3.png',
        oldPrice: null,
        discount: null,
    },
    {
        id: 4,
        name: 'Sleeve Striped T-shirt',
        price: 130,
        rating: 4.5,
        imageUrl: '/images/img4.png',
        oldPrice: 160,
        discount: '20%',
    },
];

// Helper component for Star Rating (কোনো পরিবর্তন নেই)
const StarRating = ({ rating }) => {
    // ... আপনার StarRating কম্পোনেন্টের কোড
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="flex items-center text-sm mb-1">
            <span className="text-yellow-500">{'★'.repeat(fullStars)}</span>
            <span className="text-gray-300">{'★'.repeat(emptyStars)}</span>
            <span className="text-gray-700 ml-1">
                {rating}/5
            </span>
        </div>
    );
};

// --- Framer Motion Animation Variables ---
// 1. কন্টেইনার অ্যানিমেশন (সব কার্ডের প্যারেন্ট)
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // প্রতিটা চাইল্ডের লোডের মাঝে 0.15 সেকেন্ডের গ্যাপ
        }
    }
};

// 2. চাইল্ড/কার্ড অ্যানিমেশন (প্রতিটি ProductCard)
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100, // দ্রুততা
        }
    }
};

// Component for a single product card
// 👈 div কে motion.div দিয়ে প্রতিস্থাপন করুন
const ProductCard = ({ product }) => {
    return (
        <motion.div
            className="w-full sm:w-1/2 md:w-1/4 max-w-xs text-left px-2"
            variants={itemVariants} // কার্ডের জন্য ভ্যারিয়েন্ট সেট করুন
        >
            {/* Product Image Container */}
            <div className="mb-2 w-full rounded-md flex items-center justify-center"> {/* Added bg-gray-100 & p-4 for better image look */}
                {/* Image Component */}
                <Image
                    src={product.imageUrl}
                    alt={product.name} // alt text updated
                    width={200}
                    height={200} // Set equal height for product images (300x300 assumed)
                    className="rounded-md object-cover w-full h-auto shadow-sm transition duration-300 hover:scale-[1.03]" // Added hover effect
                />
            </div>

            {/* Product Details */}
            <p className="font-semibold text-base mb-1 text-gray-900">{product.name}</p>
            <StarRating rating={product.rating} />
            <div className="flex items-center space-x-2">
                {/* Current Price */}
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                {/* Old Price (Strikethrough) */}
                {product.oldPrice && (
                    <span className="text-gray-500 line-through text-sm">
                        ${product.oldPrice}
                    </span>
                )}
                {/* Discount Badge */}
                {product.discount && (
                    <span className="bg-red-100 text-red-600 text-xs font-bold py-1 px-2 rounded-md">
                        {product.discount}
                    </span>
                )}
            </div>
        </motion.div>
    );
};

// Main Component
const NewArrivals = () => {
    return (
        <section className="py-10 px-4 bg-white ">
            {/* Title Animation */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-7xl font-extrabold text-center mb-10 tracking-widest mt-16 text-black"
            >
                NEW ARRIVALS
            </motion.h2>

            {/* Products Grid Animation */}
            <motion.div
                className="flex flex-wrap justify-between gap-x-6 gap-y-8 max-w-[1700px] mx-auto" // Simplified justify-center and max-w
                variants={containerVariants} // কন্টেইনার ভ্যারিয়েন্ট সেট করুন
                initial="hidden" // প্রাথমিক স্টেট (শুরুতে লুকানো)
                whileInView="show" // যখন ভিউপোর্টে আসবে, তখন দেখাবে
                viewport={{ once: true, amount: 0.2 }} // একবার দেখাবে এবং 20% স্ক্রিনে এলেই শুরু হবে
            >
                {newArrivalProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </motion.div>

            {/* View All Button Animation */}
            <div className="text-center mt-12">
                <motion.button
                    whileHover={{ scale: 1.05 }} // হোভার করলে সামান্য বড় হবে
                    whileTap={{ scale: 0.95 }} // ক্লিক করলে সামান্য ছোট হবে
                    className="py-3 px-8 border border-black bg-white text-black font-semibold text-base rounded-md transition duration-150"
                >
                    View All
                </motion.button>
            </div>
        </section>
    );
};

export default NewArrivals;