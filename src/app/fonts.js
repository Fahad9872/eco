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
      path: "../../public/fonts/IntegralCF-Regular.otf", // ✅ relative path to public folder
      weight: "400",
      style: "normal",
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
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
