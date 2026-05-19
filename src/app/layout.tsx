import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthHydrator from "@/components/AuthHydrator";
import SettingsHydrator from "@/components/SettingsHydrator";
import DynamicHead from "@/components/DynamicHead";
import {Toaster} from "sonner";
import {GoogleAnalytics} from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
      process.env.NEXT_PUBLIC_APP_URL || "https://example.com"
  ),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  title: {
    default: "Next Js",
    template: "%s",
  },

  description:
      "A modern, scalable web application boilerplate built with Next.js, designed for performance, flexibility, and rapid development.",

  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Boilerplate",
    "Web App",
    "SaaS Starter",
  ],

  authors: [
    { name: "Your Company", url: "https://example.com" },
  ],

  creator: "Your Company",

  openGraph: {
    title: "Next Js",
    description:
        "Launch your next web application faster with a powerful and scalable Next.js boilerplate.",
    url: "https://example.com",
    siteName: "Next Js",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Next Js – Next.js Boilerplate",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next Js",
    description:
        "A clean and scalable Next.js boilerplate for modern web applications.",
    images: ["/og/default.png"],
    creator: "@yourhandle",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <AuthHydrator />
      <SettingsHydrator />
      <DynamicHead />
      {children}
      <Toaster position="top-right" richColors />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
      </html>
  );
}