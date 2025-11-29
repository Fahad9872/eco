"use client"; // Client-side interactivity (state, click handlers) এর জন্য এটি অপরিহার্য

import Image from 'next/image';
import React, { useState } from 'react';

// --- Static Data (আপনার পণ্য ডেটা) ---
const product = {
    id: 'OLGT-001',
    name: 'ONE LIFE GRAPHIC T-SHIRT',
    rating: 4.5,
    reviewCount: 5,
    currentPrice: 260,
    oldPrice: 300,
    discount: 40,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
        '/images/img1.png', // Main image (Replace with your actual paths)
        '/images/img2.png',  // Thumbnail 1
        '/images/img3.png', // Thumbnail 2
    ],
    colors: [
        { name: 'Olive Green', code: '#556B2F' },
        { name: 'Navy Blue', code: '#152238' },
        { name: 'Dark Teal', code: '#1D3F3D' },
    ],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
};

// --- Helper Components ---

// Star Rating Component
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="flex items-center text-sm mb-4">
            <span className="text-yellow-500">{'★'.repeat(fullStars)}</span>
            <span className="text-gray-300">{'★'.repeat(emptyStars)}</span>
            <span className="text-gray-700 ml-1 font-semibold">{rating}/5</span>
        </div>
    );
};


// --- Main Product Detail Component ---
const ProductDetail = () => {
    // --- State Management ---
    const [selectedColor, setSelectedColor] = useState(product.colors[0].code);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to 'Large'
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product.images[0]);


    // --- Handlers ---
    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change)); // Quantity must be at least 1
    };

    const handleAddToCart = () => {
        // Here you would typically send the data to a cart or API
        alert(`Added ${quantity} x ${product.name} (Color: ${selectedColor}, Size: ${selectedSize}) to cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white mt-25">

            {/* Breadcrumbs */}
            <div className="mb-6 text-sm text-gray-500">
                <span className="hover:text-black cursor-pointer">Home</span> &gt;
                <span className="hover:text-black cursor-pointer">Shop</span> &gt;
                <span className="hover:text-black cursor-pointer">Men</span> &gt;
                <span className="font-semibold text-black">T-shirts</span>
            </div>

            <div className="lg:flex lg:space-x-10">

                {/* --- Left Column: Images --- */}
                <div className="lg:w-1/2 flex space-x-4">

                    {/* Image Thumbnails (Left side) */}
                    <div className="w-20 space-y-4 hidden sm:block">
                        {product.images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setMainImage(img)}
                                className={`w-full aspect-[3/4] cursor-pointer rounded-lg overflow-hidden border-2 ${mainImage === img ? 'border-black' : 'border-gray-200'
                                    } hover:border-black transition duration-200`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={80}
                                    height={107}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image (Center) */}
                    <div className="flex-1 aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={mainImage}
                            alt={product.name}
                            width={500}
                            height={667} // Approximate aspect ratio 3:4
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>


                {/* --- Right Column: Details --- */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-wider">
                        {product.name}
                    </h1>

                    <StarRating rating={product.rating} />

                    {/* Price and Discount */}
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-3xl font-bold text-gray-900">${product.currentPrice}</span>
                        <span className="text-xl text-gray-400 line-through">${product.oldPrice}</span>
                        <span className="bg-red-100 text-red-600 text-sm font-bold py-1 px-3 rounded-full">
                            -{product.discount}%
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-8 max-w-lg">
                        {product.description}
                    </p>

                    {/* Color Selection */}
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold uppercase mb-3">Select Colors</h3>
                        <div className="flex space-x-3">
                            {product.colors.map((color) => (
                                <div
                                    key={color.code}
                                    onClick={() => setSelectedColor(color.code)}
                                    className={`w-8 h-8 rounded-full border-2 cursor-pointer transition duration-150 ${selectedColor === color.code ? 'border-black p-0.5' : 'border-gray-200'
                                        }`}
                                >
                                    <div
                                        style={{ backgroundColor: color.code }}
                                        className="w-full h-full rounded-full"
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-10">
                        <h3 className="text-sm font-semibold uppercase mb-3">Choose Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-2 px-6 rounded-md text-sm font-medium transition duration-150 border 
                                        ${selectedSize === size
                                            ? 'bg-black text-white border-black'
                                            : 'bg-gray-100 text-gray-700 border-gray-100 hover:bg-gray-200'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex space-x-4 items-center">
                        {/* Quantity Control */}
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                onClick={() => handleQuantityChange(-1)}
                                className="px-4 py-2 text-xl font-medium hover:bg-gray-100 transition"
                            >
                                −
                            </button>
                            <span className="px-4 py-2 text-lg font-semibold border-x border-gray-300 w-16 text-center">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(1)}
                                className="px-4 py-2 text-xl font-medium hover:bg-gray-100 transition"
                            >
                                +
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-black text-white text-lg font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;