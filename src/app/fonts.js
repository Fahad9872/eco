// app/fonts.js
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

// --- 1. GEIST FONTS (from Google) ---
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- 2. CUSTOM LOCAL FONTS (Integral CF & Satoshi) ---

export const integralCF = localFont({
  src: [
    {
      path: "../../public/fonts/IntegralCF-Regular.otf",
      weight: "400",
      style: "normal", // Corrected
    },
    {
      path: "../../public/fonts/integralcf-medium.otf",
      weight: "500",
      style: "normal", // Corrected
    },
    {
      path: "../../public/fonts/integralcf-demibold.otf",
      weight: "600",
      style: "normal", // Corrected
    },
    {
      path: "../../public/fonts/integralcf-bold.otf",
      weight: "700",
      style: "normal", // Corrected
    },
    {
      // Assuming this file is the italic/oblique version
      path: "../../public/fonts/integralcf-extraboldoblique.otf",
      weight: "900",
      style: "italic", // Must be 'italic' or 'oblique' for the slanted file
    },
  ],
  variable: "--font-integral",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal", // Corrected
    },
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal", // Corrected
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal", // Corrected
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal", // Corrected
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
